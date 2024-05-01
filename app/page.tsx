'use client'

import { Progress } from "@nextui-org/progress";
import NewCard from "components/Card/Card";
import ParticlesContainer from "components/particlesContainer";
import Image from "next/image";
import Clientes from "public/clientes.webp";
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
		<section className="flex flex-col items-start justify-start md: h-5/6 overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full z-10">
				<ParticlesContainer />
			</div>
			<div className="absolute z-20 sm:p-4 md:p-6 w-full md:w-1/2 lg:w-1/3 h-5/6">
				<div className="flex flex-col w-full h-full justify-center gap-4 md:gap-6">
					<h1 className="text-3xl md:text-4xl lg:text/4xl xl:text-5xl font-semibold">
						Sua Evolução Fiscal Começa Aqui
					</h1>
					<p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold">
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
		<section className="absolute left-0 w-screen py-10 bg-[#F3F3F3]">
			<div className="w-full max-w-6xl mx-auto px-4">
				<div className="flex items-center justify-between gap-4">
					<div className="flex flex-col w-1/2 gap-4">
						<h2 className="text-4xl font-bold text-[#11181C]">Clientes</h2>
						<p className="text-xl text-[#000]">
							Empresas que alavancaram seus negócios com a API de integração de documentos fiscais do Outbound.
						</p>
					</div>
					<div className="w-1/2">
						<Image src={Clientes} alt="clientes" layout="responsive" width={600} height={300}/>
					</div>
				</div>
			</div>
		</section>
		<section className="flex flex-col gap-16 mt-[40rem]">
			<div className="flex container mx-auto px-4 justify-center">
				<h2 className="text-4xl font-bold mb-4">Nossos Números</h2>
			</div>
			<div className="flex flex-col items-center justify-between h-[550px] w-full lg:flex-row lg:justify-between lg:h-[150px]">
				<NewCard dataNumbers="107 Milhões" dataText="De Documentos Emitidos em 2023"/>
				<NewCard dataNumbers="1720 Municipios" dataText="Homologados"/>
				<NewCard dataNumbers="Todos os Estados" dataText="E Distrito Federal"/>
			</div>
		</section>
		<section className="flex flex-col gap-16 mt-24">
			<div className="flex container mx-auto px-4 justify-center">
				<h2 className="text-4xl font-bold mb-4">Nossos Números</h2>
			</div>
			<div className="flex flex-col items-center justify-between h-[550px] w-full lg:flex-row lg:justify-between lg:h-[150px]">
				<NewCard dataNumbers="107 Milhões" dataText="De Documentos Emitidos em 2023"/>
				<NewCard dataNumbers="1720 Municipios" dataText="Homologados"/>
				<NewCard dataNumbers="Todos os Estados" dataText="E Distrito Federal"/>
			</div>
		</section>
	</Suspense>
	);
}
