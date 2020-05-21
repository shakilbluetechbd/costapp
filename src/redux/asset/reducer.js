import actions from './actions';

const initState = { roles: [], isLoading: false };

export default function rolesReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_ASSETS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_ASSETS_SUCCESS:
      return {
        ...state,
        assets: action.assets,
        isLoading: false,
        error: null,
      };
    case actions.GET_ASSETS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errors,
      };

    case actions.GET_ASSET_REQUEST:
      return {
        ...state,
        isLoading: true,
        asset:'',
      };
    case actions.GET_ASSET_SUCCESS:
      
      return {
        ...state,
        asset: action.asset,
        isLoading: false,
        errors: null,
      };
    case actions.GET_ASSET_FAILURE:
      return {
        ...initState,
        isLoading: false,
        errors: action.errors,
      };


    case actions.CREATE_ASSET_REQUEST:
      return {
        ...state,
        isCreated: false,
        isCreating: true,

      };
    case actions.CREATE_ASSET_SUCCESS:

      return {
        ...state,
        currentAsset: action.newAsset,
        isCreated: true,
        isCreating: false,

        error: null,
      };
    case actions.CREATE_ASSET_FAILURE:
      return {
        isCreating: false,
        isCreated: null,
        error: action.errors,
      };


    case actions.UPDATE_ASSET_REQUEST:
      return {
        ...state,
        isUpdated: false,
        isUpdating: true,
      };
    case actions.UPDATE_ASSET_SUCCESS:
      return {
        ...state,
        currentAsset: action.updatedAsset,
        isUpdated: true,
        error: null,
        isUpdating: false,

      };
    case actions.UPDATE_ASSET_FAILURE:
      return {
        isUpdated: null,
        isUpdating: false,
        error: action.errors,
      };
    default:
      return state;
  }
}
