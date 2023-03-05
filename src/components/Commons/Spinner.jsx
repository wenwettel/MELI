import React from 'react'
import DotLoader from "react-spinners/DotLoader";
import styled from 'styled-components';

const override = {
  display: "block",
  margin: "auto",
  borderColor: "#FFE600",
};

const ContainerSpinner = styled.div`
display : flex;
width: 100%;
min-height: ${props => props.minHeight || "calc(100vh - 72px)"};
height: ${props => props.height && props.height};
`

function Spinner({isLoading}) {
  return (
    <ContainerSpinner >
    <DotLoader
          color="#FFE600"
          loading={isLoading}
          cssOverride={override}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </ContainerSpinner>
  )
}

export default Spinner
