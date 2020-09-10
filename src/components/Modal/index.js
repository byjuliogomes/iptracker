import React from "react";
import styled from "styled-components";
import Response from "../Response";
import IP from "../../IP/Ip";

const ContainerModal = styled.div`
  height: auto;
  z-index: 2;
  padding: 1%;
  margin: 10%;
  border-radius: 20px;
  background-color: #fff;
  display: block;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Modal = async () => {
  const userData = await IP();
  const Data = userData.data;
  return (
    <>
      <ContainerModal>
        <Response title="Ip Number">{Data.ipnumber}</Response>
        <Response title="Location"></Response>
        <Response title="Timezone"></Response>
        <Response title="ISP"></Response>
      </ContainerModal>
    </>
  );
};

export default Modal;
