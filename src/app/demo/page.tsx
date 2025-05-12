"use client";

import { useState, useRef, useEffect } from "react";

// API endpoints for chat and conversation management
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type Message = {
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isFile?: boolean;
  fileType?: string;
  fileUrl?: string;
  fileName?: string;
};

type Conversation = {
  conversation_id: string;
  preview: { content: string; role: string }[];
  message_count: number;
};

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<
    Record<string, Conversation>
  >({});
  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    dataUrl: string;
    type: string;
    size: number;
  } | null>(null);
  const [gradingInProgress, setGradingInProgress] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Initialize with a welcome message when component loads
  useEffect(() => {
    setMessages([
      {
        content:
          "Hello! I'm SuperTeacher AI. To grade an answer sheet, I'll need:\n1. The subject\n2. The question paper (PDF)\n3. The answer sheet (PDF)\n\nPlease provide these materials and I'll help you grade them!",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);

    // Create a new conversation on load
    createNewConversation();

    // Load existing conversations
    fetchConversations();

    // Generate a user ID or get from localStorage
    const storedUserId = localStorage.getItem("ai_grader_user_id");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = generateUserId();
      localStorage.setItem("ai_grader_user_id", newUserId);
      setUserId(newUserId);
    }
  }, []);

  // Generate a random user ID
  const generateUserId = () => {
    return "user_" + Math.random().toString(36).substring(2, 15);
  };

  // Fetch all conversations
  const fetchConversations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/conversations`);
      const data = await response.json();
      const conversationsMap: Record<string, Conversation> = {};
      data.conversations.forEach((conv: Conversation) => {
        conversationsMap[conv.conversation_id] = conv;
      });
      setConversations(conversationsMap);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  // Create a new conversation
  const createNewConversation = () => {
    setCurrentConversationId(null);
    setMessages([
      {
        content:
          "Hello! I'm SuperTeacher AI. To grade an answer sheet, I'll need:\n1. The subject\n2. The question paper (PDF)\n3. The answer sheet (PDF)\n\nPlease provide these materials and I'll help you grade them!",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
    setInput("");
  };

  // Load a conversation
  const loadConversation = async (conversationId: string) => {
    setCurrentConversationId(conversationId);
    setMessages([]);

    try {
      const response = await fetch(
        `${API_URL}/api/conversations/${conversationId}`
      );
      const data = await response.json();
      const messagesList: Message[] = data.messages.map((msg: any) => ({
        content: msg.content,
        role: msg.role,
        timestamp: new Date(),
      }));

      setMessages(messagesList);
    } catch (error) {
      console.error("Error loading conversation:", error);
    }
  };

  // Handle file upload button click
  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Check if it's a PDF file
      if (file.type !== "application/pdf") {
        alert("Please upload only PDF files");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const result = e.target?.result as string;
        if (result) {
          setSelectedFile({
            name: file.name,
            dataUrl: result,
            type: file.type,
            size: file.size,
          });

          // Show file preview
          setInput(`Attached file: ${file.name}`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove selected file
  const removeSelectedFile = () => {
    setSelectedFile(null);
    setInput("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Get file extension helper
  const getFileExtension = (filename: string) => {
    const lastDot = filename.lastIndexOf(".");
    return lastDot !== -1 ? filename.substring(lastDot) : "";
  };

  // Send a message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = input.trim();

    // Don't send if no text and no file
    if (!messageText && !selectedFile) {
      return;
    }

    // Add user message to chat
    const userMessage: Message = {
      content: messageText,
      role: "user",
      timestamp: new Date(),
      isFile: !!selectedFile,
      fileName: selectedFile?.name,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // Set up timer to show grading in progress message after 5 seconds if a file is being submitted
    let gradingMessageTimer: NodeJS.Timeout | null = null;
    if (selectedFile) {
      gradingMessageTimer = setTimeout(() => {
        setGradingInProgress(true);
        // Add grading in progress message
        const gradingMessage: Message = {
          content:
            "Grading in progress... I'm analyzing the answer sheet. This may take a few moments. Please wait while the results are being prepared.",
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, gradingMessage]);
      }, 5000);
    }

    // Prepare request data
    const requestData: any = {
      message_text: messageText,
    };

    // Add conversation ID if we have one
    if (currentConversationId) {
      requestData.conversation_id = currentConversationId;
    }

    // Add file if selected
    if (selectedFile) {
      requestData.file_base64 = selectedFile.dataUrl;
      requestData.file_extension = getFileExtension(selectedFile.name);
    }

    // Clear input and file
    setInput("");
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    try {
      // Send to server
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Check if the response is a PDF (graded document)
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/pdf")) {
        // Handle PDF response
        const blob = await response.blob();

        // Store the PDF blob for later download
        setPdfBlob(blob);

        // Remove grading in progress message if it exists
        if (gradingInProgress) {
          setGradingInProgress(false);
          setMessages((prev) =>
            prev.filter((msg) => !msg.content.includes("Grading in progress"))
          );
        }

        // Add success message to chat
        const successMessage: Message = {
          content:
            "✅ Grading complete! Your graded answer sheet is ready. Click the button below to download it.",
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, successMessage]);

        // Update conversations list
        await fetchConversations();
      } else {
        // Handle JSON response

        // Remove grading in progress message if it exists
        if (gradingInProgress) {
          setGradingInProgress(false);
          setMessages((prev) =>
            prev.filter((msg) => !msg.content.includes("Grading in progress"))
          );
        }

        // Handle JSON response
        const data = await response.json();

        // Save conversation ID
        setCurrentConversationId(data.conversation_id);

        // Add AI response to chat
        const aiMessage: Message = {
          content: data.message,
          role: "assistant",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiMessage]);

        // Update conversations list
        await fetchConversations();
      }
    } catch (error) {
      console.error("Error sending message:", error);

      // Remove grading in progress message if it exists
      if (gradingInProgress) {
        setGradingInProgress(false);
        setMessages((prev) =>
          prev.filter((msg) => !msg.content.includes("Grading in progress"))
        );
      }

      // Add error message to chat
      const errorMessage: Message = {
        content: `Sorry, there was an error processing your request. Please try again.`,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Clear the timer if it exists
      if (gradingMessageTimer) {
        clearTimeout(gradingMessageTimer);
      }
      setLoading(false);
    }
  };

  // Download PDF function
  const downloadPdf = () => {
    if (pdfBlob) {
      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "graded_answer_sheet.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  // Process message content for rendering - simple markdown support
  const processMessageContent = (content: string, isUser: boolean) => {
    if (isUser) return content;

    // Process code blocks
    let processedContent = content.replace(
      /```(\w*)([\s\S]*?)```/g,
      (match, language, code) => {
        return `<pre><code>${code.trim()}</code></pre>`;
      }
    );

    // Process inline code
    processedContent = processedContent.replace(
      /`([^`]+)`/g,
      "<code>$1</code>"
    );

    // Process bold text
    processedContent = processedContent.replace(
      /\*\*([^*]+)\*\*/g,
      "<strong>$1</strong>"
    );

    // Process italic text
    processedContent = processedContent.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    // Convert line breaks to <br>
    processedContent = processedContent.replace(/\n/g, "<br>");

    return processedContent;
  };

  // Key down handler for message input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Send on Enter (without Shift)
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() || selectedFile) {
        handleSubmit(e as unknown as React.FormEvent);
      }
    }
  };

  // Helper function to get conversation preview
  const getConversationPreview = (conversation: Conversation) => {
    if (conversation.preview && conversation.preview.length > 0) {
      const firstUserMessage = conversation.preview.find(
        (msg) => msg.role === "user"
      );
      return firstUserMessage
        ? firstUserMessage.content.substring(0, 30) + "..."
        : "Conversation";
    }
    return "New Conversation";
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url("/images/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="backdrop-blur-md bg-white/70 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/images/Stlogo.png"
                alt="Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-900">
                SuperTeacher AI
              </h1>
            </div>
            <button
              onClick={createNewConversation}
              className="px-3 py-1.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-sm"
            >
              New Chat
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex">
        <div className="flex-grow flex flex-col">
          <div className="max-w-4xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 flex-grow flex flex-col">
            <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl flex-grow flex flex-col overflow-hidden border border-gray-200">
              {/* Chat header with loading spinner and dropdown for conversations */}
              <div className="border-b border-gray-200 p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">
                    {currentConversationId &&
                    conversations[currentConversationId]
                      ? getConversationPreview(
                          conversations[currentConversationId]
                        )
                      : "New Conversation"}
                  </h2>

                  {/* Dropdown for conversations on mobile */}
                  <div className="relative inline-block text-left ml-2">
                    <button
                      id="dropdown-button"
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 text-gray-500"
                      onClick={() => {
                        const dropdown = document.getElementById(
                          "conversation-dropdown"
                        );
                        if (dropdown) {
                          dropdown.classList.toggle("hidden");
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      id="conversation-dropdown"
                      className="hidden absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                    >
                      <div className="py-1">
                        <button
                          onClick={createNewConversation}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          New Conversation
                        </button>

                        <div className="border-t border-gray-100 my-1"></div>

                        {Object.values(conversations).map((conv) => (
                          <button
                            key={conv.conversation_id}
                            onClick={() => {
                              loadConversation(conv.conversation_id);
                              const dropdown = document.getElementById(
                                "conversation-dropdown"
                              );
                              if (dropdown) dropdown.classList.add("hidden");
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 truncate"
                          >
                            {getConversationPreview(conv)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {loading && (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                )}
              </div>

              {/* Messages Container */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {/* Regular text message */}
                      {!message.isFile && (
                        <div>
                          <div
                            className="text-sm whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{
                              __html: processMessageContent(
                                message.content,
                                message.role === "user"
                              ),
                            }}
                          />

                          {/* Download button for completed grading */}
                          {message.role === "assistant" &&
                            message.content.includes("Grading complete") &&
                            pdfBlob && (
                              <button
                                onClick={downloadPdf}
                                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7 10 12 15 17 10"></polyline>
                                  <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download Graded PDF
                              </button>
                            )}
                        </div>
                      )}

                      {/* File message */}
                      {message.isFile && (
                        <div>
                          <p className="text-sm whitespace-pre-wrap mb-2">
                            {message.content}
                          </p>
                          <div className="mt-2 flex items-center bg-gray-800/10 p-2 rounded-lg">
                            <span className="mr-2">📎</span>
                            <span>{message.fileName}</span>
                          </div>
                        </div>
                      )}

                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
                accept=".pdf"
              />

              {/* Chat Input with Upload Button */}
              <div className="border-t border-gray-200 p-4 bg-white/80">
                {/* File preview if a file is selected */}
                {selectedFile && (
                  <div className="mb-3 p-2 bg-gray-100 rounded-lg flex items-center">
                    <span className="mr-2">📎</span>
                    <span className="text-sm flex-grow">
                      {selectedFile.name}
                    </span>
                    <button
                      onClick={removeSelectedFile}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Text input form */}
                <form onSubmit={handleSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-grow shadow-sm focus:ring-2 focus:ring-black focus:border-black block w-full text-sm border-gray-300 rounded-xl px-4 py-2.5 mr-3"
                    disabled={loading}
                  />

                  <button
                    type="button"
                    onClick={handleFileUploadClick}
                    disabled={loading}
                    className="p-2 rounded-full hover:bg-gray-200 mr-2"
                    title="Upload PDF file"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </button>

                  <button
                    type="submit"
                    disabled={loading || (!input.trim() && !selectedFile)}
                    className={`inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors ${
                      loading || (!input.trim() && !selectedFile)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                    ) : (
                      "Send"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SuperTeacher AI. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
