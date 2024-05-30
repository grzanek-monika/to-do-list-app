// selectors
export const getSearchString = ({ searchString }) => searchString;

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

//action creators
const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
}

export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload });

export default searchStringReducer;

