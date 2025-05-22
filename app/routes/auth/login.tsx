import { Link } from "react-router";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { LoginForm } from "../../components/auth/LoginForm";

export function meta() {
  return [
    { title: "Login - SkillSync" },
    { name: "description", content: "Log in to your SkillSync account" },
  ];
}

export default function LoginPage() {
  return (
    <AuthLayout 
      title="Welcome Back"
      subtitle="Log in to your account to continue your journey"
      showAnimation={true}
      animationPath="/animations/auth-animation.lottie"
    >
      <LoginForm />
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-brand-primary-600 hover:text-brand-primary-500 font-medium">
            Sign up
          </Link>
        </p>
        <Link to="/auth/forgot-password" className="text-brand-primary-600 hover:text-brand-primary-500 text-sm mt-2 inline-block">
          Forgot your password?
        </Link>
      </div>
    </AuthLayout>
  );
}
