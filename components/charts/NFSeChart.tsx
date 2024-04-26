import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import PercentCard from "../Percent/Percent"
import AreaChartOutbound from "./AreaChart"
import { Chip } from "@nextui-org/chip";

const NFSeChart = () => {
    return(
        <div className="flex w-full mt-8">
            <Card className="w-full border border-zinc-800" radius="sm">
                <CardHeader className="gap-4 pl-16 h-20">
                    <p>Serviços: </p>
                    <Chip color="success" variant="dot">Emissão</Chip>
                    <Chip color="success" variant="dot">Consulta</Chip>
                    <Chip color="success" variant="dot">Recepção Evento</Chip>
                    <Chip color="success" variant="dot">Impressão Danfe</Chip>
                </CardHeader>
                <Divider/>
                <CardBody className="flex flex-row justify-between w-full">
                    <AreaChartOutbound widthProp={800} heightProp={250} dataName={"NFSe"} color={"#57c3ff"}/>
                </CardBody>
                <Divider/>
                <CardFooter className="flex justify-between">
                    <div className="flex flex-col pl-14 gap-2 w-2/3">
                        <p className="font-semibold text-xl text-zinc-400">Emissões Ultima Hora</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className="font-semibold text-xl ">35.284</p>
                            <PercentCard value={12.5} status/>
                        </div>
                        </div>
                        <Divider orientation="vertical"/>
                        <div className="flex flex-col pl-8 gap-2 w-1/3">
                        <p className="font-semibold text-xl text-zinc-400">Tempo Resposta</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className="font-semibold text-xl ">0.3s</p>
                            <PercentCard value={12.5} status/>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
};

export default NFSeChart;