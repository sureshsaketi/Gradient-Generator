import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 500;
  font-size: 28px;
`
export const ParagraphText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
`
export const DirectionsButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0;
`

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
export const ColorsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const LabelElement = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const InputColor = styled.input`
  width: 80px;
  height: 32px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`
export const GenerateButton = styled.button`
  height: 34px;
  width: 100px;
  background-color: #00c9b7;
  border-radius: 5px;
  color: #1e293b;
  border: none;
  margin-top: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  cursor: pointer;
`
