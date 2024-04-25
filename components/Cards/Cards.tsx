
import { Card, CardHeader, CardBody } from "@nextui-org/card"
import PercentCard  from "../Percent/Percent"
import Image from "next/image"
import Invoice from "@/public/Invoice.png"
import Customer from "@/public/Customer Insight.png"
import Record from "@/public/Record.png"
import Days from "@/public/Days.png"


const CardsChart = () => {
    return(
        <div className="flex justify-between w-full">
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Invoice} alt="invoice" width={25}/>
                <p className="text-sm">Emissões Mensal</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row items-center gap-4">
                <p className="font-semibold">1.200.000</p>
                <PercentCard value={12.5} status/>
            </CardBody>
        </Card>
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Customer} alt="invoice" width={25}/>
                <p className="text-sm">Numero de Clientes</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row items-center gap-4">
                <p className="font-semibold">64</p>
                <PercentCard value={12.5} status/>
            </CardBody>
        </Card>
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Record} alt="invoice" width={25}/>
                <p className="text-sm">Recorde de Emissões</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row items-center gap-4">
                <p className="font-semibold">2.000.000</p>
            </CardBody>
        </Card>
        <Card className="w-60 border border-zinc-800" radius="sm" shadow="md">
            <CardHeader className="flex gap-3">
                <Image src={Days} alt="invoice" width={25}/>
                <p className="text-sm">Dias Sem Interrupções</p>
            </CardHeader>
            <CardBody className="text-2xl flex flex-row">
                <p className="font-semibold">{`${91} Dias`}</p>
            </CardBody>
        </Card>
    </div>
    )
}

export default CardsChart;