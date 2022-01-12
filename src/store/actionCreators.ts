import { Dispatch } from 'redux';
import axios from 'axios';

import { Action } from './actions';
import { ActionType } from './actionTypes';
import { NPM_API_URL } from '../constants';

export const searchLibraries = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH,
    });

    try {
      const { data } = await axios.get(NPM_API_URL, {
        params: { text: term },
      });

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionType.SEARCH_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_ERROR,
        payload: err.message,
      });
    }
  };
};
