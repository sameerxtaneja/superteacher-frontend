'use client'

import React from 'react'

const Mission = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center px-6">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="md:w-1/2">
                    <h2 className="text-5xl sm:text-6xl text-gray-800 mb-6 font-Manrope-Bold">
                        Mission
                    </h2>

                    <p className="text-2xl text-gray-700 mb-6 font-Manrope-SemiBold">
                        Our Mission is to give every teacher their time back, so
                        they can focus on what they love-teaching
                    </p>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/images/mission.png"
                        alt="Vision Teacher Illustration"
                        className="w-[320px] md:w-[420px] rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default Mission
