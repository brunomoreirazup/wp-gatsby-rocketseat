import styled from 'styled-components'
import { Link } from 'gatsby'

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: gray;
`