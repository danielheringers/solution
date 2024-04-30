import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { CircularProgress } from "@nextui-org/progress";
import PercentCard from "../Percent/Percent";
import AreaChartOutbound from "./AreaChart";
import TimeChartOutbound from "./TimeChart";

interface ICircularProgress {
    Emit: boolean;
    Consult: boolean;
    Receive: boolean;
    Print: boolean;
    DataGet: any;
}

const NFSeChart = ({ Emit, Consult, Receive, Print, DataGet }: ICircularProgress) => {
    let CircularValue = 0;
    if (Emit) CircularValue += 25;
    if (Consult) CircularValue += 25;
    if (Receive) CircularValue += 25;
    if (Print) CircularValue += 25;

    const totalNFeDocs = DataGet ? DataGet.reduce((acc: any, item: { nfe_docs: any; }) => acc + item.nfe_docs, 0) : 0;
    

    return (
        <div className="flex flex-col md:flex-row w-full mt-8">
            <Card className="w-full border border-zinc-800" radius="sm"     >
                <CardHeader className="gap-4 pl-4 min-h-20 flex flex-wrap">
                    <CircularProgress
                        aria-label="Loading..."
                        size="md"
                        value={CircularValue}
                        color={    
                            CircularValue <= 25 ? "danger" :
                            CircularValue <= 75 ? "warning" :
                            "success"
                        } 
                        valueLabel="NFSe"
                        showValueLabel
                    />
                    <Divider orientation="vertical" />
                    <div className="flex gap-2 flex-wrap">
                        <Chip color={Emit == false ? "danger" : "success"} variant="dot">Emissão</Chip>
                        <Chip color={Consult == false ? "danger" : "success"} variant="dot">Consulta</Chip>
                        <Chip color={Receive == false ? "danger" : "success"} variant="dot">Recepção Evento</Chip>
                        <Chip color={Print == false ? "danger" : "success"} variant="dot">Impressão Danfe</Chip>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col md:flex-row justify-between w-full">
                    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="flex flex-col gap-2 w-full md:w-2/3 p-4">
                            <p className="font-semibold text-xl text-zinc-500">Emissões Última Hora</p>
                            <div className="flex flex-row items-center gap-2">
                                <p className="font-semibold text-xl ">{totalNFeDocs}</p>
                                {/* <AnimatedCounter max={totalNFeDocs} duration={1}/> */}
                                <PercentCard value={12.5} status/>
                            </div>
                        </div>
                        <AreaChartOutbound dataName="NFSe" color="#57c3ff" dataGet={DataGet} dataKeyName={"nfe_docs"} />
                    </div>
                    <Divider orientation="vertical" />
                    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="flex flex-col gap-2 w-full md:w-1/3 p-4">
                            <p className="font-semibold text-xl text-zinc-500">Tempo Resposta</p>
                            <div className="flex flex-row items-center gap-2">
                                <p className="font-semibold text-xl ">0.3s</p>
                                <PercentCard value={12.5} status/>
                            </div>
                        </div>
                        <TimeChartOutbound dataName="NFSe" color="#57c3ff" DataGet={DataGet}/>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
};

export default NFSeChart;