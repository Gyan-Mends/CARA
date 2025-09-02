import nodemailer from 'nodemailer';
import { getExistingSubscriptions } from './newsletter.server';

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

export interface NewsletterContent {
    subject: string;
    title: string;
    summary: string;
    mainContent: string;
    callToAction?: {
        text: string;
        url: string;
    };
    featuredImage?: string;
}

export async function sendNewsletterToAll(content: NewsletterContent): Promise<{ success: boolean; sent: number; failed: number; message: string }> {
    try {
        const subscribers = getExistingSubscriptions();
        
        if (subscribers.length === 0) {
            return {
                success: false,
                sent: 0,
                failed: 0,
                message: "No subscribers found to send newsletter to."
            };
        }

        let sent = 0;
        let failed = 0;

        // Send newsletter to each subscriber
        for (const subscriber of subscribers) {
            try {
                await sendNewsletterToSubscriber(subscriber.email, content);
                sent++;
                console.log(`Newsletter sent to: ${subscriber.email}`);
            } catch (error) {
                failed++;
                console.error(`Failed to send newsletter to ${subscriber.email}:`, error);
            }
        }

        return {
            success: true,
            sent,
            failed,
            message: `Newsletter sent successfully to ${sent} subscribers. ${failed} failed.`
        };

    } catch (error) {
        console.error("Newsletter sending error:", error);
        return {
            success: false,
            sent: 0,
            failed: 0,
            message: "Failed to send newsletter. Please try again later."
        };
    }
}

async function sendNewsletterToSubscriber(email: string, content: NewsletterContent): Promise<void> {
    const htmlContent = generateNewsletterHTML(content);
    
    await transporter.sendMail({
        from: `"CARA Newsletter" <${process.env.SMTP_USER}>`,
        to: email,
        subject: content.subject,
        html: htmlContent,
    });
}

function generateNewsletterHTML(content: NewsletterContent): string {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${content.title}</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white;">
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #00A5B8 0%, #0891b2 100%); padding: 30px 20px; text-align: center;">
                    <div style="width: 60px; height: 60px; background-color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                        <span style="font-size: 24px; font-weight: bold; color: #00A5B8;">CARA</span>
                    </div>
                    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">${content.title}</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">${content.summary}</p>
                </div>
                
                <!-- Content -->
                <div style="padding: 40px 30px;">
                    ${content.featuredImage ? `
                        <div style="text-align: center; margin-bottom: 30px;">
                            <img src="${content.featuredImage}" alt="Featured Image" style="max-width: 100%; height: auto; border-radius: 8px;">
                        </div>
                    ` : ''}
                    
                    <div style="line-height: 1.6; color: #374151; font-size: 16px;">
                        ${content.mainContent}
                    </div>
                    
                    ${content.callToAction ? `
                        <div style="text-align: center; margin: 40px 0;">
                            <a href="${content.callToAction.url}" style="background-color: #FCB339; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: 600; font-size: 16px;">
                                ${content.callToAction.text}
                            </a>
                        </div>
                    ` : ''}
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
    `;
}

// Example newsletter templates
export const newsletterTemplates = {
    programUpdate: {
        subject: "New Program Launch - Join Our Caregiver Training!",
        title: "New Program Launch",
        summary: "Exciting new opportunities to get involved with CARA",
        mainContent: `
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">New Caregiver Training Program</h2>
            <p style="margin-bottom: 20px;">We're excited to announce the launch of our new comprehensive caregiver training program designed specifically for African communities.</p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #00A5B8; margin: 0 0 15px 0; font-size: 20px;">Program Highlights:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #6b7280;">
                    <li>6-week intensive training</li>
                    <li>Practical hands-on experience</li>
                    <li>Certification upon completion</li>
                    <li>Job placement assistance</li>
                </ul>
            </div>
            
            <p style="margin-bottom: 20px;">This program is designed to equip caregivers with the skills and knowledge needed to provide quality care in various settings.</p>
        `,
        callToAction: {
            text: "Learn More & Apply",
            url: "https://yourwebsite.com/programs"
        }
    },
    
    impactStory: {
        subject: "Impact Update: How CARA Changed Lives in Ghana",
        title: "Impact Update",
        summary: "Updates from our community",
        mainContent: `
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Transforming Lives in Ghana</h2>
            <p style="margin-bottom: 20px;">Meet Sarah, a single mother from Accra who completed our caregiver training program last year.</p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; font-style: italic;">
                <p style="margin: 0; color: #6b7280;">"Before CARA, I was struggling to make ends meet. Now I have a stable job as a certified caregiver, and I can provide for my children while helping others in my community."</p>
            </div>
            
            <p style="margin-bottom: 20px;">Sarah's experience is just one of many. Through our programs, we've trained over 500 caregivers across Africa, creating sustainable employment opportunities and improving care quality.</p>
        `,
        callToAction: {
            text: "Read More Updates",
            url: "https://yourwebsite.com/impact"
        }
    },
    
    volunteerOpportunity: {
        subject: "Volunteer Opportunity - Join Our Mission",
        title: "Volunteer Opportunity",
        summary: "Make a difference in your community",
        mainContent: `
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Volunteer with CARA</h2>
            <p style="margin-bottom: 20px;">We're looking for passionate individuals to join our volunteer program and help us expand our reach across Africa.</p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #00A5B8; margin: 0 0 15px 0; font-size: 20px;">Volunteer Roles Available:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #6b7280;">
                    <li>Program Coordinators</li>
                    <li>Training Facilitators</li>
                    <li>Community Outreach</li>
                    <li>Administrative Support</li>
                </ul>
            </div>
            
            <p style="margin-bottom: 20px;">Whether you have a few hours a week or want to commit more time, there's a role for you in our mission to build sustainable care systems.</p>
        `,
        callToAction: {
            text: "Apply to Volunteer",
            url: "https://yourwebsite.com/volunteer"
        }
    }
};

// Function to send a specific template newsletter
export async function sendTemplateNewsletter(templateName: keyof typeof newsletterTemplates): Promise<{ success: boolean; sent: number; failed: number; message: string }> {
    const template = newsletterTemplates[templateName];
    if (!template) {
        return {
            success: false,
            sent: 0,
            failed: 0,
            message: "Template not found."
        };
    }
    
    return await sendNewsletterToAll(template);
}
