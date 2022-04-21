import React, { useState } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 18px;
  color: #106cde;
  font-weight: 700;
`;
function TodoLeft({ todos }) {
  return (
    <>
      <Text>{todos.length} todos left</Text>
    </>
  );
}

export default TodoLeft;
