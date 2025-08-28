import { Facebook, Twitter, Linkedin, Heart, Users, BookOpen, Building2, ChevronDown, ArrowDown } from "lucide-react";
import pay from "~/components/images/payment.png"
import gg from "~/components/images/gg.png"
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
    const [scriptError, setScriptError] = useState(false);

    // Load Paystack script
    useEffect(() => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]');
        
        if (existingScript) {
            // Script already exists, check if PaystackPop is available
            if ((window as any).PaystackPop) {
                setPaystackLoaded(true);
            } else {
                // Wait for existing script to load
                existingScript.addEventListener('load', () => {
                    setPaystackLoaded(true);
                });
            }
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
            console.log('Paystack script loaded successfully');
            setPaystackLoaded(true);
        };
        
        script.onerror = (error) => {
            console.error('Failed to load Paystack script:', error);
            setScriptError(true);
        };
        
        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
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
        console.log('Initializing Paystack:', { paystackLoaded, paystack: (window as any).PaystackPop });
        
        if (!paystackLoaded) {
            alert('Payment system is still loading. Please try again in a moment.');
            setIsLoading(false);
            return;
        }
        
        if (!(window as any).PaystackPop) {
            console.error('PaystackPop is not available');
            alert('Payment system failed to initialize. Please refresh the page and try again.');
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
            callback: function (response: any) {
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
            onClose: function () {
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

    const retryPaystackLoad = () => {
        setScriptError(false);
        setPaystackLoaded(false);
        
        // Remove existing script if any
        const existingScript = document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]');
        if (existingScript) {
            existingScript.remove();
        }
        
        // Reload the script
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
            console.log('Paystack script loaded successfully on retry');
            setPaystackLoaded(true);
        };
        
        script.onerror = (error) => {
            console.error('Failed to load Paystack script on retry:', error);
            setScriptError(true);
        };
        
        document.head.appendChild(script);
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
               

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-12">

                            {/* Header Section */}
                            <div className="space-y-6">
                                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                                    Transform Lives Through
                                    <span className="text-[#00A5B8]"> Care</span>.
                                </h1>

                                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    Your support strengthens communities and restores dignity across Africa.
                                    Every contribution helps us build sustainable systems of care.
                                </p>
                            </div>


                            {/* Quick Actions */}
                            <div className="">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-heading font-semibold text-gray-700">
                                        Quick Donate
                                    </h3>
                                    <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" />
                                </div>
                            </div>

                            {/* Error State */}
                            {scriptError && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-red-500 text-xl">⚠️</span>
                                        <h4 className="font-semibold text-red-800">Payment System Error</h4>
                                    </div>
                                    <p className="text-red-700 text-sm mb-4">
                                        Failed to load payment system. This might be due to network issues or browser restrictions.
                                    </p>
                                    <button 
                                        onClick={retryPaystackLoad}
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                    >
                                        Retry Loading Payment System
                                    </button>
                                </div>
                            )}



                            {/* Custom Amount Section */}
                            <div className="bg-gray-50 p-6 -mt-10 rounded-2xl border border-gray-100">
                                <h3 className="text-lg font-heading font-semibold text-gray-700 mb-4">
                                    Custom Amount
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-2">
                                            Enter Your Amount (₵)
                                        </label>
                                        <div className="max-w-xs">
                                            <input
                                                type="number"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                placeholder="e.g. 150"
                                                min="1"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A5B8] focus:border-transparent transition-colors bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <p className="text-sm text-gray-500 mb-3">Click to pay:</p>
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
                                            className="hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#00A5B8]/20 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <img className="h-24 w-40 rounded-xl shadow-md hover:shadow-lg transition-shadow" src={pay} alt="Payment methods" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative lg:order-last">
                            {/* Main image container */}
                            <div className="relative">

                                <img
                                    src={gg}
                                    alt="CARA caregiver "
                                    className="w-full h-auto -mt-70   object-cover"
                                />
                            </div>

                            {/* Small accent elements */}
                            <div className="absolute top-10 -right-2 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
                            <div className="absolute top-20 -right-4 w-10 h-10 bg-[#00A5B8] rounded-full"></div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Donation Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 flex  ">
                    <div className="max-w-full w-full  overflow-hidden">
                        <div className="grid lg:grid-cols-2 min-h-[600px]">

                           <div>
                            
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