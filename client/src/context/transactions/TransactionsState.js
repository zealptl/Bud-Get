import React, { useReducer } from 'react';
import axios from 'axios';
import TransactionsContext from './TransactionsContext';
import TransactionsReducer from './TransactionsReducer';
import {
  ADD_INCOME_OR_EXPENSE,
  DELETE_INCOME_OR_EXPENSE,
  INCOME_OR_EXPENSE_ERROR,
  UPDATE_INCOME_OR_EXPENSE,
  SET_CURRENT,
} from '../types';
import incomeOrExpense from '../../../../src/models/incomeOrExpense';

const TransactionsState = (props) => {
  const initialState = {
    incomes: [],
    expense: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  // Add Income or Expense
  const addIncomeOrExpense = async (incomeOrExpense) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const res = axios.post('/api/incomeOrExpense', incomeOrExpense, config);
      dispatch({
        type: ADD_INCOME_OR_EXPENSE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: INCOME_OR_EXPENSE_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // Delete Income Or Expense
  const deleteIncomeOrExpense = async (id) => {
    try {
      await axios.delete(`/api/incomeOrExpense/${id}`);

      dispatch({
        type: DELETE_INCOME_OR_EXPENSE,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: INCOME_OR_EXPENSE_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const updateIncomeOrExpense = async (incomeOrExpense) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const res = await axios.put(
        `/api/incomeOrExpense/${incomeOrExpense._id}`,
        incomeOrExpense,
        config
      );

      dispatch({
        type: UPDATE_INCOME_OR_EXPENSE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: INCOME_OR_EXPENSE_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // Set Current Contact
  const setCurrent = (incomeOrExpense) => {
    dispatch({ type: SET_CURRENT, payload: incomeOrExpense });
  };

  return (
    <TransactionsContext.Provider
      value={{
        incomes: state.incomes,
        expense: state.expense,
        current: state.current,
        error: state.error,
        addIncomeOrExpense,
        deleteIncomeOrExpense,
        updateIncomeOrExpense,
        setCurrent,
      }}
    ></TransactionsContext.Provider>
  );
};

export default TransactionsState;
