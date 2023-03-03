import React, {useEffect, useState} from "react";
import { DetailStyle, DetailCard } from "./styles";
import crayones from "../../assets/crayones.jpg";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useParams } from 'react-router-dom';


function ProductDetail() {
  let { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null)
  const item = itemDetails?.item
  
  useEffect(() => {
    const getItemDetails = async () => {
      
      const response = await fetch(
        `http://127.0.0.1:3001/api/items/${id}`
      ).then((r) => r.json());
      setItemDetails(response);
    };
    getItemDetails();
  },[])


  return (
    <>
    <Breadcrumbs categories={itemDetails?.categories} />
    <DetailStyle>
      <div className="container-detail">
      <img className="img-product" src={item?.picture} alt="" />
      <DetailCard>
        <span className="condition">{`${item?.condition} - ${item?.sold_quantity} vendidos`}</span>
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
