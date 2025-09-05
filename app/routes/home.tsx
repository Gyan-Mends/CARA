import { Facebook, Instagram, Twitter, Youtube, ChevronLeft, ChevronRight, Star, Settings, Loader2, X } from "lucide-react";
import { useSearchParams, useActionData, useNavigation, Link } from "react-router";
import { type ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { sendContactEmail, type ContactFormData } from "~/utils/email.server";
import { useEffect, useState } from "react";
import hero from "~/components/african-mother-little-girl-medium-shot_23-2148960557.jpg"
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg"
import teachingImage from "~/components/images/african-woman-teaching-kids-class_23-2148892556.jpg"
import partnershipImage from "~/components/black-businesswoman-shaking-hands-with-male-partner_74855-1085.jpg"
import newmother from "~/components/images/WhatsApp Image 2025-09-04 at 11.26.20_614ae46f.jpg"
import specialcare from "~/components/images/special care.avif"
import bannerImage from "~/components/banners/banner1.jpg"
import { getPrograms } from "~/utils/programs";
import { getFeaturedBlogPosts, blogCategoryIconMap } from "~/utils/blog";
import Navigation from "~/components/navigation";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    
    const contactData: ContactFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.message) {
        return {
            error: "All fields are required",
            success: false,
        };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
        return {
            error: "Please enter a valid email address",
            success: false,
        };
    }

    try {
        const result = await sendContactEmail(contactData);

        if (result.success) {
            return redirect("/?success=true#get-involved");
        } else {
            return {
                error: result.error || "Failed to send message. Please try again.",
                success: false,
            };
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            error: "An unexpected error occurred. Please try again.",
            success: false,
        };
    }
}

// Carousel images with descriptions
const carouselImages = [
    {
        src: newmother,
        alt: "African mother with little girl",
        caption: "New Mother"
    },

    {
        src: specialcare,
        alt: "Professional partnership handshake",
        caption: "Child with special care"
    },
    {
        src: care,
        alt: "Care professional with senior patient",
        caption: "Providing dignified support"
    }
];

