import Header from "@/app/components/header";
import "../src/app/globals.css";
import CreateAccount from "@/app/components/createAccount";

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <Header />
      <CreateAccount />
    </div>
  );
};

export default LoginPage;
