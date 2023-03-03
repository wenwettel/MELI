import ProductDetail from "./components/ProductDetail";
import SearchResult from "./components/SearchResult";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/items"element={<SearchResult/>}/>
        <Route path="/items/:id"  element={<ProductDetail/>}/>
      </Route>
    </Routes>
  );
}

export default App;