export default function Home() {
    const [searchParams] = useSearchParams();
    const actionData = useActionData();
    const navigation = useNavigation();
    const success = searchParams.get("success");
    const showSuccessMessage = success === "true";
    const [isLocalSubmitting, setIsLocalSubmitting] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const programs = getPrograms();
    const featuredBlogPosts = getFeaturedBlogPosts();

    // Check both navigation state and local state
    const isSubmitting = navigation.state === "submitting" || isLocalSubmitting;

    // Carousel navigation functions
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(nextImage, 10000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Show modal on every page visit/refresh
    useEffect(() => {
        setTimeout(() => setShowModal(true), 2000); // Show after 2 seconds
    }, []);

    // Handle form submission state
    const handleFormSubmit = () => {
        setIsLocalSubmitting(true);
    };

    // Reset local submitting state when navigation completes
    useEffect(() => {
        if (navigation.state === "idle") {
            setIsLocalSubmitting(false);
        }
    }, [navigation.state]);

    // Scroll to contact section on successful submission
    useEffect(() => {
        if (showSuccessMessage) {
            const contactSection = document.getElementById("get-involved");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [showSuccessMessage]);
    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section id="hero" className="relative">
                {/* Navigation */}
                <Navigation />

                <div className="container mt-16 lg:mt-0 mx-auto px-6 pb-10 pt-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-5xl font-heading lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Reimagining Care  <br />
                                    <span className="text-[#00A5B8]">for life’s most </span>
                                    <span className="text-[#00A5B8]">vulnerable moments.</span>
                                </h1>
                                <div className="w-12 h-1 bg-[#00A5B8]"></div>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                    From new mothers to children with special needs and the elderly, CARA advances access to care that protects dignity during life’s most vulnerable moments.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/become-a-giver"
                                    className="bg-[#00A5B8] text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors duration-300 font-medium text-center"
                                >
                                    BECOME A CARE GIVER
                                </Link>
                                <Link
                                    to="/partner-with-us"
                                    className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium text-center"
                                >
                                    PARTNER WITH US
                                </Link>

                            </div>

                        </div>

                        {/* Right Content - Circular Image Carousel */}
                        <div className="relative lg:mt-20">
                            <div className="relative w-full mx-auto">
                                {/* Background Circles */}
                                <div className="absolute inset-0 rounded-full"></div>
                                <div className="absolute top-4 left-4 right-4 bottom-4 rounded-full"></div>

                                {/* Left side oval decorative elements */}
                                <div className="absolute -left-16 top-32 w-40 h-10 bg-gray-400 rounded-full opacity-30"></div>
                                <div className="absolute -left-6 top-48 w-20 h-10 bg-gray-300 rounded-full opacity-35"></div>

                                {/* Main Carousel Container */}
                                <div className="relative bg-gray-100 rounded-full p-8">
                                    <div className="aspect-square rounded-full overflow-hidden relative">
                                        {/* Carousel Images */}
                                        <div className="relative w-full h-full overflow-hidden">
                                            {carouselImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentImageIndex
                                                        ? 'opacity-100 scale-100'
                                                        : 'opacity-0 scale-105'
                                                        }`}
                                                >
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}

                                            {/* Image Caption */}
                                            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-500 ease-in-out">
                                                <p className="text-sm font-medium text-center">
                                                    {carouselImages[currentImageIndex].caption}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-gray-800" />
                                        </button>

                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="w-5 h-5 text-gray-800" />
                                        </button>
                                    </div>

                                    {/* Dot Indicators */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {carouselImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToImage(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                                                    ? 'bg-[#00A5B8] scale-125'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Announcement Modal */}
            {showModal && (
                <div className="fixed inset-0 mt-10 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative max-w-2xl mx-4 bg-gradient-to-r from-[#FCB339]/20 to-orange-500/20 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <div className="lg:p-8">
                            <div className="flex flex-col lg:flex-row items-center gap-6">

                                <img
                                    src={bannerImage}
                                    alt="Caregiver Training Program"
                                    className=" h-[70vh] w-full  object-cover rounded"
                                />

                            </div>


                        </div>
                    </div>
                </div>
            )}


            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Right Content - Image with Feature Cards */}
                        <div className="relative">
                            {/* Background Image */}
                            <div className="relative lg:h-full md:h-full h-[60vh] bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg overflow-hidden">
                                <img
                                    src={care}
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
                                    CARA, Care Access for Resilient Africa,  is a nonprofit organization advancing care access and community health. We equip caregivers, support families, and strengthen local systems of care.
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

            {/* Programs Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">

                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight mb-4">
                            Our Programs
                        </h2>
                        <div className="w-12 h-1 bg-[#00A5B8] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            CARA empowers youth and women to provide dignified care for mothers, children with special needs, and the elderly, strengthening families and communities through sustainable care systems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {programs.slice(0, 3).map((program) => (
                            <div key={program.id} className="relative  bg-gray-50 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 border border-gray-100">
                                <div className="absolute top-4 right-4 w-12 h-12 bg-[#00A5B8]/10 rounded-full flex items-center justify-center">
                                    <span className="text-[#00A5B8] font-bold text-lg">{program.id.toString().padStart(2, '0')}</span>
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <img
                                            src={program.image}
                                            alt={program.alt}
                                            className="w-full h-68 object-cover rounded-tr-lg rounded-tl-lg"
                                        />
                                    </div>
                                    <div className="px-3 pb-3">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {program.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {program.description}
                                        </p>
                                        {/* <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span className={`${program.tagColor ?? ''} px-3 py-1 rounded-full ${program.tagTextColor ?? ''} font-medium`}>
                                                {program.duration}
                                            </span>
                                            <span>{program.achievement}</span>
                                        </div> */}
                                        <div className="mt-4">
                                            <Link
                                                to={`/programs/${program.slug}`}
                                                className="inline-flex items-center gap-2 text-[#00A5B8] font-medium hover:underline"
                                            >
                                                Read More
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center">
                        <Link
                            to="/programs"
                            className="inline-flex items-center gap-2 bg-[#00A5B8] text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors duration-300 font-medium"
                        >
                            View All Programs
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stories Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight mb-4">
                            Latest <span className="text-[#00A5B8]">News</span>
                        </h2>
                        <div className="w-12 h-1 bg-[#00A5B8] mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover how CARA is transforming lives and building stronger communities across Africa through our programs and partnerships.
                        </p>
                    </div>

                    {/* Featured Stories Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredBlogPosts.map((post, index) => {
                            const Icon = blogCategoryIconMap[post.iconKey];
                            return (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    className={`group ${index === 0 ? '' : ''}`}
                                >
                                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
                                        <div className="relative">
                                            <img
                                                src={post.featuredImage}
                                                alt={post.alt || post.title}
                                                className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${index === 0 ? 'h-64' : 'h-48'
                                                    }`}
                                            />
                                            <div className="absolute top-4 left-4">
                                                <div className={`flex items-center gap-2 px-3 py-1 ${post.tagColor} ${post.tagTextColor} rounded-full text-sm font-medium`}>
                                                    <Icon className="w-4 h-4" />
                                                    {post.categoryLabel}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                                            <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#00A5B8] transition-colors line-clamp-2 ${index === 0 ? 'text-2xl' : 'text-xl'
                                                }`}>
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span>{post.author}</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <svg className="w-5 h-5 text-[#00A5B8] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* View More Button */}
                    <div className="text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 bg-[#00A5B8] text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-colors duration-300 font-medium"
                        >
                            Read More News
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Get Involved Section */}
            <section id="get-involved" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight mb-4">
                            Contact Us
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

                            {showSuccessMessage && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800 font-medium">Thank you for your message! We'll get back to you soon.</p>
                                </div>
                            )}

                            {actionData?.error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800 font-medium">{actionData.error}</p>
                                </div>
                            )}

                            <form method="post" className="space-y-6" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
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
                                        required
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
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                                        placeholder="Tell us how you'd like to get involved..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#00A5B8] text-white py-3 px-6 rounded-lg hover:bg-teal-600 disabled:bg-teal-400 disabled:cursor-not-allowed transition-colors duration-300 font-medium flex items-center justify-center gap-2"
                                >
                                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}