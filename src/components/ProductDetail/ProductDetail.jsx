import React, { useEffect, useState } from "react";
import { DetailStyle } from "./styles";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../../services/items";
import CardDetail from "../CardDetail/CardDetail";
import Spinner from "../Commons/Spinner";

function ProductDetail() {
  let { id } = useParams();
  const [itemDetails, setItemDetails] = useState({
    data:null,
    loading:false,
    error:false
  });
  const item = itemDetails?.data?.item;

  useEffect(() => {
    const getItemDetails = async () => {
      setItemDetails({...itemDetails,loading:true});
      try{
        const resItem = await fetchItemById(id);
        setItemDetails({...itemDetails, data: resItem?.data, loading:false});
      }catch(err){
        console.error(err)
        setItemDetails({...itemDetails, error:true, loading:false});
      }
      
    };
    getItemDetails();
  }, [id]);

  if(itemDetails.loading) return <Spinner isLoading={itemDetails.loading}/>
  
  if(itemDetails.error || itemDetails?.data?.item?.length === 0) return <h1>Error</h1>
 

  return (
    <>
      <Breadcrumbs categories={itemDetails?.data?.categories} />
      <DetailStyle>
        <div className="container-detail">
          <img className="img-product" src={item?.picture} alt="" />
          <CardDetail
            title={item?.title}
            price={item?.price}
            condition={item?.condition}
            soldQuantity={item?.sold_quantity}
          />
        </div>
        <div className="container-description">
          <h3>Descripción del producto</h3>
          {item?.description ? (
            <p>{item?.description}</p>
          ) : (
            <p>Descripción no especificada por el vendedor</p>
          )}
        </div>
      </DetailStyle>
    </>
  );
}

export default ProductDetail;
