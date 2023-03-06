import React from "react";
import { formatNumberSeparator, translateItemCondition } from "../../utils";
import { CardDetailStyle } from "./styles";
import PropTypes from "prop-types";

function CardDetail({ title, price, condition, soldQuantity }) {
  return (
    <CardDetailStyle>
      <span className="condition">{`${translateItemCondition(
        condition
      )} - ${soldQuantity} vendidos`}</span>
      <h1 className="title">{title}</h1>
      <h2 className="price">
        $ {formatNumberSeparator(price?.amount)}
        {price?.decimals && <span>{`${"," + price?.decimals}`}</span>}
      </h2>
      <button className="buy-button">Comprar</button>
    </CardDetailStyle>
  );
}

CardDetail.propTypes = {
  title: PropTypes.string,
  price: PropTypes.objkect,
  condition: PropTypes.string,
  soldQuantity: PropTypes.number,
};

export default CardDetail;
