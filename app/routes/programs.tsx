import { Heart, Users, BookOpen, Building2, Target, Award, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Navigation from "~/components/navigation";
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg"
import { getPrograms, type ProgramDetail, programIconMap } from "~/utils/programs";

export default function Programs() {
    const programs: ProgramDetail[] = getPrograms();

    const stats = [
        { number: "25+", label: "Active Programs", icon: BookOpen },
        { number: "15+", label: "Lives Impacted", icon: Heart },
        { number: "23+", label: "Communities Served", icon: MapPin },
        { number: "15+", label: "Trained Caregivers", icon: Users }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            {/* Page Header */}
            <section className="py-12 mt-20 relative bg-gray-900 border-b border-gray-200 overflow-hidden h-[70vh] -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={care} 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/75 to-[#00A5B8]/85"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
                            Our <span className="text-[#FCB339]">Programs</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                            Discover our comprehensive programs designed to build sustainable systems of care across African communities through training, education, and empowerment.
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                    <stat.icon className="w-6 h-6 text-[#FCB339] flex-shrink-0" />
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">{stat.number}</div>
                                        <div className="text-sm text-white/80">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Transforming Communities Through Action
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Each of our programs is designed to create lasting impact by building local capacity, empowering community members, and establishing sustainable systems of care.
                        </p>
                    </div>

                    <div className="space-y-40">
                        {programs.map((program, index) => (
                            <div key={program.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                {/* Program Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                        <img 
                                            src={program.image} 
                                            alt={program.title}
                                            className="w-full h-[65vh] object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <div className="flex items-center justify-center w-12 h-12 bg-[#00A5B8] text-white rounded-full">
                                                {(() => {
                                                    const Icon = programIconMap[program.iconKey];
                                                    return <Icon className="w-6 h-6" />;
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Impact Badge */}
                                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#00A5B8] mb-1">{program.impact.number}</div>
                                            <div className="text-xs text-gray-600 max-w-24">{program.impact.description}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Program Content */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                                            {program.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                            {program.description}
                                        </p>
                                    </div>

                                    {/* Program Details */}
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-[#00A5B8]" />
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{program.duration}</div>
                                                <div className="text-xs text-gray-500">Duration</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-[#00A5B8]" />
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{program.participants}</div>
                                                <div className="text-xs text-gray-500">Participants</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-[#00A5B8]" />
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{program.locations}</div>
                                                <div className="text-xs text-gray-500">Locations</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Program Features */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Program Features</h4>
                                        <ul className="space-y-2 mb-6">
                                            {program.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {/* Learn More Button */}
                                        <Link 
                                            to={`/programs/${program.slug}`}
                                            className="inline-flex items-center gap-2 bg-[#00A5B8] text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors duration-300 font-medium"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          

            {/* Get Involved Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                            Join Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Be part of building sustainable systems of care across Africa. Whether through volunteering, partnerships, or support, your involvement makes a difference.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00A5B8] text-white rounded-full mb-6">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Become a Giver</h3>
                                <p className="text-gray-600 mb-6">Join our community of passionate individuals making a difference in African communities.</p>
                                <a href="/become-a-giver" className="inline-block bg-[#00A5B8] text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors font-medium">
                                    Get Started
                                </a>
                            </div>
                            
                            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FCB339] text-white rounded-full mb-6">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Partner with Us</h3>
                                <p className="text-gray-600 mb-6">Collaborate with us to amplify your organization's impact across Africa.</p>
                                <a href="/partner-with-us" className="inline-block bg-[#FCB339] text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-colors font-medium">
                                    Learn More
                                </a>
                            </div>
                            
                            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Our Work</h3>
                                <p className="text-gray-600 mb-6">Your financial support helps us expand our programs and reach more communities.</p>
                                <a href="/support-us" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium">
                                    Donate Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}