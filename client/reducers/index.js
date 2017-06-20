import { List, Map } from 'immutable';
import { 
  ADD_TODO, 
  TOGGLE_TODO,
  DELETE_TODO 
} from '../action-types';

const init = List([]);

export default function (todos=init, action) {
  switch(action.type) {
    case ADD_TODO:
      return todos.push(Map(action.payload));
    case TOGGLE_TODO:
      return todos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        }

        return t;
      });
    case DELETE_TODO:
      return todos.filter(t => {
        return t.get('id') !== action.payload;
      });
    default:
      return todos;
  }
}
