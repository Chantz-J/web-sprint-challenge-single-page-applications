import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonSection = styled.div`
    padding: 2rem;
    border: black 1px solid;
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Lambda Eats</h1>
            <ButtonSection></ButtonSection>
        </StyledHeader>
    )
}