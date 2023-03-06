import styled from "styled-components";
import Container from "../Commons/Container";
import size from '../../utils/breakpoints'

const ContainerResults = styled(Container)`
  background-color: white;

  @media (max-width: ${size.tablet}) {
    padding-bottom: 20px;
  }
`;

export { ContainerResults };
