import { ProfileForm } from "./components/LoginForm/form";


export default function Home() {

  return (
    <main className="flex items-center justify-center h-screen bg-zinc-900">
      <div className="w-60">
        <ProfileForm></ProfileForm>
      </div>
    </main>
  );
} 
