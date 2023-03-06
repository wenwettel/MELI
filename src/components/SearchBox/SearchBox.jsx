import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import search from "../../assets/search.png";
import { BoxStyle, Header } from "./style";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return 
      navigate(`/items?search=${value}`)
    
  };

  return (
    <Header>
    <BoxStyle>
      <img className="imgLogo" src={logo} alt="Logo de Mercado Libre" />
      <form onSubmit={handleSubmit}>
        <label className="labelSearch" htmlFor="search-input">Buscador</label>
        <input
          className="inputSearch"
          type="text"
          value={value}
          onChange={handleChangeInput}
          placeholder="Nunca dejes de buscar"
          id="search-input"
          
        />
        <button className="button" type="submit">
          <img className="imgSearch" src={search} alt="icono de busqueda" />
        </button>
      </form>
    </BoxStyle>
    </Header>
  );
}

export default SearchBox;
