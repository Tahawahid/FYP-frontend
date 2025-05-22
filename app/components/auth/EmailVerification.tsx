import { useState, useEffect } from "react";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";

interface EmailVerificationProps {
  token?: string | null;
}

export function EmailVerification({ token }: EmailVerificationProps) {
  const [status, setStatus] = useState<"loading" | "success" | "error">(token ? "loading" : "success");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (token) {
      // Simulate API call to verify email
      const verifyEmail = async () => {
        try {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // TODO: Implement actual email verification logic
          console.log("Verifying email with token:", token);
          
          // For demo purposes, randomly succeed or fail
          if (Math.random() > 0.3) {
            setStatus("success");
            setMessage("Your email has been successfully verified!");
          } else {
            setStatus("error");
            setMessage("The verification link is invalid or has expired.");
          }
        } catch (err) {
          setStatus("error");
          setMessage("An error occurred while verifying your email.");
        }
      };
      
      verifyEmail();
    }
  }, [token]);
  
  if (token) {
    // Token provided - show verification status
    return (
      <div className="text-center">
        {status === "loading" && (
          <>
            <div className="w-16 h-16 border-4 border-brand-primary-200 border-t-brand-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Verifying your email address...</p>
          </>
        )}
        
        {status === "success" && (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="check" className="text-green-500 text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Email Verified!</h3>
            <p className="text-gray-600 mb-6">{message}</p>
            <Button 
              variant="primary" 
              className="px-6 py-3"
              onClick={() => window.location.href = "/auth/login"}
            >
              Go to Login
            </Button>
          </>
        )}
        
        {status === "error" && (
          <>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="times" className="text-red-500 text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Verification Failed</h3>
            <p className="text-gray-600 mb-6">{message}</p>
            <Button 
              variant="primary" 
              className="px-6 py-3"
              onClick={() => window.location.href = "/auth/login"}
            >
              Back to Login
            </Button>
          </>
        )}
      </div>
    );
  }
  
  // No token - show instructions
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name="envelope" className="text-brand-primary-600 text-2xl" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">Check Your Email</h3>
      <p className="text-gray-600 mb-6">
        We've sent a verification link to your email address. 
        Please check your inbox and click the link to verify your account.
      </p>
    </div>
  );
}
