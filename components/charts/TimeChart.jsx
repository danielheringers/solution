/* eslint-disable react/prop-types */

import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomTooltip = ({active, payload, label}) => {
    if(active && payload && payload.length){
        return(
            <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
                <p className='text-sm text-violet-400'>
                    Tempo de Resposta: 
                    <span className='ml-2'>{payload[0].value}</span>
                </p>
            </div>
        )
    }
}
const TimeChartOutbound = ({DataGet, color, dataName}) => {
    // eslint-disable-next-line react/prop-types
    const last24Data = DataGet.slice(-24);
    
    return(
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={last24Data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={`${dataName}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="horario" minTickGap={50}/>
                    <YAxis tickSize={10} type="number" domain={[0, 8]} allowDataOverflow />
                    <CartesianGrid strokeDasharray="3 3" />
                    <ReferenceLine y={1} stroke="red" strokeDasharray="3 3" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="nfe_response_time" stroke={color} fillOpacity={1} fill={`url(#${dataName})`} />
                </AreaChart>
            </ResponsiveContainer>
    )
}

export default TimeChartOutbound;