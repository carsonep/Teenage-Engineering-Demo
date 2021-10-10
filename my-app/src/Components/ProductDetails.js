import React from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useGetProductQuery } from "../features/api/apiSlice";
import ImageCarousel from "./ImageCarousel";
import NavBar from "./NavBar";
import "./styleComponents/ProductDetails.css";

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
      <div className="flex flex-col " style={{ backgroundColor: "#e5e5e5" }}>
        <h1 className="flex justify-center pb-8 lg:hidden">{product.name}</h1>
        <div className="flex flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:h-full flex justify-center md:justify-start"
            //   style={{ padding: "0px 4.6vw" }}
          >
            <ImageCarousel images={photosArray} />
          </div>

          <div className="flex justify-center items-center flex-col mt-8 md:w-1/2">
            <div className="flex flex-row md:flex-col items-center justify-between">
              <div>
                <h1 className="hidden md:block md:text-5xl font-light">
                  {product.name}
                </h1>
                <h1 className="text-5xl font-light">${product.price}</h1>
                <p className="md:hidden">ready to ship</p>
              </div>
              <button className="bg-yellow-300 md:bg-black md:w-2/4 md:rounded-none nd md:text-white rounded-3xl text-4xl">
                buy
              </button>
            </div>
            <p className="mt-12 bg-red-500 md:w-1/2">{product.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="">{content}</div>
    </div>
  );
}

export default ProductDetails;
