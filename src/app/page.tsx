'use client'

import Navbar from './Navbar'
import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Mission from './components/Mission'
import VaraPowered from './components/VaraPowered'
import Approach from './components/Approach'
import ClosingCTA from './components/ClosingCTA'
import PageNavigation from './components/PageNavigation'

const Page = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("/images/background.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Navbar />
            <PageNavigation />
            <div id="hero">
                <Hero />
            </div>
            <div id="howItWorks">
                <HowItWorks />
            </div>
            <div id="mission">
                <Mission />
            </div>
            <div id="varaPowered">
                <VaraPowered />
            </div>
            <div id="approach">
                <Approach />
            </div>
            <div id="closingCTA">
                <ClosingCTA />
            </div>
        </div>
    )
}

export default Page
