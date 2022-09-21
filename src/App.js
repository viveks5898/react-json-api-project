import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/Login";
import Navbar from "./components/Home/Pages/Navbar";
import Frontend from "./components/Home/frontend/Frontend";
import Blog from "./components/Home/Blog/Blog";
import Singleblog from "./components/Home/Blog/Singleblog";
import Products from "./components/Home/Products/Products";
import Reactpaginate from "react-paginate";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Singleproduct from "./components/Home/Products/Singleproduct";
import { AppProvider } from "./context/Context";
function App() {

  return (
    <>
      <BrowserRouter>
      <AppProvider>

        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Practice/>} /> */}

          <Route path="/frontend/" element={<Frontend />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Singleblog />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<Singleproduct />} />
          </Routes>

          </AppProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
