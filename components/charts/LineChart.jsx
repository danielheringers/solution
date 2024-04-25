
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [{name: 'Response', Time: 0.3, max: 2, Hour: "12:45"}, {name: 'Response', Time: 0.3, Hour: "13:00"}, {name: 'Response', Time: 0.3, Hour: "13:15"}, {name: 'Response', Time: 0.3, Hour: "13:30"}, {name: 'Response', Time: 0.3, Hour: "13:30"}];
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
const LineChartOutbound = () => {

    return(
        <LineChart width={400} height={200} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Hour" />
            <YAxis dataKey="max" />
            <Tooltip content={<CustomTooltip/>} />
            <Legend />
            <Line type="linear" dataKey="Time" stroke="#6c72ff" />
        </LineChart>
    )
}

export default LineChartOutbound;