import React from 'react'
import {
    PostContainer,
		ImageContainer,
		ImageStyled,
    TextContainer,
    TitleContainer,
    AuthorContainer,
    ContentContainer,
} from './styled'

export const PostPreview = (props) => {
    const { post, image } = props
    const { title, author, excerpt, featured_media } = post

    return (
        <PostContainer>
            <ImageContainer>
                <ImageStyled src={image}/>
            </ImageContainer>
            <TextContainer>
							<TitleContainer>
								{title}
							</TitleContainer>
							<AuthorContainer>
								by: {author.name}
							</AuthorContainer>
							<ContentContainer
								dangerouslySetInnerHTML={{ __html: excerpt }}
							/>
            </TextContainer>
        </PostContainer>
    )
}

export default PostPreview