import { Outlet } from "react-router";
import Navigation from "~/components/navigation";
import logo from '~/components/images/Cara logo-01.png'

export default function AppLayout() {
    return (
        <div className="min-h-screen">
             {/* Navigation */}
             <Navigation />
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
                                   <img src={logo} alt="" className='w-60 h-22'    />
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                    Building Africa's care economy by making care visible, connected, and valued throughout all stages of life.
                                    Supporting families, uplifting caregivers, and strengthening communities.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 cara-bg-teal rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <span className="text-white text-lg">📧</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 cara-bg-orange rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <span className="text-white text-lg">🐦</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 cara-bg-teal rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <span className="text-white text-lg">📘</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 cara-bg-orange rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <span className="text-white text-lg">📱</span>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-heading text-lg font-semibold mb-6 cara-text-orange">Quick Links</h4>
                                <ul className="space-y-3">
                                    <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors">Our Impact</a></li>
                                    <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
                                    <li><a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
                                    <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">News & Updates</a></li>
                                    <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                                </ul>
                            </div>

                            {/* Get Involved */}
                            <div>
                                <h4 className="font-heading text-lg font-semibold mb-6 cara-text-teal">Get Involved</h4>
                                <ul className="space-y-3">
                                    <li><a href="#volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
                                    <li><a href="#partner" className="text-gray-300 hover:text-white transition-colors">Partner With Us</a></li>
                                    <li><a href="#donate" className="text-gray-300 hover:text-white transition-colors">Support Our Work</a></li>
                                    <li><a href="#training" className="text-gray-300 hover:text-white transition-colors">Training Programs</a></li>
                                    <li><a href="#advocacy" className="text-gray-300 hover:text-white transition-colors">Advocacy</a></li>
                                    <li><a href="#community" className="text-gray-300 hover:text-white transition-colors">Join Community</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 cara-text-orange">Contact Us</h4>
                                    <div className="space-y-2 text-gray-300">
                                        <p className="flex items-center gap-2">
                                            <span className="cara-text-teal">📍</span>
                                            <span>Accra, Ghana | Nairobi, Kenya</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="cara-text-orange">📧</span>
                                            <a href="mailto:info@cara-africa.org" className="hover:text-white transition-colors">
                                                info@cara-africa.org
                                            </a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="cara-text-teal">📞</span>
                                            <span>+233 XXX XXX XXX</span>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 cara-text-teal">Newsletter</h4>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Stay updated on our progress and latest initiatives
                                    </p>
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cara-teal"
                                        />
                                        <button className="cara-bg-orange hover:opacity-80 px-4 py-2 rounded-lg font-semibold transition-opacity">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 cara-text-orange">Our Focus Areas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Postpartum Care</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Early Childhood</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Disability Care</span>
                                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">Elder Care</span>
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
                                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                                <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}