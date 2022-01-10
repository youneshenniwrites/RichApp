import { combineReducers } from 'redux';

import { Action } from './actions';
import { ActionType } from './actionTypes';

export interface Search {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const searchReducer = (
  state: Search = initialState,
  action: Action
): Search => {
  switch (action.type) {
    case ActionType.SEARCH:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

const reducers = combineReducers({
  searchResults: searchReducer,
});

export default reducers;

export type RooState = ReturnType<typeof reducers>;
