import React from "react";
import { Link } from "react-router-dom";

function PostExcerpt({ product }) {
  console.log(product.photos[0].pictureUrl);
  return (
    <div className="m-4">
      <div className="">
        <div class="w-full md:w-1/2 md:flex-row lg:w-1/2 lg:flex-row">
          <div
            className="justify-center items-center rounded-2xl "
            style={{ backgroundColor: "#e5e5e5" }}
          >
            <img
              src={`https://localhost:5001/${product.photos[0].pictureUrl}`}
              alt=""
              class="rounded-t-lg"
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
