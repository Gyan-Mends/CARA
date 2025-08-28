import { Heart, Users, Target, Award } from "lucide-react";
import hero from "~/components/african-mother-little-girl-medium-shot_23-2148960557.jpg";
import care from "~/components/scene-from-care-job-with-senior-patient-being-take-care_23-2151224145.jpg";
import caregiverTraining from "~/components/images/african-woman-teaching-kids-class_23-2148892556.jpg";
import businessPartnership from "~/components/business-partners-closing-contract_74855-1152.jpg";
import womenEmpowerment from "~/components/black-businesswoman-shaking-hands-with-male-partner_74855-1085.jpg";
import gg from "~/components/images/gg.png";

export const programIconMap = {
    Heart,
    Users,
    Target,
    Award,
};
export type ProgramIconKey = keyof typeof programIconMap;

export type ProgramSummary = {
    id: string;
    slug: string;
    title: string;
    description: string;
    duration: string;
    achievement?: string;
    participants?: string;
    locations?: string;
    image: string;
    alt?: string;
    iconKey: ProgramIconKey;
    tagColor?: string;
    tagTextColor?: string;
};

export type ProgramDetail = ProgramSummary & {
    longDescription: string;
    heroImage: string;
    startDate: string;
    cost: string;
    objectives: string[];
    curriculum: { module: string; topics: string[] }[];
    features: string[];
    impact: { number: string; description: string; stories: string[] };
    requirements: string[];
    nextSteps: string[];
};

