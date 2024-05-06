'use client'

import { Progress } from "@nextui-org/progress";
import axios from 'axios';
import { NFSeChart } from "components/Charts/NFSeChart";
import StatusSefaz from "components/Status/Status";
import { Suspense, useEffect, useState } from "react";

export default function Monitor() {
    const [data, setData] = useState(null);
    const [statusData, setStatusData] = useState([]);
    const [, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300);
    const totalUpdateTime = 300;
    const timePassed = totalUpdateTime - timeLeft;
    const progressPercentage = (timePassed / totalUpdateTime) * 100;

    interface MetricData {
        horario: string
        nfe_docs: number
        nfe_response_time: number
        
    }
    

    useEffect(() => {
        const mockData: MetricData[] = Array.from({ length: 16 }, (_, index) => ( 
        {        
            nfe_docs: Math.floor(Math.random() * 100),
            horario: `Hour ${index}`,
            nfe_response_time: Math.floor(Math.random() * 20 + 1) / 10,
        }
                
        ));
        
        const fetchData = async () => {
            try {
                setLoading(true);
                // const config = {
                //     headers: {
                //         'Authorization': 'Bearer OutboundBolado',
                //         'Content-Type': 'application/json'
                //     }
                // };
                // const response = await axios.get("https://api.gerenciapp.com.br/nfedocs", config);
                setData(mockData);
                setTimeLeft(300);
            } catch (error) {
                console.error('Erro na requisição NFedocs:', error);
            } finally {
                setLoading(false);
                
            }
        };
    
        const fetchStatusData = async () => {
            try {
                const statusConfig = {
                    params: {
                        size: 27
                    }
                };
                const statusResponse = await axios.get('https://dfe-service.orbitspot.com/api/wsmonitor/last-provider-status/nfe', statusConfig);
                setStatusData(statusResponse.data.data);
            } catch (error) {
                console.error('Erro na requisição StatusData:', error);
            }
        };
    
        fetchData();
        fetchStatusData();
    
        const interval = setInterval(() => {
            fetchData();
            fetchStatusData();
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 300000);
    
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
    
        return () => {
            clearInterval(interval);
            clearInterval(countdown);
        };
    }, []);    
    
    const formattedTimeLeft = `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s`;
    // @ts-ignore
    const formattedData = data ? data.map((ndata: { horario: string | number | Date; nfe_response_time: number; }) => {
        const date = new Date(ndata.horario);
        const formattedTime = date.toTimeString().substring(0, 5);
        const responseTimeInSeconds = (ndata.nfe_response_time).toFixed(2);
        return {
            ...ndata,
            horario: formattedTime,
            nfe_response_time: responseTimeInSeconds
        };
    }) : [];

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
		<section className="flex flex-col items-start justify-start gap-2 py-8 md:py-10">
			<div className="flex flex-row w-80 text-left justify-between">
                <Progress
                    size="sm"
                    radius="sm"
                    classNames={{
                        base: "max-w-md",
                        track: "drop-shadow-md border border-default",
                        indicator: "bg-gradient-to-r from-pink-500 to-cyan-500",
                        label: "tracking-wider font-medium text-default-600",
                        value: "text-foreground/60",
                    }}
                    label={`Próxima atualização: ${formattedTimeLeft}`}
                    value={progressPercentage}
                    showValueLabel
                />
			</div>
			<NFSeChart Emit Consult Receive Print DataGet={formattedData}/>

            <NFSeChart Emit Consult Receive Print DataGet={formattedData}/>

            <StatusSefaz data={statusData} />
		</section>
	</Suspense>
	);
}
