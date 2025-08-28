import nodemailer from 'nodemailer';

export type NewsletterSubscription = {
    email: string;
    subscribedAt: Date;
};

// In a real application, this would be stored in a database
// For demo purposes, we'll use an in-memory array
let subscriptions: NewsletterSubscription[] = [
    // Some demo subscriptions
    { email: "test@example.com", subscribedAt: new Date("2024-01-01") },
    { email: "demo@caraafrica.org", subscribedAt: new Date("2024-01-15") }
];

export function getExistingSubscriptions(): NewsletterSubscription[] {
    return [...subscriptions];
}

export function isEmailSubscribed(email: string): boolean {
    return subscriptions.some(sub => sub.email.toLowerCase() === email.toLowerCase());
}

export function addSubscription(email: string): void {
    if (!isEmailSubscribed(email)) {
        subscriptions.push({
            email: email.toLowerCase(),
            subscribedAt: new Date()
        });
    }
}

export function getSubscriptionInfo(email: string): NewsletterSubscription | null {
    return subscriptions.find(sub => sub.email.toLowerCase() === email.toLowerCase()) || null;
}

// Create transporter using the same configuration as your existing email system
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    try {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                message: "Please enter a valid email address"
            };
        }

        // Here you would typically:
        // 1. Check if email already exists in database
        // 2. Save to database
        // 3. Send welcome email
        // 4. Add to mailing list service (e.g., Mailchimp, SendGrid)

        // Check if email is already subscribed
        if (isEmailSubscribed(email)) {
            return {
                success: false,
                message: "This email is already subscribed to our newsletter. If you're not receiving emails, please check your spam folder or contact us."
            };
        }

        console.log(`Newsletter subscription for: ${email}`);
        
        // Send welcome email to subscriber
        await transporter.sendMail({
            from: `"CARA Newsletter" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Welcome to CARA Newsletter!',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Welcome to CARA Newsletter</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: white;">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #00A5B8 0%, #0891b2 100%); padding: 30px 20px; text-align: center;">
                            <div style="width: 60px; height: 60px; background-color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                                <span style="font-size: 24px; font-weight: bold; color: #00A5B8;">CARA</span>
                            </div>
                            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Our Newsletter!</h1>
                            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Stay updated on our mission</p>
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 24px;">Thank you for subscribing!</h2>
                                <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0;">
                                    You're now part of our community of supporters who care about building sustainable systems of care across Africa.
                                </p>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); padding: 25px; border-radius: 10px; text-align: center; margin: 30px 0;">
                                <h3 style="color: #00A5B8; margin: 0 0 15px 0; font-size: 20px;">What you'll receive:</h3>
                                <ul style="text-align: left; color: #6b7280; line-height: 1.8; margin: 0; padding-left: 20px;">
                                    <li>Updates on our programs and initiatives</li>
                                    <li>Stories of impact from communities we serve</li>
                                    <li>Volunteer and partnership opportunities</li>
                                    <li>News about caregiver training programs</li>
                                    <li>Ways to get involved and support our mission</li>
                                </ul>
                            </div>
                            
                            <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
                                <p style="color: #374151; margin: 0; font-size: 16px; font-weight: 600;">
                                    Welcome to the movement,<br>
                                    <span style="color: #00A5B8;">The CARA Team</span>
                                </p>
                            </div>
                        </div>
                        
                        <!-- Footer -->
                        <div style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
                            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                                <strong>CARA</strong> - Care Access for Resilient Africa
                            </p>
                            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                                Empowering communities through caregiver training, advocacy, and inclusive support systems.
                            </p>
                            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
                                <a href="mailto:${process.env.SMTP_USER}?subject=Unsubscribe from newsletter" style="color: #00A5B8; text-decoration: none;">Unsubscribe</a>
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // Send notification to your team (optional)
        await transporter.sendMail({
            from: `"CARA Newsletter" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: `New Newsletter Subscription: ${email}`,
            html: `
                <!DOCTYPE html>
                <html>
                <body>
                    <h2>New Newsletter Subscription</h2>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                    <p>This person has subscribed to your newsletter.</p>
                </body>
                </html>
            `,
        });

        // Add to subscriptions list
        addSubscription(email);

        return {
            success: true,
            message: "Successfully subscribed to our newsletter! Check your email for confirmation."
        };

    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return {
            success: false,
            message: "Failed to subscribe. Please try again later."
        };
    }
}

export async function unsubscribeFromNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    try {
        // Here you would typically:
        // 1. Find the subscription in database
        // 2. Mark as unsubscribed
        // 3. Remove from mailing list service

        console.log(`Newsletter unsubscription for: ${email}`);
        
        // Send confirmation email
        await transporter.sendMail({
            from: `"CARA Newsletter" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Unsubscribed from CARA Newsletter',
            html: `
                <!DOCTYPE html>
                <html>
                <body>
                    <h2>Unsubscribed Successfully</h2>
                    <p>You have been unsubscribed from the CARA newsletter.</p>
                    <p>If this was a mistake, you can <a href="mailto:${process.env.SMTP_USER}?subject=Resubscribe to newsletter">resubscribe here</a>.</p>
                </body>
                </html>
            `,
        });

        return {
            success: true,
            message: "Successfully unsubscribed from our newsletter."
        };

    } catch (error) {
        console.error("Newsletter unsubscription error:", error);
        return {
            success: false,
            message: "Failed to unsubscribe. Please try again later."
        };
    }
}
