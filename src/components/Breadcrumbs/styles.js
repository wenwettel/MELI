import styled from "styled-components";
import Container from '../Commons/Container'

const BreadCrumbStyle = styled(Container)`
  display: flex;
  align-items: center;
  padding: 16px 0;

  p {
    font-size: 14px;
    color: #666666;
  }
  svg {
    margin: 0 10px;
    width: 12px;
    height: 12px;
    fill: #666666;
  }
`;
export { BreadCrumbStyle };
