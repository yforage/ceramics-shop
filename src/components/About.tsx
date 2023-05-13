import React from "react";
import styled from "@emotion/styled"
import { Title } from "../styles/Title";

const About: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>О нас</Title>
        <SubTitle>"Блюдце в пастель" - это уютный онлайн-магазин керамики ручной работы.<br />Он о проявлении нежности, любви к природе и своим покупателям.</SubTitle>
      </div>
      <Content>
        <Image src="https://img.freepik.com/free-photo/woman-craftmaster-at-a-pottery-shop_1303-23733.jpg?w=360&t=st=1683568419~exp=1683569019~hmac=30ca5e651a80c6dae17d243e650ccc1d256a59305c57758dca1e04f537309687" />
        <Description>
          <p>Привет, меня зовут Мария и это мой магазин керамики. Я уже 8 лет занимаюсь гончарным ремеслом, лепкой и созданием дизайна для Блюдца.</p>
          <p>Здесь вы найдете вазу для цветов, кружку в подарок, тарелку под печеньки и много другое.</p>
          <p>Спасибо за Ваш интерес к моему творчеству! Для меня большое удовольствие вносить уют и красоту в дома и сердца людей.</p>
          <List>
            <li>Все изделия уникальны, потому что они сделаны вручную.</li>
            <li>Все изделия экологичны, я использую натуральные красители и гончарную глину.</li>
            <li>Все изделия можно мыть в посудомоечной машине и нагревать в микроволновке.</li>
          </List>
        </Description>
      </Content>
    </Container>
  )
}

export default About;

const Container = styled.div`
`

const SubTitle = styled.p`
  text-align: center;
  margin-top: 15px;
`

const Content = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  border-radius: 15px;
`

const Description = styled.div`
  padding: 0 60px;

  & > p:not(:last-of-type) {
    margin-bottom: 5px;
  }
`

const List = styled.ul`
  margin-top: 30px;
`