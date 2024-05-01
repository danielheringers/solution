'use client'

import { Progress } from "@nextui-org/progress";
import ParticlesContainer from "components/particlesContainer";
import Image from "next/image";
import Astronaut from "public/Astronauta2.jpg";
import { Suspense } from "react";

export default function Home() {


	return (
	<Suspense fallback={    
		<div className="flex w-full h-screen items-center justify-center hide-scrollbar">
			<Progress
				size="sm"
				isIndeterminate
				aria-label="Loading..."
				className="max-w-md"
				color="danger"
			/>
		</div>}>
		<section className="flex flex-col items-start justify-start gap-2 md: h-5/6 overflow-hidden">
			<div className="w-full h-5/6 z-0 opacity-50">
				<Image src={Astronaut} alt="astronaut" layout="fill" objectFit="cover"/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full z-10">
				<ParticlesContainer />
			</div>
			<div className="absolute z-20 p-6 w-2/6 h-5/6 justify-center">
				<div className="flex flex-col w-full gap-6">
					<h1 className="text-5xl font-semibold">
						Lançamento Iminente: Sua Jornada Fiscal Começa Aqui 🚀
					</h1>
					<p className="text-2xl font-semibold">
						Com a nossa API, a emissão de NFe, NFSe, NFCe, CTe e MDFe se torna fácil.
						<br />
						<br />
						Simplifique suas operações, economize tempo e acelere o crescimento do seu negócio.
						<br />
						<br />
						Transforme seu mundo fiscal e alcance novos horizontes.
					</p>
				</div>
			</div>
		</section>
	</Suspense>
	);
}
