import { type MetaFunction } from "react-router";
import { useLoaderData, Link } from "react-router";
import { Clock, User, ArrowRight, Search, Filter, BookOpen, Heart, MapPin, Users } from "lucide-react";
import { useState } from "react";
import Navigation from "~/components/navigation";
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg";
import { 
    getAllBlogPosts, 
    getBlogCategories,
    formatDate,
    blogCategoryIconMap,
    type BlogPost,
    type BlogCategory
} from "~/utils/blog";

export const meta: MetaFunction = () => {
    return [
        { title: "News - CARA" },
        { name: "description", content: "Stay updated with the latest news and insights from CARA's programs across Africa. Read about our impact in communities and the lives we're transforming." },
    ];
};

export async function loader() {
    const allPosts = getAllBlogPosts();
    const categories = getBlogCategories();
    
    return {
        allPosts,
        categories
    };
}

export default function Blog() {
    const { allPosts, categories } = useLoaderData<typeof loader>();
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter posts based on category and search
    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        const matchesSearch = searchTerm === "" || 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Program-based categories only
    const programCategories = [
        { key: "program-updates", label: "Caregiver Training", icon: Users, color: "bg-[#00A5B8]", textColor: "text-white" },
        { key: "success-stories", label: "Mothers First", icon: Heart, color: "bg-[#00A5B8]", textColor: "text-white" },
        { key: "community-impact", label: "Inclusive Care", icon: BookOpen, color: "bg-[#00A5B8]", textColor: "text-white" },
        { key: "training-insights", label: "CareBridge", icon: MapPin, color: "bg-[#00A5B8]", textColor: "text-white" },
    ];

    const coreValues = [
        { value: "Empowerment", description: "Building local capacity", icon: Users },
        { value: "Dignity", description: "Respectful care for all", icon: Heart },
        { value: "Inclusion", description: "No one left behind", icon: BookOpen },
        { value: "Community", description: "Sustainable networks", icon: MapPin }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            {/* Hero Section */}
            <section className="py-12 lg:mt-20 mt-6 relative bg-gray-900 border-b border-gray-200 overflow-hidden lg:h-[70vh] -mt-20">
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
                            Latest <span className="text-[#FCB339]">News</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
                            Discover the latest updates and insights from our work 
                            building sustainable care systems across Africa.
                        </p>
                        
                        {/* Core Values */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {coreValues.map((value, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                    <value.icon className="w-6 h-6 text-[#FCB339] flex-shrink-0" />
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-white">{value.value}</div>
                                        <div className="text-sm text-white/80">{value.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                            />
                        </div>
                        
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="w-5 h-5 text-gray-600" />
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === "all"
                                        ? "bg-[#00A5B8] text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                All News
                            </button>
                            {programCategories.map((category) => (
                                <button
                                    key={category.key}
                                    onClick={() => setSelectedCategory(category.key as BlogCategory)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        selectedCategory === category.key
                                            ? `${category.color} ${category.textColor}`
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                >
                                    <category.icon className="w-4 h-4" />
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSelectedCategory("all");
                                    setSearchTerm("");
                                }}
                                className="mt-4 text-[#00A5B8] hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-heading font-bold text-gray-900">
                                    {selectedCategory === "all" 
                                        ? "All News" 
                                        : programCategories.find(cat => cat.key === selectedCategory)?.label || "News"}
                                </h2>
                                <span className="text-gray-500">
                                    {filteredPosts.length} {filteredPosts.length === 1 ? 'news item' : 'news items'}
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.map((post) => {
                                    const Icon = blogCategoryIconMap[post.iconKey];
                                    return (
                                        <Link 
                                            key={post.id}
                                            to={`/blog/${post.slug}`}
                                            className="group"
                                        >
                                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
                                                <div className="relative">
                                                    <img 
                                                        src={post.featuredImage} 
                                                        alt={post.alt || post.title}
                                                        className="w-full h-[40vh] object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute top-4 left-4">
                                                        <div className={`flex items-center gap-2 px-3 py-1 ${post.tagColor} ${post.tagTextColor} rounded-full text-xs font-medium`}>
                                                            <Icon className="w-3 h-3" />
                                                            {post.categoryLabel}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A5B8] transition-colors line-clamp-2">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                                            <span>{formatDate(post.publishedDate)}</span>
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                        <ArrowRight className="w-4 h-4 text-[#00A5B8] group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            {/* <section className="py-16 bg-gradient-to-r from-[#00A5B8] to-teal-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Stay Updated with Our Stories
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Get the latest impact stories and program updates delivered to your inbox monthly.
                    </p>
                    <Link 
                        to="/newsletter"
                        className="inline-block bg-white text-[#00A5B8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Subscribe to Newsletter
                    </Link>
                </div>
            </section> */}
        </div>
    );
}