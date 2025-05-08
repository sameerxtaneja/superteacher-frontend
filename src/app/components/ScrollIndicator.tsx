'use client'

import React from 'react'

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <p className="text-sm text-gray-600 mb-2 font-Manrope-Medium">Scroll Down</p>
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600"
            >
                <path 
                    d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

export default ScrollIndicator 