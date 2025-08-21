import { Facebook, Instagram, Twitter, Youtube, ChevronLeft, ChevronRight, Star, Settings } from "lucide-react";

export default function Home(){
    return(
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section id="hero" className="container mx-auto px-6 pb-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-heading lg:text-6xl font-bold text-gray-900 leading-tight">
                                Care for Those Who Care.<br />
                                <span className="text-[#00A5B8]">Dignity for All.</span>
                            </h1>
                            <div className="w-12 h-1 bg-[#00A5B8]"></div>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                CARA is a nonprofit organization providing care access for vulnerable populations through 
                                caregiver training, advocacy, and community-based support. We equip families and communities 
                                to care with dignity.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#00A5B8] text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors duration-300 font-medium">
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

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         {/* Right Content - Image with Feature Cards */}
                         <div className="relative">
                            {/* Background Image */}
                            <div className="relative lg:h-full md:h-full h-[60vh] bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg overflow-hidden">
                                <img 
                                    src="https://img.freepik.com/free-photo/businesswoman-using-tablet-analysis_1150-18909.jpg" 
                                    alt="Professional woman working" 
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-cyan-600/30"></div>
                            </div>
                            
                            {/* Floating Feature Cards */}
                            <div className="absolute -left-8 top-8 w-80 space-y-4">
                                {/* Feature Card 1 */}
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <Star className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                <span className="border-b-2 border-teal-400 pb-1">Our Belief</span>
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                We believe health begins at home, and that every community can be trained, equipped, and supported to care well. We operate at the crossroads of health, social protection, education, and inclusion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Feature Card 2 */}
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <Settings className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                <span className="border-b-2 border-teal-400 pb-1">Community Health</span>
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                We define community health as the capacity of a local population to care for its vulnerable members, especially mothers, children, the elderly, and persons with special needs. through everyday, dignified, non-clinical support. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Content */}
                        <div className="space-y-8 mt-20 lg:mt-0">
                            <div className="space-y-6">
                                
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight">
                                    Who We Are
                                </h2>
                                <div className="w-12 h-1 bg-gray-300"></div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    CARA (Care Access for Resilient Africa) is a nonprofit advancing care access and community health by equipping caregivers, supporting families, and strengthening local systems of support. We support vulnerable populations, especially postpartum mothers, children with special needs, and the elderly, by training caregivers and creating inclusive support systems in schools, homes, and communities.
                                </p>
                                <div className="text-gray-600 leading-relaxed">
                                    <p className="font-semibold mb-3">We provide community health by:</p>
                                    <ul className="space-y-2 pl-6">
                                        <li className="flex items-start">
                                            <span className="text-teal-500 mr-3 mt-1">•</span>
                                            Empowering local people, including family members, teachers, and volunteers, with practical caregiving knowledge and skills.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-teal-500 mr-3 mt-1">•</span>
                                            Strengthening informal care systems by training, supporting, and connecting caregivers who already provide essential support within homes and communities.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-teal-500 mr-3 mt-1">•</span>
                                            Bridging the gap between vulnerable households and formal health and social services through outreach, referral, and system linkages.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                       
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight mb-4">
                            What We Do
                        </h2>
                        <div className="w-12 h-1 bg-gray-300 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Service Card 1 */}
                        <div className="relative p-8 bg-gray-50 rounded-lg overflow-hidden group hover:bg-gray-100 transition-colors duration-300">
                            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-200 opacity-50 select-none">
                                01
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Caregiver Training
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Training for family caregivers, school aides, and volunteers with special focus on newborn care, special needs inclusion, and elder support.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="relative p-8 bg-gray-50 rounded-lg overflow-hidden group hover:bg-gray-100 transition-colors duration-300">
                            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-200 opacity-50 select-none">
                                02
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Community-Based Support
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Programs like CareReach for postpartum follow-up, home visits, and care access mapping to strengthen community health networks.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="relative p-8 bg-gray-50 rounded-lg overflow-hidden group hover:bg-gray-100 transition-colors duration-300">
                            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-200 opacity-50 select-none">
                                03
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Inclusive Education Support
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Partnering with schools to create inclusive units and train inclusive care aides to support children with diverse needs.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 4 */}
                        <div className="relative p-8 bg-gray-50 rounded-lg overflow-hidden group hover:bg-gray-100 transition-colors duration-300">
                            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-200 opacity-50 select-none">
                                04
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Advocacy and Awareness
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Campaigns that promote dignity, disability inclusion, and community health as a right for all vulnerable populations.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Get Involved Section */}
            <section id="get-involved" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight mb-4">
                            Get Involved
                        </h2>
                        <div className="w-12 h-1 bg-[#00A5B8] mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join us to build systems of care that leave no one behind.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Content - Ways to Engage */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ways to Engage:</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#00A5B8] rounded-full flex items-center justify-center mt-1">
                                            <span className="text-white text-sm font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Volunteer as a caregiver or community trainer</h4>
                                            <p className="text-gray-600">Share your skills and make a direct impact in your community by training others in essential caregiving practices.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#00A5B8] rounded-full flex items-center justify-center mt-1">
                                            <span className="text-white text-sm font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Sponsor caregiver training in underserved communities</h4>
                                            <p className="text-gray-600">Support our mission by funding training programs that reach the most vulnerable populations.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#00A5B8] rounded-full flex items-center justify-center mt-1">
                                            <span className="text-white text-sm font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Collaborate with us as a school, clinic, or district partner</h4>
                                            <p className="text-gray-600">Partner with CARA to implement inclusive care programs and strengthen your community's support systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
                            
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                                        placeholder="Tell us how you'd like to get involved..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#00A5B8] text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 font-medium"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}