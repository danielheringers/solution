'use client'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [{name: 'NFe', NFe: 128, Hour: "12:45"}, {name: 'NFe', NFe: 205, Hour: "13:00"}, {name: 'NFe', NFe: 275, Hour: "13:15"}, {name: 'NFe', NFe: 255, Hour: "13:30"}, {name: 'NFe', NFe: 295, Hour: "13:30"}];

const CustomTooltip = ({active, payload, label}) => {
        if(active && payload && payload.length){
            return(
                <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
                    
                    <p className='text-sm text-blue-400'>
                        NFe: 
                        <span className='ml-2'>{payload[0].value}</span>
                    </p>
                </div>
            )
        }
}
export const AreaChart = () => {
    return (
        <LineChart width={600} height={300} data={data}>
            <Line type="linear" dataKey="NFe" stroke="#e408a2" />
            <CartesianGrid stroke="#cccccc63"/>
            <XAxis dataKey="Hour" />
            <YAxis />
            <Legend/>
            <Tooltip content={<CustomTooltip/>} />
      </LineChart>
    );
};