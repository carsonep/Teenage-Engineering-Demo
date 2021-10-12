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
      <div
        className="main flex flex-col"
        // style={{ backgroundColor: "#e5e5e5" }}
      >
        <h1 className="flex justify-center pb-8 lg:hidden">{product.name}</h1>
        <div className="flex flex-col md:flex-row">
          <div
            id="secondary__div"
            className="w-full md:w-1/2 md:h-full flex justify-center md:justify-start"
            //   style={{ padding: "0px 4.6vw" }}
          >
            <ImageCarousel images={photosArray} />
          </div>

          <div className="flex md:justify-center md:items-center flex-col mt-8 md:w-1/2">
            <div className="flex flex-row md:flex-col items-center justify-between">
              <div className="">
                <h1 className="hidden md:block md:text-5xl font-light">
                  {product.name}
                </h1>
                <h1 className="text-2xl lg:text-5xl">${product.price}</h1>
                <p className="md:hidden text-base">ready to ship</p>
              </div>
              <button
                id="buy_button"
                className="flex items-center justify-center md:bg-black md:w-2/4 md:rounded-none md:text-white rounded-2xl text-2xl"
              >
                buy
              </button>
            </div>
            <p className="hidden mt-12 md:w-1/2 break-normal text-base">
              {product.description}
            </p>
            <p className="mg:hidden mt-12 md:w-1/2 break-normal text-base">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar textColor={"#000000"} />
      <div className="">{content}</div>
    </div>
  );
}

export default ProductDetails;
