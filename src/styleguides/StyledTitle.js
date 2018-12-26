import styled, { css } from "styled-components";

export const StyledTitleMedium = styled.h3`
  color: #555;

${props =>
  props.clickable &&
  css`
    cursor: pointer;
  `}
${props =>
  props.alternativeFont &&
  css`
    font-family: "roboto", sans-serif;
  `}
${props =>
  props.white &&
  css`
    color: #fff;
  `}
`;
