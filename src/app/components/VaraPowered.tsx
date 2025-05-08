'use client'

import React from 'react'

const VaraPowered = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center py-8 px-4 sm:px-8 lg:px-24">
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
                {/* Main Text Content */}
                <div className="text-center max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-Manrope-Bold text-gray-800 leading-tight">
                        Powered by Vara, your trusted teaching intelligence
                    </h1>
                </div>

                {/* Separate Div for Paragraph */}
                <div className="text-center max-w-lg mx-auto mt-4 mb-8">
                    <h3 className="text-md md:text-lg text-gray-600 font-Manrope-SemiBold">
                        Your AI companion understands curriculum, grading logic,
                        and personal feedback patterns—delivering fast, accurate
                        results while staying true to your teaching style.
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 md:gap-4 mt-4">
                    {/* Arrows Image positioned centrally */}
                    <div className="flex flex-col items-center justify-center mb-6 lg:mb-0 w-full lg:w-1/2 max-w-md">
                        <img
                            src="/images/comArrow.png"
                            alt="Example Image"
                            className="w-full h-auto max-w-[400px] rounded-lg"
                        />
                    </div>

                    {/* Right section */}
                    <div className="flex flex-col items-center bg-gray-100 border border-gray-800 rounded-xl p-4 md:p-5 shadow-md w-full lg:w-1/2 max-w-lg">
                        <div className="mb-4">
                            <img
                                src="/images/Varabrain.png"
                                alt="Example Image"
                                className="w-[120px] md:w-[180px] h-auto rounded-lg"
                            />
                        </div>

                        <div className="bg-black h-[2px] w-full max-w-[300px] mb-3"></div>

                        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                            <div className="flex-1 space-y-3 flex flex-col items-center">
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-sm md:text-lg font-Manrope-Medium text-gray-800">
                                        Curriculum context
                                    </h2>
                                </div>
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-sm md:text-lg font-Manrope-Medium text-gray-800">
                                        Tone matching
                                    </h2>
                                </div>
                            </div>
                            <div className="flex-1 space-y-3 flex flex-col items-center">
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-sm md:text-lg font-Manrope-Medium text-gray-800">
                                        Grading logic
                                    </h2>
                                </div>
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-sm md:text-lg font-Manrope-Medium text-gray-800">
                                        Answer evaluation
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VaraPowered
