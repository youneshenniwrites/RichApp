import { createStore } from 'redux';
import { searchReducer } from './Search/reducers';

const store = createStore(searchReducer);

export default store;
