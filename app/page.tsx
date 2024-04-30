'use client'

import { Progress } from "@nextui-org/progress";
import ParticlesContainer from "components/particlesContainer";
import Image from "next/image";
import Astronaut from "public/Astronaut.jpg";
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
		<section className="flex flex-col items-start justify-start gap-2 py-8 md:py-10">
			<div className="w-full h-full">
				<ParticlesContainer />
			</div>
            <div className="w-screen opacity-50">
                <Image src={Astronaut} alt="astronaut" layout="fill" objectFit="cover" quality={100}/>
            </div>
		</section>
	</Suspense>
	);
}
