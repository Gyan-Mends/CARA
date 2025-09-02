import { type LoaderFunctionArgs, type MetaFunction, type ActionFunctionArgs, redirect } from "react-router";
import { useLoaderData, useSearchParams, useActionData, useNavigation, Link } from "react-router";
import { Heart, Users, Target, Award, CheckCircle, Clock, MapPin, ArrowLeft, User, Mail, Phone, Loader2, FileText, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import Navigation from "~/components/navigation";
import { type ProgramDetail, getProgramByIdOrSlug, programIconMap } from "~/utils/programs";
import { sendProgramApplicationEmail, type ProgramApplicationFormData } from "~/utils/email.server";

type LoaderData = { program: ProgramDetail };

export const meta: MetaFunction = (args) => {
    const data = args.data as LoaderData | undefined;
    if (!data?.program) {
        return [
            { title: "Program Not Found - CARA" },
            { name: "description", content: "The requested program could not be found." },
        ];
    }

    return [
        { title: `Apply to ${data.program.title} - CARA Programs` },
        { name: "description", content: `Apply to join our ${data.program.title} program and make a difference in communities across Africa.` },
    ];
};

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderData> {
    const programId = params.programId ?? "";
    const program = getProgramByIdOrSlug(programId);

    if (!program) {
        throw new Response("Program Not Found", { status: 404 });
    }

    return { program };
}

export async function action({ request, params }: ActionFunctionArgs) {
    const formData = await request.formData();
    const programId = params.programId ?? "";
    const program = getProgramByIdOrSlug(programId);
    
    if (!program) {
        return {
            error: "Program not found",
            success: false,
        };
    }
    
    const availability = formData.getAll("availability") as string[];
    
    const applicationData: ProgramApplicationFormData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string || undefined,
        age: formData.get("age") as string,
        location: formData.get("location") as string,
        programId: program.id,
        programTitle: program.title,
        motivationReason: formData.get("motivationReason") as string,
        relevantExperience: formData.get("relevantExperience") as string || undefined,
        expectations: formData.get("expectations") as string,
        availability: availability,
        additionalInfo: formData.get("additionalInfo") as string || undefined,
    };

    // Basic validation
    if (!applicationData.firstName || !applicationData.lastName || !applicationData.email || 
        !applicationData.age || !applicationData.location || !applicationData.motivationReason || 
        !applicationData.expectations) {
        return {
            error: "All required fields must be filled",
            success: false,
        };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
        return {
            error: "Please enter a valid email address",
            success: false,
        };
    }

    try {
        const result = await sendProgramApplicationEmail(applicationData);
        
        if (result.success) {
            return redirect(`/apply-program/${program.slug}?success=true`);
        } else {
            return {
                error: result.error || "Failed to send application. Please try again.",
                success: false,
            };
        }
    } catch (error) {
        console.error("Program application error:", error);
        return {
            error: "An unexpected error occurred. Please try again.",
            success: false,
        };
    }
}

