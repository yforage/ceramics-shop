import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { ECardsSorting } from "../graphql/types";
import { EColors } from "../styles/colors";
import { IoIosArrowDown } from 'react-icons/io';

const options = {
  [ECardsSorting.AVAILABILITY]: 'наличию',
  [ECardsSorting.ASC]: 'цена по возрастанию',
  [ECardsSorting.DESC]: 'цена по убыванию'
}


interface IMenuDropDownProps {
  selected: keyof typeof options;
  onSelect: (selected: keyof typeof options) => void;
}

const MenuDropDown: React.FC<IMenuDropDownProps> = ({ selected, onSelect }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpened = useCallback(() => setIsOpened((prev) => !prev), []);
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => onSelect(e.currentTarget.value as typeof selected);
  return (
    <DropDown onClick={toggleOpened} isOpened={isOpened}>
      <span>Сортировка по: {options[selected]}</span>
      <Icon isOpened={isOpened} />
      <Select isOpened={isOpened}>
        {Object.entries(options)
          .filter(([key]) => key !== selected)
          .map(([key, value]) => (
            <Button
              key={key}
              value={key}
              onClick={handleSelect}
            >
              {value}
            </Button>
        ))}
      </Select>
    </DropDown>
  )
}

export default MenuDropDown;

interface IDropDown {
  isOpened: boolean;
}

const DropDown = styled.button<IDropDown>`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  padding: 5px 10px;

  transition: box-shadow 100ms ease;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 300%;
      z-index: -1;
      border-radius: 5px;
    
      box-shadow: ${EColors.SHADOW};

      opacity: ${({ isOpened }) => isOpened ? '1' : '0'};
      transition: opacity 100ms ease;
    }
`

const Select = styled.div<IDropDown>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${EColors.BG};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  opacity: ${({ isOpened }) => isOpened ? '1' : '0'};

  transition: opacity 100ms ease;
`

const Button = styled.button`
  padding: 5px 10px;

  width: 100%;
  text-align: start;
`

const Icon = styled(IoIosArrowDown)<IDropDown>`
  ${({ isOpened }) => isOpened ? 'transform: rotate(-180deg);' : ''}
  transition: transform 200ms ease;
`


