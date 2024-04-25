
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [{name: 'NFe', NFe: 128, NFSe: 28, CTe: 22, Hour: "12:45"}, {name: 'NFe', NFe: 205,  NFSe: 128, CTe: 52, Hour: "13:00"}, {name: 'NFe', NFe: 275, NFSe: 185, CTe: 122, Hour: "13:15"}, {name: 'NFe', NFe: 255, NFSe: 143, CTe: 62, Hour: "13:30"}, {name: 'NFe', NFe: 295, NFSe: 280, CTe: 22, Hour: "13:30"}];
const CustomTooltip = ({active, payload, label}) => {
    if(active && payload && payload.length){
        return(
            <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
                
                <p className='text-sm text-violet-400'>
                    NFSe: 
                    <span className='ml-2'>{payload[0].value}</span>
                </p>
                <p className='text-sm text-blue-400'>
                    NFe: 
                    <span className='ml-2'>{payload[1].value}</span>
                </p>
            </div>
        )
    }
}
const BarChartOutbound = () => {

    return(
        <BarChart width={400} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Hour" />
            <YAxis />
            <Tooltip content={<CustomTooltip/>}/>
            <Legend />
            <Bar dataKey="NFSe" fill="#57c3ff" />
            <Bar dataKey="NFe" fill="#6c72ff" />
        </BarChart>
    );
}

export default BarChartOutbound;