import React from "react";

import LoadingSpinner from "../Components/LoadingSpinner";
import PostExcerpt from "../Components/PostExcerpt";

import { useGetProductsQuery } from "../features/api/apiSlice";
import NavBar from "./NavBar";
import ProductCategory from "./ProductCategory";

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
      <NavBar textColor={"#000000"} />
      <ProductCategory />
      <div
        style={{ padding: "0px 4.6vw" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
      >
        {content}
      </div>
    </div>
  );
}

export default ProductList;
