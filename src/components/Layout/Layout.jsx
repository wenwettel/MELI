import React from "react";
import { Outlet } from "react-router-dom";
import SearchBox from "../SearchBox";
import ContainerAPP from "./styles";

function Layout() {
  return (
    <>
      <SearchBox />
      <ContainerAPP>
        <Outlet />
      </ContainerAPP>
    </>
  );
}

export default Layout;
