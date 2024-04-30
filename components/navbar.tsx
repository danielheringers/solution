"use client"

import { Link } from "@nextui-org/link";
import { NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar } from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import LogoDark from "../public/logo-outbound.png";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <NextUINavbar maxWidth="xl" position="sticky" isBordered>
            <NavbarBrand as="li" className="gap-3 max-w-fit">
				<a className="flex justify-start items-center gap-1" href="/">
					<Image src={LogoDark} alt="logo" width={150} height={33}/>
				</a>
            </NavbarBrand>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarItem isActive={pathname === '/'}>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/financeiro'}>
                    <Link color="foreground" href="/financeiro">
                        Financeiro
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/monitoramento'}>
                    <Link color="foreground" href="/monitoramento">
                        Monitoramento
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};
