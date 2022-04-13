import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexColumn = styled(Flex)`
  flex-direction: column;
  
  &.center { align-items: center;}
`

export {FlexColumn, Flex as default}