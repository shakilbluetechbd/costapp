const actions = {
  GET_LOANS_REQUEST: 'GET_LOANS_REQUEST',
  GET_LOANS_SUCCESS: 'GET_LOANS_SUCCESS',
  GET_LOANS_FAILURE: 'GET_LOANS_FAILURE',

  GET_LOAN_FAILURE: 'GET_LOAN_FAILURE',
  GET_LOAN_REQUEST: 'GET_LOAN_REQUEST',
  GET_LOAN_SUCCESS: 'GET_LOAN_SUCCESS',


  CREATE_LOAN_REQUEST: 'CREATE_LOAN_REQUEST',
  CREATE_LOAN_SUCCESS: 'CREATE_LOAN_SUCCESS',
  CREATE_LOAN_FAILURE: 'CREATE_LOAN_FAILURE',

  UPDATE_LOAN_REQUEST: 'UPDATE_LOAN_REQUEST',
  UPDATE_LOAN_SUCCESS: 'UPDATE_LOAN_SUCCESS',
  UPDATE_LOAN_FAILURE: 'UPDATE_LOAN_FAILURE',


  getLoans: {
    request: pgn => ({ type: actions.GET_LOANS_REQUEST, payload: pgn }),
    success: data => ({ type: actions.GET_LOANS_SUCCESS, loans: data }),
    failure: errs => ({ type: actions.GET_LOANS_FAILURE, errors: errs }),
  },

  getLoan: {
    request: data => ({ type: actions.GET_LOAN_REQUEST, payload: data }),
    success: data => ({ type: actions.GET_LOAN_SUCCESS, loan: data }),
    failure: errs => ({ type: actions.GET_LOAN_FAILURE, errors: errs }),
  },
  createLoan: {
    request: data => ({ type: actions.CREATE_LOAN_REQUEST, payload: data }),
    success: data => ({ type: actions.CREATE_LOAN_SUCCESS, loan: data }),
    failure: errs => ({ type: actions.CREATE_LOAN_FAILURE, errors: errs }),
  },
  updateLoan: {
    request: data => ({ type: actions.UPDATE_LOAN_REQUEST, payload: data }),
    success: data => ({ type: actions.UPDATE_LOAN_SUCCESS, updatedLoan: data }),
    failure: errs => ({ type: actions.UPDATE_LOAN_FAILURE, errors: errs }),
  },
};
export default actions;
