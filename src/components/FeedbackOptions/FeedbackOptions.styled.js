import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: white;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  :hover {
    background-color: blue;
    color: white;
  }
`;
