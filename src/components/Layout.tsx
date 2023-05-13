import styled from "@emotion/styled"
import React from "react"
import { EColors } from "../styles/colors";
import { Global, css } from "@emotion/react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <LayoutContainer>
      {children}
    </LayoutContainer>
  </>
)

const LayoutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const globalStyles = css`
  body {
    position: relative;
    width: 100%;
    margin: 0;
    font-family: 'Lato';
    font-size: 16px;
    color: ${EColors.TEXT};
    box-sizing: border-box;
    overflow-x: hidden;

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
  
    a:hover {
      opacity: 0.8;
    }

    p {
      margin: 0;
      padding: 0;
    }

    button, input[type="submit"], input[type="reset"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  }

  @font-face {
    font-family: 'Virilica';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/virilica.otf') format('opentype');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/Lato-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/Lato-Bold.ttf') format('truetype');
  }

`

export default Layout;