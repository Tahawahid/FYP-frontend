import { useState } from "react";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual password reset request logic
      console.log("Password reset requested for:", email);
      
      // Show success message
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  if (success) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="check" className="text-green-500 text-2xl" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">Check your email</h3>
        <p className="text-gray-600 mb-6">
          We've sent a password reset link to <strong>{email}</strong>. 
          Please check your inbox and follow the instructions.
        </p>
        <p className="text-sm text-gray-500">
          Didn't receive the email? Check your spam folder or{" "}
          <button 
            onClick={() => setSuccess(false)} 
            className="text-brand-primary-600 hover:text-brand-primary-500"
          >
            try again
          </button>
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="envelope" className="text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      
      <div>
        <Button 
          variant="primary" 
          className="w-full py-3" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending Reset Link..." : "Send Reset Link"}
        </Button>
      </div>
    </form>
  );
}
