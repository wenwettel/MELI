import React from "react";
import { Outlet } from "react-router-dom";
import SearchBox from "../SearchBox";
import Container from "./styles";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

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
