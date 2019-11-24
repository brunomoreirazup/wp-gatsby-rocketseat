import React from 'react'
import { 
  BiographyContainer,
  AuthorContainer,
  AuthorName,
  DescriptionContainer
} from './styled'

const Biography = (props) => {
  const { details } = props
  const { title, content } = details

  return (
    <BiographyContainer>
      <AuthorContainer>
        <AuthorName>
          {title}
        </AuthorName>
      </AuthorContainer>
      <DescriptionContainer
        dangerouslySetInnerHTML={{ __html: content}}
      />
    </BiographyContainer>
  )
}

export default Biography