const programs: ProgramDetail[] = [
    {
        id: "1",
        slug: "caregiver-training",
        title: "Caregiver Training Program",
        description: "Comprehensive training for community caregivers focusing on essential care skills, emotional support, and community health practices.",
        longDescription: "Our Caregiver Training Program is designed to equip community members with the essential skills needed to provide dignified, effective care to vulnerable populations. Through hands-on training, theoretical education, and ongoing mentorship, we build a network of skilled caregivers who serve as the backbone of community health systems.",
        iconKey: "Heart",
        image: caregiverTraining,
        heroImage: care,
        duration: "3 months",
        participants: "500+ caregivers trained",
        locations: "15 communities across Africa",
        startDate: "Rolling admissions",
        cost: "Free for participants",
        objectives: [
            "Build essential caregiving skills in community members",
            "Establish sustainable support networks for vulnerable populations",
            "Improve health outcomes through trained caregiver interventions",
            "Create pathways for economic empowerment through caregiving roles"
        ],
        curriculum: [
            { module: "Foundations of Care", topics: ["Understanding vulnerability and dignity", "Basic health and safety", "Communication skills", "Cultural sensitivity"] },
            { module: "Practical Care Skills", topics: ["Personal care assistance", "Medication management", "Mobility support", "Emergency response"] },
            { module: "Mental Health Support", topics: ["Recognizing mental health needs", "Providing emotional support", "Crisis intervention", "Self-care for caregivers"] },
            { module: "Community Health", topics: ["Health promotion", "Disease prevention", "Resource navigation", "Advocacy and rights"] }
        ],
        features: [
            "Hands-on training with experienced instructors",
            "Mental health support techniques",
            "Community health education",
            "Certification upon completion",
            "Ongoing mentorship program",
            "Job placement assistance",
            "Peer support networks",
            "Continuing education opportunities"
        ],
        impact: {
            number: "2,500+",
            description: "families supported through trained caregivers",
            stories: [
                "Mary, a program graduate, now supports 15 elderly community members and has trained 3 additional caregivers.",
                "The program has reduced hospital readmissions by 30% in participating communities.",
                "95% of program graduates report increased confidence in providing care."
            ]
        },
        requirements: [
            "Must be 18 years or older",
            "Basic literacy skills",
            "Commitment to complete full program",
            "Willingness to serve community for minimum 6 months post-training"
        ],
        nextSteps: [
            "Application and interview process",
            "Background check and references",
            "Orientation and program kickoff",
            "Ongoing assessment and certification"
        ],
        tagColor: "bg-[#00A5B8]/10",
        tagTextColor: "text-[#00A5B8]",
        achievement: "500+ caregivers trained",
        alt: "African woman teaching children in class"
    },
    {
        id: "2",
        slug: "community-health-education",
        title: "Community Health Education",
        description: "Educational initiatives focused on preventive healthcare, nutrition, and wellness practices for sustainable community health.",
        longDescription: "Our Community Health Education program empowers entire communities with knowledge and resources to maintain optimal health and well-being. Through workshops, peer education, and community-led initiatives, we build health literacy and promote preventive care practices that reduce disease burden and improve quality of life.",
        iconKey: "Users",
        image: care,
        heroImage: caregiverTraining,
        duration: "Ongoing",
        participants: "1,000+ individuals reached monthly",
        locations: "20 communities across Africa",
        startDate: "Year-round programming",
        cost: "Free community workshops",
        objectives: [
            "Increase health literacy across all age groups",
            "Promote preventive healthcare practices",
            "Reduce preventable diseases and health complications",
            "Build community capacity for health promotion"
        ],
        curriculum: [
            { module: "Preventive Healthcare", topics: ["Vaccination importance", "Regular health screenings", "Early disease detection", "Health risk assessment"] },
            { module: "Nutrition and Wellness", topics: ["Balanced diet planning", "Food safety", "Child nutrition", "Managing malnutrition"] },
            { module: "Maternal and Child Health", topics: ["Prenatal care", "Safe delivery practices", "Newborn care", "Child development"] },
            { module: "Disease Prevention", topics: ["Hygiene practices", "Water sanitation", "Infectious disease prevention", "Chronic disease management"] }
        ],
        features: [
            "Interactive community workshops",
            "Peer educator training",
            "Health screening programs",
            "Educational material distribution",
            "Mobile health clinics",
            "Community health fairs",
            "Digital health resources",
            "Follow-up support programs"
        ],
        impact: {
            number: "85%",
            description: "improvement in community health knowledge",
            stories: [
                "Vaccination rates increased by 60% in participating communities.",
                "Malnutrition cases decreased by 40% among children under 5.",
                "Community members now lead their own health education sessions."
            ]
        },
        requirements: [
            "Open to all community members",
            "No educational prerequisites",
            "Regular workshop attendance encouraged",
            "Commitment to sharing knowledge with others"
        ],
        nextSteps: [
            "Register for upcoming workshops",
            "Join community health committees",
            "Become a peer educator",
            "Access ongoing health resources"
        ],
        tagColor: "bg-[#FCB339]/10",
        tagTextColor: "text-[#FCB339]",
        achievement: "85% health improvement",
        alt: "Scene from care job with senior patient being taken care of"
    },
    {
        id: "3",
        slug: "youth-leadership",
        title: "Youth Leadership Development",
        description: "Empowering young people to become leaders in their communities through leadership training, mentorship, and project implementation.",
        longDescription: "Our Youth Leadership Development program recognizes young people as catalysts for positive change in their communities. Through comprehensive leadership training, mentorship, and hands-on project experience, we develop the next generation of community leaders who are equipped to address local challenges and drive sustainable development.",
        iconKey: "Target",
        image: hero,
        heroImage: gg,
        duration: "6 months intensive + ongoing support",
        participants: "200+ youth leaders developed",
        locations: "10 communities across Africa",
        startDate: "Quarterly cohorts",
        cost: "Free with scholarship opportunities",
        objectives: [
            "Develop leadership skills in young people aged 16-25",
            "Create sustainable youth-led community projects",
            "Build networks of peer support and collaboration",
            "Prepare youth for future leadership roles"
        ],
        curriculum: [
            { module: "Leadership Fundamentals", topics: ["Leadership styles and principles", "Self-awareness and emotional intelligence", "Communication and public speaking", "Team building and collaboration"] },
            { module: "Project Management", topics: ["Project planning and design", "Resource mobilization", "Implementation strategies", "Monitoring and evaluation"] },
            { module: "Community Engagement", topics: ["Community needs assessment", "Stakeholder engagement", "Advocacy and campaigning", "Cultural sensitivity and inclusion"] },
            { module: "Social Innovation", topics: ["Problem identification and analysis", "Creative solution development", "Social entrepreneurship", "Scaling impact"] }
        ],
        features: [
            "Intensive leadership workshops",
            "One-on-one mentorship matching",
            "Hands-on project implementation",
            "Networking and peer support",
            "Scholarship and funding opportunities",
            "Alumni network access",
            "Continuing education pathways",
            "Leadership conferences and events"
        ],
        impact: {
            number: "150+",
            description: "community projects led by youth participants",
            stories: [
                "Youth participants have started 50+ small businesses in their communities.",
                "Program alumni now serve on local government committees and NGO boards.",
                "Youth-led projects have reached over 5,000 community members."
            ]
        },
        requirements: [
            "Ages 16-25 years",
            "Demonstrated community engagement",
            "Basic educational background",
            "Commitment to full program participation"
        ],
        nextSteps: [
            "Complete online application",
            "Participate in selection interviews",
            "Join orientation program",
            "Begin mentorship matching"
        ],
        tagColor: "bg-green-100",
        tagTextColor: "text-green-600",
        achievement: "150+ youth projects",
        alt: "African mother with little girl"
    },
    {
        id: "4",
        slug: "women-empowerment",
        title: "Women Empowerment Initiative",
        description: "Supporting women through skills training, economic opportunities, and advocacy for gender equality in care and community development.",
        longDescription: "Our Women Empowerment Initiative addresses the unique challenges faced by women in accessing economic opportunities and leadership roles. Through skills training, microfinance support, and advocacy programs, we work to break down barriers and create pathways for women to achieve economic independence and take on leadership roles in their communities.",
        iconKey: "Award",
        image: womenEmpowerment,
        heroImage: businessPartnership,
        duration: "12 months with ongoing support",
        participants: "300+ women empowered annually",
        locations: "12 communities across Africa",
        startDate: "Monthly intake",
        cost: "Free with microfinance options",
        objectives: [
            "Provide women with marketable skills and training",
            "Support women in starting income-generating activities",
            "Advocate for women's rights and gender equality",
            "Build women's leadership capacity in communities"
        ],
        curriculum: [
            { module: "Skills Development", topics: ["Vocational training options", "Business skills", "Financial literacy", "Digital literacy"] },
            { module: "Entrepreneurship", topics: ["Business plan development", "Market analysis", "Product development", "Customer service"] },
            { module: "Financial Management", topics: ["Personal finance management", "Savings and investment", "Microfinance options", "Credit management"] },
            { module: "Leadership and Advocacy", topics: ["Women's rights and law", "Leadership development", "Public speaking", "Community organizing"] }
        ],
        features: [
            "Vocational skills training",
            "Business development support",
            "Microfinance and loans",
            "Peer support networks",
            "Leadership development workshops",
            "Legal rights education",
            "Childcare support during training",
            "Market linkage assistance"
        ],
        impact: {
            number: "70%",
            description: "of participants started income-generating activities",
            stories: [
                "Sarah increased her family income by 300% through her tailoring business.",
                "Women participants now hold 40% of community leadership positions.",
                "Average participant income increased from $50 to $150 per month."
            ]
        },
        requirements: [
            "Women aged 18 and above",
            "Basic literacy skills preferred",
            "Commitment to program completion",
            "Willingness to support other women"
        ],
        nextSteps: [
            "Attend information sessions",
            "Complete skills assessment",
            "Join training cohorts",
            "Access ongoing business support"
        ],
        tagColor: "bg-purple-100",
        tagTextColor: "text-purple-600",
        achievement: "70% started businesses",
        alt: "Black businesswoman shaking hands with male partner"
    }
];

export function getPrograms(): ProgramDetail[] {
    return programs;
}

export function getProgramByIdOrSlug(idOrSlug: string): ProgramDetail | undefined {
    return programs.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export default programs;


