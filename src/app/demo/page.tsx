'use client'

import { useState, useRef, useEffect } from 'react'

// API endpoints for chat and grading
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
const CHAT_API_ENDPOINT = `${API_BASE}/api/chat`
const GRADING_API_ENDPOINT = `${API_BASE}/api/upload`

type Message = {
    content: string
    role: 'user' | 'assistant'
    timestamp: Date
    isFile?: boolean
    fileType?: string
    fileUrl?: string
    fileName?: string
}

export default function ChatPage() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState<string | null>(null)
    const [questionPaper, setQuestionPaper] = useState<File | null>(null)
    const [answerSheet, setAnswerSheet] = useState<File | null>(null)
    const [subject, setSubject] = useState('')
    const [fileUploadType, setFileUploadType] = useState<
        'question' | 'answer' | null
    >(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Auto-scroll to bottom of messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    // Initialize with a welcome message when component loads
    useEffect(() => {
        setMessages([
            {
                content:
                    "Hello! I'm SuperTeacher's AI assistant. You can chat with me about any educational topic, or upload question papers and answer sheets for AI grading. Try saying 'I want to grade a paper' to get started.",
                role: 'assistant',
                timestamp: new Date(),
            },
        ])

        // Generate a user ID or get from localStorage
        const storedUserId = localStorage.getItem('superteacher_user_id')
        if (storedUserId) {
            setUserId(storedUserId)
        } else {
            const newUserId = generateUserId()
            localStorage.setItem('superteacher_user_id', newUserId)
            setUserId(newUserId)
        }
    }, [])

    // Generate a random user ID
    const generateUserId = () => {
        return 'user_' + Math.random().toString(36).substring(2, 15)
    }

    // Handle file upload button click
    const handleFileUploadClick = (type: 'question' | 'answer') => {
        setFileUploadType(type)
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]

            // Add file message to chat
            const fileMessage: Message = {
                content: `Uploaded ${fileUploadType === 'question' ? 'question paper' : 'answer sheet'}: ${file.name}`,
                role: 'user',
                timestamp: new Date(),
                isFile: true,
                fileType: file.type,
                fileName: file.name,
            }

            setMessages((prev) => [...prev, fileMessage])

            if (fileUploadType === 'question') {
                setQuestionPaper(file)

                // Add assistant acknowledgment
                addAssistantMessage(
                    "I've received your question paper. Now, please upload the corresponding answer sheet or tell me the subject if you haven't already.",
                )

                // Check if we now have all required elements for grading
                if (answerSheet && subject) {
                    processGrading()
                }
            } else {
                setAnswerSheet(file)

                // Add assistant acknowledgment
                addAssistantMessage(
                    "I've received your answer sheet. " +
                        (subject
                            ? questionPaper
                                ? "I'll start grading now!"
                                : 'Please upload the question paper to continue.'
                            : 'Please tell me the subject for grading.'),
                )

                // If we have all necessary components, start grading
                if (questionPaper && subject) {
                    processGrading()
                }
            }

            // Reset the file input
            e.target.value = ''
        }
    }

    // Add assistant message helper
    const addAssistantMessage = (content: string) => {
        const assistantMessage: Message = {
            content,
            role: 'assistant',
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
    }

    // Process text input
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!input.trim() || loading) return

        // Add user message to chat
        const userMessage: Message = {
            content: input,
            role: 'user',
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setLoading(true)

        const userInput = input.toLowerCase()
        setInput('')

        // Check for grading-related keywords
        if (
            userInput.includes('grade') ||
            userInput.includes('check') ||
            userInput.includes('evaluate') ||
            userInput.includes('score') ||
            userInput.includes('assess') ||
            userInput.includes('review paper')
        ) {
            addAssistantMessage(
                "I'd be happy to help grade papers! Please upload a question paper PDF first, then the answer sheet PDF. Also, let me know the subject.",
            )
            setLoading(false)
            return
        }

        // Check if this is setting the subject for grading
        if (questionPaper || answerSheet) {
            // More aggressive subject detection - assume short inputs are subject names
            // when files have been uploaded
            if (
                userInput.includes('subject') ||
                userInput.includes('topic') ||
                userInput.includes('course') ||
                userInput.length < 30 ||
                (!subject && (questionPaper || answerSheet))
            ) {
                // Extract the subject
                let extractedSubject = input
                if (
                    input.toLowerCase().includes('subject is') ||
                    input.toLowerCase().includes('subject:')
                ) {
                    extractedSubject =
                        input.split('is')[1]?.trim() ||
                        input.split(':')[1]?.trim() ||
                        input
                }

                setSubject(extractedSubject)

                if (questionPaper && answerSheet) {
                    addAssistantMessage(
                        `Great! I've set the subject to "${extractedSubject}". I'll start grading now!`,
                    )
                    await processGrading()
                } else {
                    addAssistantMessage(
                        `I've set the subject to "${extractedSubject}". ${
                            !questionPaper
                                ? 'Please upload a question paper. '
                                : ''
                        }${
                            !answerSheet
                                ? 'Please upload an answer sheet. '
                                : ''
                        }`,
                    )
                }

                setLoading(false)
                return
            }
        }

        try {
            const response = await fetch(CHAT_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: input,
                    userId: userId,
                }),
            })

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`)
            }

            const data = await response.json()

            // Add AI response to chat
            const aiMessage: Message = {
                content: data.message,
                role: 'assistant',
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, aiMessage])
        } catch (error) {
            // Add error message to chat
            const errorMessage: Message = {
                content: `Error: ${error instanceof Error ? error.message : 'Failed to get response'}. Please try again.`,
                role: 'assistant',
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setLoading(false)
        }
    }

    // Process grading request
    const processGrading = async () => {
        if (!questionPaper || !answerSheet || !subject) {
            addAssistantMessage(
                "I need both a question paper, answer sheet, and subject information to grade. Please make sure you've provided all three.",
            )
            console.log('Missing required components for grading:', {
                hasQuestionPaper: !!questionPaper,
                hasAnswerSheet: !!answerSheet,
                hasSubject: !!subject,
            })
            return
        }

        setLoading(true)
        addAssistantMessage(
            'Processing your grading request. This may take a minute...',
        )

        try {
            console.log('Preparing form data for grading request...')
            const formData = new FormData()
            formData.append('subject', subject)
            formData.append('questionPaper', questionPaper)
            formData.append('answerSheet', answerSheet)

            console.log('Sending grading request to:', GRADING_API_ENDPOINT)
            const response = await fetch(GRADING_API_ENDPOINT, {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`)
            }

            console.log('Grading request successful, processing response...')
            const contentType = response.headers.get('Content-Type')

            if (contentType && contentType.includes('application/pdf')) {
                // Handle PDF response
                const blob = await response.blob()
                const url = URL.createObjectURL(blob)

                // Add PDF as AI message
                const pdfMessage: Message = {
                    content: "Here's the graded result for your submission:",
                    role: 'assistant',
                    timestamp: new Date(),
                    isFile: true,
                    fileType: 'application/pdf',
                    fileUrl: url,
                    fileName: `graded-result-${new Date().toISOString().slice(0, 10)}.pdf`,
                }

                setMessages((prev) => [...prev, pdfMessage])
                addAssistantMessage(
                    "I've completed grading your paper. You can view and download the PDF above. Would you like to grade another paper or do you have any questions about the results?",
                )
            } else {
                // Handle JSON response
                const data = await response.json()
                addAssistantMessage(
                    `Grading completed! ${data.message || 'Your paper has been graded successfully.'}`,
                )
            }

            // Reset after successful grading
            setQuestionPaper(null)
            setAnswerSheet(null)
            setSubject('')
        } catch (error) {
            console.error('Error during grading process:', error)
            addAssistantMessage(
                `There was an error processing your request: ${error instanceof Error ? error.message : 'Unknown error occurred'}. Please try again.`,
            )
        } finally {
            setLoading(false)
        }
    }

    // Download PDF function
    const downloadPdf = (url: string, fileName: string) => {
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url("/images/background.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
                                SuperTeacher AI Chat
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col">
                <div className="max-w-4xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 flex-grow flex flex-col">
                    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl flex-grow flex flex-col overflow-hidden border border-gray-200">
                        {/* Messages Container */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl px-4 py-3 ${
                                            message.role === 'user'
                                                ? 'bg-black text-white'
                                                : 'bg-gray-100 text-gray-900'
                                        }`}
                                    >
                                        {/* Regular text message */}
                                        {!message.isFile && (
                                            <p className="text-sm whitespace-pre-wrap">
                                                {message.content}
                                            </p>
                                        )}

                                        {/* File message */}
                                        {message.isFile && (
                                            <div>
                                                <p className="text-sm whitespace-pre-wrap mb-2">
                                                    {message.content}
                                                </p>

                                                {/* PDF viewer for graded results */}
                                                {message.fileType ===
                                                    'application/pdf' &&
                                                    message.fileUrl && (
                                                        <div className="mt-2">
                                                            <div className="border border-gray-300 rounded-xl overflow-hidden mb-2">
                                                                <iframe
                                                                    src={
                                                                        message.fileUrl
                                                                    }
                                                                    className="w-full"
                                                                    style={{
                                                                        height: '300px',
                                                                    }}
                                                                    title="PDF Document"
                                                                ></iframe>
                                                            </div>
                                                            <button
                                                                onClick={() =>
                                                                    downloadPdf(
                                                                        message.fileUrl!,
                                                                        message.fileName ||
                                                                            'document.pdf',
                                                                    )
                                                                }
                                                                className="text-xs bg-black text-white px-3 py-1.5 rounded-xl hover:bg-gray-800 transition-colors"
                                                            >
                                                                Download PDF
                                                            </button>
                                                        </div>
                                                    )}
                                            </div>
                                        )}

                                        <p className="text-xs opacity-70 mt-1">
                                            {message.timestamp.toLocaleTimeString(
                                                [],
                                                {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                },
                                            )}
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
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="hidden"
                        />

                        {/* Chat Input with Upload Buttons */}
                        <div className="border-t border-gray-200 p-4 bg-white/80">
                            {/* File upload buttons */}
                            <div className="flex flex-wrap mb-3 gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleFileUploadClick('question')
                                    }
                                    disabled={loading}
                                    className="text-xs border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 px-3 py-1.5 rounded-xl flex items-center transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    Upload Question Paper
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleFileUploadClick('answer')
                                    }
                                    disabled={loading}
                                    className="text-xs border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 px-3 py-1.5 rounded-xl flex items-center transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    Upload Answer Sheet
                                </button>
                            </div>

                            {/* Status indicators */}
                            <div className="flex flex-wrap mb-3 gap-3 text-xs text-gray-500">
                                {questionPaper && (
                                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-lg flex items-center">
                                        <svg
                                            className="w-3 h-3 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Question Paper: {questionPaper.name}
                                    </div>
                                )}
                                {answerSheet && (
                                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-lg flex items-center">
                                        <svg
                                            className="w-3 h-3 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Answer Sheet: {answerSheet.name}
                                    </div>
                                )}
                                {subject && (
                                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-lg flex items-center">
                                        <svg
                                            className="w-3 h-3 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Subject: {subject}
                                    </div>
                                )}

                                {/* Add grade now button when all components are ready */}
                                {questionPaper &&
                                    answerSheet &&
                                    subject &&
                                    !loading && (
                                        <button
                                            onClick={processGrading}
                                            className="ml-auto bg-black text-white px-3 py-1 rounded-xl hover:bg-gray-800 transition-colors flex items-center"
                                        >
                                            <svg
                                                className="w-3 h-3 mr-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                ></path>
                                            </svg>
                                            Grade Now
                                        </button>
                                    )}
                            </div>

                            {/* Text input form */}
                            <form
                                onSubmit={handleSubmit}
                                className="flex items-center"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={
                                        questionPaper && !subject
                                            ? 'Tell me the subject for grading...'
                                            : 'Type your message...'
                                    }
                                    className="flex-grow shadow-sm focus:ring-2 focus:ring-black focus:border-black block w-full text-sm border-gray-300 rounded-xl px-4 py-2.5 mr-3"
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    disabled={loading || !input.trim()}
                                    className={`inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors ${
                                        loading || !input.trim()
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                    }`}
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                                    ) : (
                                        'Send'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} SuperTeacher AI. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
