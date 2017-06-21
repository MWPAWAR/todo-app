import { List, Map } from 'immutable';
import { 
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from '../action-types';

const init = new Map({ 
  todos: new List([]), 
  isEditing: false 
});

export default function (state=init, action) {
  let todos = state.getIn(['todos']);
  const isEditing = state.getIn(['isEditing']);

  switch(action.type) {
    case ADD_TODO:
      todos = todos.push(Map(action.payload));
      return new Map({
        todos,
        isEditing
      });
    case TOGGLE_TODO:
      todos = todos.map(t => {
        return t.get('id') === action.payload 
          ? t.update('isDone', isDone => !isDone)
          : t;
      });

      return new Map({
        todos,
        isEditing
      });
    case DELETE_TODO:
      todos = todos.filter(t => t.get('id') !== action.payload);

      return new Map({
        todos,
        isEditing
      });
    case EDIT_TODO:
      return new Map({
        todos,
        isEditing: true,
        requestedTodoId: action.payload
      });
    case UPDATE_TODO:
      todos = todos.map(t => {
        return t.get('id') === action.payload.id
          ? t.update('text', text => action.payload.text)
          : t;
      });

      return new Map({
        todos,
        isEditing: false
      });
    default:
      return state;
  }
}
