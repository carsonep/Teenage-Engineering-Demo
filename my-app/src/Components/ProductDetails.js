import React from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import {
  useGetProductQuery,
  useUpdateBasketMutation,
  useGetBasketQuery,
} from "../features/api/apiSlice";
import ImageCarousel from "./ImageCarousel";
import NavBar from "./NavBar";
import "./styleComponents/ProductDetails.css";

function ProductDetails({ match }) {
  const {
    data: product,
    isFetching,
    isSuccess,
  } = useGetProductQuery(match.params.id);
  const { data } = useGetBasketQuery("basket1");
  const [updateBasket, { isLoading }] = useUpdateBasketMutation();

  let content;
  if (isFetching) {
    content = <LoadingSpinner />;
  } else if (isSuccess) {
    let photosArray = product.photos.map(
      (photo) => `https://localhost:5001/${photo.pictureUrl}`
    );

    const postBasket = async () => {
      try {
        const basket = {
          id: "basket1",
          items: [
            {
              id: product.id,
              productName: product.name,
              price: product.price,
              quantity: 1,
              pictureUrl: product.photos[0].pictureUrl,
              productType: product.productType.name,
            },
          ],
        };

        for (var j = 0; j < data.items.length; j++) {
          basket.items.push(data.items[j]);
        }

        localStorage.setItem("customerBasket", JSON.stringify(basket));

        await updateBasket(basket).unwrap();
      } catch (err) {
        console.error("Failed to Add to Basket", err);
      }
    };

    content = (
      <div
        className="main flex flex-col"
        //
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <h1 className="flex justify-center pb-8 md:hidden">
              {product.name}
            </h1>
            <div className="flex flex-col md:flex-row">
              <div
                id="secondary__div"
                className="w-full md:w-1/2 md:h-full flex justify-center md:justify-start"
                //   style={{ padding: "0px 4.6vw" }}
              >
                <ImageCarousel images={photosArray} />
              </div>

              <div className="flex md:justify-center md:items-center flex-col mt-14 md:w-1/2 ">
                <div className="flex flex-row justify-between items-center md:flex-col md:items-start md:w-4/6">
                  <div className="">
                    <h1
                      className="hidden md:block "
                      style={{ fontSize: "2.5vw" }}
                    >
                      {product.name}
                    </h1>
                    <h1 className="" style={{ fontSize: "2.5vw" }}>
                      ${product.price}
                    </h1>
                    <p className="md:hidden text-base">ready to ship</p>
                  </div>
                  <button
                    id="buy_button"
                    className="md:hidden flex items-center justify-center md:bg-black md:w-2/4 md:rounded-none md:text-white rounded-2xl text-2xl"
                  >
                    buy
                  </button>
                  <button
                    id="buy_button"
                    className="hidden md:block flex items-center justify-center md:bg-black md:w-full md:rounded-none md:text-white  text-2xl mt-6"
                    style={{ padding: "5% 0" }}
                    onClick={postBasket}
                  >
                    add to cart
                  </button>
                </div>
                <div className="w-4/6">
                  <p
                    className="hidden md:block  md:w-full mt-12 break-normal tracking-tighter"
                    style={{ fontSize: "1.21vw", color: "#7e6d59" }}
                  >
                    {product.description}
                  </p>
                </div>
                <p className="md:hidden mt-12 md:w-1/2 break-normal text-base">
                  {product.description}
                </p>
                <p
                  className="w-4/6 md:pt-4 pb-8"
                  style={{ fontSize: "1.21vw" }}
                >
                  explore
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <NavBar textColor={"#ffffff"} bgColor={"#000000"} />
      <div className="">{content}</div>
    </div>
  );
}

export default ProductDetails;
