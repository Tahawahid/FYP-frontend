import { Link } from "react-router";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { RegisterForm } from "../../components/auth/RegisterForm";

export function meta() {
  return [
    { title: "Register - SkillSync" },
    { name: "description", content: "Create a new SkillSync account" },
  ];
}

export default function RegisterPage() {
  return (
    <AuthLayout 
      title="Create an Account"
      subtitle="Join SkillSync and discover your career path"
      showAnimation={true}
      animationPath="/animations/auth-animation.lottie"
    >
      <RegisterForm />
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-brand-primary-600 hover:text-brand-primary-500 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
