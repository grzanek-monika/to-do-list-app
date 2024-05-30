import { createStore, combineReducers  } from 'redux';
import initialState from './initialState.js';
import listsReducer from './listsReducer.js';
import columnsReducer from './columnsReducer.js';
import cardsReducer from './cardsReducer.js';
import searchStringReducer from './searchStringReducer.js';

// subrecuders
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
