import React from "react";
import { StyledTitleMedium } from "./StyledTitle";
import StyledMessage from "./StyledMessage";
import styled, {css} from "styled-components";

const MessageBoxWrapper = styled.div`
  background-color: #333;
  border-radius: 5px;
  padding: 1rem;

  ${props =>
    props.error &&
    css`
      background-color: salmon;
    `}
  ${props =>
    props.info &&
    css`
      background-color: cornflowerblue;
    `}
`;

const MessageBox = ({ title = "ukjent", description, error, info }) => {
  return (
    <MessageBoxWrapper error = {error} info = {info}>
      <StyledTitleMedium white>{title}</StyledTitleMedium>
      <StyledMessage white>{description}</StyledMessage>
    </MessageBoxWrapper>
  );
};

export default MessageBox;
