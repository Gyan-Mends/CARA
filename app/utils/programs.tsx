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
        slug: "mothers-first",
        title: "Mothers First",
        description: "Mothers First is CARA's flagship postpartum programme, focused on the first 40 days after childbirth. Trained caregivers provide home visits, maternal education, emotional support, and newborn surveillance to promote safe recovery and bonding.",
        longDescription: "Mothers First is CARA's flagship postpartum programme, focused on the first 40 days after childbirth. Trained caregivers provide home visits, maternal education, emotional support, and newborn surveillance to promote safe recovery and bonding. This critical intervention period ensures mothers and newborns receive the care they need during the most vulnerable time.",
        iconKey: "Heart",
        image: care,
        heroImage: care,
        duration: "40 days postpartum",
        participants: "50+ new mothers supported monthly",
        locations: "15 communities across Africa",
        startDate: "Ongoing enrollment",
        cost: "Free for all participants",
        objectives: [
            "Support maternal recovery during the first 40 days postpartum",
            "Promote safe newborn health and development",
            "Strengthen mother-infant bonding",
            "Prevent postpartum complications through early detection"
        ],
        curriculum: [
            { module: "Postpartum Recovery", topics: ["Physical recovery monitoring", "Warning signs recognition", "Emotional wellbeing", "Self-care practices"] },
            { module: "Newborn Care", topics: ["Feeding support", "Growth monitoring", "Health surveillance", "Development milestones"] },
            { module: "Mother-Baby Bonding", topics: ["Attachment promotion", "Communication techniques", "Stress management", "Family integration"] },
            { module: "Health Education", topics: ["Nutrition guidance", "Hygiene practices", "Family planning", "Healthcare access"] }
        ],
        features: [
            "Home visits during the first 40 days after childbirth",
            "Support for maternal recovery, newborn health, and nutrition",
            "Early surveillance to prevent complications and promote bonding"
        ],
        impact: {
            number: "95%",
            description: "of mothers report improved confidence in newborn care",
            stories: [
                "Maternal complications reduced by 40% in participating communities.",
                "Exclusive breastfeeding rates increased by 70% at 6 months.",
                "Postpartum depression cases identified and supported early increased by 85%."
            ]
        },
        requirements: [
            "New mothers within first week postpartum",
            "Willingness to receive home visits",
            "Commitment to full 40-day program",
            "Access to basic communication for emergency contact"
        ],
        nextSteps: [
            "Enrollment during pregnancy or immediately postpartum",
            "Initial assessment and care plan development",
            "Regular home visits and support",
            "Graduation and transition to ongoing community support"
        ],
        tagColor: "bg-pink-100",
        tagTextColor: "text-pink-600",
        achievement: "95% maternal satisfaction",
        alt: "Scene from care job with senior patient being taken care of"
    },
    {
        id: "3",
        slug: "inclusive-care",
        title: "Inclusive Care",
        description: "CARA's Inclusive Care programme empowers families and schools to provide dignified support for children and people with special needs. We strengthen caregiving at home while promoting inclusive education in classrooms, ensuring that every child has the opportunity to learn and thrive.",
        longDescription: "CARA's Inclusive Care programme empowers families and schools to provide dignified support for children and people with special needs. We strengthen caregiving at home while promoting inclusive education in classrooms, ensuring that every child has the opportunity to learn and thrive. Through comprehensive support systems, we create inclusive environments where all individuals are valued and supported.",
        iconKey: "Users",
        image: gg,
        heroImage: gg,
        duration: "12 months with ongoing support",
        participants: "20+ families and 10+ schools supported",
        locations: "12 communities across Africa",
        startDate: "Monthly intake",
        cost: "Free for all participants",
        objectives: [
            "Empower families to provide dignified support for children with special needs",
            "Strengthen inclusive education in schools through SENCO units and teacher training",
            "Create support networks linking families to essential services",
            "Promote inclusive practices in communities"
        ],
        curriculum: [
            { module: "Family Support", topics: ["Understanding special needs", "Home-based care strategies", "Advocacy skills", "Emotional support techniques"] },
            { module: "School Integration", topics: ["SENCO unit establishment", "Teacher training programs", "Care aide development", "Classroom adaptations"] },
            { module: "Service Linkages", topics: ["Healthcare connections", "Educational resources", "Social protection access", "Community networks"] },
            { module: "Inclusive Practices", topics: ["Dignity-centered care", "Community awareness", "Stigma reduction", "Rights advocacy"] }
        ],
        features: [
            "Training and guidance for parents of children with special needs",
            "Support to schools through SENCO units, teacher training, and care aides",
            "Linking families to health, education, and social protection services"
        ],
        impact: {
            number: "85%",
            description: "of families report improved confidence in caring for children with special needs",
            stories: [
                "School enrollment for children with disabilities increased by 60% in participating communities.",
                "Family stress levels reduced by 45% after program participation.",
                "15 new SENCO units established, supporting over 300 children with special needs."
            ]
        },
        requirements: [
            "Families with children or members with special needs",
            "School staff interested in inclusive education",
            "Commitment to full program participation",
            "Willingness to advocate for inclusive practices"
        ],
        nextSteps: [
            "Initial assessment and needs identification",
            "Enrollment in appropriate program tracks",
            "Ongoing training and support sessions",
            "Connection to long-term support networks"
        ],
        tagColor: "bg-blue-100",
        tagTextColor: "text-blue-600",
        achievement: "15+ SENCO units established",
        alt: "African mother with little girl"
    },
    {
        id: "4",
        slug: "carebridge",
        title: "CareBridge",
        description: "CareBridge is CARA's community outreach and linkage platform. It identifies households with unmet care needs and connects them to essential health, education, and social services. By bridging the gap between families and formal systems, CareBridge ensures that vulnerable individuals, from new mothers to children with special needs and the elderly, are not left behind.",
        longDescription: "CareBridge is CARA's community outreach and linkage platform. It identifies households with unmet care needs and connects them to essential health, education, and social services. By bridging the gap between families and formal systems, CareBridge ensures that vulnerable individuals, from new mothers to children with special needs and the elderly, are not left behind. Through systematic household mapping and comprehensive referral systems, we create pathways to care that reach every corner of the community.",
        iconKey: "Target",
        image: businessPartnership,
        heroImage: businessPartnership,
        duration: "Ongoing community engagement",
        participants: "100+ households assessed monthly",
        locations: "25 communities across Africa",
        startDate: "Continuous enrollment",
        cost: "Free community service",
        objectives: [
            "Identify households with unmet care needs through systematic mapping",
            "Connect vulnerable individuals to appropriate health, education, and social services",
            "Ensure continuity of care from facilities to homes",
            "Bridge gaps between families and formal support systems"
        ],
        curriculum: [
            { module: "Community Assessment", topics: ["Household mapping techniques", "Vulnerability identification", "Needs assessment tools", "Data collection methods"] },
            { module: "Service Navigation", topics: ["Healthcare systems", "Educational resources", "Social protection programs", "NGO partnerships"] },
            { module: "Referral Management", topics: ["Referral protocols", "Follow-up procedures", "Case management", "Documentation systems"] },
            { module: "Community Engagement", topics: ["Outreach strategies", "Trust building", "Cultural sensitivity", "Communication skills"] }
        ],
        features: [
            "Mapping households with unmet care needs",
            "Referrals to clinics, schools, and social protection services",
            "Follow-up care to ensure continuity from facilities to homes"
        ],
        impact: {
            number: "80%",
            description: "of referred families successfully access needed services",
            stories: [
                "Over 500 families connected to essential services in the past year.",
                "Emergency medical referrals reduced response time by 50%.",
                "85% of referred children with special needs now enrolled in appropriate educational programs."
            ]
        },
        requirements: [
            "No specific requirements - open to all community members",
            "Households identified through community mapping",
            "Willingness to engage with referral services",
            "Consent for follow-up support"
        ],
        nextSteps: [
            "Community assessment and household identification",
            "Needs evaluation and service matching",
            "Referral coordination and facilitation",
            "Follow-up monitoring and ongoing support"
        ],
        tagColor: "bg-orange-100",
        tagTextColor: "text-orange-600",
        achievement: "500+ families connected to services",
        alt: "Business partners closing contract"
    }
];

export function getPrograms(): ProgramDetail[] {
    return programs;
}

export function getProgramByIdOrSlug(idOrSlug: string): ProgramDetail | undefined {
    return programs.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export default programs;


