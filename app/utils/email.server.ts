import nodemailer from 'nodemailer';

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Send email to your organization
    await transporter.sendMail({
      from: `"CARA Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to your email
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>CARA Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #00A5B8 0%, #0891b2 100%); padding: 30px 20px; text-align: center;">
              <div style="width: 60px; height: 60px; background-color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                <span style="font-size: 24px; font-weight flex items-center justify-center: bold; color: #00A5B8;">CARA</span>
              </div>
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Care for Those Who Care. Dignity for All.</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background-color: #f8fafc; border-left: 4px solid #00A5B8; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 22px;">Contact Details</h2>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151; font-size: 16px;">Name:</strong>
                  <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 16px;">${data.name}</p>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151; font-size: 16px;">Email:</strong>
                  <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 16px;"><a href="mailto:${data.email}" style="color: #00A5B8; text-decoration: none;">${data.email}</a></p>
                </div>
                
                <div>
                  <strong style="color: #374151; font-size: 16px;">Message:</strong>
                  <div style="background-color: white; padding: 15px; margin: 10px 0; border-radius: 6px; border: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; margin: 0; line-height: 1.6; font-size: 15px;">${data.message.replace(/\n/g, '<br>')}</p>
                  </div>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${data.email}" style="background-color: #00A5B8; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: 600; transition: background-color 0.3s;">Reply to ${data.name}</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                This message was sent from the CARA website contact form.<br>
                <strong>CARA</strong> - Care Access for Resilient Africa
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: `"CARA" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Thank you for contacting CARA',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for contacting CARA</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #00A5B8 0%, #0891b2 100%); padding: 30px 20px; text-align: center;">
              <div style="width: 60px; height: 60px; background-color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                <span style="font-size: 24px; font-weight: bold; color: #00A5B8;">CARA</span>
              </div>
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Thank You!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Care for Those Who Care. Dignity for All.</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 24px;">Thank you for reaching out, ${data.name}!</h2>
                <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0;">
                  We have received your message and will get back to you as soon as possible. Your interest in CARA's mission means a lot to us.
                </p>
              </div>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #00A5B8; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Your Message:</h3>
                <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; margin: 0; line-height: 1.6; font-style: italic;">"${data.message.replace(/\n/g, '<br>')}"</p>
                </div>
              </div>
              
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); padding: 25px; border-radius: 10px; text-align: center; margin: 30px 0;">
                <h3 style="color: #00A5B8; margin: 0 0 15px 0; font-size: 20px;">What happens next?</h3>
                <ul style="text-align: left; color: #6b7280; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>Our team will review your message within 24 hours</li>
                  <li>We'll respond to you directly at <strong>${data.email}</strong></li>
                  <li>If relevant, we may share information about upcoming programs or volunteer opportunities</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #6b7280; margin: 0 0 20px 0; font-size: 16px;">
                  In the meantime, feel free to learn more about our work:
                </p>
                <div style="margin: 20px 0;">
                  <a href="#" style="background-color: #00A5B8; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; display: inline-block; margin: 0 10px 10px 0; font-weight: 600;">Visit Our Website</a>
                  <a href="#" style="background-color: transparent; color: #00A5B8; padding: 12px 25px; text-decoration: none; border: 2px solid #00A5B8; border-radius: 25px; display: inline-block; margin: 0 10px 10px 0; font-weight: 600;">Follow Our Work</a>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
                <p style="color: #374151; margin: 0; font-size: 16px; font-weight: 600;">
                  Best regards,<br>
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
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}