import React from 'react'
import map from 'lodash/map'
import PostPreview from '../PostPreview'
import {
	ListContainer,
	StyledLink
} from './styled'

const BlogList = (props) => {
	const { blogList, image } = props

	return (
		<ListContainer>
			{
				map(blogList, post => (
					<StyledLink to={`/post/${post.node.id}`}>
						<PostPreview
							post={post.node}
							image={image}
						/>
					</StyledLink>
				)
			)
			}
		</ListContainer>
	) 
}

export default BlogList