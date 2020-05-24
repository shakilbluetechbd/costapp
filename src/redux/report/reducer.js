import actions from './actions';

const initState = { roles: [], isLoading: false };

export default function rolesReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_REPORT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_REPORT_SUCCESS:
      return {
        ...state,
        report: action.report,
        isLoading: false,
        error: null,
      };
    case actions.GET_REPORT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    case actions.GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_SEARCH_SUCCESS:
      return {
        ...state,
        searchResult: action.searchResult,
        isLoading: false,
        error: null,
      };
    case actions.GET_SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    default:
      return state;
  }
}
