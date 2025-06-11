import { useState } from "react";
import { Users, Menu, X } from "lucide-react";
import { Link } from "react-router";
import logo from "~/components/images/Cara logo-01.png";

const navigation = [
    { name: "Home", to: "/", isExternal: true },
    { name: "About CARA", to: "/about", isExternal: true },
    { name: "Our Work", to: "#", isExternal: false },
    { name: "Our Impact", to: "#", isExternal: false },
    { name: "Get Involved", to: "#bePartOfTheSolution", isExternal: false },
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
        <header className="border border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 transition-all duration-300 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                    >
                       <img className="w-[120px] h-[40px] object-contain" src={logo} alt="CARA Logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            item.isExternal ? (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-700 hover:text-cara-teal font-medium transition-colors duration-200 relative group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 cara-bg-orange transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    className="text-gray-700 hover:text-cara-teal font-medium transition-colors duration-200 relative group"
                                    onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 cara-bg-orange transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            )
                        ))}
                        
                        {/* CTA Button */}
                        <Link 
                            to="#bePartOfTheSolution" 
                            className="cara-btn-primary font-heading px-6 py-2 text-sm"
                            onClick={(e) => handleSmoothScroll(e, "#bePartOfTheSolution", false)}
                        >
                            Join the Movement
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-cara-teal hover:bg-gray-100 transition-colors duration-200"
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
                    <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                item.isExternal ? (
                                    <Link 
                                        key={item.name}
                                        to={item.to} 
                                        className="text-gray-700 hover:text-cara-teal font-medium transition-colors duration-200 py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className="text-gray-700 hover:text-cara-teal font-medium transition-colors duration-200 py-2"
                                        onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                    </a>
                                )
                            ))}
                            
                            {/* Mobile CTA */}
                            <Link 
                                to="#bePartOfTheSolution" 
                                className="cara-btn-primary font-heading px-6 py-3 text-center mt-4"
                                onClick={(e) => {
                                    handleSmoothScroll(e, "#bePartOfTheSolution", false);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                Join the Movement
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
