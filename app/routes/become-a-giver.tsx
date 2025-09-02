import { Heart, Users, BookOpen, Building2, Gift, Target, Globe, Handshake, Loader2 } from "lucide-react";
import caraLogo from "~/components/images/Cara logo-01.png"
import afr from "~/components/images/wmremove-transformed (1).jpeg"
import gg from "~/components/images/wmremove-transformed.jpeg"
import { useState, useEffect } from "react";
import Navigation from "~/components/navigation";
import { useSearchParams, useActionData, useNavigation } from "react-router";
import { type ActionFunctionArgs, redirect } from "react-router";
import { sendGiverApplicationEmail, type GiverFormData } from "~/utils/email.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  const interests = formData.getAll("interests") as string[];
  
  const giverData: GiverFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string || undefined,
    giverType: formData.get("giverType") as string,
    interests: interests,
    message: formData.get("message") as string || undefined,
  };

  // Basic validation
  if (!giverData.firstName || !giverData.lastName || !giverData.email || !giverData.giverType) {
    return {
      error: "All required fields must be filled",
      success: false,
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(giverData.email)) {
    return {
      error: "Please enter a valid email address",
      success: false,
    };
  }

  try {
    const result = await sendGiverApplicationEmail(giverData);
    
    if (result.success) {
      return redirect("/become-a-giver?success=true");
    } else {
      return {
        error: result.error || "Failed to send application. Please try again.",
        success: false,
      };
    }
  } catch (error) {
    console.error("Giver application error:", error);
    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}

export default function BecomeAGiver() {
    const [searchParams] = useSearchParams();
    const actionData = useActionData();
    const navigation = useNavigation();
    const success = searchParams.get("success");
    const showSuccessMessage = success === "true";
    const [isLocalSubmitting, setIsLocalSubmitting] = useState(false);
    
    const isSubmitting = navigation.state === "submitting" || isLocalSubmitting;
    
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
            
            {/* Page Header */}
            <section className="py-12 mt-20 relative bg-gray-900 border-b border-gray-200 overflow-hidden h-[70vh] -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={afr} 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/75 to-[#00A5B8]/85"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                            Become a Care <span className="text-yellow-300">Giver</span>
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed mb-8">
                            Join our community of passionate individuals dedicated to building sustainable systems of care across Africa.
                        </p>
                        
                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                                <span className="text-sm font-medium text-white">Impact Updates</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Target className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                                <span className="text-sm font-medium text-white">Community Connection</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Globe className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                                <span className="text-sm font-medium text-white">Global Network</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Handshake className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                                <span className="text-sm font-medium text-white">Volunteer Opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-full w-full">
                        <div className="grid lg:grid-cols-2 min-h-[600px]">
                            {/* Left Side - Content */}
                            <div className="p-8 flex gap-10 flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="flex flex-col items-center gap-4 mb-6">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-heading font-bold text-gray-900">
                                                Join Our Community
                                            </h2>
                                            <p className="text-sm text-gray-500">Make a lasting impact on communities across Africa</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Heart className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Individual Giving</h3>
                                                <p className="text-gray-600 text-sm">Personal contributions that create meaningful change in communities.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Users className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Volunteer Network</h3>
                                                <p className="text-gray-600 text-sm">Connect with like-minded individuals working towards common goals.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <BookOpen className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Skill Sharing</h3>
                                                <p className="text-gray-600 text-sm">Share your expertise to build capacity in local communities.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Building2 className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Sustainable Systems</h3>
                                                <p className="text-gray-600 text-sm">Help build long-term solutions that communities can maintain independently.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#00A5B8]/10 p-4 rounded-lg border border-[#00A5B8]/20">
                                        <p className="text-sm text-gray-700 italic">
                                            "Every giver becomes part of a larger story of transformation and hope across Africa."
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">- CARA  Team</p>
                                    </div>
                                </div>

                                <img
                                    src={gg}
                                    alt="Community impact"
                                    className="w-auto rounded-2xl"
                                />
                            </div>

                            {/* Right Side - Application Form */}
                            <div className="p-8">
                                {showSuccessMessage && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800 font-medium">Thank you for your application! We'll get back to you soon.</p>
                                    </div>
                                )}

                                {actionData?.error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-800 font-medium">{actionData.error}</p>
                                    </div>
                                )}

                                <form method="post" onSubmit={handleFormSubmit} className="space-y-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                                            Giver Application
                                        </h3>
                                        <p className="text-sm text-gray-600">Tell us about yourself and your interests</p>
                                    </div>

                                    {/* Name Fields */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Enter First Name"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Enter Last Name"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email and Phone */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter Phone Number"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Type of Giver */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-4">Type of Giver *</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="giverType" value="individual" className="mr-3" />
                                                <span className="text-sm text-gray-700">Individual Giver</span>
                                            </label>
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="giverType" value="volunteer" className="mr-3" />
                                                <span className="text-sm text-gray-700">Volunteer</span>
                                            </label>
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="giverType" value="advocate" className="mr-3" />
                                                <span className="text-sm text-gray-700">Advocate</span>
                                            </label>
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="giverType" value="skill-sharer" className="mr-3" />
                                                <span className="text-sm text-gray-700">Skill Sharer</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Areas of Interest */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-4">Areas of Interest</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Community based Healthcare', 'Special Education', 'Community Development', 'Women Empowerment', 'Youth Empowerment', 'Advocacy'].map(interest => (
                                                <label key={interest} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                    <input 
                                                        type="checkbox" 
                                                        name="interests"
                                                        value={interest}
                                                        className="mr-2" 
                                                    />
                                                    <span className="text-xs text-gray-700">{interest}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Tell us about yourself</label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            placeholder="Share your motivation, skills, or how you'd like to contribute..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors resize-vertical"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#00A5B8] text-white py-4 px-6 rounded-lg hover:bg-teal-600 disabled:bg-teal-400 disabled:cursor-not-allowed transition-colors duration-300 font-medium flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                        {isSubmitting ? "Submitting..." : "Submit Application"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}