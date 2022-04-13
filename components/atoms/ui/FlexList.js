import styled from 'styled-components';
import Flex from '../Flex';
import Loader from '../Loader';

const FlexGrid = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`

function FlexList({data, loading, Comp}) {

  const override = `
    display: block;
    margin: 0 auto;
  `;

  if(loading) {
    return <Loader/>
  }

  return (
    <FlexGrid>
      {data.map((item, index) => <Comp key={index} item={item}/>)}
    </FlexGrid>
  )
}

export default FlexList