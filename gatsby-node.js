const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    
    return graphql(`
		query {
			allWordpressPost {
				edges {
					node {
						id
						title
						author {
							name
						}
						content
					}
				}
			}
		}
	`).then((result) => {
		result.data.allWordpressPost.edges.forEach(({ node }) => {
			const { id, title, author, content } = node
			createPage({
				path: `/post/` + id,
				component: path.resolve('./src/templates/blogPost/index.jsx'),
				context: {
					id,
					author: author.name,
					title: title,
					content: content,
				} 
			})
		})
	})
}