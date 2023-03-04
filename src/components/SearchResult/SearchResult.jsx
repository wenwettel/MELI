import React, { useEffect, useState } from "react";
import lapiz from "../../assets/lapiz.jpg";
import utiles from "../../assets/utiles.jpg";
import Card from "../Card";
import { ContainerResults } from "./styles";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants";

function SearchResult() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const getResultsItems = async () => {
      const paramSearch = searchParams.get("search");
      const response = await fetch(
        `${BASE_URL}/api/items?q=${paramSearch}`
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
            <Link key={item.id} to={`/items/${item.id}`}>
              <Card
                title={item.title}
                img={item.picture}
                price={item.price.amount}
                freeShipping={item.free_shipping}
                stateName={item.state_name}
              />
            </Link>
          );
        })}
      </ContainerResults>
    </>
  );
}

export default SearchResult;
