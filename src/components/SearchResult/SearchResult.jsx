import React from 'react'
import lapiz from "../../assets/lapiz.jpg";
import utiles from "../../assets/utiles.jpg";
import Card from '../Card';
import {ContainerResults} from './styles'
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

function SearchResult() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search"))
  const categories = [
    "Arte, Librería y Mercería",
    "Librería",
    "Escolar",
    "Útiles Escolares",
  ];

  return (
    <>
    <Breadcrumbs categories={categories} />
    <ContainerResults>
      <Card title="hola" img={lapiz} ubication="Capital Federal" price="1.800"/>
      <Card title="hola" img={utiles} ubication="Capital Federal" price="1.800"/>
    </ContainerResults>
    </>
  )
}

export default SearchResult
