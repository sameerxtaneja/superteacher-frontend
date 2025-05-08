'use client'

import React, { useState, useEffect } from 'react'

const PageNavigation = () => {
    const [activeSection, setActiveSection] = useState(0)
    const sections = [
        'hero',
        'howItWorks',
        'mission',
        'varaPowered',
        'approach',
        'closingCTA',
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight

            // Find which section is currently in view
            const index = Math.floor(scrollPosition / windowHeight)
            if (index >= 0 && index < sections.length) {
                setActiveSection(index)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections.length])

    const scrollToSection = (index: number) => {
        window.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col space-y-4">
                {sections.map((section, index) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(index)}
                        className={`w-3 h-3 rounded-full ${
                            activeSection === index ? 'bg-black' : 'bg-gray-300'
                        } transition-all duration-300 hover:bg-gray-800`}
                        aria-label={`Scroll to ${section} section`}
                    />
                ))}
            </div>
        </div>
    )
}

export default PageNavigation
