import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItemDetails, selectDirection, activeDirectionId} = props
  const {displayText, value} = directionItemDetails

  const onClickDirectionButton = () => {
    selectDirection(value)
  }

  const isButtonActive = activeDirectionId === value

  return (
    <ListItem>
      <DirectionButton
        onClick={onClickDirectionButton}
        isButtonActive={isButtonActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
