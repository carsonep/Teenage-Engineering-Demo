import React from "react";

function ProductCategory() {
  return (
    <div className="pb-12 text-2xl">
      <div style={{ padding: "0px 4.6vw" }}>
        <ul className="flex flex-row">
          <li className="pr-4">all products</li>
          <li className="pr-4">synthesizers</li>
          <li className="pr-4">audio</li>
          <li className="pr-4">accessories</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCategory;
