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
      income: 5000,
      expense: 500,
    },
    {
      name: '08/05',
      income: 0,
      expense: 1398,
    },
    {
      name: '08/10',
      income: 0,
      expense: 500,
    },
    {
      name: '08/15',
      income: 5000,
      expense: 800,
    },
    {
      name: '08/20',
      income: 0,
      expense: 3500,
    },
    {
      name: '08/25',
      income: 0,
      expense: 600,
    },
    {
      name: '08/30',
      income: 0,
      expense: 800,
    },
  ];

  return (
    <Fragment>
      <Title>This Month</Title>

      <AreaChart
        width={800}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorincome' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              stopColor={theme.palette.income.main}
              stopOpacity={0.8}
            />
            <stop
              offset='95%'
              stopColor={theme.palette.income.main}
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
          dataKey='income'
          stroke={theme.palette.income.main}
          fillOpacity={1}
          fill='url(#colorincome)'
        />
        <Area
          type='monotone'
          dataKey='expense'
          stroke={theme.palette.expense.main}
          fillOpacity={1}
          fill='url(#expense)'
        />
      </AreaChart>
    </Fragment>
  );
};

export default Chart;
