import { FileText, Users, Heart, Target, Megaphone, BookOpen } from "lucide-react";
import banner2 from "~/components/banners/banner2.jpg";

export const blogCategoryIconMap = {
    FileText,
    Users,
    Heart,
    Target,
    Megaphone,
    BookOpen,
};
export type BlogCategoryIconKey = keyof typeof blogCategoryIconMap;

export type BlogCategory = 
    | "program-updates" 
    | "success-stories" 
    | "community-impact" 
    | "training-insights" 
    | "advocacy" 
    | "announcements";

export type BlogSummary = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: BlogCategory;
    categoryLabel: string;
    author: string;
    publishedDate: string;
    readTime: string;
    featuredImage: string;
    alt?: string;
    iconKey: BlogCategoryIconKey;
    tagColor: string;
    tagTextColor: string;
    featured?: boolean;
};

export type BlogPost = BlogSummary & {
    content: string;
    heroImage: string;
    tags: string[];
    relatedPrograms?: string[];
    callToAction?: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
};

const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "cara-leads-neurodiversity-edtech-fair-2025",
        title: "CARA to Lead Inclusive Education Conversations at Neurodiversity & EdTech Fair 2025",
        excerpt: "Care Access for Resilient Africa (CARA) will play a leading role at the 2025 Neurodiversity & EdTech Fair, scheduled for September 6, 2025, at the West African Genetic Medicine Centre, University of Ghana.",
        category: "announcements",
        categoryLabel: "Announcements",
        author: "CARA Communications Team",
        publishedDate: "2025-09-04",
        readTime: "3 min read",
        featuredImage: banner2,
        heroImage: banner2,
        alt: "Neurodiversity & EdTech Fair 2025 banner featuring Mrs. Joana D.A. Kyeremateng",
        iconKey: "Target",
        tagColor: "bg-red-100",
        tagTextColor: "text-red-600",
        featured: true,
        content: `
# CARA to Lead Inclusive Education Conversations at Neurodiversity & EdTech Fair 2025

Care Access for Resilient Africa (CARA), a nonprofit organization advancing inclusive care and health equity across Africa, will play a leading role at the 2025 Neurodiversity & EdTech Fair. The fair is scheduled for September 6, 2025, at the West African Genetic Medicine Centre, University of Ghana, with the theme: "Advancing Neurodiverse Learning Through Assistive Technology."

This one-day event will bring together parents, teachers, students, professionals, and organizations to explore how we can build inclusive learning environments where every learner thrives. Jointly organized by Fafanto Psych Organization and CARA, the fair will feature thought-provoking talks, practical workshops, live demonstrations of assistive technologies, and interactive exhibitions promoting inclusive education.

## CARA's Role & Perspective

Mrs. Joana D.A. Kyeremateng, a Public Health Professional and Disability Advocate, and Founder of CARA, will deliver a presentation on CARA's mission to empower families, strengthen schools, and champion inclusive systems across Africa. She will co-facilitate a workshop titled "Understanding the Human Brain: How Your Child Thinks and Learns," offering practical insights for parents and educators.

Additionally, Mrs. Kyeremateng will launch the Inclusive Schools Action Project (ISAP), a pioneering initiative under CARA's Inclusive Care Programme, developed in collaboration with Fafanto Psych Organization. ISAP is designed to support schools in establishing SENCO units and building responsive, inclusive support systems.

Other notable speakers include: Prof. Evelyn Folako-Kissi, Dr. Erica Danfrokua Dickson, Dr. Gideon Mensah Anapey, and Mrs. Ethel Obeng-Treve.

## About CARA's Inclusive Care Programme

CARA's Inclusive Care Programme supports families and schools to provide dignified care for children and individuals with special needs by training and guiding parents and caregivers, assisting schools to establish SENCO units, training teachers, deploying care aides, and linking families to essential health, education, and social protection services.

This programme ensures that no child is left behind, promoting inclusion both at home and in the classroom.
        `,
        tags: ["Neurodiversity", "Inclusive Education", "EdTech Fair", "SENCO", "Ghana"],
        relatedPrograms: ["inclusive-care"],
        callToAction: {
            title: "Learn More About ISAP",
            description: "Discover how CARA is supporting inclusive education in Ghana",
            buttonText: "Learn More",
            buttonLink: "/programs/inclusive-care"
        }
    }
];

const categories: { [key in BlogCategory]: { label: string; description: string; iconKey: BlogCategoryIconKey; color: string; textColor: string } } = {
    "program-updates": {
        label: "Program Updates",
        description: "Latest developments and milestones from CARA programs",
        iconKey: "FileText",
        color: "bg-blue-100",
        textColor: "text-blue-600"
    },
    "success-stories": {
        label: "Impact", 
        description: "Inspiring impact from communities and individuals we serve",
        iconKey: "Heart",
        color: "bg-green-100",
        textColor: "text-green-600"
    },
    "community-impact": {
        label: "Community Impact",
        description: "Measuring and celebrating our collective achievements",
        iconKey: "Users",
        color: "bg-purple-100",
        textColor: "text-purple-600"
    },
    "training-insights": {
        label: "Training Insights",
        description: "Best practices and learnings from our training programs",
        iconKey: "BookOpen",
        color: "bg-orange-100",
        textColor: "text-orange-600"
    },
    "advocacy": {
        label: "Advocacy & Policy",
        description: "Our work influencing policy and promoting systemic change",
        iconKey: "Megaphone",
        color: "bg-yellow-100",
        textColor: "text-yellow-600"
    },
    "announcements": {
        label: "Announcements",
        description: "Official announcements and organizational updates",
        iconKey: "Target",
        color: "bg-red-100",
        textColor: "text-red-600"
    }
};

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getFeaturedBlogPosts(): BlogPost[] {
    return blogPosts.filter(post => post.featured).slice(0, 3);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
    return blogPosts
        .filter(post => post.category === category)
        .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getRelatedBlogPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    const currentPost = getBlogPostBySlug(currentSlug);
    if (!currentPost) return [];
    
    return blogPosts
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, limit);
}

export function getBlogCategories() {
    return categories;
}

export function getCategoryInfo(category: BlogCategory) {
    return categories[category];
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    });
}

export default blogPosts;