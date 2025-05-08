'use client';
import React, { useState, useEffect, useRef } from "react";

const Page: React.FC = () => {
    const [activeSection, setActiveSection] = useState(0); // Active section index
    const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);


    const isScrolling = useRef(false); // To prevent multiple scroll actions

    // Detect scroll direction and move to next/prev section
    const handleScroll = (event: WheelEvent) => {
        if (isScrolling.current) return; // Prevent multiple scroll actions

        isScrolling.current = true; // Set flag to true to prevent further scroll actions until the scroll animation finishes

        const scrollDown = event.deltaY > 0; // If scroll is down (positive deltaY)
        let newActiveSection = activeSection;

        // Scroll down: move to the next section
        if (scrollDown && activeSection < sectionRefs.current.length - 1) {
            newActiveSection = activeSection + 1;
        }
        // Scroll up: move to the previous section
        if (!scrollDown && activeSection > 0) {
            newActiveSection = activeSection - 1;
        }

        // Update active section
        setActiveSection(newActiveSection);

        // Smooth scroll to the new section
        sectionRefs.current[newActiveSection]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Wait for the scrolling to complete before allowing the next scroll action
        setTimeout(() => {
            isScrolling.current = false;
        }, 800); // Duration of scroll animation
    };

    // Add scroll listener
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => handleScroll(event);
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, [activeSection]);

    // Handle dot click navigation
    const handleDotClick = (index: number) => {
        setActiveSection(index);
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/images/background.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Left-side Dot Navigation */}
            <div className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-6 z-50 flex-col space-y-4">
                {["vision", "vara", "understand", "curriculum", "grading", "future"].map((id, index) => (
                    <button
                        key={id}
                        onClick={() => handleDotClick(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 ${activeSection === index
                            ? "bg-gray-900 opacity-100 scale-125 backdrop-blur-lg shadow-lg"
                            : "bg-gray-500 opacity-70 hover:opacity-100 backdrop-blur-md"
                            }`}
                        style={{
                            backdropFilter: 'blur(5px)', // Apply blur effect on inactive dots
                        }}
                    />
                ))}
            </div>

            {/* Mobile Dot Navigation */}
            <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
                {["vision", "vara", "understand", "curriculum", "grading", "future"].map((id, index) => (
                    <button
                        key={id}
                        onClick={() => handleDotClick(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 ${activeSection === index
                            ? "bg-gray-900 opacity-100 scale-125 backdrop-blur-lg shadow-lg"
                            : "bg-gray-500 opacity-70 hover:opacity-100 backdrop-blur-md"
                            }`}
                        style={{
                            backdropFilter: 'blur(5px)', // Apply blur effect on inactive dots
                        }}
                    />
                ))}
            </div>

            {/* Sections */}
            <div className="relative">
                <div className="transition-transform duration-700 ease-in-out">
                    {/* Vision Section */}
                    <section
                        ref={(el) => { sectionRefs.current[6] = el as HTMLDivElement | null; }}

                        className={`min-h-screen pt-32 pb-20 px-6 flex items-center section transition-all duration-700 ease-in-out ${activeSection === 0 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-5xl sm:text-6xl font-Manrope-Bold text-gray-800 mb-6">Our Vision</h2>
                                <p className="text-2xl text-gray-700 mb-6 font-Manrope-SemiBold">We believe teachers are irreplaceable</p>
                                <div className="space-y-6 text-gray-600 text-xl leading-[1.8]">
                                    <p>
                                        The world will build countless AI tutors, chatbots, and virtual assistants. But nothing — nothing — replaces a real teacher.
                                    </p>
                                    <p>Teachers bring the magic of human connection, wisdom, mentorship, empathy, and belief.</p>
                                    <p>They shape futures in ways no algorithm ever can.</p>
                                    <p>At Super Teacher, we don’t replace teachers.</p>
                                    <p>We amplify them.</p>
                                    <p>Here’s how we’re reshaping teaching ↓</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="/images/Vision.png"
                                    alt="Vision Teacher Illustration"
                                    className="w-[320px] md:w-[420px] rounded-xl"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Vara Section */}
                    <section
                        ref={(el) => { sectionRefs.current[1] = el as HTMLDivElement | null; }}
                        className={`min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-24 flex flex-col justify-center section transition-all duration-700 ease-in-out ${activeSection === 1 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="relative flex justify-center items-center">
                            <img
                                src="/images/Vara.png"
                                alt="Future of Teaching"
                                className="absolute z-10 w-24 sm:w-28 md:w-32 lg:w-36 h-auto rounded-lg -top-16 sm:-top-20 md:-top-24 lg:-top-28"
                            />
                            <div className="z-20 flex justify-center">
                                <div className="border-2 border-gray-400 rounded-2xl px-6 py-1 bg-white">
                                    <h1 className="text-4xl sm:text-5xl font-Manrope-Bold text-gray-800 leading-tight text-center">
                                        Vara 0
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 bg-white border-y-0 border-l-2 border-r-2 border-black h-[70px] w-[120px] mx-auto"></div>
                        <div className="text-center max-w-3xl mx-auto space-y-4 px-4">
                            <div className="border-2 border-gray-500 p-2 inline-block max-w-xs rounded-3xl w-[250px]">
                                <h3 className="text-xl text-gray-600 font-Manrope-Medium">NOW IN PRIVATE BETA</h3>
                            </div>
                            <h1 className="text-3xl sm:text-5xl font-Manrope-Bold text-gray-800 leading-tight mx-auto max-w-lg sm:max-w-xl text-center break-words">
                                The Future of Teaching Starts Here
                            </h1>
                            <h4 className="text-base sm:text-lg text-gray-600 font-Manrope-SemiBold">
                                Embrace the next generation of learning with tools built for educators.
                            </h4>
                        </div>
                    </section>
                    {/* Understanding Section */}
                    <section
                        ref={(el) => { sectionRefs.current[2] = el as HTMLDivElement | null; }}
                        className={`min-h-screen py-20 px-4 sm:px-6 md:px-8 flex items-center section transition-all duration-700 ease-in-out ${activeSection === 2 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-5xl font-Manrope-Bold text-gray-800 mb-6">Understand What Students Really Write</h2>
                                <div className="space-y-3 text-gray-600 text-lg leading-[1.6] font-Manrope-SemiBold">
                                    <h4>Super Teacher reads handwriting like a teacher — not a scanner</h4>
                                    <h6>
                                        Using OCR + computer vision, Vara can decode even messy Indian exam sheets, extract student answers, and turn raw writing into structured understanding — all in seconds.
                                    </h6>
                                    <div style={{ backgroundColor: "black", width: "200px", height: "4px" }}></div>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="/images/Understanding.png"
                                    alt="Understanding"
                                    className="w-[450px] md:w-[570px] h-auto rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </section>
                    {/* Curriculum Section */}
                    <section
                        ref={(el) => { sectionRefs.current[3] = el as HTMLDivElement | null; }}
                        className={`min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-24 flex flex-col justify-center section transition-all duration-700 ease-in-out ${activeSection === 3 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-5xl font-Manrope-Bold text-gray-800 mb-6">Curriculum-Aware Grading</h2>
                                <div className="space-y-3 text-gray-600 text-lg leading-[1.6]">
                                    <h4>Super Teacher is trained on the CBSE curriculum—from format to phrasing, from marking schemes to model answers.</h4>
                                    <h6>It knows how Indian exams are structured—and also adapts to how you grade over time.</h6>
                                    <div style={{ backgroundColor: "black", width: "100px", height: "4px" }}></div>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="/images/Curriculam.png"
                                    alt="Curriculum"
                                    className="w-[450px] md:w-[570px] h-auto rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </section>
                    {/* Grading Section */}
                    <section
                        ref={(el) => { sectionRefs.current[4] = el as HTMLDivElement | null; }}
                        className={`min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-24 flex flex-col justify-center section transition-all duration-700 ease-in-out ${activeSection === 4 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-5xl font-Manrope-Bold text-gray-800 mb-6">Grading You Can Trust</h2>
                                <div className="space-y-3 text-gray-600 text-lg leading-[1.6]">
                                    <h3 className="font-Manrope-SemiBold">Super Teacher doesn’t guess — it learns, compares, and confirms.</h3>
                                    <h6>Every mark is grounded in CBSE standards, real answer keys, and your own grading history.</h6>
                                    <h6>It handles partial credit, varied phrasing, even incomplete logic — with over 99% accuracy across exam formats.</h6>
                                    <h6>You can audit every mark. Students can trust every result.</h6>
                                    <div style={{ backgroundColor: "black", width: "150px", height: "4px" }}></div>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="/images/FInalgrading.png"
                                    alt="Grading"
                                    className="w-[450px] md:w-[570px] h-auto rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </section>
                    {/* Future Section */}
                    <section
                        ref={(el) => { sectionRefs.current[5] = el as HTMLDivElement | null; }}
                        className={`min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-24 flex flex-col justify-center section transition-all duration-700 ease-in-out ${activeSection === 5 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="max-w-7xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-Manrope-Bold text-black mb-6">The Future of Vara</h2>
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                {[{
                                    level: 'Level 1',
                                    title: 'Teacher-Tuned Feedback',
                                    desc: `Learns a teacher’s personal grading style—including symbols, voice notes, videos, tone, and phrasing—and mimics them to deliver human-like feedback at scale.`,
                                },
                                {
                                    level: 'Level 2',
                                    title: 'AI-Powered Analytics',
                                    desc: `Utilizes artificial intelligence to analyze student performance and suggest improvements for better results.`,
                                },
                                {
                                    level: 'Level 3',
                                    title: 'Adaptive Learning',
                                    desc: `Tailors lessons and assessments based on individual student needs to ensure mastery of concepts.`,
                                },
                                {
                                    level: 'Level 4',
                                    title: 'Interactive Feedback',
                                    desc: `Provides real-time, interactive feedback to students through chatbots and virtual assistants.`,
                                },
                                ].map((item, idx) => (
                                    <div key={idx} className="w-full md:w-1/4 text-left bg-gray-200 p-6 border border-gray-300 rounded-lg">
                                        <h3 className="text-xl font-Manrope-SemiBold mb-2">{item.level}</h3>
                                        <h4 className="text-lg font-Manrope-Medium mb-2">{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Page;
