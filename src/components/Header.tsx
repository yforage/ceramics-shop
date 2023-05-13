import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { EColors } from "../styles/colors";
import { ELinks } from "../constants";
import { HiOutlineShoppingBag } from 'react-icons/hi';

interface IHeaderProps {
  activePage?: ELinks;
}

const Header: React.FC<IHeaderProps> = ({ activePage }) => {
  return (
    <HeaderContainer>
      <Content>
        <PageLink to={ELinks.CATALOG} isActive={activePage === ELinks.CATALOG}>
          Каталог
        </PageLink>
        <PageLink to={ELinks.ABOUT} isActive={activePage === ELinks.ABOUT}>
          О нас
        </PageLink>
        <LogoLink to={ELinks.HOME}>
          Блюдце<br/>в пастель
        </LogoLink>
        <PageLink to={ELinks.DELIVERY} isActive={activePage === ELinks.DELIVERY}>
          Доставка
        </PageLink>
        <PageLink to={ELinks.CHECKOUT} isActive={activePage === ELinks.CHECKOUT}>
          <HiOutlineShoppingBag />
        </PageLink>
      </Content>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  background-color: ${EColors.BG};

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    border-bottom: 2px solid ${EColors.ACCENT_GREEN};
  }
`

const Content = styled.div`
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > a:not(:last-of-type) {
    margin-right: 40px;
  }
`

interface IPageLink {
  isActive: boolean;
}
const PageLink = styled(Link)<IPageLink>`
  ${({ isActive }) => isActive ? `color: ${EColors.ACCENT_GREEN};` : ''}
`

const LogoLink = styled(Link)`
  font-family: 'Virilica';
  font-weight: 700;
  color: ${EColors.ACCENT_PINK};

  font-size: 25px;

  text-align: center;
`