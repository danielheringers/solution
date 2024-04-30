"use client"
import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from "@nextui-org/react";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import LogoDark from "@/public/logo-outbound.png";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <NextUINavbar maxWidth="xl" position="sticky" isBordered>
            <NavbarBrand as="li" className="gap-3 max-w-fit">
				<a className="flex justify-start items-center gap-1">
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
