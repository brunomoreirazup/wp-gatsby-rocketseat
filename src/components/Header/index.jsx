import React from 'react'
import { HeaderContainer, HeaderTitle } from './styled'

const Header = (props) => {
    const { siteTitle } = props

    return (
        <HeaderContainer>
            <HeaderTitle>
                {siteTitle}
            </HeaderTitle>
        </HeaderContainer>
    )
}

export default Header