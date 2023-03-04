import React, { useEffect, useState } from "react";
import Card from "../Card";
import { ContainerResults } from "./styles";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants";

function SearchResult() {
  let [searchParams] = useSearchParams();
  const [results, setResults] = useState(null);
  const paramSearch = searchParams.get("search");

  useEffect(() => {
    const getResultsItems = async () => {
      
      const response = await fetch(
        `${BASE_URL}/api/items?q=${paramSearch}`
      ).then((r) => r.json());
      setResults(response);
    };
    getResultsItems();
  }, [paramSearch]);

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
                price={item.price}
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
