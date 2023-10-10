import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  ParagraphText,
  DirectionsButtonsContainer,
  ColorsContainer,
  ColorsInputContainer,
  LabelElement,
  InputColor,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].value,
    colorPickerOne: '#8ae323',
    colorPickerTwo: '#014f7b',
    gradientValue: `to top, #8ae323, #014f7b`,
  }

  selectDirection = value => {
    this.setState({
      activeDirectionId: value,
    })
  }

  renderDirectionsButtonsContainer = () => {
    const {activeDirectionId} = this.state
    return (
      <DirectionsButtonsContainer>
        {gradientDirectionsList.map(eachDirection => (
          <GradientDirectionItem
            key={eachDirection.directionId}
            directionItemDetails={eachDirection}
            selectDirection={this.selectDirection}
            activeDirectionId={activeDirectionId}
          />
        ))}
      </DirectionsButtonsContainer>
    )
  }

  renderColorsContainer = () => {
    const {colorPickerOne, colorPickerTwo} = this.state
    return (
      <ColorsContainer>
        <ColorsInputContainer>
          <LabelElement>{colorPickerOne}</LabelElement>
          <InputColor
            type="color"
            onChange={event =>
              this.setState({colorPickerOne: event.target.value})
            }
            value={colorPickerOne}
          />
        </ColorsInputContainer>

        <ColorsInputContainer>
          <LabelElement>{colorPickerTwo}</LabelElement>
          <InputColor
            type="color"
            value={colorPickerTwo}
            onChange={event =>
              this.setState({colorPickerTwo: event.target.value})
            }
          />
        </ColorsInputContainer>
      </ColorsContainer>
    )
  }

  onClickGenerateButton = () => {
    const {activeDirectionId, colorPickerOne, colorPickerTwo} = this.state
    const gradientValue = `to ${activeDirectionId}, ${colorPickerOne}, ${colorPickerTwo}`
    this.setState({
      gradientValue,
    })
  }

  renderGenerateButton = () => (
    <GenerateButton onClick={this.onClickGenerateButton}>
      Generate
    </GenerateButton>
  )

  render() {
    const {gradientValue} = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>

        <ParagraphText>Choose Direction</ParagraphText>

        {this.renderDirectionsButtonsContainer()}

        <ParagraphText>Pick the Colors</ParagraphText>

        {this.renderColorsContainer()}

        {this.renderGenerateButton()}
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
