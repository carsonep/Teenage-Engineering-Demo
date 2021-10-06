import React from "react";
import { Link } from "react-router-dom";

import LoadingSpinner from "../Components/LoadingSpinner";
import PostExcerpt from "../Components/PostExcerpt";

import { useGetProductsQuery } from "../features/api/apiSlice";
import NavBar from "./NavBar";

function ProductList() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isSuccess) {
    content = products.map((product, i) => (
      <PostExcerpt key={i} product={product} />
    ));
    // console.log(products);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="">
      <NavBar />
      <h2>Products</h2>
      <div className="mx-4 md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {content}
      </div>
    </div>
  );
}

export default ProductList;
