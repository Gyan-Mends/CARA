import { Shield, Lock, Eye, FileText, Mail, Globe } from "lucide-react";
import Navigation from "~/components/navigation";

export default function PrivacyPolicy() {
    const lastUpdated = "January 2025";

    const sections = [
        {
            id: "information-collection",
            title: "Information We Collect",
            icon: FileText,
            content: [
                {
                    subtitle: "Personal Information",
                    text: "When you interact with CARA, we may collect personal information such as your name, email address, phone number, and any information you provide when applying to become a giver, partner, or when contacting us."
                },
                {
                    subtitle: "Usage Information",
                    text: "We collect information about how you use our website, including pages visited, time spent on pages, and referral sources to help us improve our services."
                },
                {
                    subtitle: "Communication Data",
                    text: "When you contact us via email, forms, or other communication channels, we retain records of these communications to provide better service and support."
                }
            ]
        },
        {
            id: "information-use",
            title: "How We Use Your Information",
            icon: Globe,
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your information to provide our services, process applications, respond to inquiries, and communicate about our programs and initiatives."
                },
                {
                    subtitle: "Program Improvement",
                    text: "Your information helps us understand our community needs and improve our programs to better serve African communities."
                },
                {
                    subtitle: "Communications",
                    text: "We may use your contact information to send you updates about our work, program impacts, and opportunities to get involved (you can opt out at any time)."
                }
            ]
        },
        {
            id: "information-sharing",
            title: "Information Sharing",
            icon: Shield,
            content: [
                {
                    subtitle: "Limited Sharing",
                    text: "CARA does not sell, rent, or trade your personal information. We only share information when necessary to provide our services or comply with legal requirements."
                },
                {
                    subtitle: "Partner Organizations",
                    text: "We may share relevant information with trusted partner organizations when collaborating on programs, but only with your consent or when necessary for program delivery."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose information if required by law, regulation, or legal process, or to protect the rights, property, or safety of CARA, our community, or others."
                }
            ]
        },
        {
            id: "data-security",
            title: "Data Security",
            icon: Lock,
            content: [
                {
                    subtitle: "Protection Measures",
                    text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
                },
                {
                    subtitle: "Access Controls",
                    text: "Access to personal information is limited to authorized personnel who need the information to perform their job functions and are committed to maintaining confidentiality."
                },
                {
                    subtitle: "Data Retention",
                    text: "We retain personal information only as long as necessary to fulfill the purposes for which it was collected or as required by law."
                }
            ]
        },
        {
            id: "your-rights",
            title: "Your Rights",
            icon: Eye,
            content: [
                {
                    subtitle: "Access and Correction",
                    text: "You have the right to access, correct, or update your personal information. Contact us if you need to review or modify your information."
                },
                {
                    subtitle: "Opt-Out",
                    text: "You can opt out of receiving communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly."
                },
                {
                    subtitle: "Data Deletion",
                    text: "You may request deletion of your personal information, subject to our legal obligations and legitimate business needs."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            {/* Page Header */}
            <section className="py-12 relative bg-gray-900 border-b border-gray-200 overflow-hidden h-[50vh] -mt-20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A5B8] via-teal-600 to-[#00A5B8]"></div>
                
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                            Your privacy is important to us. This policy explains how CARA collects, uses, and protects your personal information.
                        </p>
                        
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-12 p-8 bg-gray-50 rounded-2xl">
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Commitment</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                CARA is committed to protecting your privacy and handling your personal information responsibly. 
                                This Privacy Policy describes our practices regarding the collection, use, and disclosure of information 
                                when you use our website and services. By using our services, you agree to the collection and use of 
                                information in accordance with this policy.
                            </p>
                        </div>

                        {/* Policy Sections */}
                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <div key={section.id} className="scroll-mt-20">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00A5B8] text-white rounded-full">
                                            <section.icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900">
                                            {section.title}
                                        </h2>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        {section.content.map((item, itemIndex) => (
                                            <div key={itemIndex} className="border-l-4 border-[#00A5B8]/20 pl-6">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                                    {item.subtitle}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Information */}
                        <div className="mt-16 p-8 bg-[#00A5B8]/5 rounded-2xl border border-[#00A5B8]/20">
                            <div className="flex items-center gap-4 mb-6">
                                <Mail className="w-8 h-8 text-[#00A5B8]" />
                                <h2 className="text-2xl font-heading font-bold text-gray-900">
                                    Contact Us About Privacy
                                </h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-600">
                                <p><strong>CARA</strong></p>
                                <p>Email: privacy@caraafrica.org</p>
                                <p>Address: Accra, Ghana</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                We will respond to your privacy-related inquiries within 30 days.
                            </p>
                        </div>

                        {/* Updates Notice */}
                        <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
                            <h3 className="text-lg font-semibold text-amber-800 mb-2">Policy Updates</h3>
                            <p className="text-amber-700">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                                the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to 
                                review this Privacy Policy periodically for any changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}