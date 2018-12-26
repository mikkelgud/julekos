import styled, { css } from "styled-components";

const StyledMessage = styled.span`
  font-size: 1.2rem;
  font-family: "Charm", cursive;
  color: #555;

${props => props.clickable && css`
cursor: pointer;

`}
${props => props.alternativeFont && css`
font-family: "roboto", sans-serif;

`}
${props => props.white && css`
color: #fff;

`}

`;

export default StyledMessage;
