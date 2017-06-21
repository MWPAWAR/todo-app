import { 
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from '../action-types';

// Generating random id to have uniqueness for Todos.
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}

export function editTodo(id) {
  return {
    type: EDIT_TODO,
    payload: id
  };
}

export function updateTodo(id, text) {
  return {
    type: UPDATE_TODO,
    payload: { id, text }
  };
}