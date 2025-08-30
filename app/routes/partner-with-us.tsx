import { Building2, Users, Globe, Target, Handshake, Star, TrendingUp, Award, Loader2 } from "lucide-react";
import caraLogo from "~/components/images/Cara logo-01.png"
import afr from "~/components/black-businesswoman-shaking-hands-with-male-partner_74855-1085.jpg"
import gg from "~/components/images/gg.png"
import partner from "~/components/business-partners-closing-contract_74855-1152.jpg"
import { useState, useEffect } from "react";
import Navigation from "~/components/navigation";
import { useSearchParams, useActionData, useNavigation } from "react-router";
import { type ActionFunctionArgs, redirect } from "react-router";
import { sendPartnerApplicationEmail, type PartnerFormData } from "~/utils/email.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  const sectors = formData.getAll("sectors") as string[];
  
  const partnerData: PartnerFormData = {
    organizationName: formData.get("organizationName") as string,
    contactName: formData.get("contactName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string || undefined,
    website: formData.get("website") as string || undefined,
    organizationType: formData.get("organizationType") as string,
    partnershipType: formData.get("partnershipType") as string,
    sectors: sectors,
    description: formData.get("description") as string || undefined,
    resources: formData.get("resources") as string || undefined,
  };

  // Basic validation
  if (!partnerData.organizationName || !partnerData.contactName || !partnerData.email || !partnerData.organizationType || !partnerData.partnershipType) {
    return {
      error: "All required fields must be filled",
      success: false,
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(partnerData.email)) {
    return {
      error: "Please enter a valid email address",
      success: false,
    };
  }

  try {
    const result = await sendPartnerApplicationEmail(partnerData);
    
    if (result.success) {
      return redirect("/partner-with-us?success=true");
    } else {
      return {
        error: result.error || "Failed to send application. Please try again.",
        success: false,
      };
    }
  } catch (error) {
    console.error("Partnership application error:", error);
    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}

export default function PartnerWithUs() {
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

    const partnershipBenefits = [
        { icon: Globe, title: "Global Network", description: "Access to our international network of partners and stakeholders" },
        { icon: Target, title: "Targeted Impact", description: "Focused initiatives that create measurable change in communities" },
        { icon: TrendingUp, title: "Scalable Solutions", description: "Proven models that can be scaled across multiple regions" },
        { icon: Award, title: "Recognition", description: "Joint branding and recognition for collaborative achievements" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            {/* Page Header */}
            <section className="py-12 mt-20 relative bg-gray-900 border-b border-gray-200 overflow-hidden h-[70vh] -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0 h-[70vvh]">
                    <img 
                        src={partner} 
                        alt="Background" 
                        className="w-full h-[70vh]  object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/75 to-[#00A5B8]/85"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                            Partner <span className="text-[#FCB339]">With Us</span>
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed mb-8">
                            Join forces with CARA to create sustainable impact through strategic partnerships and collaborative initiatives.
                        </p>
                        
                        {/* Partnership Types */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Building2 className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">Corporate</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Users className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">NGO Collaborations</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Globe className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">International Orgs</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <Star className="w-5 h-5 text-[#FCB339] flex-shrink-0" />
                                <span className="text-sm font-medium text-white">Foundations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-full w-full">
                        <div className="grid lg:grid-cols-2 min-h-[600px]">
                            {/* Left Side - Content */}
                            <div className="p-8 flex gap-10 flex-col">
                                <div className="space-y-6">
                                    <div className="flex flex-col items-center gap-4 mb-6">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-heading font-bold text-gray-900">
                                                Strategic Partnerships
                                            </h2>
                                            <p className="text-sm text-gray-500">Building collaborative relationships for greater impact</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Handshake className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Mutual Collaboration</h3>
                                                <p className="text-gray-600 text-sm">Work together towards shared goals and complementary strengths.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Target className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Focused Impact</h3>
                                                <p className="text-gray-600 text-sm">Leverage combined resources for maximum community benefit.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Globe className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Global Reach</h3>
                                                <p className="text-gray-600 text-sm">Expand your organization's reach across Africa and beyond.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <TrendingUp className="w-6 h-6 text-[#00A5B8] mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Sustainable Growth</h3>
                                                <p className="text-gray-600 text-sm">Build long-term partnerships that evolve and grow over time.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#00A5B8]/10 p-4 rounded-lg border border-[#00A5B8]/20">
                                        <p className="text-sm text-gray-700 italic">
                                            "Together, we can achieve more than any organization could accomplish alone."
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">- CARA Partnership Team</p>
                                    </div>
                                </div>

                                <img
                                    src={afr}
                                    alt="Partnership impact"
                                    className="w-auto lg:h-[80vh] rounded-2xl"
                                />
                            </div>

                            {/* Right Side - Partnership Form */}
                            <div className="p-8">
                                {showSuccessMessage && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800 font-medium">Thank you for your partnership application! We'll get back to you soon.</p>
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
                                            Partnership Application
                                        </h3>
                                        <p className="text-sm text-gray-600">Tell us about your organization and partnership interests</p>
                                    </div>

                                    {/* Organization Details */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Organization Name *</label>
                                            <input
                                                type="text"
                                                name="organizationName"
                                                placeholder="Enter Organization Name"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-gray-700 mb-2">Contact Person *</label>
                                                <input
                                                    type="text"
                                                    name="contactName"
                                                    placeholder="Enter Contact Name"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-700 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter Email Address"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-gray-700 mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Enter Phone Number"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-700 mb-2">Website</label>
                                                <input
                                                    type="url"
                                                    name="website"
                                                    placeholder="https://yourwebsite.com"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Organization Type */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-4">Organization Type *</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Non-Profit/NGO', 'Corporate', 'Foundation', 'Government', 'Academic', 'International Org'].map(type => (
                                                <label key={type} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                    <input 
                                                        type="radio" 
                                                        name="organizationType" 
                                                        value={type.toLowerCase().replace(/[^a-z]/g, '-')} 
                                                        className="mr-2" 
                                                    />
                                                    <span className="text-xs text-gray-700">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Partnership Type */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-4">Partnership Interest *</label>
                                        <div className="grid grid-cols-1 gap-2">
                                            {['Strategic Partnership', 'Project Collaboration', 'Funding Partnership', 'Technical Support', 'Resource Sharing', 'Joint Programming'].map(type => (
                                                <label key={type} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                    <input 
                                                        type="radio" 
                                                        name="partnershipType" 
                                                        value={type.toLowerCase().replace(/[^a-z]/g, '-')} 
                                                        className="mr-2" 
                                                    />
                                                    <span className="text-sm text-gray-700">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sectors of Interest */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-4">Sectors of Interest</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Healthcare', 'Education', 'Disability Inclusion', 'Economic Development', 'Women Empowerment', 'Youth Programs'].map(sector => (
                                                <label key={sector} className="flex items-center p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                    <input 
                                                        type="checkbox" 
                                                        name="sectors"
                                                        value={sector}
                                                        className="mr-2" 
                                                    />
                                                    <span className="text-xs text-gray-700">{sector}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Organization Description</label>
                                        <textarea
                                            rows={3}
                                            name="description"
                                            placeholder="Brief description of your organization and its mission..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors resize-vertical"
                                        />
                                    </div>

                                    {/* Resources */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Partnership Proposal</label>
                                        <textarea
                                            rows={3}
                                            name="resources"
                                            placeholder="What can your organization bring to the partnership? What are you looking for?"
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
                                        {isSubmitting ? "Submitting..." : "Submit Partnership Application"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            Partnership Benefits
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover how partnering with CARA  can amplify your organization's impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnershipBenefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00A5B8] text-white rounded-full mb-4">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}