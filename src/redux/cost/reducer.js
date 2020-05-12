import actions from './actions';

const initState = { roles: [], isLoading: false };

export default function rolesReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_COSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_COSTS_SUCCESS:
      return {
        ...state,
        costs: action.costs,
        isLoading: false,
        error: null,
      };
    case actions.GET_COSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    case actions.GET_COST_REQUEST:
      return {
        ...state,
        isLoading: true,
        cost:'',
      };
    case actions.GET_COST_SUCCESS:
      
      return {
        ...state,
        cost: action.cost,
        isLoading: false,
        errors: null,
      };
    case actions.GET_COST_FAILURE:
      return {
        ...initState,
        isLoading: false,
        errors: action.errors,
      };


    case actions.CREATE_COST_REQUEST:
      return {
        ...state,
        isCreated: false,
        isCreating: true,

      };
    case actions.CREATE_COST_SUCCESS:

      return {
        ...state,
        currentUser: action.newUser,
        isCreated: true,
        isCreating: false,

        error: null,
      };
    case actions.CREATE_COST_FAILURE:
      return {
        isCreating: false,
        isCreated: null,
        error: action.errors,
      };


    case actions.UPDATE_COST_REQUEST:
      return {
        ...state,
        isUpdated: false,
        isUpdating: true,
      };
    case actions.UPDATE_COST_SUCCESS:
      return {
        ...state,
        currentUser: action.updatedUser,
        isUpdated: true,
        error: null,
        isUpdating: false,

      };
    case actions.UPDATE_COST_FAILURE:
      return {
        isUpdated: null,
        isUpdating: false,
        error: action.errors,
      };
    default:
      return state;
  }
}
