'use client'

import { Link } from "@nextui-org/link";
import { Progress } from "@nextui-org/progress";
import NewCard from "components/Card/Card";
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
			<div className="absolute z-20 p-4 md:p-6 w-full md:w-1/2 lg:w-1/3 h-5/6">
				<div className="flex flex-col w-full h-full justify-center gap-4 md:gap-6">
					<h1 className="text-3xl md:text-4xl lg:text/4xl xl:text-5xl font-semibold">
						Lançamento Iminente: Sua Jornada Fiscal Começa Aqui 🚀
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl font-semibold">
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

		<section className="flex flex-col gap-10 mt-44">
			<div className="flex container mx-auto px-4 justify-center">
				<h2 className="text-4xl font-bold">Nossos Números</h2>
			</div>
			<div className="flex w-full m-h-[250px] justify-between">
				<NewCard dataNumbers="107 Milhões" dataText="De Documentos Emitidos em 2023"/>
				<NewCard dataNumbers="1720 Municipios" dataText="Homologados"/>
				<NewCard dataNumbers="Todos os Estados" dataText="E Distrito Federal"/>
			</div>
		</section>

		<footer className="w-full flex items-center justify-center mt-10">
				<Link
				  isExternal
				  className="flex items-center gap-1 text-current"
				  href="https://www.seidor.com/pt-br"
				  title="seidor homepage"
				>
				  <span className="text-default-600">Powered by</span>
				  <p className="text-primary">Seidor</p>
				</Link>
		</footer>
	</Suspense>
	);
}
