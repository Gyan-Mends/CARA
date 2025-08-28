import { Form, useActionData, useNavigation, redirect } from "react-router";
import { type ActionFunctionArgs } from "react-router";
import { subscribeToNewsletter } from "~/utils/newsletter.server";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    // Basic validation
    if (!email) {
        return {
            error: "Please enter your email address",
            success: false,
        };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            error: "Please enter a valid email address",
            success: false,
        };
    }

    try {
        const result = await subscribeToNewsletter(email);
        
        if (result.success) {
            // Return success message to display on the same page
            return {
                success: true,
                message: result.message,
            };
        } else {
            return {
                error: result.message,
                success: false,
            };
        }
    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return {
            error: "An unexpected error occurred. Please try again.",
            success: false,
        };
    }
}

export default function Newsletter() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto p-6">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscribe to Newsletter</h1>
                        <p className="text-gray-600">Stay updated on our progress and latest initiatives</p>
                    </div>

                    {/* Message Display */}
                    {actionData && (
                        <div className={`mb-6 p-4 rounded-lg ${
                            actionData.success 
                                ? "bg-green-50 border border-green-200 text-green-800" 
                                : "bg-red-50 border border-red-200 text-red-800"
                        }`}>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">
                                    {actionData.success ? actionData.message : actionData.error}
                                </span>
                                {actionData.success && (
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="text-green-600 hover:text-green-800 text-xs underline"
                                    >
                                        Subscribe Another Email
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {!actionData?.success ? (
                        <Form method="post" className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                                    required
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#FCB339] hover:bg-[#FCB339]/80 disabled:opacity-50 disabled:cursor-not-allowed py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Subscribing...
                                    </>
                                ) : (
                                    "Subscribe to Newsletter"
                                )}
                            </button>
                        </Form>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscription Successful!</h3>
                            <p className="text-gray-600 mb-6">Thank you for subscribing to our newsletter. You'll receive updates about our programs and initiatives.</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-[#FCB339] hover:bg-[#FCB339]/80 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                            >
                                Subscribe Another Email
                            </button>
                        </div>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
