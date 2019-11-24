import styled from 'styled-components'
import LeftArrowSVG from '../core/assets/svg/left-arrow.svg'

export const PaginationContainer = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const LeftArrow = styled(LeftArrowSVG)`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  fill: #674998;

  :hover {
    cursor: pointer;
  }
`

export const RightArrow = styled(LeftArrowSVG)`
  position: absolute;
  transform: rotate(180deg);
  width: 20px;
  height: 20px;
  right: 0px;
  fill: #674998;

  :hover {
    cursor: pointer;
  }
`