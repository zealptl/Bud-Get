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

const Chart = ({ isAnimationActive, title }) => {
  const theme = useTheme();

  const data = [
    {
      name: '08/01',
      income: 10000,
      savings: 0,
    },
    {
      name: '08/05',
      income: 8000,
      savings: 2000,
    },
    {
      name: '08/10',
      income: 7500,
      savings: 500,
    },
    {
      name: '08/15',
      income: 5000,
      savings: 2500,
    },
    {
      name: '08/20',
      income: 5000,
      savings: 0,
    },
    {
      name: '08/25',
      income: 5000,
      savings: 0,
    },
    {
      name: '08/30',
      income: 3000,
      savings: 500,
    },
  ];

  return (
    <Fragment>
      <Title>{title}</Title>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart
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
            <linearGradient id='savings' x1='0' y1='0' x2='0' y2='1'>
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
            isAnimationActive={isAnimationActive}
          />
          <Area
            type='monotone'
            dataKey='savings'
            stroke={theme.palette.savings.main}
            fillOpacity={1}
            fill='url(#savings)'
            isAnimationActive={isAnimationActive}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default Chart;
