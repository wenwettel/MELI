import styled from "styled-components";
import size from '../../utils/breakpoints'

const CardDetailStyle = styled.div`
  width: 250px;

  .condition {
    font-size: 14px;
  }
  .title {
    font-size: 24px;
    margin-top: 16px;
  }
  .price {
    font-size: 46px;
    font-weight: 200;
    margin: 32px 0;
  }

  .buy-button {
    background-color: #3483fa;
    color: white;
    padding: 11px 20px;
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
  }

  @media (max-width: ${size.laptop}) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: ${size.tablet}) {
    .title {
      font-size: 20px;
      .price {
        font-size: 40px;
      }
    }
  }
`;

export { CardDetailStyle };
