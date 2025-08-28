import { type LoaderFunctionArgs, type MetaFunction } from "react-router";
import { useLoaderData, Link } from "react-router";
import { Heart, Users, BookOpen, Building2, Target, Award, CheckCircle, Clock, MapPin, ArrowLeft, Calendar, User, Globe } from "lucide-react";
import Navigation from "~/components/navigation";
import { type ProgramDetail, getPrograms, getProgramByIdOrSlug, programIconMap } from "~/utils/programs";

type LoaderData = { program: ProgramDetail; relatedPrograms: ProgramDetail[] };

export const meta: MetaFunction = (args) => {
    const data = args.data as LoaderData | undefined;
    if (!data?.program) {
        return [
            { title: "Program Not Found - CARA" },
            { name: "description", content: "The requested program could not be found." },
        ];
    }

    return [
        { title: `${data.program.title} - CARA Programs` },
        { name: "description", content: data.program.description },
    ];
};

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderData> {
    const programId = params.programId ?? "";
    const program = getProgramByIdOrSlug(programId);

    if (!program) {
        throw new Response("Program Not Found", { status: 404 });
    }

    const all = getPrograms();
    const relatedPrograms = all.filter(p => p.id !== program.id).slice(0, 3);
    return { program, relatedPrograms };
}

export default function ProgramDetail() {
    const { program, relatedPrograms } = useLoaderData() as LoaderData;
    const Icon = programIconMap[program.iconKey];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            {/* Back Navigation */}
            <div className="bg-gray-50 py-4 -mt-20 pt-24">
                <div className="container mx-auto px-6">
                    <Link 
                        to="/programs" 
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00A5B8] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Programs
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={program.heroImage} 
                        alt={program.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-[#00A5B8]/80"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 py-20">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#00A5B8] text-white rounded-full">
                                <Icon className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="text-[#FCB339] font-medium">CARA Program</span>
                                <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white">
                                    {program.title}
                                </h1>
                            </div>
                        </div>
                        
                        <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                            {program.longDescription}
                        </p>

                        {/* Key Stats */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Clock className="w-6 h-6 text-[#FCB339]" />
                                <div>
                                    <div className="text-white font-semibold">{program.duration}</div>
                                    <div className="text-white/80 text-sm">Duration</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Users className="w-6 h-6 text-[#FCB339]" />
                                <div>
                                    <div className="text-white font-semibold">{program.participants}</div>
                                    <div className="text-white/80 text-sm">Participants</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <MapPin className="w-6 h-6 text-[#FCB339]" />
                                <div>
                                    <div className="text-white font-semibold">{program.locations}</div>
                                    <div className="text-white/80 text-sm">Locations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Program Overview */}
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                                    Program Overview
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    {program.description}
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Program Objectives</h3>
                                        <ul className="space-y-2">
                                            {program.objectives.map((objective, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                                        <ul className="space-y-2">
                                            {program.features.slice(0, 4).map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-[#00A5B8] mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Curriculum */}
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                                    Curriculum & Content
                                </h2>
                                <div className="space-y-6">
                                    {program.curriculum.map((module, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                                            <h3 className="font-semibold text-gray-900 mb-3">
                                                Module {index + 1}: {module.module}
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {module.topics.map((topic, topicIndex) => (
                                                    <div key={topicIndex} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-[#00A5B8] rounded-full"></div>
                                                        <span className="text-gray-600">{topic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Stories */}
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                                    Impact & Success Stories
                                </h2>
                                <div className="bg-[#00A5B8]/5 border border-[#00A5B8]/20 rounded-lg p-8 mb-6">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl font-bold text-[#00A5B8] mb-2">
                                            {program.impact.number}
                                        </div>
                                        <div className="text-gray-600">
                                            {program.impact.description}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    {program.impact.stories.map((story, index) => (
                                        <div key={index} className="border-l-4 border-[#00A5B8] pl-4">
                                            <p className="text-gray-600 italic">"{story}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-6 space-y-8">
                                {/* Program Image */}
                                <div className="overflow-hidden rounded-lg">
                                    <img 
                                        src={program.image} 
                                        alt={program.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>

                                {/* Quick Info */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-4">Program Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-[#00A5B8]" />
                                            <div>
                                                <div className="font-medium text-gray-900">Start Date</div>
                                                <div className="text-gray-600 text-sm">{program.startDate}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <User className="w-5 h-5 text-[#00A5B8]" />
                                            <div>
                                                <div className="font-medium text-gray-900">Cost</div>
                                                <div className="text-gray-600 text-sm">{program.cost}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-5 h-5 text-[#00A5B8]" />
                                            <div>
                                                <div className="font-medium text-gray-900">Locations</div>
                                                <div className="text-gray-600 text-sm">{program.locations}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Requirements */}
                                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-4">Requirements</h3>
                                    <ul className="space-y-2">
                                        {program.requirements.map((requirement, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{requirement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Apply Button */}
                                <div className="bg-[#00A5B8] text-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold mb-2">Ready to Join?</h3>
                                    <p className="text-white/90 text-sm mb-4">Take the next step in making a difference.</p>
                                    <Link 
                                        to="/become-a-giver"
                                        className="inline-block bg-white text-[#00A5B8] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Programs */}
            {relatedPrograms.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">
                            Explore Other Programs
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPrograms.map((relatedProgram) => {
                                const RelatedIcon = programIconMap[relatedProgram.iconKey];
                                return (
                                    <Link 
                                        key={relatedProgram.id}
                                        to={`/programs/${relatedProgram.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                                            <div className="relative">
                                                <img 
                                                    src={relatedProgram.image} 
                                                    alt={relatedProgram.title}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <div className="flex items-center justify-center w-10 h-10 bg-[#00A5B8] text-white rounded-full">
                                                        <RelatedIcon className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A5B8] transition-colors">
                                                    {relatedProgram.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {relatedProgram.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}