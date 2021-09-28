import React from "react";
import { Link } from "react-router-dom";

import LoadingSpinner from "../Components/LoadingSpinner";
import PostExcerpt from "../Components/PostExcerpt";

import { useGetProductsQuery } from "../features/api/apiSlice";

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
    <section className="">
      <h2>Products</h2>
      {content}
    </section>
  );
}

export default ProductList;
