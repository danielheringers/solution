'use client'

import { Progress } from "@nextui-org/progress";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
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
            </div>
        }>
            <section className="relative min-h-screen flex flex-col items-start justify-start">
                <div className="w-full h-full">
                    <ParticlesContainer />
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 sm:p-4 md:p-6 flex flex-col justify-center items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                        A Evolução do seu Faturamento Fiscal Começa Aqui
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-center">
                        Com a nossa API, a emissão de NFe, NFSe, NFCe, CTe e MDFe se torna fácil.
                        <br />
                        Simplifique suas operações, economize tempo e acelere o crescimento do seu negócio.
                        <br />
                        Transforme seu mundo fiscal e alcance novos horizontes.
                    </p>
                </div>
            </section>
            <section className="container rounded-md left-0 py-10 bg-[#F3F3F3]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="w-full sm:w-1/2">
                            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#11181C]">Clientes</h2>
                            <p className="text-sm sm:text-base lg:text-xl text-[#000] mt-2">
                                Empresas que alavancaram seus negócios com a API de integração de documentos fiscais do Outbound.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <Image src={Clientes} alt="clientes" layout="responsive" width={600} height={300}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-16 mt-16">
                <div className="container flex flex-col gap-4 items-center mx-auto px-4">
					<div>
						<h2 className="text-3xl font-bold mb-4">Nossos Números</h2>
					</div>
                    <div className="container flex flex-col items-center sm:flex-row sm:justify-between">
                        <NewCard dataNumbers="107 Milhões" dataText="De Documentos Emitidos em 2023"/>
                        <NewCard dataNumbers="1720 Municipios" dataText="Homologados"/>
                        <NewCard dataNumbers="Todos os Estados" dataText="E Distrito Federal"/>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-16 mt-16 mb-16">
                <div className="container flex flex-col items-center gap-4 mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Entre em Contato</h2>
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <Card className="z-50">
                            <CardBody className="flex flex-col justify-between items-center w-full sm:w-[300px] gap-4 z-50">
                                <Input type="name" label="Nome" placeholder="Digite Seu Nome" />
                                <Input type="cellphone" label="Telefone" placeholder="Digite Seu Telefone" />
                                <Input type="email" label="E-mail" placeholder="Digite Seu email" />
                                <Input type="company" label="Empresa" placeholder="Digite Sua Empresa" />
                                <Button className="w-[10rem]" color="primary" radius="sm">
                                    Enviar
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
        </Suspense>
    );
}
