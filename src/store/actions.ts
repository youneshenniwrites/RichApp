import { ActionType } from './actionTypes';

interface SearchAction {
  type: ActionType.SEARCH;
}

interface SearchSuccessAction {
  type: ActionType.SEARCH_SUCCESS;
  payload: string[];
}

interface SearchErrorAction {
  type: ActionType.SEARCH_ERROR;
  payload: string;
}

export type Action = SearchAction | SearchSuccessAction | SearchErrorAction;
