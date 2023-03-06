import React, { useEffect, useState } from "react";
import Card from "../Card";
import { ContainerResults } from "./styles";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { fetchAllItems } from "../../services/items";
import Spinner from "../Commons/Spinner";
import Error from "../Commons/Error";

function SearchResult() {
  let [searchParams] = useSearchParams();
  const paramSearch = searchParams.get("search");
  const [results, setResults] = useState({
    data: null,
    loading: true,
    error: false,
  });

  const { items, categories } = results?.data || {};

  useEffect(() => {
    const getResultsItems = async () => {
      try {
        const response = await fetchAllItems(paramSearch);
        setResults({ data: response?.data, loading: false, error: false });
      } catch (err) {
        console.error(err);
        setResults({ error: true, loading: false, data: null });
      }
    };
    getResultsItems();
  }, [paramSearch]);

  if (results.loading) return <Spinner isLoading={results.loading} />;

  if (results.error || results?.data?.items?.length === 0) return <Error />;

  return (
    <>
      <Breadcrumbs categories={categories} />
      <ContainerResults>
        {items?.map((item) => {
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
