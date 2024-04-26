'use client'
import React, { Suspense, useState, useEffect, lazy } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import { Progress } from "@nextui-org/Progress";
import StatusSefaz from "@/components/Status/Status";
import NFSeChart from "@/components/Charts/NFSeChart";

const CardsChart = lazy(() => import("@/components/Cards/Cards"));
const AreaChartOutbound = lazy(() => import("@/components/Charts/AreaChart"));
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
			<NFSeChart/>
		</section>
	</Suspense>
	);
}
