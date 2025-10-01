/**
 * Server-side reCAPTCHA verification utility
 */

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export interface RecaptchaVerificationResult {
  success: boolean;
  error?: string;
  score?: number;
}

/**
 * Verify reCAPTCHA token on the server
 * @param token - The reCAPTCHA token from the client
 * @returns Verification result
 */
export async function verifyRecaptcha(
  token: string | null | undefined
): Promise<RecaptchaVerificationResult> {
  // Check if token exists
  if (!token) {
    return {
      success: false,
      error: "Please complete the reCAPTCHA verification",
    };
  }

  // Get secret key from environment
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey || secretKey === "your_secret_key_here") {
    console.error("RECAPTCHA_SECRET_KEY is not configured properly");
    return {
      success: false,
      error: "reCAPTCHA is not configured on the server",
    };
  }

  try {
    // Make request to Google's verification API
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data["error-codes"]);
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try again.",
      };
    }

    return {
      success: true,
      score: data.score,
    };
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return {
      success: false,
      error: "Failed to verify reCAPTCHA. Please try again.",
    };
  }
}

/**
 * Get the reCAPTCHA site key for the client
 * @returns The site key or empty string if not configured
 */
export function getRecaptchaSiteKey(): string {
  const siteKey = process.env.RECAPTCHA_SITE_KEY;

  if (!siteKey || siteKey === "your_site_key_here") {
    console.warn("RECAPTCHA_SITE_KEY is not configured properly");
    return "";
  }

  return siteKey;
}
