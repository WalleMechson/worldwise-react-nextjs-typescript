import Image from "next/image";
import AuthForm from "@/components/AuthForm/AuthForm";
import getCurrentUser from "@/actions/getCurrentUser";

export default function Home() {
  return (
    <main className="login">
      <div>
        <Image src="/logo.png" alt="WorldWise logo" height={250} width={250} />
      </div>
      <AuthForm />
    </main>
  );
}
