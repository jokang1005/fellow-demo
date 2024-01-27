import Header from "@/app/components/header";
import "../src/app/globals.css";
import LoginSignup from "@/app/components/loginSignup";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <Header />
      <LoginSignup />
    </div>
  );
};

export default LoginPage;
