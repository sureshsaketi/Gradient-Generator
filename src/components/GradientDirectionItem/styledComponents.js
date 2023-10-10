import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  padding: 0;
`
export const DirectionButton = styled.button`
  background-color: '#ffffff';
  width: 140px;
  height: 30px;
  font-weight: 500;
  border-radius: 5px;
  color: #334155;
  font-family: 'roboto';
  font-weight: 500;
  border: none;
  cursor: pointer;
  opacity: ${props => (props.isButtonActive ? 1 : 0.5)};
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
