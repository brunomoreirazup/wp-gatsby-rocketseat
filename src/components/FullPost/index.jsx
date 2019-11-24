import React from 'react'
import { Link } from 'gatsby'
import {
  PostContainer,
  PostTitle,
  PostAuthor,
  PostContent,
  LeftArrow,
} from './styled'

const FullPost = (props) => {
  const { blogPost } = props
  const { author, title, content } = blogPost

  return (
    <PostContainer>
      <PostTitle>
        <Link to="/">
          <LeftArrow />
        </Link>
        {title}
      </PostTitle>
      <PostAuthor>
        by: {author}
      </PostAuthor>
      <PostContent
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PostContainer>
  )
}

export default FullPost