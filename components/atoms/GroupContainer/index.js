import styled from 'styled-components';

const GroupContainer = styled.div`
  display: flex;
  width: calc(100% - 2em);
  margin: 1em;
  * {
    margin-top: 1em;
  }
  
  * + * {
    margin-left: 1.5em;
  }
  
  *:not(:last-child) {
   // margin-right: 1.5em;
  } 

  align-items: center;
  justify-content: center;
`

export default GroupContainer