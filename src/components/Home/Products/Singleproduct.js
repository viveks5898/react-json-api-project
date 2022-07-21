import React from "react";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import "./singleproduct.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
  const { id } = useParams();
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const client = axios.create({
      baseURL: `https://fakestoreapi.com/products/${id}`,
    });
    async function getPost() {
      const response = await client.get();
      setProd(response.data);
    }
    getPost();
  }, []);
  if (!prod) return "No post!";
  return (
    <>
      <Navbar></Navbar>

      <div className="container product-section">
        <div className="row product">
          <h1 className="produt-head">Product Details</h1>
          <div className="col-lg-4 offset-2">
            <div className="card mb-4">
              <div className="img1">
                <img className="card-img w-100" src={prod.image} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-0">
            <h4 className="card-title title">{prod.title}</h4>
            <div className="cat h4">
              <p className="pp">
                description - &nbsp;
                {prod.description}{" "}
              </p>
            </div>

            <div className="cat h4 mt-4 ">
              category - &nbsp;
              {prod.category}
            </div>
            <div className="cat h4 mt-4 ">
              Price - $&nbsp;
              {prod.price}
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Singleproduct;
