import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductListing.css';

const ProductListing = (props) => {

    return (
        <div className="gridContainer" >
            {props.products.data && props.products.data.map((product, index) => (
                <ProductItem key={index} product={product} ></ProductItem>
            ))}
        </div>
    );
};

export default ProductListing;