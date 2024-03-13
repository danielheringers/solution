'use client'
import { redirect } from "next/navigation";

export default function Dashboard() {
  const token = sessionStorage.getItem('token');

    if(!token){
      redirect("/");
    }
    return (
      <main>
            Hello
      </main>
    );
  }
  