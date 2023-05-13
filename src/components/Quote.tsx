import React from "react";
import styled from "@emotion/styled"
import OpenQuoteIcon from "./icons/OpenQuoteIcon";
import CloseQuoteIcon from "./icons/CloseQuoteIcon";
import { Title } from "../styles/Title";

interface IQuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<IQuoteProps> = ({ text, author }) => {
  return (
    <Container>
      <OpenQuote />
      <Title>
        {text}
      </Title>
      <CloseQuote />
      <Author>
        {author}
      </Author>
    </Container>
  )
}

export default Quote;

const Container = styled.div`
  position: relative;
  padding: 60px 30px;
`

const Author = styled.p`
  text-align: center;

  margin-top: 10px;
`

const OpenQuote = styled(OpenQuoteIcon)`
  position: absolute;
  bottom: 10px;
  right: 0;


  width: 10%;
  height: auto;
  overflow: visible;
`

const CloseQuote = styled(CloseQuoteIcon)`
  position: absolute;
  top: 10px;
  left: 0;

  width: 10%;
  height: auto;
  overflow: visible;
`