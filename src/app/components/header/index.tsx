'use client'
import Image from "next/image";
import Logo from "../../../../public/logo-outbound.png"

export const Navbar = () => {

  return (
    <header className={`flex w-full items-center justify-between gap-20 bg-white dark:bg-dark p-4 px-10`}>
        <div><Image src={Logo} alt="logo" width={200}></Image></div>
        <div className="">SOLUTION</div>
        <div><input type="text" className="w-50 h-10 p-2 text-slate-400 bg-slate-900 rounded enabled:hover:border-amber-500 border-solid border-2 disabled:opacity-75" placeholder="Search"/></div>
    </header>
  );
};
