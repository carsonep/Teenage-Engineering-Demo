import React from "react";
import { Link } from "react-router-dom";

function PostExcerpt({ product }) {
  console.log(product.id);
  return (
    <div className="">
      <div className="w-full">
        <div className="w-full">
          <div
            className="flex justify-center rounded-2xl md:rounded-sm "
            style={{ backgroundColor: "#e5e5e5" }}
          >
            <img
              src={`https://localhost:5001/${product.photos[0].pictureUrl}`}
              alt=""
              className="object-scale-down rounded-t-lg md:w-1/2"
              style={{ minHeight: "27.5vw" }}
            />
          </div>
          <div class="ml-2 mr-2 flex  justify-between">
            <div className="mt-2 bg-red-500 ">
              <Link to={`/products/${product.id}`}>
                <h3 class="text-xs">{product.name}</h3>
                <p href="#" class="flex text-xs">
                  ${product.price}
                </p>
              </Link>
            </div>

            <p class="text-4xl font-thin">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostExcerpt;
