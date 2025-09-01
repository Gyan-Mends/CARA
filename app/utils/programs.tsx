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
        description: "We empower youth and women as caregivers through practical training for families, school aides, and volunteers, with a focus on newborn care, disability inclusion, and support for the elderly.",
        longDescription: "We empower youth and women as caregivers through practical training for families, school aides, and volunteers, with a focus on newborn care, disability inclusion, and support for the elderly. Through hands-on training and ongoing mentorship, we build a network of skilled caregivers who serve as the backbone of community health systems.",
        iconKey: "Heart",
        image: care,
        heroImage: care,
        duration: "3 months",
        participants: "25+ caregivers trained",
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
            "Tailored modules on postpartum care, child development, disability support, and eldercare",
            "Certification of trained caregivers to improve employability and recognition",
            "Ongoing mentorship and refresher sessions to sustain caregiver competence"
        ],
        impact: {
            number: "20+",
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
        achievement: "20+ caregivers trained",
        alt: "African woman teaching children in class"
    },
    {
        id: "2",
        slug: "community-based-support",
        title: "Community-Based Support",
        description: "We equip local caregivers to extend follow-up from health facilities to households, ensuring vulnerable families are linked to health, education, and social services.",
        longDescription: "We equip local caregivers to extend follow-up from health facilities to households, ensuring vulnerable families are linked to health, education, and social services. Through comprehensive community outreach and support systems, we bridge the gap between formal healthcare and home-based care.",
        iconKey: "Users",
        image: caregiverTraining,
        heroImage: caregiverTraining,
        duration: "Ongoing",
        participants: "30+ individuals reached monthly",
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
            "Postpartum home visits and follow-up for new mothers and infants",
            "Household mapping to identify unmet care needs in communities",
            "Referral pathways connecting families to clinics, schools, and social protection services"
        ],
        impact: {
            number: "25%",
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
        achievement: "15% health improvement",
        alt: "Scene from care job with senior patient being taken care of"
    },
    {
        id: "3",
        slug: "inclusive-education-support",
        title: "Inclusive Education Support",
        description: "We empower schools by establishing inclusive units and training teachers and care aides to support children with special needs.",
        longDescription: "We empower schools by establishing inclusive units and training teachers and care aides to support children with special needs. Through comprehensive training and support systems, we create educational environments where all children can thrive and reach their full potential.",
        iconKey: "Target",
        image: caregiverTraining,
        heroImage: gg,
        duration: "6 months intensive + ongoing support",
        participants: "15+ schools with inclusive units",
        locations: "10 communities across Africa",
        startDate: "Quarterly cohorts",
        cost: "Free with scholarship opportunities",
        objectives: [
            "Establish inclusive education units in schools",
            "Train teachers and aides in special needs support",
            "Create accessible learning environments for all children",
            "Build community support for inclusive education"
        ],
        curriculum: [
            { module: "Inclusive Education Foundations", topics: ["Understanding special needs", "Disability awareness and inclusion", "Individual education planning", "Classroom adaptation techniques"] },
            { module: "Support Strategies", topics: ["Learning support methods", "Assistive technologies", "Behavioral management", "Communication aids"] },
            { module: "Teacher and Aide Training", topics: ["Special needs identification", "Differentiated instruction", "Collaborative teaching", "Parent-teacher collaboration"] },
            { module: "School Environment", topics: ["Accessible infrastructure", "Inclusive policies", "Peer support systems", "Community engagement"] }
        ],
        features: [
            "Creation of SENCO (Special Educational Needs Coordinator) units within schools",
            "Training for teachers, school aides, and peer mentors on inclusive education",
            "Collaboration with parents and communities to foster supportive learning environments"
        ],
        impact: {
            number: "15+",
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
        achievement: "10+ youth projects",
        alt: "African mother with little girl"
    },
    {
        id: "4",
        slug: "advocacy-and-awareness",
        title: "Advocacy and Awareness",
        description: "We engage caregivers and communities in campaigns that champion dignity, disability inclusion, and community health as a human right.",
        longDescription: "We engage caregivers and communities in campaigns that champion dignity, disability inclusion, and community health as a human right. Through advocacy efforts and awareness campaigns, we work to change attitudes, influence policy, and create more inclusive communities for all.",
        iconKey: "Award",
        image: womenEmpowerment,
        heroImage: businessPartnership,
        duration: "12 months with ongoing support",
        participants: "50+ community advocates trained",
        locations: "12 communities across Africa",
        startDate: "Monthly intake",
        cost: "Free with microfinance options",
        objectives: [
            "Raise awareness on dignity, disability inclusion, and health rights",
            "Advocate for policy changes supporting vulnerable populations",
            "Build community capacity for advocacy and awareness",
            "Champion inclusive practices and community health as human rights"
        ],
        curriculum: [
            { module: "Advocacy Foundations", topics: ["Human rights principles", "Disability rights framework", "Community organizing", "Campaign development"] },
            { module: "Awareness Campaigns", topics: ["Message development", "Media engagement", "Community outreach", "Storytelling techniques"] },
            { module: "Policy Engagement", topics: ["Policy analysis", "Stakeholder mapping", "Government engagement", "Coalition building"] },
            { module: "Community Mobilization", topics: ["Grassroots organizing", "Event planning", "Volunteer coordination", "Impact measurement"] }
        ],
        features: [
            "Public awareness campaigns on disability inclusion, maternal health, and elder dignity",
            "Policy dialogues to influence government and institutional support for care systems",
            "Community forums and storytelling platforms that amplify caregiver and family voices"
        ],
        impact: {
            number: "30%",
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
        achievement: "20% started businesses",
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


