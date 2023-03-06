import React from "react";
import { CardStyles, Line } from "./styles";
import iconCar from "../../assets/shipping.png";
import { formatNumberSeparator } from "../../utils";
import PropTypes from "prop-types";

function Card({ img, title, price, freeShipping, stateName }) {
  return (
    <>
      <CardStyles>
        <img className="img-product" src={img} alt="" />
        <div className="container-description">
          <div>
            <div className="container-price">
              <p className="price">
                $ {formatNumberSeparator(price?.amount)}
                {price?.decimals && <span>{`${"," + price?.decimals}`}</span>}
              </p>
              {freeShipping && <img src={iconCar} alt="icono de envio" />}
            </div>
            <h2 className="title">{title}</h2>
          </div>
          <p className="ubication">{stateName}</p>
        </div>
      </CardStyles>
      <Line />
    </>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.object,
  freeShipping: PropTypes.bool,
  stateName: PropTypes.string,
};

export default Card;
