import React from 'react';
import './TodoList.css'


function TodoList(props) {
  return (
    <section 
      className={`Empty-Todos--${props.active}`}
    >
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
