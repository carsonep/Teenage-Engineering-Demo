import React from "react";
import { Link } from "react-router-dom";

function PostExcerpt({ product }) {
  console.log(product.photos[0].pictureUrl);
  return (
    <div className="m-2">
      <div className="w-full">
        <div className="w-full">
          <div
            className="flex justify-center w-full items-center rounded-2xl md:rounded-lg md:h-full"
            style={{ backgroundColor: "#e5e5e5", height: "25%" }}
          >
            <img
              src={`https://localhost:5001/${product.photos[0].pictureUrl}`}
              alt=""
              className="rounded-t-lg md:w-1/2"
            />
          </div>
          <div class="ml-2 mr-2 flex justify-between">
            <div className="mt-2">
              <h3 class="text-xs">{product.name}</h3>
              <a href="#" class="flex text-xs">
                ${product.price}
              </a>
            </div>

            <p class="text-4xl font-thin">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostExcerpt;
