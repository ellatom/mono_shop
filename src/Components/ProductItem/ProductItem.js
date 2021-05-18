import './ProductItem.css';
import api from '../API/Api';
import React, { useState, useEffect } from 'react';

const ProductItem = (props) => {

    const { product } = props;
    const [productURL, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          
          const productURL = await api.getProductImage(product.images[0].url,281,281,70);
          setData(productURL);
        };
     
        fetchData();
      }, []);

    // const productURL = "https://fedtest.monolith.co.il/api/imager.php?url=" + product.images[0].url + "&type=fit&width=281&height=281&quality=70";

    return (
        <div>
            <div class={`card-${product.id}`}>
                <img src={productURL} alt='product' />
                <p className="title">{product.title}</p>
                <p className="price">${product.max_price}</p>
            </div>
        </div>
    );
}
export default ProductItem;