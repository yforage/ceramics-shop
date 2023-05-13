import styled from "@emotion/styled";
import React, { useState } from "react"
import { EColors } from "../styles/colors";
import { IGallerySlideData } from "../graphql/types";
import { StyledButton } from "../styles/StyledButton";
import { Link } from "gatsby";
import { ELinks } from "../constants";
import { Title } from "../styles/Title";

interface IGalleryProps {
  slides: IGallerySlideData[];
}

const Gallery: React.FC<IGalleryProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const selectSlide = (e: React.MouseEvent<HTMLButtonElement>) => setCurrentSlide(Number(e.currentTarget.value));
  return (
    <GalleryContainer>
      <Image src={slides[currentSlide].image} />
      <Content>
        <Wrap>
          <Title>{slides[currentSlide].title}</Title>
          <Text>{slides[currentSlide].description}</Text>
          <Link to={ELinks.CATALOG}>
            <Button>
              Перейти в каталог
            </Button>
          </Link>
        </Wrap>
      </Content>
      <ControlsContainer>
        {slides.map((_, index) => (
          <GalleryControl
            key={index}
            value={index}
            onClick={selectSlide}
            isActive={index === currentSlide}
          />
        ))}
      </ControlsContainer>
    </GalleryContainer>
  )
}

export default Gallery;

const GalleryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 5px;
`

const Content = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  width: 45%;
  transform: translateY(-50%);

  padding: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${EColors.ACCENT_GRAY};
    opacity: 0.9;

    border-radius: 15px;
  }
`

const Wrap = styled.div`
  position: relative;
  z-index: 1;
`

const Text = styled.p`
  margin: 10px 0;
`

const ControlsContainer = styled.div`
  margin-top: 5px;
  display: flex;

  & > button:not(:last-of-type) {
    margin-right: 15px;
  }
`

interface IGalleryControl {
  isActive: boolean;
}
const GalleryControl = styled.button<IGalleryControl>`
  flex: 1 1 0;

  height: 7px;

  border-radius: 5px;

  ${({ isActive }) => `background-color: ${isActive ? EColors.ACCENT_GREEN : EColors.ACCENT_GRAY};`}
`

const Button = styled(StyledButton)`
  padding: 10px 20px;
`