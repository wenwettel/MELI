import styled from "styled-components";

const CardStyles = styled.div`
  display: flex;
  width: 100%;
  

  .price {
    font-size: 24px;
    margin-right: 9px;
   
  }

  .title {
    font-size: 18px;
    font-weight: 200;
  }

  .ubication {
    font-size: 12px;
    margin-left: auto;
    margin-top: 39px;
    padding-right: 10%;
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


`;
const Line = styled.div`
 border-bottom:solid 2px #eeeeee;
  margin: 0px 20px;
  

`
export { CardStyles , Line};
