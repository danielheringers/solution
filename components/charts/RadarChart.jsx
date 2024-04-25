'use client'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
const data = [{ 'subject': 'Caio', 'A': 50, 'fullMark': 100 }, 
{ 'subject': 'Enio', 'A': 30, 'fullMark': 100 },
{ 'subject': 'Gabriel', 'A': 40,'fullMark': 100 },
{ 'subject': 'Mateus', 'A': 35,'fullMark': 100 },
{ 'subject': 'Igor', 'A': 90,'fullMark': 100 },
{ 'subject': 'Daniel', 'A': 90,'fullMark': 100 },
]
export const RadarOutbound = () => {

    return(
        <RadarChart outerRadius={85} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Documentos" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    );
};