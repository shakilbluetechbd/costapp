const actions = {
  GET_REPORT_REQUEST: 'GET_REPORT_REQUEST',
  GET_REPORT_SUCCESS: 'GET_REPORT_SUCCESS',
  GET_REPORT_FAILURE: 'GET_REPORT_FAILURE',


  getReport: {
    request: (evt) => ({ type: actions.GET_REPORT_REQUEST, evt }),
    success: data => ({ type: actions.GET_REPORT_SUCCESS, report: data }),
    failure: errs => ({ type: actions.GET_REPORT_FAILURE, errors: errs }),
  },

  GET_SEARCH_REQUEST: 'GET_SEARCH_REQUEST',
  GET_SEARCH_SUCCESS: 'GET_SEARCH_SUCCESS',
  GET_SEARCH_FAILURE: 'GET_SEARCH_FAILURE',


  getSearch: {
    request: (evt) => ({ type: actions.GET_SEARCH_REQUEST, evt }),
    success: data => ({ type: actions.GET_SEARCH_SUCCESS, searchResult: data }),
    failure: errs => ({ type: actions.GET_SEARCH_FAILURE, errors: errs }),
  },

};
export default actions;
