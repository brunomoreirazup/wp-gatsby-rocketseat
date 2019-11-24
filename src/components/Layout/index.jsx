import React, { Fragment } from 'react'
import map from 'lodash/map'
import get from 'lodash/get'
import GlobalStyle from '../../core/utils/global-styled'
import Biography from '../Biography'
import { StaticQuery } from 'gatsby'
import Header from '../Header'
import {
	Body,
	SideContainer,
	ApplicationContainer,
} from './styled'

const Layout = (props) => {
    const { children } = props

		return (
			<StaticQuery
				query={graphql`
						query {
							site {
								siteMetadata {
									title
								}
							}
						}
					`}
				render={
					data => {
						const edges = get(data, 'allWordpressPage.edges', [])

						return(
						<Fragment>
							<GlobalStyle />
							<Header
								siteTitle={data.site.siteMetadata.title}
							/>
							<Body>
								<SideContainer>
									{
										map(edges, ({ node }) => (
											<Biography details={node}/>
										))
									}
								</SideContainer>
								<ApplicationContainer>
									{children}
								</ApplicationContainer>
							</Body>
						</Fragment>	
					)}
				}
			/>
		)
}

export default Layout