import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
`;

const DayName = styled.div`
  font-size: 20px;
  color: #868e96;
  margin-bottom: 40px;
`;

function TodoDate() {
  const today = new Date();
  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  //   const todos = useTodoState();
  //   const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <>
      <Title>{dateString}</Title>
      <DayName>{dayName}</DayName>
    </>
  );
}

export default TodoDate;
