import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
function TodoList({ todos, switchStatus, deleteTodo }) {
  return (
    <>
      <Container>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            switchStatus={switchStatus}
            deleteTodo={deleteTodo}
          ></TodoItem>
        ))}
        {/* <TodoItem text="Read a book" isDone={true}></TodoItem>
        <TodoItem text="Jog for an hour" isDone={false}></TodoItem>
        <TodoItem text="Do school homework" isDone={false}></TodoItem> */}
      </Container>
    </>
  );
}

export default TodoList;
