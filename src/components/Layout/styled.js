import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: calc(100vh - 30px);
`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 20px;
    height: 100%;
    background: #674998;
    color: white;
`

export const ApplicationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 20px;
    height: 100%;
    overflow-Y: auto;
` 