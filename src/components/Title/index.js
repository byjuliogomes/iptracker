import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 24pt;
  font-weight: 600;
  color: var(--pale-grey);
  text-align: center;
  margin: 24px 0 24px 0;
   @media(min-width: 800px){
  }
`;

const Title = (props) => {
    return (
        <>
          <Text>{props.children}</Text>
        </>
    );
}

export default Title;