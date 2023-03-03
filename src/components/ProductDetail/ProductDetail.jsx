import React from "react";
import { DetailStyle, DetailCard } from "./styles";
import crayones from "../../assets/crayones.jpg";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function ProductDetail() {
  const categories = [
    "Arte, Librería y Mercería",
    "Librería",
    "Escolar",
    "Útiles Escolares",
  ];
  return (
    <>
    <Breadcrumbs categories={categories} />
    <DetailStyle>
      <div className="container-detail">
      <img className="img-product" src={crayones} alt="" />
      <DetailCard>
        <span className="condition">Nuevo - 234 vendidos</span>
        <h1 className="title">
          Giotto Stilnovo Lapices X 36 Unidades + 1 Libro De Regalo
        </h1>
        <h2 className="price">$ 1.980</h2>
        <button className="buy-button">Comprar</button>
      </DetailCard>
      </div>
      <div className="container-description">
        <h3>Descripción del producto</h3>
        <p>
          "MERCADO ARKA Lápices Giotto Stilnovo - Pack de 36 colores + Libro
          infantil de regalo. Dimensiones del libro de regalo : 14x12 cm 36
          colores
          ---------------------------------------------------------------------------------------------
          ESTAMOS DESPACHANDO CON NORMALIDAD HACEMOS ENVÍOS A TODO EL PAÍS.
          ENVÍO Entregamos los pedidos a través de MERCADO ENVIOS. Para
          averiguar el ENVIO en la parte superior izquierda de la publicación,
          donde esta la descripción, precio y forma de pago dice ENVIO hace un
          click en mas opciones, colocas tu código postal y te indica costo y
          fecha estimada de entrega. Podes realizar el seguimiento de tu pedido,
          ingresando a la parte de envíos en el detalle de tu compra. Allí
          figurará el número de envío una vez que se encuentre despachado.
          RETIROS EN PERSONA Actualmente los productos se pueden retirar por
          zona Alto Palermo. La dirección, horario y día se arreglan mas
          detenidamente una vez efectuada la compra. CARRITO En la parte
          superior derecha encontrarás un CARRITO podes realizar varias compras
          de nuestras publicaciones y si superas los $ 5.000 (cinco mil pesos),
          el envío es SIN CARGO a cualquier punto del país. PAGO Podés pagar con
          todos los medios de pago habilitados de Mercado Pago.",
        </p>
      </div>
    </DetailStyle>
    </>
  );
}

export default ProductDetail;
