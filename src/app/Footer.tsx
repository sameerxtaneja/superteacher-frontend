import React from 'react'

function Footer() {
    return (
        <div className="bg-[#CE3852] p-6 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                {/* Text Box Section */}
                <div className="flex-1 space-y-4">
                    <div style={{ width: 60, height: 60, backgroundColor: 'white' }}>
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <p className="text-white text-lg font-semibold">
                        Get in touch for JEE and NEET coaching information today!
                    </p>
                    <div className="flex space-x-4">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/Rajphysics007" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-white hover:text-blue-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/rajeshphysicsclasses/" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-white hover:text-pink-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644Z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-white hover:text-blue-700">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.20156 21H1.84688V6.97969H6.20156V21ZM4.02187 5.06719C2.62969 5.06719 1.5 3.91406 1.5 2.52187C1.5 1.85303 1.7657 1.21158 2.23864 0.73864C2.71158 0.265697 3.35303 0 4.02187 0C4.69072 0 5.33217 0.265697 5.80511 0.73864C6.27805 1.21158 6.54375 1.85303 6.54375 2.52187C6.54375 3.91406 5.41406 5.06719 4.02187 5.06719ZM22.4953 21H18.15V14.175C18.15 12.5484 18.1172 10.4625 15.8859 10.4625C13.6219 10.4625 13.275 12.2297 13.275 14.0578V21H8.925V6.97969H13.1016V8.89219H13.1625C13.7438 7.79062 15.1641 6.62812 17.2828 6.62812C21.6891 6.62812 22.5 9.52969 22.5 13.2984V21H22.4953Z" />
                            </svg>
                        </a>

                        {/* Twitter */}
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" title="Twitter" className="text-white hover:text-blue-400">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Contact Section */}
                <div className="flex-1 space-y-2">
                    <p className="text-white text-lg font-semibold">Contact</p>
                    <p className="text-white text-lg font-semibold">+91 9097777365</p>
                    <p className="text-white text-lg font-semibold">AnandKumar1234@gmail.com</p>
                </div>
                {/* Newsletter Section */}
                <div className="flex-1 p-4 rounded-md space-y-4">
                    <p className="text-white text-lg font-semibold">Newsletter</p>
                    <div>
                        <label htmlFor="email" className="block text-sm text-white">
                            Enter your email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email for updates"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
                        />

                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white hover:bg-white hover:text-[#CE3852] text-[#CE3852] font-semibold py-3 rounded-full transition duration-300 border-2 border-transparent hover:border-[#CE3852]"
                    >
                        Submit your information now
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Footer
