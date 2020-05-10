const actions = {
  GET_COSTS_REQUEST: 'GET_COSTS_REQUEST',
  GET_COSTS_SUCCESS: 'GET_COSTS_SUCCESS',
  GET_COSTS_FAILURE: 'GET_COSTS_FAILURE',

  GET_COST_FAILURE: 'GET_COST_FAILURE',
  GET_COST_REQUEST: 'GET_COST_REQUEST',
  GET_COST_SUCCESS: 'GET_COST_SUCCESS',


  CREATE_COST_REQUEST: 'CREATE_COST_REQUEST',
  CREATE_COST_SUCCESS: 'CREATE_COST_SUCCESS',
  CREATE_COST_FAILURE: 'CREATE_COST_FAILURE',

  UPDATE_COST_REQUEST: 'UPDATE_COST_REQUEST',
  UPDATE_COST_SUCCESS: 'UPDATE_COST_SUCCESS',
  UPDATE_COST_FAILURE: 'UPDATE_COST_FAILURE',


  getCosts: {
    request: pgn => ({ type: actions.GET_COSTS_REQUEST, payload: pgn }),
    success: data => ({ type: actions.GET_COSTS_SUCCESS, costs: data }),
    failure: errs => ({ type: actions.GET_COSTS_FAILURE, errors: errs }),
  },

  getCost: {
    request: data => ({ type: actions.GET_COST_REQUEST, payload: data }),
    success: data => ({ type: actions.GET_COST_SUCCESS, cost: data }),
    failure: errs => ({ type: actions.GET_COST_FAILURE, errors: errs }),
  },
  createCost: {
    request: data => ({ type: actions.CREATE_COST_REQUEST, payload: data }),
    success: data => ({ type: actions.CREATE_COST_SUCCESS, cost: data }),
    failure: errs => ({ type: actions.CREATE_COST_FAILURE, errors: errs }),
  },
  updateCost: {
    request: data => ({ type: actions.UPDATE_COST_REQUEST, payload: data }),
    success: data => ({ type: actions.UPDATE_COST_SUCCESS, updatedCost: data }),
    failure: errs => ({ type: actions.UPDATE_COST_FAILURE, errors: errs }),
  },
};
export default actions;
