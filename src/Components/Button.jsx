import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  background-color: #00b4d8;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #00a3c4;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const MyBtn = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default MyBtn;
