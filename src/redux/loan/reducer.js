import actions from './actions';

const initState = { roles: [], isLoading: false };

export default function rolesReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_LOANS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_LOANS_SUCCESS:
      return {
        ...state,
        loans: action.loans,
        isLoading: false,
        error: null,
      };
    case actions.GET_LOANS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    case actions.GET_LOAN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loan:'',
      };
    case actions.GET_LOAN_SUCCESS:
      
      return {
        ...state,
        loan: action.loan,
        isLoading: false,
        errors: null,
      };
    case actions.GET_LOAN_FAILURE:
      return {
        ...initState,
        isLoading: false,
        errors: action.errors,
      };


    case actions.CREATE_LOAN_REQUEST:
      return {
        ...state,
        isCreated: false,
        isCreating: true,

      };
    case actions.CREATE_LOAN_SUCCESS:

      return {
        ...state,
        currentLoan: action.newLoan,
        isCreated: true,
        isCreating: false,

        error: null,
      };
    case actions.CREATE_LOAN_FAILURE:
      return {
        isCreating: false,
        isCreated: null,
        error: action.errors,
      };


    case actions.UPDATE_LOAN_REQUEST:
      return {
        ...state,
        isUpdated: false,
        isUpdating: true,
      };
    case actions.UPDATE_LOAN_SUCCESS:
      return {
        ...state,
        currentLoan: action.updatedLoan,
        isUpdated: true,
        error: null,
        isUpdating: false,

      };
    case actions.UPDATE_LOAN_FAILURE:
      return {
        isUpdated: null,
        isUpdating: false,
        error: action.errors,
      };
    default:
      return state;
  }
}
