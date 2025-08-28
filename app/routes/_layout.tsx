import { Outlet, Link } from "react-router";

export default function AppLayout() {

    return (
        <div className="min-h-screen ">
        
            <Outlet />
             {/* Footer */}
             <footer className="bg-gray-900 text-white">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* About CARA */}
                            <div className="lg:col-span-2">
                                <div className="mb-6">
                                   <img src="/logo.png" alt="CARA Logo" className='w-60 h-22'    />
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                    Building Africa's care economy by making care visible, connected, and valued throughout all stages of life.
                                    Supporting families, uplifting caregivers, and strengthening communities.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="mailto:info@caraafrica.org" className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" title="Email">
                                        <span className="text-white text-lg">📧</span>
                                    </a>
                                    <a href="https://twitter.com/caraafrica" className="w-10 h-10 bg-[#FCB339] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" title="Twitter">
                                        <span className="text-white text-lg">🐦</span>
                                    </a>
                                    <a href="https://facebook.com/caraafrica" className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" title="Facebook">
                                        <span className="text-white text-lg">📘</span>
                                    </a>
                                    <a href="https://instagram.com/caraafrica" className="w-10 h-10 bg-[#FCB339] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" title="Instagram">
                                        <span className="text-white text-lg">📱</span>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-heading text-lg font-semibold mb-6 text-[#FCB339]">Quick Links</h4>
                                <ul className="space-y-3">
                                    <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                                    <li><Link to="/#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                                    <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
                                    <li><Link to="/#get-involved" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                                    
                                </ul>
                            </div>

                            {/* Get Involved */}
                            <div>
                                <h4 className="font-heading text-lg font-semibold mb-6 text-teal-500">Get Involved</h4>
                                <ul className="space-y-3">
                                    <li><Link to="/become-a-giver" className="text-gray-300 hover:text-white transition-colors">Volunteer as Caregiver</Link></li>
                                    <li><Link to="/support-us" className="text-gray-300 hover:text-white transition-colors">Support Our Work</Link></li>
                                    <li><Link to="/partner-with-us" className="text-gray-300 hover:text-white transition-colors">Partner With Us</Link></li>
                                   
                                    <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Training Programs</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 text-[#FCB339]">Contact Us</h4>
                                    <div className="space-y-2 text-gray-300">
                                        <p className="flex items-center gap-2">
                                            <span className="text-teal-500">📍</span>
                                            <span>Accra, Ghana </span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-[#FCB339]">📧</span>
                                            <a href="mailto:info@caraafrica.org " className="hover:text-white transition-colors">
                                            info@caraafrica.org 
                                            </a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-teal-500">📞</span>
                                            <span>+233 XXX XXX XXX</span>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 text-teal-500">Newsletter</h4>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Stay updated on our progress and latest initiatives
                                    </p>
                                    
                                    <Link 
                                        to="/newsletter" 
                                        className="inline-block bg-[#FCB339] hover:bg-[#FCB339]/80 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 text-center w-full"
                                    >
                                        Subscribe to Newsletter
                                    </Link>
                                    
                                    <p className="text-gray-400 text-xs mt-2">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 text-[#FCB339]">Our Focus Areas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Caregiver Training</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Community Support</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Inclusive Education</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Advocacy</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Community Health</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="bg-gray-950 py-6">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-gray-400 text-sm">
                                © 2024 Care Access for Resilient Africa (CARA). All rights reserved.
                            </div>
                            <div className="flex gap-6 text-sm">
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                                <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}