import React, { useState } from "react";
import styled from "styled-components";
import TodoAdd from "../TodoAdd";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoList from "../TodoList";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #6e6753;
  padding: 30px;
`;

const TodoContainer = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 370px;
  padding: 20px;
`;

const BreakLine = styled.hr`
  margin-bottom: 18px;
`;

function MainPage() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "Read a book",
    //   isDone: true,
    // },
    // {
    //   id: 2,
    //   text: "Jog for an hour",
    //   isDone: false,
    // },
    // {
    //   id: 3,
    //   text: "Do school homework",
    //   isDone: true,
    // },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const changeIsDone = (id) => {
    const currentTodo = todos[id - 1];
    currentTodo.isDone = !currentTodo.isDone;
    setTodos([...todos]);
  };

  const removeTodo = (id) => {
    console.log("-----------", id);

    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };
  return (
    <Container>
      <TodoContainer>
        <TodoDate />
        <TodoLeft todos={todos} />

        <BreakLine></BreakLine>
        <TodoAdd todos={todos} updateTodo={addTodo} />
        <TodoList
          todos={todos}
          switchStatus={changeIsDone}
          deleteTodo={removeTodo}
        />
      </TodoContainer>
    </Container>
  );
}

export default MainPage;
