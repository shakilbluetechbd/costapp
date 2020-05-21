const actions = {
  GET_INCOMES_REQUEST: 'GET_INCOMES_REQUEST',
  GET_INCOMES_SUCCESS: 'GET_INCOMES_SUCCESS',
  GET_INCOMES_FAILURE: 'GET_INCOMES_FAILURE',

  GET_INCOME_FAILURE: 'GET_INCOME_FAILURE',
  GET_INCOME_REQUEST: 'GET_INCOME_REQUEST',
  GET_INCOME_SUCCESS: 'GET_INCOME_SUCCESS',


  CREATE_INCOME_REQUEST: 'CREATE_INCOME_REQUEST',
  CREATE_INCOME_SUCCESS: 'CREATE_INCOME_SUCCESS',
  CREATE_INCOME_FAILURE: 'CREATE_INCOME_FAILURE',

  UPDATE_INCOME_REQUEST: 'UPDATE_INCOME_REQUEST',
  UPDATE_INCOME_SUCCESS: 'UPDATE_INCOME_SUCCESS',
  UPDATE_INCOME_FAILURE: 'UPDATE_INCOME_FAILURE',


  getIncomes: {
    request: pgn => ({ type: actions.GET_INCOMES_REQUEST, payload: pgn }),
    success: data => ({ type: actions.GET_INCOMES_SUCCESS, incomes: data }),
    failure: errs => ({ type: actions.GET_INCOMES_FAILURE, errors: errs }),
  },

  getIncome: {
    request: data => ({ type: actions.GET_INCOME_REQUEST, payload: data }),
    success: data => ({ type: actions.GET_INCOME_SUCCESS, income: data }),
    failure: errs => ({ type: actions.GET_INCOME_FAILURE, errors: errs }),
  },
  createIncome: {
    request: data => ({ type: actions.CREATE_INCOME_REQUEST, payload: data }),
    success: data => ({ type: actions.CREATE_INCOME_SUCCESS, income: data }),
    failure: errs => ({ type: actions.CREATE_INCOME_FAILURE, errors: errs }),
  },
  updateIncome: {
    request: data => ({ type: actions.UPDATE_INCOME_REQUEST, payload: data }),
    success: data => ({ type: actions.UPDATE_INCOME_SUCCESS, updatedIncome: data }),
    failure: errs => ({ type: actions.UPDATE_INCOME_FAILURE, errors: errs }),
  },
};
export default actions;
