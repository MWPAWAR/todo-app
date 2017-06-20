import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { addTodo, toggleTodo, deleteTodo } from '../actions/index';

const mapStateToProps = state => {
  return {
    todos: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
}

const App = (props) => {
  const { todos, addTodo, toggleTodo, deleteTodo } = props;

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
