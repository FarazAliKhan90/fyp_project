import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "08:00 AM", patients: 5 },
  { time: "09:00 AM", patients: 10 },
  { time: "10:00 AM", patients: 15 },
  { time: "11:00 AM", patients: 25 },
  { time: "12:00 PM", patients: 30 },
  { time: "01:00 PM", patients: 20 },
  { time: "02:00 PM", patients: 18 },
  { time: "03:00 PM", patients: 12 },
  { time: "04:00 PM", patients: 8 },
  
];

const Patientgraph = () => {
  return (
    <div style={{
      width: "100%",
      height: 340,
      background: "#E4EAF0", 
      padding: 20,
      borderRadius: 12,
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    }}>
      <h4 style={{ color: "#2E4756", textAlign: "center", fontWeight: "600", marginBottom: 12 }}>
        📈 Patient Volume Trends
      </h4>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: -10, bottom: 10 }}>
          
          {/* Grid */}
          <CartesianGrid strokeDasharray="4 4" stroke="#5A6C7D" />

          {/* X and Y Axis */}
          <XAxis dataKey="time" tick={{ fill: "#2E4756", fontSize: 12, fontWeight: "bold" }} />
          <YAxis tick={{ fill: "#2E4756", fontSize: 12, fontWeight: "bold" }} />

          {/* Tooltip */}
          <Tooltip contentStyle={{ backgroundColor: "#2E4756", color: "#fff", borderRadius: "6px", padding: "10px" }} />

          {/* Legend */}
          <Legend wrapperStyle={{ color: "#2E4756", fontSize: "14px", fontWeight: "bold" }} />

          {/* Line with professional color */}
          <Line 
            type="monotone" 
            dataKey="patients" 
            stroke="#2E4756" 
            strokeWidth={3} 
            dot={{ fill: "#2E4756", r: 6 }} 
            activeDot={{ r: 8, stroke: "#5A6C7D", strokeWidth: 2 }} 
          />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Patientgraph;
