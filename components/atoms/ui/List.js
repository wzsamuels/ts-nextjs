import styled from 'styled-components';
import {FadeLoader} from 'react-spinners';
import Flex from '../Flex';
import Loader from '../Loader';

const ListStyled = styled.ul`
  * + * {
    margin-top: 1em;
  }
  
  margin: auto;
  padding: 0;
  list-style: none;
`

function List({data, Comp, loading}) {
  const override = `
  display: block;
  margin: 0 auto;

`;

  if(loading) {
    return <Loader/>
  }

  if(!loading && data !== undefined) {
    return (
      <ListStyled>
        <Flex>
          {
            data.map((item, index) =>
              <Comp key={index} item={item}/>)
          }
        </Flex>
      </ListStyled>
    )
  }
}

export default List