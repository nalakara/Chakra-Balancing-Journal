import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';

interface ChartData {
  day: number;
  energy: number;
  sentiment: number;
}

interface DataVisualizationProps {
  data: ChartData[];
}

const getSentimentLabel = (sentiment: number) => {
    if (sentiment > 0) return 'Positif';
    if (sentiment < 0) return 'Negatif';
    return 'Netral';
};

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const energyData = payload.find((p: any) => p.dataKey === 'energy');
    const sentimentData = payload.find((p: any) => p.dataKey === 'sentiment');
    
    return (
      <div className="p-3 bg-white/80 backdrop-blur-sm shadow-lg rounded-md border border-gray-200">
        <p className="font-bold text-gray-800">{`Hari ${label}`}</p>
        {energyData && <p className="text-indigo-600">{`Energi: ${energyData.value}`}</p>}
        {sentimentData && <p className="text-teal-600">{`Sentimen: ${getSentimentLabel(sentimentData.value)}`}</p>}
      </div>
    );
  }
  return null;
};

const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
  return (
    <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Visualisasi Perjalanan Anda</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" dataKey="energy" domain={[0, 10]} stroke="#4f46e5" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="right" dataKey="sentiment" orientation="right" domain={[-1.5, 1.5]} stroke="#14b8a6" tickFormatter={getSentimentLabel} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{fontSize: "14px"}}/>
            <Bar yAxisId="right" dataKey="sentiment" name="Sentimen" barSize={20}>
               {data.map((entry, index) => {
                    const color = entry.sentiment > 0 ? '#10b981' : entry.sentiment < 0 ? '#ef4444' : '#6b7280';
                    return <Cell key={`cell-${index}`} fill={color} />;
                })}
            </Bar>
            <Line yAxisId="left" type="monotone" dataKey="energy" name="Skala Energi" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 8 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataVisualization;
