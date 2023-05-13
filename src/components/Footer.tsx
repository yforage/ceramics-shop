import React from "react";
import styled from "@emotion/styled";
import { EColors } from "../styles/colors";
import { Link } from "gatsby";
import { ELinks } from "../constants";
import { ScrollUpButton } from "./ScrollUpButton";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Links>
        <HorizontalList>
          <Link to={ELinks.CATALOG}>Каталог</Link>
          <Link to={ELinks.ABOUT}>О нас</Link>
          <Link to={ELinks.DELIVERY}>Доставка</Link>
        </HorizontalList>
        <Link to={ELinks.POLICY}>Политика конфиденциальности</Link>
        <Link to={ELinks.OFERTA}>Публичная оферта</Link>
      </Links>
      <Contacts>
        <span>Моё творчество в соцсетях:</span>
        <HorizontalList>
          <a>Instagram</a>
          <a>VK</a>
          <a>Telegram</a>
        </HorizontalList>
        <ScrollUpButton />
      </Contacts>
      <Name>
        <span>© 2015-2023. «Блюдце в пастель»</span>
      </Name>
    </FooterContainer>
  )
}

export default Footer;

const Name = styled.div`
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div, a {
    margin-bottom: 10px;
  }
`

const Contacts = styled.div`
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${EColors.ACCENT_PINK};

  @media (min-width: 1366px) {
    border: none;
    align-items: flex-end;
  }

  display: flex;
  flex-direction: column;

  padding: 10px 40px;

  & > div, span {
    margin-bottom: 10px;
  }
`

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;

  padding: 30px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${EColors.BG_ACCENT};
    z-index: -1;

    @media (min-width: 1366px) {
      width: 100vw;
      left: calc((100vw - 900px) / 2 * -1);
    }
  }

  @media (min-width: 1366px) {
    flex-direction: row;

    ${Name} {
      order: 1;
    }

    ${Links} {
      order: 2;
    }

    ${Contacts} {
      order: 3;
    }
  }

  ${Links}, ${Contacts} {
    margin-bottom: 10px;
  }
`

const HorizontalList = styled.div`
  & > a:not(:last-of-type) {
    margin-right: 25px;
  }
`