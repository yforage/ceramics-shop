import React from "react"
import styled from "@emotion/styled"
import { Title } from "../styles/Title"
import { gql, useQuery } from "@apollo/client"
import CatalogCard from "./CatalogCard"
import { ECardsSorting, ICard } from "../graphql/types"
import { ELinks } from "../constants"

const GET_POPULAR_CARDS = gql`
  query PopularCards($categorieId: ID!, $sortBy: Sort, $first: Int) {
    cards(categorieId: $categorieId, sortBy: $sortBy, first: $first) {
      id,
      name,
      price,
      images,
    }
  }
`

const PopularItems: React.FC = () => {
  const { data } = useQuery(GET_POPULAR_CARDS, {
    variables: {
      categorieId: 'all',
      sortBy: ECardsSorting.POPULARITY,
      first: 3
    }
  });

  return (
    <Container>
      <PaddedTitle>Популярные товары</PaddedTitle>
      <Cards>
        {data && data.cards.map((card: ICard) => (
          <CatalogCard
            key={card.id}
            {...card}
            image={card.images[0]}
            link={`${ELinks.CATALOG}/${card.id}`}
          />
        ))}
      </Cards>
    </Container>
  )
}

export default PopularItems;

const Container = styled.div``

const Cards = styled.div`
  display: flex;

  & > div {
    flex: 1 0 0;
  }

  & > div:not(:last-of-type) {
    margin-right: 15px;
  }
`

const PaddedTitle = styled(Title)`
  padding: 30px 0;
`
