import { Link, useSearchParams } from "react-router";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { ResetPasswordForm } from "../../components/auth/ResetPasswordForm";

export function meta() {
  return [
    { title: "Reset Password - SkillSync" },
    { name: "description", content: "Set a new password for your SkillSync account" },
  ];
}

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  
  if (!token) {
    return (
      <AuthLayout 
        title="Invalid Reset Link"
        subtitle="The password reset link is invalid or has expired"
        showAnimation={false}
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Please request a new password reset link.
          </p>
          <Link 
            to="/auth/forgot-password" 
            className="px-6 py-3 bg-brand-primary-600 text-white rounded-lg hover:bg-brand-primary-700 transition-colors"
          >
            Request New Link
          </Link>
        </div>
      </AuthLayout>
    );
  }
  
  return (
    <AuthLayout 
      title="Reset Your Password"
      subtitle="Create a new password for your account"
      showAnimation={false}
    >
      <ResetPasswordForm token={token} />
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Remember your password?{" "}
          <Link to="/auth/login" className="text-brand-primary-600 hover:text-brand-primary-500 font-medium">
            Back to login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
