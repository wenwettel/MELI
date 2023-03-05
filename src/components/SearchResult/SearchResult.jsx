import React, { useEffect, useState } from "react";
import Card from "../Card";
import { ContainerResults } from "./styles";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { fetchAllItems } from "../../services/items";
import Spinner from "../Commons/Spinner";




function SearchResult() {
  let [searchParams] = useSearchParams();
  const paramSearch = searchParams.get("search");
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    const getResultsItems = async () => {
      setResults({ ...results, loading: true });
      try {
        const response = await fetchAllItems(paramSearch);
        setResults({ ...results, data: response?.data, loading: false });
      } catch (err) {
        console.error(err);
        setResults({ ...results, error: true, loading: false });
      }
    };
    getResultsItems();
  }, [paramSearch]);

  if (results.loading) return <Spinner isLoading={results.loading}/>
    
  if (results.error) return <h1>Error</h1>;
  if (results?.data?.items?.length === 0)
    return <h1>No se encontraron resultados...</h1>;

  return (
    <>
      <Breadcrumbs categories={results?.data?.categories} />
      <ContainerResults>
        {results?.data?.items?.map((item) => {
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
