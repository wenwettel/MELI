import React, { useEffect, useState } from "react";
import { DetailStyle } from "./styles";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../../services/items";
import CardDetail from "../CardDetail/CardDetail";
import Spinner from "../Commons/Spinner";
import Error from "../Commons/Error";

function ProductDetail() {
  let { id } = useParams();
  const [itemDetails, setItemDetails] = useState({
    data: null,
    loading: true,
    error: false,
  });
  const { categories, item } = itemDetails?.data || {};

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const resItem = await fetchItemById(id);
        setItemDetails({ data: resItem?.data, loading: false, error: false });
      } catch (err) {
        console.error(err);
        setItemDetails({ error: true, loading: false, data: null });
      }
    };
    getItemDetails();
  }, [id]);

  if (itemDetails.loading) return <Spinner isLoading={itemDetails.loading} />;

  if (itemDetails.error || itemDetails?.data?.item?.length === 0)
    return <Error />;

  return (
    <>
      <Breadcrumbs categories={categories} />
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
