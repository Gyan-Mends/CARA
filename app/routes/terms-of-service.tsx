import { FileText, Scale, Users, AlertTriangle, CheckCircle, Mail } from "lucide-react";
import Navigation from "~/components/navigation";

export default function TermsOfService() {
    const lastUpdated = "January 2025";

    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            icon: CheckCircle,
            content: [
                {
                    subtitle: "Agreement to Terms",
                    text: "By accessing and using CARA Africa's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
                },
                {
                    subtitle: "Capacity",
                    text: "You represent that you are at least 18 years of age or have parental/guardian consent to use our services, and that you have the legal capacity to enter into this agreement."
                }
            ]
        },
        {
            id: "services",
            title: "Description of Services",
            icon: Users,
            content: [
                {
                    subtitle: "Our Mission",
                    text: "CARA Africa provides community development services, caregiver training programs, and facilitates partnerships to build sustainable systems of care across African communities."
                },
                {
                    subtitle: "Service Availability",
                    text: "We strive to provide continuous service availability, but we do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or technical issues."
                },
                {
                    subtitle: "Program Participation",
                    text: "Participation in our programs may be subject to additional terms, conditions, and eligibility requirements which will be communicated separately."
                }
            ]
        },
        {
            id: "user-conduct",
            title: "User Conduct and Responsibilities",
            icon: Scale,
            content: [
                {
                    subtitle: "Acceptable Use",
                    text: "You agree to use our services only for lawful purposes and in accordance with our mission of community development and care. You will not use our services for any harmful, illegal, or abusive activities."
                },
                {
                    subtitle: "Information Accuracy",
                    text: "You are responsible for providing accurate and complete information when applying for programs, making donations, or communicating with us. False information may result in termination of services."
                },
                {
                    subtitle: "Respect and Integrity",
                    text: "We expect all users to interact with respect, dignity, and integrity. Discriminatory, harassing, or offensive behavior will not be tolerated."
                }
            ]
        },
        {
            id: "donations-payments",
            title: "Donations and Payments",
            icon: FileText,
            content: [
                {
                    subtitle: "Donation Policy",
                    text: "All donations to CARA Africa are voluntary contributions to support our mission. Donations are generally non-refundable unless required by law or due to processing errors."
                },
                {
                    subtitle: "Payment Processing",
                    text: "We use third-party payment processors for secure payment handling. By making a donation, you agree to the terms and conditions of our payment processors."
                },
                {
                    subtitle: "Tax Deductibility",
                    text: "Donation receipts will be provided for tax purposes where applicable. Consult with your tax advisor regarding the deductibility of donations in your jurisdiction."
                }
            ]
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property",
            icon: AlertTriangle,
            content: [
                {
                    subtitle: "CARA Content",
                    text: "All content on our website, including text, images, logos, and materials, is the property of CARA Africa or our partners and is protected by copyright and other intellectual property laws."
                },
                {
                    subtitle: "Limited Use License",
                    text: "You may view and download content for personal, non-commercial use only. Any other use requires written permission from CARA Africa."
                },
                {
                    subtitle: "User-Generated Content",
                    text: "By submitting content to us (applications, testimonials, etc.), you grant us a non-exclusive right to use such content for our mission-related activities."
                }
            ]
        },
        {
            id: "limitation-liability",
            title: "Limitation of Liability",
            icon: Scale,
            content: [
                {
                    subtitle: "Service Disclaimer",
                    text: "Our services are provided 'as is' without warranties of any kind. We do not guarantee specific outcomes from participation in our programs or services."
                },
                {
                    subtitle: "Liability Limits",
                    text: "To the fullest extent permitted by law, CARA Africa shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services."
                },
                {
                    subtitle: "Force Majeure",
                    text: "We are not responsible for delays or failures in service delivery due to circumstances beyond our reasonable control, including natural disasters, political instability, or other force majeure events."
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
                            <Scale className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                            These terms govern your use of CARA Africa's services and outline our mutual rights and responsibilities.
                        </p>
                        
                    </div>
                </div>
            </section>

            {/* Terms of Service Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-12 p-8 bg-gray-50 rounded-2xl">
                            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Terms and Conditions</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Welcome to CARA Africa. These Terms of Service ("Terms") govern your access to and use of our 
                                website, services, and programs. Please read these Terms carefully before using our services. 
                                By accessing or using any part of our services, you agree to be bound by these Terms.
                            </p>
                        </div>

                        {/* Terms Sections */}
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

                        {/* Additional Terms */}
                        <div className="mt-16 space-y-8">
                            {/* Privacy Reference */}
                            <div className="p-6 bg-[#00A5B8]/5 rounded-xl border border-[#00A5B8]/20">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy and Data Protection</h3>
                                <p className="text-gray-600">
                                    Your privacy is important to us. Please review our{" "}
                                    <a href="/privacy-policy" className="text-[#00A5B8] hover:text-teal-600 font-medium underline">
                                        Privacy Policy
                                    </a>
                                    {" "}to understand how we collect, use, and protect your information.
                                </p>
                            </div>

                            {/* Modifications */}
                            <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                                <h3 className="text-lg font-semibold text-amber-800 mb-3">Modifications to Terms</h3>
                                <p className="text-amber-700">
                                    CARA Africa reserves the right to modify these Terms at any time. We will notify users of 
                                    significant changes by posting updates on our website. Continued use of our services after 
                                    changes constitutes acceptance of the modified Terms.
                                </p>
                            </div>

                            {/* Governing Law */}
                            <div className="p-6 bg-gray-50 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                                <p className="text-gray-600">
                                    These Terms are governed by and construed in accordance with applicable laws. Any disputes 
                                    will be resolved through good faith negotiation, and if necessary, through appropriate 
                                    legal channels in accordance with our dispute resolution procedures.
                                </p>
                            </div>

                            {/* Severability */}
                            <div className="p-6 bg-gray-50 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
                                <p className="text-gray-600">
                                    If any provision of these Terms is found to be unenforceable or invalid, that provision 
                                    will be limited or eliminated to the minimum extent necessary so that the remaining Terms 
                                    will remain in full force and effect.
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-16 p-8 bg-[#00A5B8] text-white rounded-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Mail className="w-8 h-8 text-[#FCB339]" />
                                <h2 className="text-2xl font-heading font-bold">
                                    Questions About These Terms?
                                </h2>
                            </div>
                            <p className="text-lg text-white/90 leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="space-y-2 text-white/90">
                                <p><strong>CARA Africa</strong></p>
                                <p>Email: legal@caraafrica.org</p>
                                <p>Address: Accra, Ghana</p>
                            </div>
                            <p className="text-sm text-white/70 mt-4">
                                We will respond to your legal inquiries within 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}