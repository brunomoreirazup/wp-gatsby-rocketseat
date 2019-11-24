import React from "react"
import FullPost from '../../components/FullPost'
import Layout from "../../components/Layout"

const BlogPost = (props) => {
  const { pageContext } = props

  return (
    <Layout>
      <FullPost
        blogPost={pageContext}
      />
    </Layout>
  )
} 

export default BlogPost
