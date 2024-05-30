import shortid from "shortid";


// selectors
export const getAllColumns = (state => state.columns);
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);


// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');


// creators

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
}

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export default columnsReducer;