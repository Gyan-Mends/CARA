import { useRef, forwardRef, useImperativeHandle, useState, useEffect } from "react";

export interface RecaptchaHandle {
  reset: () => void;
  getValue: () => string | null | undefined;
}

interface RecaptchaProps {
  onChange?: (token: string | null) => void;
}

export const Recaptcha = forwardRef<RecaptchaHandle, RecaptchaProps>(
  ({ onChange }, ref) => {
    const [ReCAPTCHA, setReCAPTCHA] = useState<any>(null);
    const recaptchaRef = useRef<any>(null);

    // Get site key from window object (passed from loader)
    const siteKey = typeof window !== "undefined"
      ? (window as any).__RECAPTCHA_SITE_KEY__
      : "";

    // Dynamically import ReCAPTCHA only on the client
    useEffect(() => {
      if (typeof window !== "undefined") {
        import("react-google-recaptcha").then((module) => {
          setReCAPTCHA(() => module.default);
        });
      }
    }, []);

    useImperativeHandle(ref, () => ({
      reset: () => {
        recaptchaRef.current?.reset();
      },
      getValue: () => {
        return recaptchaRef.current?.getValue();
      },
    }));

    // Only render on client after ReCAPTCHA is loaded
    if (typeof window === "undefined" || !ReCAPTCHA) {
      return (
        <div className="flex justify-center my-4">
          <div className="w-[304px] h-[78px] bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">Loading reCAPTCHA...</span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-center my-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          onChange={onChange}
        />
      </div>
    );
  }
);

Recaptcha.displayName = "Recaptcha";
