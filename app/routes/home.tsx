import { Facebook, Instagram, Twitter, Youtube, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home(){
    return(
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-teal-500 text-sm font-medium tracking-wider uppercase">
                                17 YEARS OF EXPERIENCE
                            </p>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                We Are a<br />
                                Web Design <span className="text-teal-500">Agency</span>
                            </h1>
                            <div className="w-12 h-1 bg-teal-500"></div>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
                                Semantics, a large language ocean Separated they live in Bookmarksgrove.
                            </p>
                        </div>
                        
                        <button className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium">
                            READ MORE
                        </button>
                        
                        {/* Social Media Links */}
                        <div className="flex items-center space-x-6 pt-8">
                            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">
                                Facebook
                            </a>
                            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">
                                Instagram
                            </a>
                            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">
                                Twitter
                            </a>
                            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">
                                YouTube
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Content - Circular Image Container */}
                    <div className="relative">
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Background Circles */}
                            <div className="absolute inset-0 bg-gray-200 rounded-full opacity-50"></div>
                            <div className="absolute top-4 left-4 right-4 bottom-4 bg-gray-300 rounded-full opacity-30"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative bg-white rounded-full p-8 shadow-2xl">
                                <div className="aspect-square rounded-full overflow-hidden">
                                    <img 
                                        src="https://img.freepik.com/free-photo/nurse-taking-care-elderly-patient_23-2150780370.jpg?t=st=1755725298~exp=1755728898~hmac=e5aee9201e23a12af8750c2962a49c1963e17824a79fd1016bfe425476e49a1d&w=1060" 
                                        alt="Professional woman with tablet" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}