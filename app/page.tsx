'use client'
import React, { Suspense, useState, useEffect, lazy } from "react";
import { Progress } from "@nextui-org/progress";
import axios from 'axios';
import NFSeChart from "@app/components/Charts/NFSeChart";

const StatusSefaz = lazy(() => import("@/components/Status/Status"))

export default function Home() {
    const [data, setData] = useState(null);
    const [statusData, setStatusData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300);
    const totalUpdateTime = 300;
    const timePassed = totalUpdateTime - timeLeft;
    const progressPercentage = (timePassed / totalUpdateTime) * 100;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const config = {
                    headers: {
                        'Authorization': 'Bearer OutboundBolado',
                        'Content-Type': 'application/json'
                    }
                };
                const statusConfig = {
                    params: {
                        size: 27
                    }
                }
                const response = await axios.get("https://api.gerenciapp.com.br/nfedocs", config);
                const statusResponse = await axios.get('https://dfe-service.orbitspot.com/api/wsmonitor/last-provider-status/nfe', statusConfig);
                setData(response.data);
                setStatusData(statusResponse.data.data);
                setTimeLeft(300);
            } catch (error) {
                console.error('Erro na requisição:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 300000);
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(countdown);
        };
    }, []);

    const formattedTimeLeft = `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s`;
    //@ts-ignore
    const formattedData = data ? data.map((ndata: { horario: string | number | Date; nfe_response_time: number; }) => {
        const date = new Date(ndata.horario);
        const formattedTime = date.toTimeString().substring(0, 5);
        const responseTimeInSeconds = (ndata.nfe_response_time / 1000).toFixed(2);
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
                    showValueLabel={true}
                />
			</div>
			<NFSeChart Emit={true} Consult={true} Receive={true} Print={true} DataGet={formattedData}/>

            <NFSeChart Emit={true} Consult={true} Receive={true} Print={true} DataGet={formattedData}/>

            <StatusSefaz data={statusData} />
		</section>
	</Suspense>
	);
}
