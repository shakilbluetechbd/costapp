import actions from './actions';

const initState = { roles: [], isLoading: false };

export default function rolesReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_APPARELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_APPARELS_SUCCESS:
      return {
        ...state,
        apparels: action.apparels,
        isLoading: false,
        error: null,
      };
    case actions.GET_APPARELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    default:
      return state;
  }
}
