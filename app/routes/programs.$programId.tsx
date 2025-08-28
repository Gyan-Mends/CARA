import { json, type LoaderFunctionArgs, type MetaFunction } from "react-router";
import { useLoaderData, useParams, Link } from "react-router";
import { Heart, Users, BookOpen, Building2, Target, Award, CheckCircle, Clock, MapPin, ArrowLeft, Calendar, User, Globe } from "lucide-react";
import Navigation from "~/components/navigation";
import hero from "~/components/african-mother-little-girl-medium-shot_23-2148960557.jpg";
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg";
import caregiverTraining from "~/components/images/african-woman-teaching-kids-class_23-2148892556.jpg";
import businessPartnership from "~/components/business-partners-closing-contract_74855-1152.jpg";
import womenEmpowerment from "~/components/black-businesswoman-shaking-hands-with-male-partner_74855-1085.jpg";
import gg from "~/components/images/gg.png";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
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

export async function loader({ params }: LoaderFunctionArgs) {
    const programId = params.programId;

    const programs = [
        {
            id: "1",
            slug: "caregiver-training",
            title: "Caregiver Training Program",
            description: "Comprehensive training for community caregivers focusing on essential care skills, emotional support, and community health practices.",
            longDescription: "Our Caregiver Training Program is designed to equip community members with the essential skills needed to provide dignified, effective care to vulnerable populations. Through hands-on training, theoretical education, and ongoing mentorship, we build a network of skilled caregivers who serve as the backbone of community health systems.",
            icon: Heart,
            image: caregiverTraining,
            heroImage: care,
            duration: "3 months",
            participants: "500+ caregivers trained",
            locations: "15 communities across Africa",
            startDate: "Rolling admissions",
            cost: "Free for participants",
            objectives: [
                "Build essential caregiving skills in community members",
                "Establish sustainable support networks for vulnerable populations",
                "Improve health outcomes through trained caregiver interventions",
                "Create pathways for economic empowerment through caregiving roles"
            ],
            curriculum: [
                {
                    module: "Foundations of Care",
                    topics: ["Understanding vulnerability and dignity", "Basic health and safety", "Communication skills", "Cultural sensitivity"]
                },
                {
                    module: "Practical Care Skills", 
                    topics: ["Personal care assistance", "Medication management", "Mobility support", "Emergency response"]
                },
                {
                    module: "Mental Health Support",
                    topics: ["Recognizing mental health needs", "Providing emotional support", "Crisis intervention", "Self-care for caregivers"]
                },
                {
                    module: "Community Health",
                    topics: ["Health promotion", "Disease prevention", "Resource navigation", "Advocacy and rights"]
                }
            ],
            features: [
                "Hands-on training with experienced instructors",
                "Mental health support techniques",
                "Community health education",
                "Certification upon completion",
                "Ongoing mentorship program",
                "Job placement assistance",
                "Peer support networks",
                "Continuing education opportunities"
            ],
            impact: {
                number: "2,500+",
                description: "families supported through trained caregivers",
                stories: [
                    "Mary, a program graduate, now supports 15 elderly community members and has trained 3 additional caregivers.",
                    "The program has reduced hospital readmissions by 30% in participating communities.",
                    "95% of program graduates report increased confidence in providing care."
                ]
            },
            requirements: [
                "Must be 18 years or older",
                "Basic literacy skills",
                "Commitment to complete full program",
                "Willingness to serve community for minimum 6 months post-training"
            ],
            nextSteps: [
                "Application and interview process",
                "Background check and references",
                "Orientation and program kickoff",
                "Ongoing assessment and certification"
            ]
        },
        {
            id: "2", 
            slug: "community-health-education",
            title: "Community Health Education",
            description: "Educational initiatives focused on preventive healthcare, nutrition, and wellness practices for sustainable community health.",
            longDescription: "Our Community Health Education program empowers entire communities with knowledge and resources to maintain optimal health and well-being. Through workshops, peer education, and community-led initiatives, we build health literacy and promote preventive care practices that reduce disease burden and improve quality of life.",
            icon: Users,
            image: care,
            heroImage: caregiverTraining,
            duration: "Ongoing",
            participants: "1,000+ individuals reached monthly",
            locations: "20 communities across Africa",
            startDate: "Year-round programming",
            cost: "Free community workshops",
            objectives: [
                "Increase health literacy across all age groups",
                "Promote preventive healthcare practices",
                "Reduce preventable diseases and health complications",
                "Build community capacity for health promotion"
            ],
            curriculum: [
                {
                    module: "Preventive Healthcare",
                    topics: ["Vaccination importance", "Regular health screenings", "Early disease detection", "Health risk assessment"]
                },
                {
                    module: "Nutrition and Wellness",
                    topics: ["Balanced diet planning", "Food safety", "Child nutrition", "Managing malnutrition"]
                },
                {
                    module: "Maternal and Child Health",
                    topics: ["Prenatal care", "Safe delivery practices", "Newborn care", "Child development"]
                },
                {
                    module: "Disease Prevention",
                    topics: ["Hygiene practices", "Water sanitation", "Infectious disease prevention", "Chronic disease management"]
                }
            ],
            features: [
                "Interactive community workshops",
                "Peer educator training",
                "Health screening programs", 
                "Educational material distribution",
                "Mobile health clinics",
                "Community health fairs",
                "Digital health resources",
                "Follow-up support programs"
            ],
            impact: {
                number: "85%",
                description: "improvement in community health knowledge",
                stories: [
                    "Vaccination rates increased by 60% in participating communities.",
                    "Malnutrition cases decreased by 40% among children under 5.",
                    "Community members now lead their own health education sessions."
                ]
            },
            requirements: [
                "Open to all community members",
                "No educational prerequisites",
                "Regular workshop attendance encouraged",
                "Commitment to sharing knowledge with others"
            ],
            nextSteps: [
                "Register for upcoming workshops",
                "Join community health committees",
                "Become a peer educator",
                "Access ongoing health resources"
            ]
        },
        {
            id: "3",
            slug: "youth-leadership",
            title: "Youth Leadership Development", 
            description: "Empowering young people to become leaders in their communities through leadership training, mentorship, and project implementation.",
            longDescription: "Our Youth Leadership Development program recognizes young people as catalysts for positive change in their communities. Through comprehensive leadership training, mentorship, and hands-on project experience, we develop the next generation of community leaders who are equipped to address local challenges and drive sustainable development.",
            icon: Target,
            image: hero,
            heroImage: gg,
            duration: "6 months intensive + ongoing support",
            participants: "200+ youth leaders developed",
            locations: "10 communities across Africa", 
            startDate: "Quarterly cohorts",
            cost: "Free with scholarship opportunities",
            objectives: [
                "Develop leadership skills in young people aged 16-25",
                "Create sustainable youth-led community projects",
                "Build networks of peer support and collaboration",
                "Prepare youth for future leadership roles"
            ],
            curriculum: [
                {
                    module: "Leadership Fundamentals",
                    topics: ["Leadership styles and principles", "Self-awareness and emotional intelligence", "Communication and public speaking", "Team building and collaboration"]
                },
                {
                    module: "Project Management",
                    topics: ["Project planning and design", "Resource mobilization", "Implementation strategies", "Monitoring and evaluation"]
                },
                {
                    module: "Community Engagement",
                    topics: ["Community needs assessment", "Stakeholder engagement", "Advocacy and campaigning", "Cultural sensitivity and inclusion"]
                },
                {
                    module: "Social Innovation",
                    topics: ["Problem identification and analysis", "Creative solution development", "Social entrepreneurship", "Scaling impact"]
                }
            ],
            features: [
                "Intensive leadership workshops",
                "One-on-one mentorship matching",
                "Hands-on project implementation",
                "Networking and peer support",
                "Scholarship and funding opportunities",
                "Alumni network access",
                "Continuing education pathways",
                "Leadership conferences and events"
            ],
            impact: {
                number: "150+",
                description: "community projects led by youth participants",
                stories: [
                    "Youth participants have started 50+ small businesses in their communities.",
                    "Program alumni now serve on local government committees and NGO boards.",
                    "Youth-led projects have reached over 5,000 community members."
                ]
            },
            requirements: [
                "Ages 16-25 years",
                "Demonstrated community engagement",
                "Basic educational background",
                "Commitment to full program participation"
            ],
            nextSteps: [
                "Complete online application",
                "Participate in selection interviews",
                "Join orientation program",
                "Begin mentorship matching"
            ]
        },
        {
            id: "4",
            slug: "women-empowerment",
            title: "Women Empowerment Initiative",
            description: "Supporting women through skills training, economic opportunities, and advocacy for gender equality in care and community development.",
            longDescription: "Our Women Empowerment Initiative addresses the unique challenges faced by women in accessing economic opportunities and leadership roles. Through skills training, microfinance support, and advocacy programs, we work to break down barriers and create pathways for women to achieve economic independence and take on leadership roles in their communities.",
            icon: Award,
            image: womenEmpowerment,
            heroImage: businessPartnership,
            duration: "12 months with ongoing support",
            participants: "300+ women empowered annually",
            locations: "12 communities across Africa",
            startDate: "Monthly intake",
            cost: "Free with microfinance options",
            objectives: [
                "Provide women with marketable skills and training",
                "Support women in starting income-generating activities",
                "Advocate for women's rights and gender equality", 
                "Build women's leadership capacity in communities"
            ],
            curriculum: [
                {
                    module: "Skills Development",
                    topics: ["Vocational training options", "Business skills", "Financial literacy", "Digital literacy"]
                },
                {
                    module: "Entrepreneurship",
                    topics: ["Business plan development", "Market analysis", "Product development", "Customer service"]
                },
                {
                    module: "Financial Management",
                    topics: ["Personal finance management", "Savings and investment", "Microfinance options", "Credit management"]
                },
                {
                    module: "Leadership and Advocacy",
                    topics: ["Women's rights and law", "Leadership development", "Public speaking", "Community organizing"]
                }
            ],
            features: [
                "Vocational skills training",
                "Business development support", 
                "Microfinance and loans",
                "Peer support networks",
                "Leadership development workshops",
                "Legal rights education",
                "Childcare support during training",
                "Market linkage assistance"
            ],
            impact: {
                number: "70%",
                description: "of participants started income-generating activities",
                stories: [
                    "Sarah increased her family income by 300% through her tailoring business.",
                    "Women participants now hold 40% of community leadership positions.",
                    "Average participant income increased from $50 to $150 per month."
                ]
            },
            requirements: [
                "Women aged 18 and above",
                "Basic literacy skills preferred",
                "Commitment to program completion",
                "Willingness to support other women"
            ],
            nextSteps: [
                "Attend information sessions",
                "Complete skills assessment",
                "Join training cohorts",
                "Access ongoing business support"
            ]
        }
    ];

    // Find program by ID or slug
    const program = programs.find(p => p.id === programId || p.slug === programId);

    if (!program) {
        throw new Response("Program Not Found", { status: 404 });
    }

    // Get related programs (other programs)
    const relatedPrograms = programs.filter(p => p.id !== program.id).slice(0, 2);

    return json({ program, relatedPrograms });
}

export default function ProgramDetail() {
    const { program, relatedPrograms } = useLoaderData<typeof loader>();
    const Icon = program.icon;

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
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPrograms.map((relatedProgram) => {
                                const RelatedIcon = relatedProgram.icon;
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