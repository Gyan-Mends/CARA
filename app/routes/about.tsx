import { Star, Settings, Heart, Users, MapPin, Target, Shield, Lightbulb, HandHeart, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg";
import Navigation from "~/components/navigation";

export default function About() {
    const coreValues = [
        { value: "Empowerment", description: "Building local capacity", icon: Users },
        { value: "Dignity", description: "Respectful care for all", icon: Heart },
        { value: "Community", description: "Strengthening networks", icon: MapPin },
        { value: "Impact", description: "Sustainable solutions", icon: Target }
    ];

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <section className="py-12 lg:mt-20 mt-6 relative bg-gray-900 border-b border-gray-200 overflow-hidden lg:h-[70vh] -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={care}
                        alt="Care professional with senior patient"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/75 to-[#00A5B8]/85"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
                            About <span className="text-[#FCB339]">CARA</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                            Advancing care access and community health across Africa by equipping caregivers, supporting families, and strengthening local systems of care.
                        </p>

                       
                    </div>
                </div>
            </section>

            

            {/* About Content Section */}
            <section id="about-content" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Right Content - Image with Feature Cards */}
                        <div className="relative">
                            {/* Background Image */}
                            <div className="relative lg:h-full md:h-full h-[60vh] bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg overflow-hidden">
                                <img
                                    src={care}
                                    alt="Care professional with senior patient"
                                    className="w-full h-[75vh] object-cover opacity-90"
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
                                                We believe that health begins at home, and that every community can be trained, equipped, and supported to provide good care. As a nonprofit organization dedicated to community health and innovation in care, we work at the intersection of health, social protection, education, and inclusion.
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
                                                We define community health as the capacity of a local population to care for its vulnerable members, especially mothers, children, the elderly, and persons with special needs, through everyday, dignified, non-clinical support.
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
                                    CARA, Care Access for Resilient Africa, is a nonprofit organization advancing care access and community health. We equip caregivers, support families, and strengthen local systems of care.
                                    We serve vulnerable populations, especially postpartum mothers, children with special needs, and the elderly, by training caregivers and building inclusive support systems in homes, schools, and communities.
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
                                            Bridging the gap between vulnerable households and formal health, education, and social services through outreach, referral, and system linkages.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#FCB339] hidden md:block"></div>

                            {/* Vision - Left Side */}
                            <div className="relative mb-16 md:mb-32">
                                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                                    <div className=" md:pr-12">
                                        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center gap-3 mb-4 ">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#FCB339] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Target className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Vision</h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                Africa's leading catalyst in strengthening the care economy through innovation, inclusion, and resilience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FCB339] rounded-full border-4 border-white shadow-lg"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Mission - Right Side */}
                            <div className="relative">
                                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                                    <div className="hidden md:block">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FCB339] rounded-full border-4 border-white shadow-lg"></div>
                                    </div>
                                    <div className="md:col-start-2 md:pl-12">
                                        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#00A5B8] to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Heart className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Mission</h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                To strengthen Africa's care economy through innovation that empowers caregivers, supports families, and bridges communities with health, education, and social systems, making care visible, connected, and inclusive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">Our Objectives</h2>
                            <div className="w-24 h-1 bg-[#FCB339] mx-auto mb-8"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Strategic goals driving our mission to strengthen Africa's care economy
                            </p>
                        </div>

                        {/* Objectives Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
                            {/* Objective 1 */}
                            <div className="relative">
                                <div className="absolute -top-8 -left-4 text-[140px] font-bold text-gray-100 leading-none select-none">
                                    01
                                </div>
                                <div className="relative pt-16">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-5">
                                        Caregiver Training
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        To provide caregiver training for youth, women, and communities.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 2 */}
                            <div className="relative">
                                <div className="absolute -top-8 -left-4 text-[140px] font-bold text-gray-100 leading-none select-none">
                                    02
                                </div>
                                <div className="relative pt-16">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-5">
                                        Mothers First Programme
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        To implement the Mothers First postpartum care programme.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 3 */}
                            <div className="relative">
                                <div className="absolute -top-8 -left-4 text-[140px] font-bold text-gray-100 leading-none select-none">
                                    03
                                </div>
                                <div className="relative pt-16">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-5">
                                        Inclusive Care
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        To promote inclusive care for children and persons with special needs.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 4 */}
                            <div className="relative">
                                <div className="absolute -top-8 -left-4 text-[140px] font-bold text-gray-100 leading-none select-none">
                                    04
                                </div>
                                <div className="relative pt-16">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-5">
                                        CareBridge Platform
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        To operate CareBridge as a linkage platform for vulnerable households.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 5 */}
                            <div className="relative">
                                <div className="absolute -top-8 -left-4 text-[140px] font-bold text-gray-100 leading-none select-none">
                                    05
                                </div>
                                <div className="relative pt-16">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-5">
                                        Policy Advocacy
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        To advocate for care economy policies and social protection systems.
                                    </p>
                                </div>
                            </div>

                            {/* Objective 6 */}
                            <div className="relative">
                                <div className="absolute -top-8 -left-4 text-[140px] font-bold text-gray-100 leading-none select-none">
                                    06
                                </div>
                                <div className="relative pt-16">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-5">
                                        Research & Partnerships
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        To engage in research, capacity building, and partnerships to advance community health and inclusion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">Our Core Values</h2>
                            <div className="w-24 h-1 bg-[#FCB339] mx-auto mb-8"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                In pursuit of its mission, CARA shall be guided by the following values
                            </p>
                        </div>

                        {/* Circular Values Layout */}
                        <div className="relative min-h-[900px] lg:min-h-[800px] flex items-center justify-center">
                            {/* Center Circle - CARA Logo/Text */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#FCB339] to-[#00A5B8] rounded-full flex items-center justify-center shadow-2xl">
                                    <span className="text-3xl lg:text-4xl font-bold text-white">CARA</span>
                                </div>
                            </div>

                            {/* Dignity - Top */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center group">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FCB339]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#FCB339] to-orange-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Dignity</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Respecting the worth of every person in care</p>
                                <ArrowRight className="w-6 h-6 text-[#FCB339] mx-auto mt-4 rotate-90" />
                            </div>

                            {/* Inclusion - Top Right */}
                            <div className="absolute top-[10%] right-[5%] lg:right-[12%] text-center group">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00A5B8]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#00A5B8] to-teal-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Inclusion</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Ensuring no one is left behind</p>
                                <ArrowRight className="w-6 h-6 text-[#00A5B8] mx-auto mt-4 rotate-[135deg]" />
                            </div>

                            {/* Empowerment - Right */}
                            <div className="absolute top-1/2 right-0 lg:right-[5%] transform -translate-y-1/2 text-center group">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FCB339]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#FCB339] to-orange-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <HandHeart className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Empowerment</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Equipping communities to thrive</p>
                                <ArrowRight className="w-6 h-6 text-[#FCB339] mx-auto mt-4 rotate-[135deg]" />
                            </div>

                            {/* Collaboration - Bottom Right */}
                            <div className="absolute bottom-[15%] right-[8%] lg:right-[15%] text-center group">
                                <ArrowRight className="w-6 h-6 text-[#00A5B8] mx-auto mb-4 rotate-[135deg]" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00A5B8]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#00A5B8] to-teal-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <UserCheck className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Collaboration</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Building partnerships across sectors</p>
                            </div>

                            {/* Innovation - Bottom */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center group">
                                <ArrowRight className="w-6 h-6 text-[#FCB339] mx-auto mb-4 rotate-90" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FCB339]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#FCB339] to-orange-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Lightbulb className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Innovation</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Designing creative solutions</p>
                            </div>

                            {/* Accountability - Bottom Left */}
                            <div className="absolute bottom-[15%] left-[8%] lg:left-[15%] text-center group">
                                <ArrowRight className="w-6 h-6 text-[#00A5B8] mx-auto mb-4 rotate-45" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00A5B8]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#00A5B8] to-teal-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Accountability</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Upholding transparency and integrity</p>
                            </div>

                            {/* Resilience - Left */}
                            <div className="absolute top-1/2 left-0 lg:left-[5%] transform -translate-y-1/2 text-center group">
                                <ArrowRight className="w-6 h-6 text-[#FCB339] mx-auto mb-4 rotate-45" />
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FCB339]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#FCB339] to-orange-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold font-heading text-gray-900 mb-2">Resilience</h3>
                                <p className="text-sm text-gray-600 max-w-[180px]">Strengthening communities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}