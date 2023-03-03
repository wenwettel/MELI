import React from "react";
import { CardStyles,Line } from "./styles";
import iconCar from "../../assets/shipping.png";

function Card({img, title, price, ubication, freeShipping}) {
  
  return (
    <>
    <CardStyles>
        <img className="img-product" src={img} alt="" />
        <div >
          <div className="container-price">
            <p className="price">$ {price}</p>
            {freeShipping && <img src={iconCar} alt="icono de envio" />}
          </div>
          <h2 className="title">{title}</h2>
        </div>
      <p className="ubication">{ubication}</p>
      
    </CardStyles>
    <Line />
    </>
  );
}

export default Card;
