'use client'

import React from 'react'

const HowItWorks = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center px-4 md:px-20">
            <div className="max-w-6xl w-full flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl mb-4 font-Manrope-Bold text-center">
                    How it works
                </h2>

                <h3 className="text-lg md:text-xl text-gray-600 mb-8 font-Manrope-SemiBold text-center">
                    A week of grading done in minutes
                </h3>

                <div className="w-full flex-1 flex items-center justify-center overflow-hidden max-h-[70vh]">
                    {/* Mobile Image */}
                    <img
                        src="/images/FlowchartMobile.png"
                        alt="Vision Teacher Illustration for Mobile"
                        className="block md:hidden object-contain w-full h-auto max-h-full rounded-xl"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/Quick workflow.png"
                        alt="Vision Teacher Illustration for Desktop"
                        className="hidden md:block object-contain w-full h-auto max-h-full rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
