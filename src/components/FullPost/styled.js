import styled from 'styled-components'
import LeftArrowSVG from '../../core/assets/svg/left-arrow.svg'


export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 5px -1px rgba(0,0,0,0.75);
  padding: 20px;
`

export const PostTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
`

export const PostAuthor = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  width: 100%;
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