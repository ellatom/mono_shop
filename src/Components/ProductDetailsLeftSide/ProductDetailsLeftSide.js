import { useState,useEffect } from 'react';
import './ProductDetailsLeftSide.css';

const ProductDetailsLeftSide = (props) => {
   
    // let {mainImageURL} = props.mainImage[0] || {};
    // const [largeImage, setImage] = useState(mainImageURL);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     let mainImageURL = await api.getProductImage(image, 425, 425, 70);
    //     //   setData(productURL);
    //     };
    //     setImage(mainImageURL);
    //     fetchData();
    //   }, []);
    // //props.mainImage[0].mainImageURL
    // const setLargeImage=(event)=>{
    //     debugger;
    //     // console.log(event.target.value);
    //     setImage(event.target.src);
    //     mainImageURL = null;
    // }
    return (
        <>
        <div>
            {props.mainImage[0] && <img className="large_image" src={props.mainImage[0].mainImageURL} alt="main" />}
        </div>
        <div className="variants">
            {props.images && props.images.map((variant) => (
                <img className= {`variant-${variant.imageID}`} src={variant.imageURL} alt="variant" />
            ))}
        </div>
        </>
    );
};

export default ProductDetailsLeftSide;