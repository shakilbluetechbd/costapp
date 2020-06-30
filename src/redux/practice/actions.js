const actions = {
  GET_APPARELS_REQUEST: 'GET_APPARELS_REQUEST',
  GET_APPARELS_SUCCESS: 'GET_APPARELS_SUCCESS',
  GET_APPARELS_FAILURE: 'GET_APPARELS_FAILURE',


  GET_EMPLOYEES_REQUEST: 'GET_EMPLOYEES_REQUEST',
  GET_EMPLOYEES_SUCCESS: 'GET_EMPLOYEES_SUCCESS',
  GET_EMPLOYEES_FAILURE: 'GET_EMPLOYEES_FAILURE',



  getApparels: {
    request: pgn => ({ type: actions.GET_APPARELS_REQUEST, payload: pgn }),
    success: data => ({ type: actions.GET_APPARELS_SUCCESS, apparels: data }),
    failure: errs => ({ type: actions.GET_APPARELS_FAILURE, errors: errs }),
  },


  getEmployees: {
    request: pgn => ({ type: actions.GET_EMPLOYEES_REQUEST, payload: pgn }),
    success: data => ({ type: actions.GET_EMPLOYEES_SUCCESS, employees: data }),
    failure: errs => ({ type: actions.GET_EMPLOYEES_FAILURE, errors: errs }),
  },
};
export default actions;
