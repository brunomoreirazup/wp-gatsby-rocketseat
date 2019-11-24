import React, { useState } from "react"
import get from 'lodash/get'
import Layout from "../components/Layout"
import BlogList from '../components/BlogList'
import {
  PaginationContainer,
  LeftArrow,
  RightArrow
} from '../styles/home'

const PAGE_SIZE = 4

const IndexPage = (props) => {
  const [prev, setPrevPage] = useState(0)
  const [next, setNextPage] = useState(PAGE_SIZE)

  const handleNextPage = () => {
    setPrevPage(prev + PAGE_SIZE)
    setNextPage(next + PAGE_SIZE)
  }

  const handlePrevPage = () => {
    setPrevPage(prev - PAGE_SIZE)
    setNextPage(next - PAGE_SIZE)
  }

  const { data } = props
  const image = get(data, 'image.childImageSharp.fixed.src', {})
  const blogList = get(data, 'allWordpressPost.edges', [])
  const blogListLength = get(blogList, 'length', 0)

  const hasPrevPage = prev > 0
  const hasNextPage = next < blogListLength

  return (
    <Layout>
      <BlogList
        blogList={blogList.slice(prev, next)}
        image={image}
      />
      <PaginationContainer>
        {
          hasPrevPage &&
          <LeftArrow onClick={handlePrevPage} />
        }
        {
          hasNextPage && 
          <RightArrow onClick={handleNextPage} />
        }
      </PaginationContainer>
    </Layout>
  )
} 


export const query = graphql`
{
  allWordpressPost {
    edges {
      node {
        id
        title
        author {
          name
        }
        excerpt
      }
    }
  }
  image: file(relativePath: { eq: "gatsby-icon.png"}) {
    childImageSharp {
      fixed(width: 150, height: 150){
        src
      }
    }
  }
}
`

export default IndexPage
