import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { addTodo, toggleTodo } from '../actions/index';

const mapStateToProps = state => {
  console.log('state', state.get('todos'));
  return {
    todos: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id))
  };
}

const App = (props) => {
  const { todos, addTodo, toggleTodo } = props;

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
