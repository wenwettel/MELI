import React, {useEffect, useState} from "react";
import { DetailStyle, DetailCard } from "./styles";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useParams } from 'react-router-dom';
import { BASE_URL } from "../../../constants";


function ProductDetail() {

  let { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null)
  const item = itemDetails?.item
  
  useEffect(() => {
    const getItemDetails = async () => {
      
      const response = await fetch(
        `${BASE_URL}/api/items/${id}`
      ).then((r) => r.json());
      setItemDetails(response);
    };
    getItemDetails();
  },[])

    let itemCondition = item?.condition;
    switch (itemCondition) {
      case "new": itemCondition = "Nuevo"
      break;
      case "used":itemCondition= "Usado"
      break;
      case "reconditioned" : itemCondition= "Reacondicionado"
      break;
    }

  return (
    <>
    <Breadcrumbs categories={itemDetails?.categories} />
    <DetailStyle>
      <div className="container-detail">
      <img className="img-product" src={item?.picture} alt="" />
      <DetailCard>
        <span className="condition">{`${itemCondition} - ${item?.sold_quantity} vendidos`}</span>
        <h1 className="title">
          {item?.title}
        </h1>
        <h2 className="price">{`$ ${item?.price?.amount}`}</h2>
        <button className="buy-button">Comprar</button>
      </DetailCard>
      </div>
      <div className="container-description">
        <h3>Descripción del producto</h3>
        <p>{item?.description}</p>
      </div>
    </DetailStyle>
    </>
  );
}

export default ProductDetail;
