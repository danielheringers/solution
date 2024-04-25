import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import LogoDark from "@/public/logo-outbound.png"
import Image from "next/image";
import { Link } from "@nextui-org/link";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isBordered>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image src={LogoDark} alt="logo" width={150}/>
					</NextLink>
				</NavbarBrand>
				<Link color="foreground" href="/">
					Home
				</Link>
				<Link color="foreground" href="/">
					Financial
				</Link>
				<Link color="foreground" href="/">
					Monitoring
				</Link>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
