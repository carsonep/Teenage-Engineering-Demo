import React from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useGetProductQuery } from "../features/api/apiSlice";
import ImageCarousel from "./ImageCarousel";
import NavBar from "./NavBar";

function ProductDetails({ match }) {
  const {
    data: product,
    isFetching,
    isSuccess,
  } = useGetProductQuery(match.params.id);

  console.log(product);
  let content;
  if (isFetching) {
    content = <LoadingSpinner />;
  } else if (isSuccess) {
    let photosArray = product.photos.map(
      (photo) => `https://localhost:5001/${photo.pictureUrl}`
    );
    content = (
      <div>
        <div className="w-screen flex justify-center">
          <ImageCarousel images={photosArray} />
        </div>
        <h1>{product.name}</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div>{content}</div>
    </div>
  );
}

export default ProductDetails;
