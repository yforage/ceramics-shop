import React from "react"
import { StyledButton } from "../styles/StyledButton"
import { TbArrowBarUp } from 'react-icons/tb';
import styled from "@emotion/styled";

export const ScrollUpButton = () => {
  const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Button onClick={scroll}>
      {/* <BiArrowFromBottom /> */}
      <TbArrowBarUp />
      Наверх
    </Button>
  )
}

const Button = styled(StyledButton)`
  padding: 3px 10px;

  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }
`