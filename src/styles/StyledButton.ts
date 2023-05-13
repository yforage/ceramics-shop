import styled from "@emotion/styled";
import { EColors } from "./colors";

export const StyledButton = styled.button`
  border: 2px solid ${EColors.ACCENT_GREEN};
  border-radius: 10px;
  background-color: ${EColors.BG};

  &:hover {
    background-color: ${EColors.ACCENT_GREEN};
    color: ${EColors.BG};
  }

  transition: background-color 100ms ease, color 100ms ease;
`