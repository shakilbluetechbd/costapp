import actions from './actions';

const initState = { roles: [], isLoading: false };

export default function rolesReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_INCOMES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_INCOMES_SUCCESS:
      return {
        ...state,
        incomes: action.incomes,
        isLoading: false,
        error: null,
      };
    case actions.GET_INCOMES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    case actions.GET_INCOME_REQUEST:
      return {
        ...state,
        isLoading: true,
        income:'',
      };
    case actions.GET_INCOME_SUCCESS:
      
      return {
        ...state,
        income: action.income,
        isLoading: false,
        errors: null,
      };
    case actions.GET_INCOME_FAILURE:
      return {
        ...initState,
        isLoading: false,
        errors: action.errors,
      };


    case actions.CREATE_INCOME_REQUEST:
      return {
        ...state,
        isCreated: false,
        isCreating: true,

      };
    case actions.CREATE_INCOME_SUCCESS:

      return {
        ...state,
        currentIncome: action.newIncome,
        isCreated: true,
        isCreating: false,

        error: null,
      };
    case actions.CREATE_INCOME_FAILURE:
      return {
        isCreating: false,
        isCreated: null,
        error: action.errors,
      };


    case actions.UPDATE_INCOME_REQUEST:
      return {
        ...state,
        isUpdated: false,
        isUpdating: true,
      };
    case actions.UPDATE_INCOME_SUCCESS:
      return {
        ...state,
        currentIncome: action.updatedIncome,
        isUpdated: true,
        error: null,
        isUpdating: false,

      };
    case actions.UPDATE_INCOME_FAILURE:
      return {
        isUpdated: null,
        isUpdating: false,
        error: action.errors,
      };
    default:
      return state;
  }
}
