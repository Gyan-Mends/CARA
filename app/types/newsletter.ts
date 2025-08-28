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