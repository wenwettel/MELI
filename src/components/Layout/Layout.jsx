import React from "react";
import { Outlet } from "react-router-dom";
import SearchBox from "../SearchBox";
import Container from "./styles";

function Layout() {
 
  return (
    <>
      <SearchBox />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
