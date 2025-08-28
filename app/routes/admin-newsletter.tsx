import { Form, useActionData, useNavigation } from "react-router";
import { type ActionFunctionArgs } from "react-router";
import { sendNewsletterToAll, sendTemplateNewsletter, newsletterTemplates, type NewsletterContent } from "~/utils/newsletter-sender.server";
import { getExistingSubscriptions } from "~/utils/newsletter.server";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const action = formData.get("action") as string;

    if (action === "sendTemplate") {
        const templateName = formData.get("templateName") as keyof typeof newsletterTemplates;
        return await sendTemplateNewsletter(templateName);
    }

    if (action === "sendCustom") {
        const content: NewsletterContent = {
            subject: formData.get("subject") as string,
            title: formData.get("title") as string,
            summary: formData.get("summary") as string,
            mainContent: formData.get("mainContent") as string,
            callToAction: {
                text: formData.get("ctaText") as string,
                url: formData.get("ctaUrl") as string
            }
        };

        // Basic validation
        if (!content.subject || !content.title || !content.mainContent) {
            return {
                success: false,
                sent: 0,
                failed: 0,
                message: "Please fill in all required fields."
            };
        }

        return await sendNewsletterToAll(content);
    }

    return {
        success: false,
        sent: 0,
        failed: 0,
        message: "Invalid action."
    };
}

export default function AdminNewsletter() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const subscribers = getExistingSubscriptions();

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Newsletter Management</h1>
                    <p className="text-gray-600">Send newsletters to your subscribers</p>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Subscriber Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{subscribers.length}</div>
                            <div className="text-sm text-blue-600">Total Subscribers</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                {subscribers.filter(s => new Date(s.subscribedAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length}
                            </div>
                            <div className="text-sm text-green-600">New This Month</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {subscribers.filter(s => new Date(s.subscribedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                            </div>
                            <div className="text-sm text-purple-600">New This Week</div>
                        </div>
                    </div>
                </div>

                {/* Message Display */}
                {actionData && (
                    <div className={`mb-6 p-4 rounded-lg ${
                        actionData.success 
                            ? "bg-green-50 border border-green-200 text-green-800" 
                            : "bg-red-50 border border-red-200 text-red-800"
                    }`}>
                        <div className="font-medium">{actionData.message}</div>
                        {actionData.success && (
                            <div className="mt-2 text-sm">
                                Sent: {actionData.sent} | Failed: {actionData.failed}
                            </div>
                        )}
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Template Newsletters */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Send Template Newsletter</h2>
                        <p className="text-gray-600 mb-4">Quick send using pre-designed templates</p>
                        
                        <Form method="post" className="space-y-4">
                            <input type="hidden" name="action" value="sendTemplate" />
                            
                            <div>
                                <label htmlFor="templateName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Template
                                </label>
                                <select
                                    id="templateName"
                                    name="templateName"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    required
                                >
                                    <option value="">Choose a template...</option>
                                    <option value="programUpdate">Program Update</option>
                                    <option value="impactStory">Impact Story</option>
                                    <option value="volunteerOpportunity">Volunteer Opportunity</option>
                                </select>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50 py-2 px-4 rounded-lg text-white font-medium"
                            >
                                {isSubmitting ? "Sending..." : "Send Template Newsletter"}
                            </button>
                        </Form>
                    </div>

                    {/* Custom Newsletter */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Send Custom Newsletter</h2>
                        <p className="text-gray-600 mb-4">Create and send a custom newsletter</p>
                        
                        <Form method="post" className="space-y-4">
                            <input type="hidden" name="action" value="sendCustom" />
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject Line *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Newsletter subject"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                    Newsletter Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Main headline"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                                    Summary
                                </label>
                                <input
                                    type="text"
                                    id="summary"
                                    name="summary"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Brief description"
                                />
                            </div>

                            <div>
                                <label htmlFor="mainContent" className="block text-sm font-medium text-gray-700 mb-2">
                                    Main Content *
                                </label>
                                <textarea
                                    id="mainContent"
                                    name="mainContent"
                                    rows={6}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="Your newsletter content (HTML supported)"
                                    required
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="ctaText" className="block text-sm font-medium text-gray-700 mb-2">
                                        CTA Button Text
                                    </label>
                                    <input
                                        type="text"
                                        id="ctaText"
                                        name="ctaText"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="e.g., Learn More"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ctaUrl" className="block text-sm font-medium text-gray-700 mb-2">
                                        CTA Button URL
                                    </label>
                                    <input
                                        type="url"
                                        id="ctaUrl"
                                        name="ctaUrl"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#FCB339] hover:bg-[#FCB339]/80 disabled:opacity-50 py-2 px-4 rounded-lg text-white font-medium"
                            >
                                {isSubmitting ? "Sending..." : "Send Custom Newsletter"}
                            </button>
                        </Form>
                    </div>
                </div>

                {/* Subscriber List */}
                <div className="bg-white rounded-lg shadow p-6 mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Subscribers</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscribed Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {subscribers.map((subscriber) => (
                                    <tr key={subscriber.email}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subscriber.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(subscriber.subscribedAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
