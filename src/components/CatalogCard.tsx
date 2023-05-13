import React from "react";
import styled from "@emotion/styled"
import { StyledButton } from "../styles/StyledButton";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from "gatsby";
import { ELinks } from "../constants";

interface ICatalogCardProps {
  name: string;
  link: string;
  price: number;
  image: string;
}

const CatalogCard: React.FC<ICatalogCardProps> = ({ name, price, image, link }) => (
  <Card>
    <Square>
      <Image src={image} />
    </Square>
    <Name to={`${ELinks.CATALOG}/${link}`}>{name}</Name>
    <PriceButton>
      <HiOutlineShoppingBag />
      <Price>{price} ₽</Price>
    </PriceButton>
  </Card>
);

export default CatalogCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`

const Square = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    width: 120%;
    height: 120%;
    margin: -20px;
  }

  transition: width 100ms ease, height 100ms ease, margin 100ms ease;
`

const PriceButton = styled(StyledButton)`
  align-self: flex-start;

  display: flex;
  align-items: center;

  padding: 5px;
`

const Price = styled.span`
  margin-left: 10px;
`

const Name = styled(Link)`
  margin-top: 10px;
  margin-bottom: 5px;
`