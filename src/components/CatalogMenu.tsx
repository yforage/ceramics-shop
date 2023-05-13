import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import { EColors } from "../styles/colors";

interface ICatalogMenu {
  selected: string;
  onSelect: (id: string) => void;
}

const GET_CATEGORIES = gql`
  query Categories {
    allCategories {
      id,
      name,
    }
  }
`

export const CatalogMenu: React.FC<ICatalogMenu> = ({ selected, onSelect }) => {
  const { data } = useQuery(GET_CATEGORIES);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => onSelect(e.currentTarget.value);

  return (
    <MenuContainer>
      {data && data.allCategories.map(({ id, name }: { id: string; name: string }) => (
        <Button
          key={id}
          value={id}
          onClick={handleClick}
          isSelected={id === selected}
        >
          {name}
        </Button>
      ))}
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  overflow-x: auto;

  padding-right: 10px;

  ::-webkit-scrollbar {
    height: 2px;
  }
   
  ::-webkit-scrollbar-track {
    background-color: ${EColors.BG_ACCENT};
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: ${EColors.ACCENT_GREEN};
  }
`

interface IButton {
  isSelected: boolean;
}
const Button = styled.button<IButton>`
  flex-shrink: 0;
  &:not(:last-of-type) {
    margin-right: 15px;
  }

  ${({ isSelected }) => isSelected ? 'text-decoration: underline;' : ''}
`