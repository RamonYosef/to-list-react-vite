import styled from 'styled-components'

export const Btn = styled.button`
  width: 240px;
  padding: 8px;
  border: 3px solid #595959;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.5s;

  box-shadow: $env -5px 5px;

  &:hover {
    background-color: #595959;
    color: #fff;
    box-shadow: none;
  }
`
