import React, { useEffect } from 'react';
import type { MetaFunction } from 'react-router';
import bgImage from '~/components/images/bg-image.avif';
import logo from '~/components/images/Cara logo-01.png'

// meta for about page
export const meta: MetaFunction = () => {
    return [
        { title: "Cara | About" },
        { name: "description", content: "Cara is a platform that connects families with caregivers and provides a range of services to support families in caring for their loved ones." },
        { name: "keywords", content: "Cara, Care, Africa, Caregivers, Caregiving, Care Economy" },
        { name: "author", content: "Cara" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "og:title", content: "Cara | About" },
        { name: "og:description", content: "Cara is a platform that connects families with caregivers and provides a range of services to support families in caring for their loved ones." },
        { name: "og:image", content: logo }
    ];
};

const About = () => {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll animation classes
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section
                className="relative min-h-[100vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="animate-fade-in-up">
                        <h1 className="font-heading text-5xl cara-text-teal lg:text-6xl font-bold mb-6 hero-text-shadow">
                            About CARA
                        </h1>
                        <div className="w-32 h-1 bg-cara-orange mx-auto rounded-full mb-8"></div>
                        <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
                            Building inclusive, dignified, and sustainable systems of care across Africa
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute top-1/2 left-5 w-12 h-12 border-2 border-white/30 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute top-1/3 right-5 w-14 h-14 border-2 border-white/30 rounded-full animate-pulse hidden lg:block"></div>
            </section>

            {/* Main About Content */}
            <section className="py-20 lg:py-32 bg-white animate-on-scroll">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Organization Introduction */}
                    <div className="max-w-4xl mx-auto mb-20 animate-on-scroll">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                                Care Access for Resilient Africa
                                <span className="cara-text-orange"> (CARA)</span>
                            </h2>
                            <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                                is a <span className="font-semibold cara-text-teal">pan-African initiative</span> committed to building inclusive, dignified, and sustainable systems of care, from the first breath to life's final chapters.
                            </p>
                        </div>
                    </div>

                    {/* Core Belief Section */}
                    <div className="mb-20 animate-on-scroll">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-gradient-to-r from-gray-100 to-white !shadow-md p-8 lg:p-12 rounded-2xl ">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">💡</span>
                                    </div>
                                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold cara-text-teal mb-6">
                                        Our Core Belief
                                    </h3>
                                </div>
                                <p className="text-lg lg:text-xl leading-relaxed text-gray-700 text-center">
                                    We believe that care is the <span className="font-semibold cara-text-orange">invisible infrastructure</span> that holds families, health systems, and communities together. However, across Africa, access to consistent, quality care remains fragmented and undervalued.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Commitment Section */}
                    <div className="mb-20 animate-on-scroll">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h3 className="font-heading text-2xl lg:text-3xl font-semibold  mb-6">
                                    Our Commitment to Change
                                </h3>
                                <p className="text-lg lg:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                                    CARA is committed to changing this narrative. We bring together caregivers, families, institutions, and changemakers to co-create a care model that is:
                                </p>
                            </div>

                            {/* Care Model Characteristics */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {/* Compassionate */}
                                <div className="bg-white !shadow-md p-6 rounded-xl  hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">❤️</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 cara-text-teal">
                                        Compassionate at its Core
                                    </h4>
                                    <p className="text-gray-600 text-center text-sm">
                                        Rooted in empathy and human dignity
                                    </p>
                                </div>

                                {/* Locally Led */}
                                <div className="bg-white !shadow-md p-6 rounded-xl  hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">🏘️</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 cara-text-orange">
                                        Locally Led
                                    </h4>
                                    <p className="text-gray-600 text-center text-sm">
                                        Driven by community voices and needs
                                    </p>
                                </div>

                                {/* Community-Driven */}
                                <div className="bg-white !shadow-md p-6 rounded-xl  hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">👥</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 cara-text-teal">
                                        Community-Driven
                                    </h4>
                                    <p className="text-gray-600 text-center text-sm">
                                        Built by and for the communities we serve
                                    </p>
                                </div>

                            </div>
                            <div className='grid grid-cols-2 gap-4 mt-10'>
                                {/* System-Ready */}
                                <div className="bg-white !shadow-md p-6 rounded-xl  hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">⚙️</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 cara-text-orange">
                                        System-Ready
                                    </h4>
                                    <p className="text-gray-600 text-center text-sm">
                                        Designed to integrate with existing systems
                                    </p>
                                </div>

                                {/* Scalable */}
                                <div className="bg-white !shadow-md p-6 rounded-xl  hover-lift animate-on-scroll md:col-span-2 lg:col-span-1">
                                    <div className="w-14 h-14 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">📈</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 cara-text-teal">
                                        Scalable for Impact
                                    </h4>
                                    <p className="text-gray-600 text-center text-sm">
                                        Built for broader, sustainable impact
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* Our Story Section */}
                    <div className="mb-20 animate-on-scroll">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h3 className="font-heading text-3xl lg:text-4xl font-bold cara-text-teal mb-6">
                                    Our Story
                                </h3>
                            </div>

                            {/* Personal Narrative */}
                            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl !shadow-md mb-12">
                                <div className="max-w-4xl mx-auto">
                                    <blockquote className="text-lg lg:text-xl leading-relaxed text-gray-700 italic">
                                        <p className="mb-6">
                                            "I didn't stumble upon care as an idea. I lived it — across hospitals, homes, and systems that weren't built to carry its weight."
                                        </p>
                                        <p className="mb-6">
                                            As a public health professional working across communities, I saw time and again what doesn't make the headlines:
                                        </p>
                                        <ul className="space-y-3 mb-6 not-italic">
                                            <li className="flex items-start gap-3">
                                                <span className="cara-text-orange text-lg">•</span>
                                                <span>A mother, discharged 24 hours after delivery, with no postnatal support.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="cara-text-teal text-lg">•</span>
                                                <span>A grandmother in a rural village caring for three children under six, one with a disability.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="cara-text-orange text-lg">•</span>
                                                <span>A girl skipping school to care for her sick father.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="cara-text-teal text-lg">•</span>
                                                <span>And health workers, burned out, without enough hands or community backup.</span>
                                            </li>
                                        </ul>
                                        <p className="mb-6 font-semibold cara-text-orange text-xl">
                                            "Everywhere I turned, someone was giving care. But no one was calling it work. No one was calling it infrastructure."
                                        </p>
                                        <p className="mb-6">
                                            That reality haunted me, and it challenged me. Because behind each of these moments was a question that wouldn't go away:
                                        </p>
                                        <p className="text-center text-xl lg:text-2xl font-semibold cara-text-teal mb-4">
                                            What if care wasn't an afterthought?
                                        </p>
                                        <p className="text-center text-lg lg:text-xl mb-6">
                                            What if it were planned, protected, and funded, just like roads, power, or schools?
                                        </p>
                                        <p className="text-center font-semibold cara-text-orange text-xl">
                                            "That question became the spark for Care Access for Resilient Africa."
                                        </p>
                                    </blockquote>
                                </div>
                            </div>

                            {/* Vision and Mission Section */}
                            <div className="mb-20 animate-on-scroll py-10">
                                <div className="max-w-5xl mx-auto">
                                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                                        {/* Our Vision */}
                                        <div className="bg-white p-8 lg:p-10 rounded-2xl !shadow-md hover-lift">
                                            <div className="text-center mb-6">
                                                <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-white text-2xl">👁️</span>
                                                </div>
                                                <h3 className="font-heading text-2xl lg:text-3xl font-bold cara-text-teal mb-4">
                                                    Our Vision
                                                </h3>
                                            </div>
                                            <p className="text-lg leading-relaxed text-gray-700 text-center">
                                                A future where every person, from birth to old age, is supported by care that is
                                                <span className="font-semibold cara-text-teal"> visible</span>,
                                                <span className="font-semibold cara-text-orange"> valued</span>, and
                                                <span className="font-semibold cara-text-teal"> accessible</span>.
                                            </p>
                                        </div>

                                        {/* Our Mission */}
                                        <div className="bg-white p-8 lg:p-10 rounded-2xl !shadow-md hover-lift">
                                            <div className="text-center mb-6">
                                                <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-white text-2xl">🎯</span>
                                                </div>
                                                <h3 className="font-heading text-2xl lg:text-3xl font-bold cara-text-orange mb-4">
                                                    Our Mission
                                                </h3>
                                            </div>
                                            <p className="text-lg leading-relaxed text-gray-700 text-center">
                                                To transform how care is delivered, valued, and sustained by
                                                <span className="font-semibold cara-text-orange"> empowering caregivers</span>,
                                                <span className="font-semibold cara-text-teal"> connecting families</span>, and
                                                <span className="font-semibold cara-text-orange"> integrating care</span> into national development systems.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Vision Statement */}
                            <div className="bg-white p-8 lg:p-10 rounded-2xl !shadow-md mb-12 animate-on-scroll">
                                <div className="text-center mb-6">
                                    <h4 className="font-heading text-2xl font-semibold cara-text-teal mb-4">We started with a vision:</h4>
                                </div>
                                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
                                    <p>
                                        To help build systems that don't let people fall through the cracks during life's hardest moments.
                                    </p>
                                    <p>
                                        To make care <span className="font-semibold cara-text-teal">visible</span>, <span className="font-semibold cara-text-orange">valuable</span>, and <span className="font-semibold cara-text-teal">viable</span>, not just for those receiving it, but for those giving it too.
                                    </p>
                                    <p>
                                        From postpartum support and early childhood development to disability inclusion and elder care, we're designing models that blend <span className="font-semibold cara-text-orange">compassion with structure</span>, because it takes both to build dignity.
                                    </p>
                                    <p>
                                        We work with caregivers, families, professionals, and institutions to turn care from a private burden into a <span className="font-semibold cara-text-teal">shared public good</span>, embedded in health systems, workforce strategies, and social protection frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* The Opportunity Section */}
                    <div className="mb-20 animate-on-scroll">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-gradient-to-r from-cara-teal/10 to-cara-orange/10 p-8 lg:p-12 rounded-2xl !shadow-md">
                                <div className="text-center mb-8">
                                    <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                                        <span className="cara-text-teal">🌍</span> The Opportunity Before Us
                                    </h3>
                                </div>
                                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
                                    <p>
                                        Africa is the youngest continent, but also one facing rising chronic illness, ageing populations, and unmet disability needs.
                                    </p>
                                    <p>
                                        At the same time, millions of women and young people are looking for meaningful, dignified work.
                                    </p>
                                    <div className="text-center py-6">
                                        <p className="text-2xl lg:text-3xl font-bold cara-text-orange italic">
                                            "What if the care gap and the jobs gap could solve each other?"
                                        </p>
                                    </div>
                                    <p>
                                        This is what CARA believes. Care can be the foundation of <span className="font-semibold cara-text-teal">inclusive recovery</span>, <span className="font-semibold cara-text-orange">equitable development</span>, and <span className="font-semibold cara-text-teal">resilient futures</span>.
                                    </p>
                                    <p>
                                        And we don't have to start from scratch — we have culture, compassion, and community already at the centre. What we need is structure, support, and shared commitment.
                                    </p>
                                    <div className="text-center pt-6">
                                        <p className="text-xl font-semibold cara-text-teal">
                                            This is our call. Not just to care more, but to care smarter and together.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div className="mb-20 animate-on-scroll">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h3 className="font-heading text-3xl lg:text-4xl font-bold cara-text-teal mb-6">
                                    Our Values
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {/* Dignity First */}
                                <div className="bg-white p-6 lg:p-8 rounded-2xl !shadow-md hover-lift animate-on-scroll">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">1</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold cara-text-teal mb-3">
                                            Dignity First
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <p>We believe every life deserves care, and every caregiver deserves respect.</p>
                                        <p className="text-sm">We uphold dignity in every touchpoint — from the home to the health system.</p>
                                    </div>
                                </div>

                                {/* Equity in Action */}
                                <div className="bg-white p-6 lg:p-8 rounded-2xl !shadow-md hover-lift animate-on-scroll">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">2</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold cara-text-orange mb-3">
                                            Equity in Action
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <p>Care must not depend on luck, location, or gender.</p>
                                        <p className="text-sm">We prioritise inclusion, especially for women, children, persons with disabilities, and the elderly.</p>
                                    </div>
                                </div>

                                {/* Community Power */}
                                <div className="bg-white p-6 lg:p-8 rounded-2xl !shadow-md hover-lift animate-on-scroll">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">3</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold cara-text-teal mb-3">
                                            Community Power
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <p>Solutions are stronger when they're homegrown.</p>
                                        <p className="text-sm">We listen, co-create, and build with the communities we serve, not for them.</p>
                                    </div>
                                </div>

                                {/* Courage to Rethink */}
                                <div className="bg-white p-6 lg:p-8 rounded-2xl !shadow-md hover-lift animate-on-scroll">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">4</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold cara-text-orange mb-3">
                                            Courage to Rethink
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <p>We challenge broken systems. We dare to reimagine care as infrastructure, not charity.</p>
                                        <p className="text-sm">We work to make it sustainable and systemic.</p>
                                    </div>
                                </div>

                                {/* Compassion with Competence */}
                                <div className="bg-white p-6 lg:p-8 rounded-2xl !shadow-md hover-lift animate-on-scroll">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">5</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold cara-text-teal mb-3">
                                            Compassion with Competence
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <p>Love is not enough — care needs structure.</p>
                                        <p className="text-sm">We combine heart with tools, training, and data to deliver care that works.</p>
                                    </div>
                                </div>

                                {/* Accountability to the Invisible */}
                                <div className="bg-white p-6 lg:p-8 rounded-2xl !shadow-md hover-lift animate-on-scroll">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">6</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold cara-text-orange mb-3">
                                            Accountability to the Invisible
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <p>We speak for those unseen, unheard, and underserved.</p>
                                        <p className="text-sm">Whether caregiver or recipient, no one should be invisible in a system designed for all.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center animate-on-scroll">
                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl !shadow-md max-w-4xl mx-auto">
                            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6 cara-text-teal">
                                Join Us in Transforming Care Across Africa
                            </h3>
                            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-700">
                                Together, we can build a future where quality care is accessible, valued, and available to every African community.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="cara-btn-primary font-heading font-semibold px-8 py-3">
                                    Learn About Our Work
                                </button>
                                <button className="border-2 border-cara-orange rounded-xl font-heading text-cara-orange font-heading px-8 py-3 hover:bg-cara-orange hover:text-white transition-all duration-300">
                                    Partner With Us
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;