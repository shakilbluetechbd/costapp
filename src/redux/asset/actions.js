const actions = {
  GET_ASSETS_REQUEST: 'GET_ASSETS_REQUEST',
  GET_ASSETS_SUCCESS: 'GET_ASSETS_SUCCESS',
  GET_ASSETS_FAILURE: 'GET_ASSETS_FAILURE',

  GET_ASSET_FAILURE: 'GET_ASSET_FAILURE',
  GET_ASSET_REQUEST: 'GET_ASSET_REQUEST',
  GET_ASSET_SUCCESS: 'GET_ASSET_SUCCESS',


  CREATE_ASSET_REQUEST: 'CREATE_ASSET_REQUEST',
  CREATE_ASSET_SUCCESS: 'CREATE_ASSET_SUCCESS',
  CREATE_ASSET_FAILURE: 'CREATE_ASSET_FAILURE',

  UPDATE_ASSET_REQUEST: 'UPDATE_ASSET_REQUEST',
  UPDATE_ASSET_SUCCESS: 'UPDATE_ASSET_SUCCESS',
  UPDATE_ASSET_FAILURE: 'UPDATE_ASSET_FAILURE',


  getAssets: {
    request: pgn => ({ type: actions.GET_ASSETS_REQUEST, payload: pgn }),
    success: data => ({ type: actions.GET_ASSETS_SUCCESS, assets: data }),
    failure: errs => ({ type: actions.GET_ASSETS_FAILURE, errors: errs }),
  },

  getAsset: {
    request: data => ({ type: actions.GET_ASSET_REQUEST, payload: data }),
    success: data => ({ type: actions.GET_ASSET_SUCCESS, asset: data }),
    failure: errs => ({ type: actions.GET_ASSET_FAILURE, errors: errs }),
  },
  createAsset: {
    request: data => ({ type: actions.CREATE_ASSET_REQUEST, payload: data }),
    success: data => ({ type: actions.CREATE_ASSET_SUCCESS, asset: data }),
    failure: errs => ({ type: actions.CREATE_ASSET_FAILURE, errors: errs }),
  },
  updateAsset: {
    request: data => ({ type: actions.UPDATE_ASSET_REQUEST, payload: data }),
    success: data => ({ type: actions.UPDATE_ASSET_SUCCESS, updatedAsset: data }),
    failure: errs => ({ type: actions.UPDATE_ASSET_FAILURE, errors: errs }),
  },
};
export default actions;