export default function ApplyToProgram() {
    const { program } = useLoaderData() as LoaderData;
    const [searchParams] = useSearchParams();
    const actionData = useActionData();
    const navigation = useNavigation();
    const success = searchParams.get("success");
    const showSuccessMessage = success === "true";
    const [isLocalSubmitting, setIsLocalSubmitting] = useState(false);
    
    const isSubmitting = navigation.state === "submitting" || isLocalSubmitting;
    const Icon = programIconMap[program.iconKey];
    
    const handleFormSubmit = () => {
        setIsLocalSubmitting(true);
    };
    
    useEffect(() => {
        if (navigation.state === "idle") {
            setIsLocalSubmitting(false);
        }
    }, [navigation.state]);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            {/* Back Navigation */}
            <div className="bg-gray-50 py-4 -mt-20 pt-24">
                <div className="container mx-auto px-6">
                    <Link 
                        to={`/programs/${program.slug}`}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00A5B8] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {program.title}
                    </Link>
                </div>
            </div>

            {/* Page Header */}
            <section className="py-12 relative bg-gray-900 border-b border-gray-200 overflow-hidden h-[60vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={program.heroImage} 
                        alt={program.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-[#00A5B8]/80"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                           
                            <div>
                                <span className="text-[#FCB339] font-medium block">Apply to Join</span>
                                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white">
                                    {program.title}
                                </h1>
                            </div>
                        </div>
                        
                        <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                            Take the next step in your journey to make a meaningful impact in communities across Africa.
                        </p>

                        {/* Program Quick Info */}
                        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Clock className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Users className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">{program.participants}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <MapPin className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">{program.locations}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Left Side - Program Info */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                                        Why Join This Program?
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {program.description}
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <h3 className="font-semibold text-gray-900 mb-4">Program Highlights</h3>
                                    <div className="space-y-3">
                                        {program.features.slice(0, 3).map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#00A5B8] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#00A5B8]/5 border border-[#00A5B8]/20 rounded-lg p-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
                                    <ul className="space-y-2">
                                        {program.requirements.slice(0, 4).map((requirement, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{requirement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                
                                    <img 
                                        src={program.image} 
                                        alt={program.title}
                                        className="w-full  object-cover rounded-lg"
                                    />
                            </div>

                            {/* Right Side - Application Form */}
                            <div className="lg:col-span-3">
                                {showSuccessMessage && (
                                    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle className="w-6 h-6 text-green-500" />
                                            <h3 className="text-green-800 font-semibold">Application Submitted!</h3>
                                        </div>
                                        <p className="text-green-700">Thank you for your application! We'll review it and get back to you within 5-7 business days.</p>
                                    </div>
                                )}

                                {actionData?.error && (
                                    <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-800 font-medium">{actionData.error}</p>
                                    </div>
                                )}

                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="bg-gradient-to-r from-[#00A5B8] to-teal-600 p-6">
                                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                                            Program Application
                                        </h3>
                                        <p className="text-white/90 text-sm">Fill out the form below to apply for this program</p>
                                    </div>

                                    <div className="p-8">
                                        <form method="post" onSubmit={handleFormSubmit} className="space-y-6">
                                            {/* Personal Information */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <User className="w-5 h-5 text-[#00A5B8]" />
                                                    Personal Information
                                                </h4>
                                                
                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="Enter your first name"
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Enter your last name"
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Enter your email address"
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            placeholder="Enter your phone number"
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                                                        <select
                                                            name="age"
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                        >
                                                            <option value="">Select your age range</option>
                                                            <option value="16-20">16-20</option>
                                                            <option value="21-25">21-25</option>
                                                            <option value="26-30">26-30</option>
                                                            <option value="31-35">31-35</option>
                                                            <option value="36-40">36-40</option>
                                                            <option value="41-50">41-50</option>
                                                            <option value="51+">51+</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                                                        <input
                                                            type="text"
                                                            name="location"
                                                            placeholder="City, Country"
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Program-specific Questions */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <FileText className="w-5 h-5 text-[#00A5B8]" />
                                                    Program Application
                                                </h4>
                                                
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Why are you interested in the {program.title} program? *
                                                        </label>
                                                        <textarea
                                                            rows={4}
                                                            name="motivationReason"
                                                            placeholder="Share your motivation and what draws you to this program..."
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors resize-vertical"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Relevant Experience (Optional)
                                                        </label>
                                                        <textarea
                                                            rows={3}
                                                            name="relevantExperience"
                                                            placeholder="Describe any relevant experience, skills, or background..."
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors resize-vertical"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            What do you hope to gain from this program? *
                                                        </label>
                                                        <textarea
                                                            rows={3}
                                                            name="expectations"
                                                            placeholder="Describe your learning goals and expected outcomes..."
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors resize-vertical"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Availability */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <Calendar className="w-5 h-5 text-[#00A5B8]" />
                                                    Availability
                                                </h4>
                                                
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                                        When are you available for program activities?
                                                    </label>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                        {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekend Mornings', 'Weekend Afternoons', 'Weekend Evenings'].map(time => (
                                                            <label key={time} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="availability"
                                                                    value={time}
                                                                    className="mr-2 text-[#00A5B8] focus:ring-[#00A5B8]" 
                                                                />
                                                                <span className="text-sm text-gray-700">{time}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Additional Information */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Additional Information (Optional)
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    name="additionalInfo"
                                                    placeholder="Is there anything else you'd like us to know about you or your application?"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors resize-vertical"
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-[#00A5B8] text-white py-4 px-6 rounded-lg hover:bg-teal-600 disabled:bg-teal-400 disabled:cursor-not-allowed transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
                                                >
                                                    {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                                                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}