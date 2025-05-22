import { Link } from "react-router";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { ForgotPasswordForm } from "../../components/auth/ForgotPasswordForm";

export function meta() {
  return [
    { title: "Forgot Password - SkillSync" },
    { name: "description", content: "Reset your SkillSync password" },
  ];
}

export default function ForgotPasswordPage() {
  return (
    <AuthLayout 
      title="Forgot Password"
      subtitle="Enter your email and we'll send you a reset link"
      showAnimation={false}
    >
      <ForgotPasswordForm />
      
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
