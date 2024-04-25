'use client'
import React, { Suspense, useState, useEffect, lazy } from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Clock from "@/public/Countdown Clock.png";
import Invoice from "@/public/Invoice.png"
import { Card, CardBody } from "@nextui-org/card";
import { Progress } from "@nextui-org/Progress";

const CardsChart = lazy(() => import("@/components/Cards/Cards"));
const AreaChartOutbound = lazy(() => import("@/components/Charts/AreaChart"));
const BarChartOutbound = lazy(() => import("@/components/Charts/BarChart"));
const LineChartOutbound = lazy(() => import("@/components/Charts/LineChart"));
const PercentCard = lazy(() => import("@/components/Percent/Percent"));


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
		<section className="flex flex-col items-start justify-start gap-2 py-8 md:py-10">
			<div className="flex flex-row w-full text-left justify-between mb-6">
				<div className="flex flex-row flex-wrap max-w-sm text-left justify-left mb-6">
					<h1 className="text-2xl">Welcome Back&nbsp;</h1>
					<h1 className="text-2xl text-violet-500">Daniel,&nbsp;</h1>
					<span className="text-sm text-zinc-400">&nbsp;Dashboard Analytics Outbound</span>
				</div>
				<Button>Atualizar</Button>
			</div>

			<CardsChart/>

			<div className="flex w-full mt-8">
				<Card className="w-full border border-zinc-800" radius="sm" shadow="md">
					<CardBody className="flex flex-row justify-between w-full">
						<div className="flex flex-col gap-8 border-r border-zinc-700">
							<div className="flex flex-col pl-14 gap-2">
								<p className="font-semibold text-xl text-zinc-400">Emissões Anuais</p>
								<div className="flex flex-row items-center gap-2">
									<p className="font-semibold text-2xl ">25.578.784</p>
									<PercentCard value={12.5} status/>
								</div>
							</div>
							<AreaChartOutbound widthProp={800} heightProp={250} dataName={"NFSe"} color={"#57c3ff"}/>
							<AreaChartOutbound widthProp={800} heightProp={250} dataName={"NFe"} color={"#6c72ff"}/>
						</div>
						<div className="flex flex-col justify-between">
							<div className="flex flex-col border-b border-zinc-700 gap-1 h-2/4 justify-center">
								<div className="flex flex-col pl-10 gap-2">
									<div className="flex flex-row items-center gap-2">
										<Image src={Invoice} alt="iconTime" width={25}/>
										<p className="font-semibold text-sm text-zinc-400">Emissões Hoje</p>
									</div>
									<div className="flex flex-row gap-2 items-center">
										<p className="font-semibold text-xl ">61.875</p>
										<PercentCard value={12.5} status/>
									</div>
								</div>
								<BarChartOutbound/>
							</div>
							<div className="flex flex-col gap-1 h-2/4 justify-center">
								<div className="flex flex-col pl-10 gap-2">
									<div className="flex flex-row items-center gap-2">
										<Image src={Clock} alt="iconTime" width={25}/>
										<p className="font-semibold text-sm text-zinc-400">Tempo Médio de Resposta</p>
									</div>
									<div className="flex flex-row gap-2 items-center">
										<p className="font-semibold text-xl ">0.3s</p>
										<PercentCard value={12.5} status/>
									</div>
								</div>
								<LineChartOutbound/>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</section>
	</Suspense>
	);
}
