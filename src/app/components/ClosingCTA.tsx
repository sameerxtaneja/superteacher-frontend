'use client'

import React from 'react'

const ClosingCTA = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center px-6 md:px-20 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl">
                {/* Left Text Section */}
                <div className="text-4xl md:text-8xl font-black italic leading-tight text-black space-y-4">
                    <p>Let AI do</p>
                    <p>the grading.</p>
                    <p>You do</p>
                    <p>the teaching.</p>
                </div>

                {/* Divider and Social Icons */}
                <div className="flex flex-row items-center mt-10 md:mt-0">
                    <div className="w-px h-30 bg-black mb-4 mr-10"></div>
                    <div className="flex space-x-0.5">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <img
                                src="/images/instagram.svg"
                                alt="Instagram"
                                className="h-10 w-10"
                            />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                        >
                            <img
                                src="/images/twitter.svg"
                                alt="X"
                                className="h-10 w-10"
                            />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img
                                src="/images/linkedin.svg"
                                alt="LinkedIn"
                                className="h-10 w-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClosingCTA
