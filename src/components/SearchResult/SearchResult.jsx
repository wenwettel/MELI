import React, { useEffect, useState } from "react";
import lapiz from "../../assets/lapiz.jpg";
import utiles from "../../assets/utiles.jpg";
import Card from "../Card";
import { ContainerResults } from "./styles";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";

function SearchResult() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);

  console.log(searchParams.get("search"));

  useEffect(() => {
    const getResultsItems = async () => {
      const paramSearch = searchParams.get("search");
      const response = await fetch(
        `http://127.0.0.1:3001/api/items?q=${paramSearch}`
      ).then((r) => r.json());
      setResults(response);
    };
    getResultsItems();
  }, []);

  //Falta formatear el precio
  return (
    <>
      <Breadcrumbs categories={results?.categories} />
      <ContainerResults>
        {results?.items?.map((item) => {
         
          return (
            <Link to={`/items/${item.id}`}>
              <Card
                key={item.id}
                title={item.title}
                img={item.picture}
                ubication="Capital Federal"
                price={item.price.amount}
                freeShipping={item.free_shipping}
              />
            </Link>
          );
        })}
      </ContainerResults>
    </>
  );
}

export default SearchResult;
