import React, { useEffect } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProduct, getProduct } from "../app/products/productSlice";

function DisplayProducts() {
  const dispatch = useDispatch();
  const data = useSelector(getProduct);

  useEffect(() => {
    dispatch(fetchAsyncProduct(1));
  }, [dispatch]);

  return (
    <div>
      <div>{data.name}</div>
    </div>
  );
}

export default DisplayProducts;
