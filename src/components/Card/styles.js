import styled from "styled-components";
import size from "../../utils/breakpoints";

const CardStyles = styled.div`
  display: flex;

  .container-description {
    display: flex;
    width: 100%;
  }

  .price {
    font-size: 24px;
    margin-right: 9px;
  }

  .title {
    font-size: 18px;
    font-weight: 200;
    width: 80%;
  }

  .ubication {
    font-size: 12px;
    margin-left: auto;
    margin-top: 39px;
    padding-right: 10%;
    width: 20%;
  }

  .img-product {
    object-fit: cover;
    width: 180px;
    height: 180px;
    border-radius: 4px;
    margin: 16px;
  }

  .container-price {
    margin-top: 39px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;

    img {
      object-fit: contain;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${size.laptop}) {
    .container-description {
      flex-direction: column;
    }

    .ubication {
      margin-left: 0;
      width: auto;
    }
    .container-price {
      margin-bottom: 10px;
    }
  }
  @media (max-width: ${size.tablet}) {
    .price {
      font-size: 20px;
    }

    .title {
      font-size: 15px;
    }
    .ubication {
      margin-top: 10px;
    }
  }
`;
const Line = styled.div`
  border-bottom: solid 2px #eeeeee;
  margin: 0px 20px;
`;
export { CardStyles, Line };
