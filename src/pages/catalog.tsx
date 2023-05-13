import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import { ELinks } from "../constants";
import { CatalogMenu } from "../components/CatalogMenu";
import styled from "@emotion/styled";
import MenuDropDown from "../components/MenuDropDown";
import CatalogCards from "../components/CatalogCards";
import { ECardsSorting } from "../graphql/types";
import Footer from "../components/Footer";

const CatalogPage = () => {
  const [categorie, setCategorie] = useState('all');
  const [sortBy, setSortBy] = useState(ECardsSorting.AVAILABILITY);

  const handleSelectCategorie = useCallback((id: string) => setCategorie(id), []);
  const handleSelectSortBy = useCallback((sort: ECardsSorting) => setSortBy(sort), []);

  return (
    <main>
      <Header activePage={ELinks.CATALOG} />
      <Content>
        <ControlsContainer>
          <CatalogMenu selected={categorie} onSelect={handleSelectCategorie} />
          <MenuDropDown selected={sortBy} onSelect={handleSelectSortBy} />
        </ControlsContainer>
        <CatalogCards categorieId={categorie} sortBy={sortBy} />
      </Content>
      <Footer />
    </main>
  )
}

export default CatalogPage;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-of-type {
    margin-right: 20px;
  }
`

const Content = styled.div`
  padding: 40px;

  ${ControlsContainer} {
    margin-bottom: 20px;
  }
`

