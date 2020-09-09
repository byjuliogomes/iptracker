import React from "react";
import styled from "styled-components";

const ContainerResponse = styled.div`
 margin: 5% 0% 12% 25%;
  width: 50%;
  z-index: 2;
  text-align: center;

  :last-child { 
    margin: 5% 0% 5% 25%;
   }
   @media(min-width: 768px){
  }
`;

const H1 = styled.h1`
  display: block;
  color: #000;
  font-size: 18pt;
  margin-top: 2%;

  
   @media(min-width: 800px){
  }
`;


const H2 = styled.h2`
  display: block;
  color: #999;
  text-transform: uppercase;
  font-size: 8pt;
  margin-bottom: 2%;

   @media(min-width: 800px){
  }
`;



const Response = (props, {title}) => {
  return (
    <>
      <ContainerResponse>
        <H2>{props.title}</H2>
        <H1>{props.children}</H1>
      </ContainerResponse>
    </>
  );
}

export default Response;