import styled from 'styled-components'

// TODO: switch from px to em
const ContentContainer = styled.div`
  padding-top: 3.125rem;
  padding-bottom: 300px;
  
  @media screen and (min-width: 550px) {
    padding-bottom: 229px;
  }
  width: 100%;
`

export default ContentContainer