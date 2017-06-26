import React from 'react';

const AddTodo = (props) => {
  const { addTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  return (
    <div>
      <input
        type='text'
        className='todo__entry'
        placeholder='Add todo'
        onKeyDown={onSubmit}
      />
      <span className='todo__informatory_text'>
        Tip: The text should not be empty. After inserting any text please press enter to add Todo.
      </span>
    </div>
  );
}

export default AddTodo;
