import React, { useEffect } from "react";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import "./products.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Singleproduct from "./Singleproduct";

const client = axios.create({
  baseURL: "https://fakestoreapi.com/products/",
});

const Products = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await client.get();
      setPost(response.data);
    }
    getPost();
  }, []);
  if (!post) return "No post!";

  return (
    <>
      <Navbar></Navbar>
      <div className="container product-section">
        <div className="row">
          <h1 className="text-center">Products</h1>
          {post.length > 0 ? (
            post.map((values) => {
              return (
                <div className="col-lg-4">
                  <Link to={"/products/" + values.id}>
                    <div className="card mb-4">
                      <div className="img1">
                        <img className="card-img w-100" src={values.image} />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{values.title}</h4>
                        <p className="card-text">{values.description} </p>
                        <div className="buy d-flex justify-content-between align-items-center">
                          <div className="price text-success">
                            <h5 className="mt-4">{values.price}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="loading">....loading</p>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
