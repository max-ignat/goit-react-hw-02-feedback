import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 0 10px;
  width: 80px;
  background-color: lightgray;
  color: #212121;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: antiquewhite;
  }
`;
