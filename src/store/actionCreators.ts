import { Dispatch } from 'redux';
import axios from 'axios';

import { Action } from './actions';
import { ActionType } from './actionTypes';

const BASE_URL = 'https://registry.npmjs.org/-/v1/search';

export const searchLibraries = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH,
    });

    try {
      const { data } = await axios.get(BASE_URL, {
        params: { term },
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
