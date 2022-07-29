import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Box = styled.div`
  padding: 1rem;
`;

const Main = ({ changeTimer, timer, disabled }) => {
  return (
    <Box>
      <h2>Click for the countdown</h2>
      <Button disabled={disabled} onClick={changeTimer}>
        {timer} s
      </Button>
    </Box>
  );
};

export default Main;
