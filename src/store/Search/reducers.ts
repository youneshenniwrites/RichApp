import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from './actions';

export interface Search {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  error: null,
  loading: false,
  data: [],
};

interface SearchAction {
  type: typeof SEARCH;
}

interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS;
  payload: string[];
}

interface SearchErrorAction {
  type: typeof SEARCH_ERROR;
  payload: string;
}

type Action = SearchAction | SearchSuccessAction | SearchErrorAction;

export const searchReducer = (
  state: Search = initialState,
  action: Action
): Search => {
  switch (action.type) {
    case SEARCH:
      return { loading: true, error: null, data: [] };
    case SEARCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SEARCH_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
