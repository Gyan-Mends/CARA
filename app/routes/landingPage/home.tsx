import React, { useEffect } from 'react';
import { Link, type MetaFunction } from 'react-router';
import logo from '~/components/images/Cara logo-01.png'
import image1 from '~/components/images/gallery1.avif'
import image2 from '~/components/images/gallery1.avif'
import image3 from '~/components/images/gallery1.avif'
import image4 from '~/components/images/gallery1.avif'
import image5 from '~/components/images/gallery1.avif'
import image6 from '~/components/images/gallery1.avif'

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

// meta for home page
export const meta: MetaFunction = () => {
    return [
        { title: "Cara | Home" },
        { name: "description", content: "Cara is a platform that connects families with caregivers and provides a range of services to support families in caring for their loved ones." },
        { name: "keywords", content: "Cara, Care, Africa, Caregivers, Caregiving, Care Economy" },
        { name: "author", content: "Cara" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "og:title", content: "Cara | Home" },
        { name: "og:description", content: "Cara is a platform that connects families with caregivers and provides a range of services to support families in caring for their loved ones." },
        { name: "og:image", content: logo }
    ];
};

const Home = () => {
    useEffect(() => {
        // First Gallery - Forward direction
        const splideElement1 = document.querySelector('#splide-gallery-1');
        if (splideElement1) {
            const splide1 = new Splide('#splide-gallery-1', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 3,
                perMove: 1,
                gap: '1.5rem',
                autoScroll: {
                    speed: 0.5,
                },
                breakpoints: {
                    1024: {
                        perPage: 2,
                    },
                    640: {
                        perPage: 1,
                    },
                },
            });
            
            splide1.mount({ AutoScroll });
        }

        // Second Gallery - Reverse direction
        const splideElement2 = document.querySelector('#splide-gallery-2');
        if (splideElement2) {
            const splide2 = new Splide('#splide-gallery-2', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 4,
                perMove: 1,
                gap: '1rem',
                autoScroll: {
                    speed: -0.3, // Negative speed for reverse direction
                },
                breakpoints: {
                    1024: {
                        perPage: 3,
                    },
                    640: {
                        perPage: 2,
                    },
                },
            });
            
            splide2.mount({ AutoScroll });
        }

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
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center cara-hero-bg">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10  text-white px-4 sm:px-6  max-w-6xl mx-auto">

                    {/* Main Tagline */}
                    <div className="mb-8 animate-fade-in-up flex flex-col gap-2 animation-delay-200">
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight  hero-text-shadow cara-floating">
                            Care that connects.

                        </h2>
                        <h2 className="font-heading cara-text-orange text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight  hero-text-shadow cara-floating-delayed">
                            Systems that sustain.

                        </h2>
                        <h2 className="font-heading cara-text-teal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight  hero-text-shadow ">
                            Lives that thrive.
                        </h2>

                    </div>

                    {/* Subtext */}
                    <div className="mb-12 animate-fade-in-up animation-delay-400">
                        <p className="text-lg sm:text-xl lg:text-md font-light leading-relaxed max-w-4xl mx-auto opacity-95">
                            Building Africa's care economy, one family, one caregiver, one system at a time.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6  items-center animate-fade-in-up animation-delay-600">
                        <button className="cara-btn-primary font-heading text-lg px-10 py-4 w-full sm:w-auto">
                            Join the Movement
                        </button>
                        <button className="cara-btn-secondary font-heading text-lg px-10 py-4 w-full sm:w-auto">
                            Get Involved
                        </button>
                    </div>

                    {/* Scroll Indicator */}

                </div>
                <Link to="#bePartOfTheSolution" >
                <div className="absolute bottom-8 mt-40 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
                </Link>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/60 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/60 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute top-1/2 left-5 w-12 h-12 border-2 border-white/60 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute top-1/3 right-5 w-14 h-14 border-2 border-white/60 rounded-full animate-pulse hidden lg:block"></div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 lg:py-32 bg-white animate-on-scroll">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold cara-text-teal mb-6">
                            Who We Are
                        </h2>
                        <div className="w-24 h-1 cara-bg-orange mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto">
                        {/* Organization Name & Mission */}
                        <div className="text-center mb-12 animate-on-scroll">
                            <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">
                                Care Access for Resilient Africa
                                <span className="cara-text-orange"> (CARA)</span>
                            </h3>
                            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                                is a mission-driven initiative that makes care <span className="font-semibold cara-text-teal">visible</span>, <span className="font-semibold cara-text-teal">connected</span>, and <span className="font-semibold cara-text-teal">valued</span> throughout all stages of life from postpartum and early childhood to disability and elder care.
                            </p>
                        </div>

                        {/* Core Values Grid */}
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                            {/* Our Commitment */}
                            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover-lift !shadow-md animate-on-scroll">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 cara-bg-teal rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-white text-xl font-bold">🤝</span>
                                    </div>
                                    <h4 className="font-heading text-xl font-semibold cara-text-teal">Our Commitment</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We are committed to closing the care gap by supporting families, uplifting caregivers, and strengthening the systems that unite our communities.
                                </p>
                            </div>

                            {/* Our Philosophy */}
                            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover-lift !shadow-md animate-on-scroll">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 cara-bg-orange rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-white text-xl font-bold">🏗️</span>
                                    </div>
                                    <h4 className="font-heading text-xl font-semibold cara-text-teal">Our Philosophy</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    At CARA, we believe care is not a private burden, it is <span className="font-semibold ">shared infrastructure</span>.
                                </p>
                            </div>
                        </div>

                        {/* What We Do */}
                        <div className="text-center bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl hover-lift !shadow-md animate-on-scroll">
                            <h4 className="font-heading text-2xl font-semibold mb-6 cara-text-teal">
                                What We Do
                            </h4>
                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                We build tools, train caregivers, and create pathways that link homes, health systems, and community resources, ensuring no one is overlooked in their most vulnerable moments.
                            </p>

                            {/* Action Items */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
                                    <div className="w-8 h-8 cara-bg-teal rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">🔧</span>
                                    </div>
                                    <span className="font-medium text-gray-700">Build Tools</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
                                    <div className="w-8 h-8 cara-bg-orange rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">👨‍🏫</span>
                                    </div>
                                    <span className="font-medium text-gray-700">Train Caregivers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
                                    <div className="w-8 h-8 cara-bg-teal rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">🌐</span>
                                    </div>
                                    <span className="font-medium text-gray-700">Create Pathways</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Care Matters Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 animate-on-scroll">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold cara-text-teal mb-6">
                            Why Care Matters
                        </h2>
                        <div className="w-24 h-1 cara-bg-orange mx-auto rounded-full"></div>
                    </div>

                    {/* Opening Statement */}
                    <div className="max-w-4xl mx-auto mb-16 animate-on-scroll">
                        <div className=" px-8 lg:px-12 ">
                            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 text-center">
                                Every second, in every home, village, city, and community, someone is providing care for another in need
                                <span className="font-semibold cara-text-teal"> quietly</span>,
                                <span className="font-semibold cara-text-teal"> without recognition</span>, and often
                                <span className="font-semibold cara-text-teal"> without support</span>.
                            </p>
                        </div>
                    </div>

                    {/* The Reality Section */}
                    <div className="mb-16 animate-on-scroll">
                        <div className="max-w-4xl mx-auto">
                            <div className=" rounded-2xl  overflow-hidden">
                                <div className=" p-6  ">
                                    <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                                        The Reality Across Africa
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                        Yet throughout Africa, this essential work remains:
                                    </p>

                                    {/* Four Key Issues */}
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm animate-on-scroll">
                                            <div className="w-12 h-12 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white text-xl">👁️‍🗨️</span>
                                            </div>
                                            <h4 className="font-semibold  mb-1">Invisible</h4>
                                        </div>
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm animate-on-scroll">
                                            <div className="w-12 h-12 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white text-xl">📋</span>
                                            </div>
                                            <h4 className="font-semibold  mb-1">Unplanned</h4>
                                        </div>
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm animate-on-scroll">
                                            <div className="w-12 h-12 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white text-xl">💰</span>
                                            </div>
                                            <h4 className="font-semibold  mb-1">Unpaid</h4>
                                        </div>
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm animate-on-scroll">
                                            <div className="w-12 h-12 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white text-xl">🤲</span>
                                            </div>
                                            <h4 className="font-semibold  mb-1">Unsupported</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact on Communities */}
                    <div className="mb-16 animate-on-scroll">
                        <div className="max-w-5xl mx-auto">
                            <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-center mb-12 cara-text-teal">
                                The Impact on Our Communities
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Families */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-blue-600 text-2xl">👨‍👩‍👧‍👦</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 text-gray-800">Families</h4>
                                    <p className="text-gray-600 text-center text-sm">Left to cope alone without adequate support systems</p>
                                </div>

                                {/* Children */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-green-600 text-2xl">👶</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 text-gray-800">Children</h4>
                                    <p className="text-gray-600 text-center text-sm">Miss out on critical early care and development</p>
                                </div>

                                {/* Elderly */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover-lift animate-on-scroll">
                                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-purple-600 text-2xl">👴</span>
                                    </div>
                                    <h4 className="font-heading text-lg font-semibold text-center mb-3 text-gray-800">Elderly</h4>
                                    <p className="text-gray-600 text-center text-sm">Age without necessary assistance and dignity</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4 mt-10'>
                            {/* Persons with Disabilities */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover-lift animate-on-scroll">
                                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-indigo-600 text-2xl">♿</span>
                                </div>
                                <h4 className="font-heading text-lg font-semibold text-center mb-3 text-gray-800">Persons with Disabilities</h4>
                                <p className="text-gray-600 text-center text-sm">Excluded from the systems they rely on most</p>
                            </div>

                            {/* Women */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover-lift animate-on-scroll">
                                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-pink-600 text-2xl">👩</span>
                                </div>
                                <h4 className="font-heading text-lg font-semibold text-center mb-3 text-gray-800">Women</h4>
                                <p className="text-gray-600 text-center text-sm">Bear the heaviest burden at the expense of their health, income, and opportunities</p>
                            </div>
                        </div>
                    </div>

                    {/* The Structural Challenge */}
                    <div className="max-w-4xl mx-auto animate-on-scroll">
                        <div className=" p-8 lg:p-12 rounded-2xl text-center ">
                            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                                More Than a Personal Struggle
                            </h3>
                            <p className="text-lg lg:text-xl leading-relaxed mb-6 opacity-95">
                                This is <span className="font-bold">a structural blind spot</span>.
                            </p>
                            <div className="bg-white/10  rounded-xl p-6">
                                <p className="text-lg leading-relaxed">
                                    Without support systems in making care <span className="font-semibold">visible</span>,
                                    <span className="font-semibold"> planned for</span>,
                                    <span className="font-semibold"> paid for</span>, and
                                    <span className="font-semibold"> prioritised</span>, the cycle continues,
                                    trapping families in poverty, widening gender gaps, and weakening community resilience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Impact Goals Section */}
            <section className="py-20 lg:py-32 bg-white animate-on-scroll">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold cara-text-teal mb-6">
                            Our Impact Goals
                        </h2>
                        <div className="w-24 h-1 cara-bg-orange mx-auto rounded-full"></div>
                    </div>

                    {/* Goals Grid */}
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">

                            {/* Goal 1: Expand Access */}
                            <div className="flex items-start gap-6 p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl hover-lift !shadow-md animate-on-scroll">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center">
                                        <span className="text-white text-2xl">🏡</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-3 ">
                                        Expand Access to Care
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Scaling community-based services that reach homes and neighbourhoods
                                    </p>
                                </div>
                            </div>

                            {/* Goal 2: Train Caregivers */}
                            <div className="flex items-start gap-6 p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl hover-lift !shadow-md animate-on-scroll">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center">
                                        <span className="text-white text-2xl">👩🏾‍⚕️</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-3 ">
                                        Train and Uplift Caregivers
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Creating dignified jobs and a new standard of professional care
                                    </p>
                                </div>
                            </div>

                            {/* Goal 3: Technology Solutions */}
                            <div className="flex items-start gap-6 p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl hover-lift !shadow-md animate-on-scroll">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center">
                                        <span className="text-white text-2xl">📱</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-3 ">
                                        Use Technology Solutions
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Matching care needs with trained providers, ensuring no one is left behind
                                    </p>
                                </div>
                            </div>

                            {/* Goal 4: Policy Change */}
                            <div className="flex items-start gap-6 p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl hover-lift !shadow-md animate-on-scroll">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center">
                                        <span className="text-white text-2xl">🏛️</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-3 ">
                                        Drive Policy Change
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Advocating for the integration of care into national plans and sustainable funding models
                                    </p>
                                </div>
                            </div>

                            {/* Goal 5: Empower Communities */}
                            <div className="flex items-start gap-6 p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl hover-lift !shadow-md animate-on-scroll">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center">
                                        <span className="text-white text-2xl">🌍</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-3 ">
                                        Empower Families and Communities
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Supporting families, women, and youth through the power of care work as a source of dignity, income, and resilience
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-16 animate-on-scroll">
                            <div className="">
                                <h3 className="font-heading text-2xl font-semibold mb-4 ">
                                    Join Us in Building Africa's Care Economy
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Together, we can create sustainable systems that make care visible, valued, and accessible to all.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="cara-btn-primary font-heading px-8 py-3">
                                        Partner With Us
                                    </button>
                                    <button className="border-2 border-cara-orange rounded-xl font-heading text-cara-orange font-heading px-8 py-3">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 lg:py-32 bg-white animate-on-scroll">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold cara-text-teal mb-6">
                            Our Impact in Action
                        </h2>
                        <div className="w-24 h-1 cara-bg-orange mx-auto rounded-full mb-6"></div>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Witness the transformation as we build sustainable care systems across African communities
                        </p>
                    </div>

                    {/* First Gallery - Forward Direction */}
                    <div className="mb-8">
                        <div id="splide-gallery-1" className="splide" aria-label="CARA Impact Gallery 1">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    <li className="splide__slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mx-2 h-64">
                                            <img src={image1} alt="Community Care Networks" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                                                    Community Care Networks
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Building connected support systems
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mx-2 h-64">
                                            <img src={image2} alt="Professional Training" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                                                    Professional Training
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Empowering caregivers with skills
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mx-2 h-64">
                                            <img src={image3} alt="Postpartum Support" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                                                    Postpartum Support
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Supporting mothers and newborns
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mx-2 h-64">
                                            <img src={image4} alt="Elder Care" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                                                    Dignified Elder Care
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Quality care for aging populations
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mx-2 h-64">
                                            <img src={image5} alt="Digital Innovation" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                                                    Digital Innovation
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Technology-driven solutions
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mx-2 h-64">
                                            <img src={image6} alt="Inclusive Care" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                                                    Inclusive Care
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Support for persons with disabilities
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Second Gallery - Reverse Direction */}
                    <div className="mb-8">
                        <div id="splide-gallery-2" className="splide" aria-label="CARA Impact Gallery 2">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image6} alt="Policy Transformation" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    Policy Transformation
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image5} alt="Youth Empowerment" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    Youth Empowerment
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image4} alt="Community Health" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    Community Health
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image3} alt="Family Support" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    Family Support
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image2} alt="Caregiver Networks" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    Caregiver Networks
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image1} alt="Rural Outreach" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    Rural Outreach
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="relative rounded-xl overflow-hidden shadow-md hover-lift mx-2 h-48">
                                            <img src={image6} alt="System Building" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <h4 className="font-heading text-sm font-semibold text-white">
                                                    System Building
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-20 animate-on-scroll">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold cara-text-teal mb-2">50+</div>
                                <div className="text-gray-600">Communities Reached</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold cara-text-orange mb-2">1000+</div>
                                <div className="text-gray-600">Caregivers Trained</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold cara-text-teal mb-2">15</div>
                                <div className="text-gray-600">Countries Engaged</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold cara-text-orange mb-2">100k+</div>
                                <div className="text-gray-600">Lives Impacted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Be Part of the Solution Section */}
            <section id="bePartOfTheSolution" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 animate-on-scroll">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold cara-text-teal mb-6">
                            Be Part of the Solution
                        </h2>
                        <div className="w-24 h-1 cara-bg-orange mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto">
                        {/* Stakeholder Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {/* Policymakers */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center animate-on-scroll">
                                <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🏛️</span>
                                </div>
                                <h3 className="font-heading text-lg font-semibold mb-2 text-gray-800">
                                    Policymakers
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Shape policies that prioritize care systems
                                </p>
                            </div>

                            {/* Health Workers */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center animate-on-scroll">
                                <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">👩‍⚕️</span>
                                </div>
                                <h3 className="font-heading text-lg font-semibold mb-2 text-gray-800">
                                    Health Workers
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lead community-based care initiatives
                                </p>
                            </div>

                            {/* Development Partners */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center animate-on-scroll">
                                <div className="w-16 h-16 cara-bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🤝</span>
                                </div>
                                <h3 className="font-heading text-lg font-semibold mb-2 text-gray-800">
                                    Development Partners
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Invest in sustainable care solutions
                                </p>
                            </div>

                            {/* Passionate Citizens */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover-lift text-center animate-on-scroll">
                                <div className="w-16 h-16 cara-bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">❤️</span>
                                </div>
                                <h3 className="font-heading text-lg font-semibold mb-2 text-gray-800">
                                    Passionate Citizens
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Advocate for change in your community
                                </p>
                            </div>
                        </div>

                        {/* Call to Action Content */}
                        <div className="text-center mb-12 animate-on-scroll">
                            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                                Whether you're a <span className="font-semibold cara-text-orange">policymaker</span>,
                                a <span className="font-semibold cara-text-teal">health worker</span>,
                                a <span className="font-semibold cara-text-orange">development partner</span>,
                                or a <span className="font-semibold cara-text-teal">passionate citizen</span>,
                                you have a role in shaping a future where care is visible, valued, and accessible to all.
                            </p>

                            <div className=" p-8 rounded-2xl mb-8">
                                <h3 className="font-heading text-2xl font-semibold mb-4 ">
                                    Your Impact Matters
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Join us in building systems that support families, empower caregivers,
                                    and strengthen communities across Africa.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll">
                            <button className="cara-btn-primary font-heading text-lg px-12 py-4 w-full sm:w-auto">
                                Join the Movement
                            </button>
                            <button className="border-2 border-cara-orange rounded-xl font-heading text-cara-orange font-heading px-12 py-4 w-full sm:w-auto hover:bg-cara-orange hover:text-white transition-all duration-300">
                                Partner With Us
                            </button>
                        </div>

                        {/* Additional Message */}
                        <div className="text-center mt-12 animate-on-scroll">
                            <p className="text-gray-600 italic">
                                Together, we can transform Africa's care landscape — one community at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;