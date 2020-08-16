import {
  ADD_INCOME_OR_EXPENSE,
  DELETE_INCOME_OR_EXPENSE,
  INCOME_OR_EXPENSE_ERROR,
  UPDATE_INCOME_OR_EXPENSE,
  SET_CURRENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_INCOME_OR_EXPENSE:
      return {};

    default:
      return state;
  }
};
