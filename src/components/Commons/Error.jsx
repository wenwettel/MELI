import React from "react";
import styled from "styled-components";
import error404 from "../../assets/error404.png";
import size from "../../utils/breakpoints";

const ContainerMsgError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 122px);

  h1 {
    font-size: 20px;
  }
  img {
    width: 500px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${size.tablet}) {
    padding: 0 20px;
    text-align: center;
    img {
      width: 300px;
      height: auto;
      object-fit: contain;
    }
  }
`;

function Error() {
  return (
    <ContainerMsgError>
      <img src={error404} alt="Error 404, pagina no encontrada" />
      <h1>¡Disculpe, ha ocurrido un error intente con una busqueda nueva!</h1>
    </ContainerMsgError>
  );
}

export default Error;
