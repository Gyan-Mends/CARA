import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import Navigation from "~/components/navigation";
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg";
import newmother from "~/components/images/WhatsApp Image 2025-09-04 at 11.26.20_614ae46f.jpg";
import specialcare from "~/components/images/special care.avif";
import teachingImage from "~/components/images/african-woman-teaching-kids-class_23-2148892556.jpg";
import partnershipImage from "~/components/black-businesswoman-shaking-hands-with-male-partner_74855-1085.jpg";
import donation from "~/components/images/donation.jpeg";
import outreach from "~/components/images/OUT.jpeg";
import banner1 from "~/components/banners/banner1.jpg";
import banner2 from "~/components/banners/banner2.jpg";
import image from "/images/image.png";

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
    title: string;
}

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: newmother,
        alt: "New mother with baby",
        category: "Mothers First",
        title: "Postpartum Care Support"
    },
    {
        id: 2,
        src: specialcare,
        alt: "Child with special care needs",
        category: "Inclusive Care",
        title: "Special Needs Support"
    },
    {
        id: 3,
        src: care,
        alt: "Care professional with senior patient",
        category: "Elderly Care",
        title: "Dignified Elder Support"
    },
    {
        id: 4,
        src: teachingImage,
        alt: "African woman teaching kids in class",
        category: "Training",
        title: "Community Training Program"
    },
    {
        id: 5,
        src: partnershipImage,
        alt: "Professional partnership handshake",
        category: "Partnerships",
        title: "Building Strategic Partnerships"
    },
    {
        id: 6,
        src: donation,
        alt: "Donation and support",
        category: "Community",
        title: "Community Support"
    },
    {
        id: 7,
        src: outreach,
        alt: "Community outreach",
        category: "Outreach",
        title: "Community Outreach Program"
    },
    {
        id: 8,
        src: banner1,
        alt: "CARA program banner",
        category: "Events",
        title: "Community Event"
    },
    {
        id: 9,
        src: banner2,
        alt: "CARA program banner",
        category: "Events",
        title: "Training Workshop"
    },
    {
        id: 10,
        src: image,
        alt: "Breast Cancer Awareness Month - Every Story is Unique",
        category: "Community",
        title: "October Breast Cancer Awareness"
    }
];

const categories = ["All", "Mothers First", "Inclusive Care", "Elderly Care", "Training", "Partnerships", "Community", "Outreach", "Events"];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = selectedCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

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
                        alt="Gallery hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/75 to-[#00A5B8]/85"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-6">
                            <ImageIcon className="w-12 h-12 text-[#FCB339] mr-4" />
                            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white">
                                Our <span className="text-[#FCB339]">Gallery</span>
                            </h1>
                        </div>
                        <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                            Moments that matter: Celebrating our journey of empowering caregivers, supporting families, and strengthening communities across Africa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? "bg-[#00A5B8] text-white shadow-lg scale-105"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    {filteredImages.length === 0 ? (
                        <div className="text-center py-20">
                            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-xl text-gray-500">No images found in this category</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <div className="mb-2">
                                                <span className="inline-block px-3 py-1 bg-[#00A5B8] rounded-full text-xs font-semibold">
                                                    {image.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold">{image.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 mt-10 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                    <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-auto max-h-[85vh] mt-10 object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
