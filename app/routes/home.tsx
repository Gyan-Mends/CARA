import { Facebook, Instagram, Twitter, Youtube, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home(){
    return(
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="container mx-auto px-6 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-heading lg:text-6xl font-bold text-gray-900 leading-tight">
                                Care for Those Who Care.<br />
                                <span className="text-teal-500">Dignity for All.</span>
                            </h1>
                            <div className="w-12 h-1 bg-teal-500"></div>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                CARA is a nonprofit organization providing care access for vulnerable populations through 
                                caregiver training, advocacy, and community-based support. We equip families and communities 
                                to care with dignity.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors duration-300 font-medium">
                                BECOME A CAREGIVER
                            </button>
                            <button className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium">
                                PARTNER WITH US
                            </button>
                            <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 font-medium">
                                LEARN MORE
                            </button>
                        </div>
                        
                    </div>
                    
                    {/* Right Content - Circular Image Container */}
                    <div className="relative">
                        <div className="relative w-full  mx-auto">
                            {/* Background Circles */}
                            <div className="absolute inset-0  rounded-full"></div>
                            <div className="absolute top-4 left-4 right-4 bottom-4  rounded-full "></div>
                            
                            {/* Left side oval decorative elements */}
                          
                            <div className="absolute -left-16 top-32 w-40 h-10 bg-gray-400 rounded-full opacity-30"></div>
                            <div className="absolute -left-6 top-48 w-20 h-10 bg-gray-300 rounded-full opacity-35"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative bg-gray-100 rounded-full p-8 ">
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