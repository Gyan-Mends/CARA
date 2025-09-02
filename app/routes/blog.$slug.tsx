import { type LoaderFunctionArgs, type MetaFunction } from "react-router";
import { useLoaderData, Link } from "react-router";
import { Clock, User, ArrowLeft, Tag, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Navigation from "~/components/navigation";
import { 
    getBlogPostBySlug, 
    getRelatedBlogPosts, 
    formatDate,
    blogCategoryIconMap,
    type BlogPost
} from "~/utils/blog";

type LoaderData = { 
    post: BlogPost; 
    relatedPosts: BlogPost[];
};

export const meta: MetaFunction = (args) => {
    const data = args.data as LoaderData | undefined;
    if (!data?.post) {
        return [
            { title: "Story Not Found - CARA" },
            { name: "description", content: "The requested story could not be found." },
        ];
    }

    return [
        { title: `${data.post.title} - CARA Blog` },
        { name: "description", content: data.post.excerpt },
        { property: "og:title", content: data.post.title },
        { property: "og:description", content: data.post.excerpt },
        { property: "og:image", content: data.post.featuredImage },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderData> {
    const slug = params.slug ?? "";
    const post = getBlogPostBySlug(slug);

    if (!post) {
        throw new Response("Story Not Found", { status: 404 });
    }

    const relatedPosts = getRelatedBlogPosts(slug);
    return { post, relatedPosts };
}

export default function BlogDetail() {
    const { post, relatedPosts } = useLoaderData() as LoaderData;
    const Icon = blogCategoryIconMap[post.iconKey];

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = post.title;

    // Convert markdown-style content to HTML-like format for basic rendering
    const renderContent = (content: string) => {
        return content
            .split('\n')
            .map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-4xl font-heading font-bold text-gray-900 mb-6 mt-8">{paragraph.slice(2)}</h1>;
                }
                if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-3xl font-heading font-bold text-gray-900 mb-4 mt-8">{paragraph.slice(3)}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-2xl font-heading font-bold text-gray-900 mb-3 mt-6">{paragraph.slice(4)}</h3>;
                }
                if (paragraph.startsWith('#### ')) {
                    return <h4 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{paragraph.slice(5)}</h4>;
                }
                if (paragraph.startsWith('- ')) {
                    return <li key={index} className="text-gray-700 leading-relaxed mb-2">{paragraph.slice(2)}</li>;
                }
                if (paragraph.startsWith('*"') && paragraph.endsWith('"*')) {
                    return <blockquote key={index} className="border-l-4 border-[#00A5B8] pl-6 py-4 my-6 bg-gray-50 italic text-gray-700 text-lg">{paragraph.slice(2, -2)}</blockquote>;
                }
                if (paragraph.trim() === '') {
                    return null;
                }
                
                // Handle bold and italic text
                let processedParagraph = paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>');
                
                return (
                    <p 
                        key={index} 
                        className="text-gray-700 leading-relaxed mb-4" 
                        dangerouslySetInnerHTML={{ __html: processedParagraph }}
                    />
                );
            })
            .filter(Boolean);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navigation />
            
            

            {/* Hero Section */}
            <section className="relative bg-gray-900 py-10  overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={post.heroImage} 
                        alt={post.alt || post.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-[#00A5B8]/80"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 py-20">
                    <div className="max-w-4xl">
                        
                        
                        <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            {post.excerpt}
                        </p>

                        {/* Article Meta */}
                        <div className="flex items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{post.readTime}</span>
                            </div>
                            <div>
                                <span>{formatDate(post.publishedDate)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className=" mx-auto">
                        <div className="grid lg:grid-cols-4 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                <div className="prose prose-lg max-w-none">
                                    {renderContent(post.content)}
                                </div>

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Tag className="w-5 h-5 text-gray-600" />
                                            <span className="font-semibold text-gray-900">Tags</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Call to Action */}
                                {post.callToAction && (
                                    <div className="mt-12 bg-gradient-to-r from-[#00A5B8] to-teal-600 rounded-xl p-8 text-white">
                                        <h3 className="text-2xl font-bold mb-4">{post.callToAction.title}</h3>
                                        <p className="text-white/90 mb-6">{post.callToAction.description}</p>
                                        <Link 
                                            to={post.callToAction.buttonLink}
                                            className="inline-block bg-white text-[#00A5B8] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                        >
                                            {post.callToAction.buttonText}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-6 space-y-8">
                                    {/* Share */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Share2 className="w-5 h-5 text-gray-600" />
                                            <span className="font-semibold text-gray-900">Share Story</span>
                                        </div>
                                        <div className="space-y-3">
                                            <a
                                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                                            >
                                                <Twitter className="w-5 h-5 text-blue-500" />
                                                <span className="text-gray-700">Twitter</span>
                                            </a>
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                                            >
                                                <Facebook className="w-5 h-5 text-blue-600" />
                                                <span className="text-gray-700">Facebook</span>
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                                            >
                                                <Linkedin className="w-5 h-5 text-blue-700" />
                                                <span className="text-gray-700">LinkedIn</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Related Stories */}
                                    {relatedPosts && relatedPosts.length > 0 && (
                                        <div className="bg-white border border-gray-200 p-6 rounded-lg">
                                            <h3 className="font-semibold text-gray-900 mb-4">Related Stories</h3>
                                            <div className="space-y-4">
                                                {relatedPosts.map((relatedPost, index) => {
                                                    const RelatedIcon = blogCategoryIconMap[relatedPost.iconKey];
                                                    return (
                                                        <Link
                                                            key={index}
                                                            to={`/blog/${relatedPost.slug}`}
                                                            className="block group"
                                                        >
                                                            <div className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#00A5B8]/10 transition-colors">
                                                                <div className="relative flex-shrink-0">
                                                                    <img 
                                                                        src={relatedPost.featuredImage} 
                                                                        alt={relatedPost.alt || relatedPost.title}
                                                                        className="w-16 h-16 object-cover rounded-lg"
                                                                    />
                                                                    <div className="absolute -top-1 -right-1">
                                                                        <div className={`flex items-center justify-center w-6 h-6 ${relatedPost.tagColor} ${relatedPost.tagTextColor} rounded-full`}>
                                                                            <RelatedIcon className="w-3 h-3" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#00A5B8] transition-colors line-clamp-2 mb-1">
                                                                        {relatedPost.title}
                                                                    </h4>
                                                                    <p className="text-xs text-gray-500 mb-1">{relatedPost.categoryLabel}</p>
                                                                    <p className="text-xs text-gray-400">{formatDate(relatedPost.publishedDate)} • {relatedPost.readTime}</p>
                                                                </div>
                                                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#00A5B8] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Newsletter CTA */}
                                    <div className="bg-[#00A5B8] text-white p-6 rounded-lg">
                                        <h3 className="font-semibold mb-2">Stay Updated</h3>
                                        <p className="text-white/90 text-sm mb-4">Get more stories like this delivered to your inbox.</p>
                                        <Link 
                                            to="/newsletter"
                                            className="inline-block bg-white text-[#00A5B8] px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
                                        >
                                            Subscribe
                                        </Link>
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