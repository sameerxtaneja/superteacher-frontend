'use client'

import React from 'react'
import ScrollIndicator from './ScrollIndicator'

const Hero = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center px-6 relative">
            <div className="max-w-3xl text-center">
                {/* Image above heading */}
                <img
                    src="/images/superteacher.png"
                    alt="AI Grading Illustration"
                    className="mx-auto w-[500px] h-[500px] rounded-xl"
                />
                <h1 className="font-manrope mt-[-80px] text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                    India&apos;s first AI grading platform <br />
                    for teachers.
                </h1>
                <div className="mt-8 flex flex-row justify-center items-center gap-4">
                    <a
                        href="https://tally.so/r/w4ELKX"
                        className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition flex items-center space-x-2 font-Manrope-Medium"
                    >
                        <img
                            src="/images/join.png"
                            alt="Join Icon"
                            className="w-6 h-6 mr-2"
                        />
                        Join waitlist
                    </a>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    )
}

export default Hero
