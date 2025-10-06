import { useState } from "react";
import { Users, Menu, X, Facebook, Twitter, Search } from "lucide-react";
import { Link, useLocation } from "react-router";

const navigation = [
    { name: "Home", to: "/", isExternal: false },
    { name: "About", to: "/about", isExternal: false },
    { name: "Programs", to: "/programs", isExternal: false },
    { name: "Gallery", to: "/gallery", isExternal: false },
    { name: "News", to: "/blog", isExternal: false },
    { name: "Care Giver", to: "/become-a-giver", isExternal: false },
    { name: "Partner with Us", to: "/partner-with-us", isExternal: false },
    { name: "Contact Us", to: "/#get-involved", isExternal: false },
];

const mobileNavigation = [
    { name: "Home", to: "/", isExternal: false },
    { name: "About", to: "/about", isExternal: false },
    { name: "Programs", to: "/programs", isExternal: false },
    { name: "Gallery", to: "/gallery", isExternal: false },
    { name: "News", to: "/blog", isExternal: false },
    { name: "Support Us", to: "/support-us", isExternal: false },
    { name: "Care Giver", to: "/become-a-giver", isExternal: false },
    { name: "Partner with Us", to: "/partner-with-us", isExternal: false },
    { name: "Contact Us", to: "/#get-involved", isExternal: false },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (href: string) => {
        if (href === "/") {
            return location.pathname === "/";
        }
        if (href.startsWith("/#")) {
            return location.pathname === "/" && location.hash === href.substring(1);
        }
        return location.pathname === href;
    };

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            setMobileMenuOpen(false);
            return;
        }
        
        setMobileMenuOpen(false);
        
        // Handle hash links (sections on home page)
        if (href.startsWith('/#')) {
            e.preventDefault();
            // If we're on the home page, scroll to section
            if (location.pathname === '/') {
                const targetId = href.replace('/#', '');
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            } else {
                // If we're on another page, navigate to home page with hash
                window.location.href = href;
            }
        }
        // For regular routes, let React Router handle navigation
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ">
            <div className="">
                <div className="bg-gradient-to-r from-white  to-[#00A5B8] lg:bg-gradient-to-r lg:from-white lg:via-[#00A5B8] lg:to-[#00A5B8] shadow-sm px-4 lg:px-6 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                        >
                            <img 
                                src="/logo.png" 
                                alt="CARA Logo" 
                                className="lg:w-60 lg:h-22 w-auto h-20"
                            />
                           
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                item.to.startsWith('/#') ? (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className={`font-medium transition-colors duration-200 relative group ${
                                            isActive(item.to) 
                                                ? 'text-[#FCB339]' 
                                                : 'text-white hover:text-orange-200'
                                        }`}
                                        onClick={(e) => handleNavigation(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                                            isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`font-medium transition-colors duration-200 relative group ${
                                            isActive(item.to) 
                                                ? 'text-[#FCB339]' 
                                                : 'text-white hover:text-orange-200'
                                        }`}
                                    >
                                        {item.name}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                                            isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </Link>
                                )
                            ))}
                        </nav>

                        {/* Support Us Button */}
                        <div className="hidden lg:flex items-center">
                            {/* <Link 
                                to="/support-us"
                                className="bg-[#FCB339] text-white px-6 py-2 rounded-full hover:bg-orange-100 transition-colors duration-300 font-medium"
                            >
                                SUPPORT US
                            </Link> */}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-md text-white hover:text-orange-200 hover:bg-teal-800/50 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden mt-4 pb-4 border-t border-teal-400 pt-4 animate-fade-in">
                            <div className="flex flex-col space-y-4">
                                {mobileNavigation.map((item) => (
                                    item.to.startsWith('/#') ? (
                                        <a
                                            key={item.name}
                                            href={item.to}
                                            className={`font-medium transition-colors duration-200 py-2 ${
                                                isActive(item.to) 
                                                    ? 'text-[#FCB339]' 
                                                    : 'text-black hover:text-orange-200'
                                            }`}
                                            onClick={(e) => handleNavigation(e, item.to, item.isExternal)}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link 
                                            key={item.name}
                                            to={item.to} 
                                            className={`font-medium transition-colors duration-200 py-2 ${
                                                isActive(item.to) 
                                                    ? 'text-[#FCB339]' 
                                                    : 'text-black hover:text-orange-200'
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}