import React from "react";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import CatalogCard from "./CatalogCard";
import { ECardsSorting, ICard } from "../graphql/types";

interface ICatalogCardsProps {
  categorieId: string;
  sortBy: ECardsSorting;
}

const GET_CARDS_BY_CATEGORIE = gql`
  query CatalogCards($categorieId: ID!, $sortBy: Sort) {
    cards(categorieId: $categorieId, sortBy: $sortBy) {
      id,
      name,
      price,
      images,
    }
  }
`

const CatalogCards: React.FC<ICatalogCardsProps> = ({ categorieId, sortBy }) => {
  const { data } = useQuery(GET_CARDS_BY_CATEGORIE, {
    variables: { categorieId, sortBy }
  });

  return (
    <CardsContainer>
      {data && data.cards.map((card: ICard) => (
        <CatalogCard
          key={card.id}
          {...card}
          image={card.images[0]}
          link={card.id}
        />
      ))}
    </CardsContainer>
  )
}

export default CatalogCards;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`