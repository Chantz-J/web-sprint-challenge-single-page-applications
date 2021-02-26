import React from "react"


import GlobalStyle from './styles/GlobalStyle'
import Content from './Content'


import styled from 'styled-components'

const Root = styled.div`

`

export default function App() {
  return (
    <Root>
      <GlobalStyle />
      <Content />
    </Root>
  )
}
