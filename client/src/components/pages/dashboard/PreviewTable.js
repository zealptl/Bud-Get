import React from 'react';
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Link,
} from '@material-ui/core';
import Title from '../../layout/Title';

const useStyles = makeStyles((theme) => ({
  row: {
    borderBottom: `1px solid ${theme.palette.income.main} !important`,
  },
}));

const createData = (date, description, category, amount) => {
  return { date, description, category, amount };
};

const rows = [
  createData('08/01', 'Salary', 'Income', 2500),
  createData('08/07', 'Salary', 'Income', 2500),
  createData('08/14', 'Salary', 'Income', 2500),
  createData('08/28', 'Salary', 'Income', 2500),
  createData('08/28', 'Salary', 'Income', 2500),
];

const PreviewTable = ({ type }) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Title>{`${type[0].toUpperCase()}${type.slice(1)}`}</Title>
      <Table size='small' aria-lable='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Date</TableCell>
            <TableCell align='right' className={classes.cell}>
              Description
            </TableCell>
            <TableCell align='right' className={classes.cell}>
              Category
            </TableCell>
            <TableCell align='right' className={classes.cell}>
              Amounts
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component='th' scope='row' className={classes.cell}>
                {row.date}
              </TableCell>
              <TableCell align='right' className={classes.cell}>
                {row.description}
              </TableCell>
              <TableCell align='right' className={classes.cell}>
                {row.category}
              </TableCell>
              <TableCell
                align='right'
                className={classes.cell}
              >{`$ ${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href='#' style={{ float: 'right' }}>
        More
      </Link>
    </TableContainer>
  );
};

export default PreviewTable;
