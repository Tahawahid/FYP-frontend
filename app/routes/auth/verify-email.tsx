import { Link, useSearchParams } from "react-router";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { EmailVerification } from "../../components/auth/EmailVerification";

export function meta() {
  return [
    { title: "Verify Email - SkillSync" },
    { name: "description", content: "Verify your email address for SkillSync" },
  ];
}

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  
  return (
    <AuthLayout 
      title="Email Verification"
      subtitle={token ? "Verifying your email address..." : "Check your email for a verification link"}
      showAnimation={false}
    >
      <EmailVerification token={token} />
      
      {!token && (
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Didn't receive an email?{" "}
            <button className="text-brand-primary-600 hover:text-brand-primary-500 font-medium">
              Resend verification email
            </button>
          </p>
          <Link to="/auth/login" className="text-brand-primary-600 hover:text-brand-primary-500 text-sm mt-2 inline-block">
            Back to login
          </Link>
        </div>
      )}
    </AuthLayout>
  );
}
