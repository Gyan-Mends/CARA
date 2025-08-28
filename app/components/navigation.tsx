import { useState } from "react";
import { Users, Menu, X, Facebook, Twitter, Search } from "lucide-react";
import { Link } from "react-router";

const navigation = [
    { name: "Home", to: "#hero", isExternal: false },
    { name: "About", to: "#about", isExternal: false },
    { name: "Services", to: "#services", isExternal: false },
    { name: "Get Involved", to: "#get-involved", isExternal: false },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            // Let the browser handle external navigation
            setMobileMenuOpen(false);
            return;
        }
        
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 transition-all duration-300 p-4">
            <div className="container mx-auto">
                <div className={`lg:bg-gradient-to-r from-white via-[#00A5B8]  to-[#00A5B8] bg-[#00A5B8]  shadow-sm px-6 py-3 transition-all duration-300 ${mobileMenuOpen ? 'rounded-2xl lg:rounded-full' : 'rounded-full'}`}>
                    <div className="flex items-center justify-between">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                        >
                            <img 
                                src="/app/components/images/Cara logo-01.png" 
                                alt="CARA Logo" 
                                className="h-8 w-auto"
                            />
                           
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                item.isExternal ? (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="text-white hover:text-orange-200 font-medium transition-colors duration-200 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className="text-white hover:text-orange-200 font-medium transition-colors duration-200 relative group"
                                        onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                )
                            ))}
                        </nav>

                        {/* Support Us Button */}
                        <div className="hidden lg:flex items-center">
                            <Link 
                                to="/support-us"
                                className="bg-[#FCB339] text-white px-6 py-2 rounded-full hover:bg-orange-100 transition-colors duration-300 font-medium"
                            >
                                SUPPORT US
                            </Link>
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
                                {navigation.map((item) => (
                                    item.isExternal ? (
                                        <Link 
                                            key={item.name}
                                            to={item.to} 
                                            className="text-white hover:text-orange-200 font-medium transition-colors duration-200 py-2"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.to}
                                            className="text-white hover:text-orange-200 font-medium transition-colors duration-200 py-2"
                                            onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                        >
                                            {item.name}
                                        </a>
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