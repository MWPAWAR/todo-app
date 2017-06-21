import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import EditTodo from '../components/EditTodo';
import TodoList from '../components/TodoList';
import { 
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  updateTodo 
} from '../actions/index';

const mapStateToProps = state => {
  const todos = state.getIn(['todos']);
  const isEditing = state.getIn(['isEditing']);
  const requestedTodoId = state.getIn(['requestedTodoId']);

  return {
    todos,
    isEditing,
    requestedTodoId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: ((id, text) => dispatch(updateTodo(id, text)))
  }
}

const App = (props) => {
  const {
    todos,
    isEditing,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    editTodo,
    requestedTodoId
  } = props;

  if (requestedTodoId) {
    const todoList = todos.filter(t => t.get('id') === requestedTodoId);
    return <EditTodo todo={todoList.get(0)} updateTodo={updateTodo} />;
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
