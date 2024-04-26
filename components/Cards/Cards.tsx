
import { Card, CardHeader, CardBody } from "@nextui-org/card"
import Image from "next/image"
import Invoice from "@/public/Invoice.png"
import { Chip } from "@nextui-org/chip";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

const CardsChart = () => {
    return(
        <div className="flex justify-between w-full">
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex justify-between">
                <div className="flex gap-3">
                    <Image src={Invoice} alt="invoice" width={25}/>
                    <p className="text-sm">NFe</p>
                </div>
                <Chip color="success" variant="dot">Online</Chip>
            </CardHeader>
            <CardBody className="text-2xl flex flex-wrap flex-row items-center gap-4 justify-start">
            <Accordion isCompact>
                <AccordionItem key="1" aria-label="Prod" title="Produção">
                    <Chip color="success" variant="dot">Emissão</Chip>
                    <Chip color="success" variant="dot">Consulta</Chip>
                    <Chip color="success" variant="dot">Cancelamento</Chip>
                    <Chip color="success" variant="dot">Inutilização</Chip>
                    <Chip color="success" variant="dot">Carta de Correção</Chip>
                </AccordionItem>
            </Accordion>

            </CardBody>
        </Card>
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Invoice} alt="invoice" width={25}/>
                <p className="text-sm">NFSe</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row items-center gap-4 justify-center">
                <Chip color="success" variant="dot">Prod</Chip>
            </CardBody>
        </Card>
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Invoice} alt="invoice" width={25}/>
                <p className="text-sm">CTe</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row items-center gap-4 justify-center">
                <Chip color="success" variant="dot">Online</Chip>
            </CardBody>
        </Card>
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Invoice} alt="invoice" width={25}/>
                <p className="text-sm">MDFe</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row items-center gap-4 justify-center">
                <Chip color="success" variant="dot">Produção</Chip>
            </CardBody>
        </Card>
    </div>
    )
}

export default CardsChart;