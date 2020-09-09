import React from "react";
import styled from "styled-components";
import MaskedInput from 'react-text-mask';

const ContainerModal = styled.div`
  margin: 0 20% 0 20%;
  text-align: center;
  display: flex;
  justify-content: center;
   @media(min-width: 800px){
  }
`;

const ContainerButton = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-end;
   @media(min-width: 800px){
  }
`;

const BoxInput = styled(MaskedInput)`
  Width: 564px;
  height: 58px;
  background-color: #fff;
  border-radius: 10px 0 0 10px;
  border: none;
  justify-content: center;
  padding-left: 20px;
  
   @media(min-width: 800px){
  }
`;

const Button = styled.button`
  Width: 62px;
  height: 60px;
  background-color: #000;
  border-radius: 0 10px 10px 0;
  border: none;
  justify-content: flex-end;
  
   @media(min-width: 800px){
  }
`;
const Input = ({ onChangeText, type, required, mask, className}) => {
        return (
            <>
              <ContainerModal>
              <BoxInput
                mask={[/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
                placeholder="Search for any IP adress or domain"
                onChange={(event) => onChangeText(event.target.value)}
                required={required}
                type={type}
                className={className}
              ></BoxInput>
              <ContainerButton><Button></Button></ContainerButton>
              </ContainerModal>
            </>
        )
    }

export default Input;