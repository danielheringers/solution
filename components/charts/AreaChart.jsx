
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [{name: 'NFe', NFe: 128, NFSe: 28, CTe: 22, Hour: "12:45"}, {name: 'NFe', NFe: 205,  NFSe: 128, CTe: 52, Hour: "13:00"}, {name: 'NFe', NFe: 275, NFSe: 185, CTe: 122, Hour: "13:15"}, {name: 'NFe', NFe: 255, NFSe: 143, CTe: 62, Hour: "13:30"}, {name: 'NFe', NFe: 295, NFSe: 280, CTe: 22, Hour: "13:30"}];

const CustomTooltip = ({active, payload, label}) => {
        if(active && payload && payload.length){
            console.log(payload.length)
            return(
                <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
                    
                    <p className='text-sm text-violet-400'>
                        NFSe: 
                        <span className='ml-2'>{payload[0].value}</span>
                    </p>
                </div>
            )
        }
}
const AreaChartOutbound = ({widthProp, heightProp, dataName, color}) => {
    return (
        <AreaChart width={widthProp} height={heightProp} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`${dataName}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="Hour" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend/>
        <Tooltip content={<CustomTooltip/>} />
        <Area type="monotone" dataKey={`${dataName}`} stroke={color} fillOpacity={1} fill={`url(#${dataName})`} />
      </AreaChart>
    );
};

export default AreaChartOutbound;