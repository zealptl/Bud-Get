import React, { Fragment } from 'react';
import Title from '../../layout/Title';
import { useTheme } from '@material-ui/core';
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';

const Chart = () => {
  const theme = useTheme();

  const data = [
    {
      name: '08/01',
      savings: 10000,
      expense: 0,
    },
    {
      name: '08/05',
      savings: 8000,
      expense: 2000,
    },
    {
      name: '08/10',
      savings: 7500,
      expense: 500,
    },
    {
      name: '08/15',
      savings: 5000,
      expense: 2500,
    },
    {
      name: '08/20',
      savings: 5000,
      expense: 0,
    },
    {
      name: '08/25',
      savings: 5000,
      expense: 0,
    },
    {
      name: '08/30',
      savings: 3000,
      expense: 500,
    },
  ];

  return (
    <Fragment>
      <Title>This Month</Title>

      <AreaChart
        width={850}
        height={270}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorsavings' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              stopColor={theme.palette.savings.main}
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor={theme.palette.savings.main}
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id='expense' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              stopColor={theme.palette.expense.main}
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor={theme.palette.expense.main}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' />
        <YAxis />

        <Tooltip />
        <Area
          type='monotone'
          dataKey='savings'
          stroke={theme.palette.savings.main}
          fillOpacity={1}
          fill='url(#colorsavings)'
        />
        <Area
          type='monotone'
          dataKey='expense'
          stroke={theme.palette.expense.main}
          fillOpacity={1}
          fill='url(#expense)'
        />
        <CartesianGrid strokeDasharray='3 3' />
      </AreaChart>
    </Fragment>
  );
};

export default Chart;
