import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./chart.css";
function chart({ aspect, title }) {
    const data = [
        { name: "january", Total: 1250 },
        { name: "febuary", Total: 1245 },
        { name: "march", Total: 4580 },
        { name: "april", Total: 4453 },
        { name: "may", Total: 4578 }
    ];

    return (<div className="chart">
        <div className="head"> {title}
        </div>
        <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>

                </defs>
                <XAxis dataKey="name" />

                <CartesianGrid strokeDasharray="3 3" className='chartgrid' />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

            </AreaChart>
        </ResponsiveContainer>

    </div>);
}

export default chart; 