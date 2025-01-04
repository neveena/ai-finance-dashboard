import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { useGlobalState } from '../state/GlobalState';

const Chart: React.FC = () => {
  const { state } = useGlobalState();

  // Prepare data for the chart
  const chartData = state.goals.map((goal) => {
    const totalExpenses = state.expenses
      .filter((expense) => expense.goalId === goal.id)
      .reduce((sum, expense) => sum + expense.amount, 0);

    return {
      name: goal.title,
      Spent: totalExpenses,
      Target: goal.targetAmount,
    };
  });

  return (
    <div style={{ height: '400px', marginTop: '2rem' }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Spent" fill="#8884d8" name="Spent" />
          <Bar dataKey="Target" fill="#82ca9d" name="Target" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
