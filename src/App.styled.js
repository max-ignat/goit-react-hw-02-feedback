import styled from "styled-components"

export const Button = styled.button`
margin-right: 10px;
/* margin: auto; */
  outline: none;
  padding: 0 10px;
  width: 99px;
  height: 20px;
  color: #221212;
  background-color: lightgray;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    border: 1px solid black;
    background-color: antiquewhite;
  }
`

export const StatWraper = styled.section`
  margin: 10px auto;
  width: 600px;
  border: 1px solid black;
  /* width: 600px; */
`;

export const StatSection = styled.div`
 display:flex;
 justify-content: center;
 
`;

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 20px;
`;