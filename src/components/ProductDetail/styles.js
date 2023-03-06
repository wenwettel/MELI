import styled from "styled-components";
import Container from "../Commons/Container";
import size from "../../utils/breakpoints";

const DetailStyle = styled(Container)`
  padding-top: 32px;
  background-color: white;

  .container-detail {
    display: flex;
    justify-content: space-around;
  }

  .img-product {
    object-fit: contain;
    width: 680px;
    height: 600px;
  }
  .container-description {
    margin-top: 100px;
    width: 70%;
    padding-left: 32px;

    h3 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
      padding: 32px 0;
    }
  }

  @media (max-width: ${size.laptop}) {
    .container-detail {
      flex-direction: column;
    }
    .img-product {
      margin: 0 auto;
    }
    .container-description {
      width: 100%;
      padding: 0 20px;
    }
  }

  @media (max-width: ${size.tablet}) {
    .img-product {
      width: 100%;
      padding: 20px;
    }
  }
  @media (max-width: ${size.mobile}) {
    .container-description {
      margin-top: 30px;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export { DetailStyle };
