import { Facebook, Twitter, Linkedin, Heart, Users, BookOpen, Building2, ChevronDown, ArrowDown } from "lucide-react";
import pay from "~/components/images/payment.png"
import { useState, useEffect } from "react";

// Paystack configuration
const PAYSTACK_PUBLIC_KEY = "pk_test_2a5fe03e4f2b193e9a6056d4683391e2aae03d21";

interface PaystackWindow extends Window {
    PaystackPop: {
        setup: (config: any) => {
            openIframe: () => void;
        };
    };
}

export default function SupportUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        donationType: '',
        amount: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [paystackLoaded, setPaystackLoaded] = useState(false);
    const [customAmount, setCustomAmount] = useState('');

    // Load Paystack script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        script.onload = () => {
            setPaystackLoaded(true);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, donationType: e.target.value }));
    };

    const initializePaystack = (amount: number, email: string = '', firstName: string = '', lastName: string = '', donationType: string = '', message: string = '') => {
        if (!paystackLoaded || !(window as any).PaystackPop) {
            alert('Payment system is still loading. Please try again in a moment.');
            setIsLoading(false);
            return;
        }

        const handler = (window as any).PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email: email || 'donor@caraafrica.org',
            amount: amount * 100, // Paystack expects amount in kobo (multiply by 100)
            currency: 'GHS', // Ghana Cedis
            ref: 'CARA_' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference
            firstname: firstName || 'Anonymous',
            lastname: lastName || 'Donor',
            metadata: {
                custom_fields: [
                    {
                        display_name: "Donation Type",
                        variable_name: "donation_type",
                        value: donationType || 'Quick Donation'
                    },
                    {
                        display_name: "Message",
                        variable_name: "message",
                        value: message || 'Quick donation via payment button'
                    }
                ]
            },
            callback: function(response: any) {
                alert('Payment successful. Transaction reference: ' + response.reference);
                // Here you would typically send the transaction details to your backend
                setIsLoading(false);
                // Reset form only if it was filled
                if (email === formData.email) {
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        donationType: '',
                        amount: '',
                        message: ''
                    });
                }
            },
            onClose: function() {
                alert('Transaction was not completed, window closed.');
                setIsLoading(false);
            }
        });
        handler.openIframe();
    };

    const handleQuickDonate = (amount: number) => {
        if (!formData.email || !formData.firstName) {
            alert('Please fill in your name and email first!');
            return;
        }
        if (!paystackLoaded) {
            alert('Payment system is still loading. Please try again in a moment.');
            return;
        }
        setIsLoading(true);
        initializePaystack(amount, formData.email, formData.firstName, formData.lastName);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.amount || !formData.donationType) {
            alert('Please fill in all required fields!');
            return;
        }

        const amount = parseFloat(formData.amount);
        if (amount <= 0) {
            alert('Please enter a valid amount!');
            return;
        }

        if (!paystackLoaded) {
            alert('Payment system is still loading. Please try again in a moment.');
            return;
        }

        setIsLoading(true);
        initializePaystack(amount, formData.email, formData.firstName, formData.lastName);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className=" relative overflow-hidden">
                <div className="absolute -left-16 top-32 w-40 h-10 bg-gray-400 rounded-full opacity-30"></div>
                <div className="absolute -left-6 top-48 w-20 h-10 bg-gray-300 rounded-full opacity-35"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">

                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                                    Transform Lives Through
                                    <span className="text-[#00A5B8]"> Care</span>.
                                </h1>

                                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                    Your support strengthens communities and restores dignity across Africa.
                                </p>
                            </div>


                            <div className="flex gap-4">
                                <p className="text-xl font-heading font-semibold text-gray-600 leading-relaxed max-w-lg ">
                                    Support Now
                                </p>
                                <ArrowDown className="text-xl font-heading font-semibold text-gray-600 leading-relaxed max-w-lg animate-bounce" />
                            </div>
                            
                            
                            
                            {/* Custom Amount Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Enter Donation Amount (₵)
                                </label>
                                <div className="max-w-xs">
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        min="1"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="text-center">
                                   
                                    <button 
                                        onClick={() => {
                                            if (!paystackLoaded) {
                                                alert('Payment system is still loading. Please try again in a moment.');
                                                return;
                                            }
                                            if (!customAmount || isNaN(Number(customAmount)) || Number(customAmount) <= 0) {
                                                alert('Please enter a valid amount above!');
                                                return;
                                            }
                                            setIsLoading(true);
                                            initializePaystack(Number(customAmount));
                                        }}
                                        disabled={isLoading || !paystackLoaded}
                                        className="hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#00A5B8]/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <img className="h-32 w-52 rounded-lg shadow-lg" src={pay} alt="Click to pay with payment methods" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src="/api/placeholder/600/500"
                                    alt="CARA caregiver helping community member"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                            {/* Background accent */}

                        </div>
                    </div>
                </div>

                {/* Bottom Stats/Icons */}
                <div className="mt-20">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">Community Care</h3>
                                <p className="text-gray-600 text-sm">Supporting vulnerable populations with dignity and compassion</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">Training Programs</h3>
                                <p className="text-gray-600 text-sm">Empowering caregivers with essential skills and knowledge</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                    <Building2 className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">System Building</h3>
                                <p className="text-gray-600 text-sm">Creating sustainable infrastructure for long-term impact</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                    <Heart className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">Compassionate Care</h3>
                                <p className="text-gray-600 text-sm">Ensuring no one is left behind in our care systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 flex items-center justify-center">
                    <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid lg:grid-cols-2 min-h-[600px]">
                            {/* Left Side - Image and Social Links */}
                            <div className="bg-gradient-to-br from-[#00A5B8] to-teal-600 p-8 flex flex-col justify-between">
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="bg-white/20 rounded-lg p-6 mb-6">
                                            <img
                                                src="/api/placeholder/300/200"
                                                alt="Children from CARA programs"
                                                className="w-full h-48 object-cover rounded-lg"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2">Support CARA</h2>
                                        <p className="text-lg opacity-90">Building systems of care across Africa</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="text-white text-sm mb-4">Follow us on social</p>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                                            <Facebook className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                                            <Twitter className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                                            <Linkedin className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Donation Form */}
                            <div className="p-8">
                                <form onSubmit={handleFormSubmit} className="space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="Enter First Name"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Enter Last Name"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email and Phone */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your Email"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-700 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter Phone Number"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Type of Donation */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-4">Type Of Donation</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="donationType" value="one-time" checked={formData.donationType === 'one-time'} onChange={handleRadioChange} className="mr-3" />
                                                <span className="text-sm text-gray-700">One-Time Donation</span>
                                            </label>
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="donationType" value="monthly" checked={formData.donationType === 'monthly'} onChange={handleRadioChange} className="mr-3" />
                                                <span className="text-sm text-gray-700">Monthly Giving</span>
                                            </label>
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="donationType" value="corporate" checked={formData.donationType === 'corporate'} onChange={handleRadioChange} className="mr-3" />
                                                <span className="text-sm text-gray-700">Corporate Donations</span>
                                            </label>
                                            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input type="radio" name="donationType" value="legacy" checked={formData.donationType === 'legacy'} onChange={handleRadioChange} className="mr-3" />
                                                <span className="text-sm text-gray-700">Legacy Giving</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Amount */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Amount</label>
                                        <input
                                            type="number"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                            placeholder="Enter your Amount (₵)"
                                            required
                                            min="1"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Message</label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Enter your Message"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                                        />
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" className="mt-1" />
                                        <p className="text-sm text-gray-600">
                                            I agree with <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                                        </p>
                                    </div>

                                    {/* Donate Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading || !paystackLoaded}
                                        className="w-full bg-[#00A5B8] text-white py-4 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {!paystackLoaded ? 'Loading Payment System...' : isLoading ? 'Processing...' : 'Donate Now'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}