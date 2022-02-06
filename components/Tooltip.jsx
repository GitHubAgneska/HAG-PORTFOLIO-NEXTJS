import { StyledTooltip } from '../styles/App-item_style'

const Tooltip = ({ tooltipContent, parent }) => {
  return (
    
    <StyledTooltip parent={parent}>
      <span>{tooltipContent}</span>
    </StyledTooltip>
  )
}

export default Tooltip
