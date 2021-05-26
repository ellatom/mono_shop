import React from "react";
import './ProductDetails.css';
import api from '../API/Api';
import TopHomePage from '../TopHomePage/TopHomePage';
import QuantityBar from "../QuantityBar/QuantityBar";
import Dropdown from "../Dropdown/Dropdown";
import ProductDetailsMiddleSide from "../ProductDetailsMiddleSide/ProductDetailsMiddleSide";
import ProductDetailsLeftSide from "../ProductDetailsLeftSide/ProductDetailsLeftSide";

class ProductDetails extends React.Component {

    state = {
        productDetails: [], attributes: [],
        title: "", price: "", description: "",
        images: [], mainImage: [],quantity:1,
        variantId:0
    }

    componentDidMount = async (props) => {


        let productId = this.props.match.params.id;
        let productDetails = await api.getProductByID(productId);
        this.setState({productDetails:productDetails});

        this.setDropdown(productDetails);
        this.setTitle(productDetails);
        this.setPrice(productDetails);
        this.setDescription(productDetails);
        this.setImages(productDetails);
    }

    setDropdown = (productDetails) => {

        let attributes = [];
        let labels = [];

        let attributeId = 0;
        let attributeName = "";
        productDetails.data.attributes.forEach(item => {
            attributeName = item.title;
            attributeId =item.id;
            item.labels.forEach(item => {
                labels.push({ id: item.id, title: item.title });
            })
            attributes.push({attributeId:attributeId, attributeName: attributeName, labels: labels });
            labels = [];
        })
        console.log("atrributes" + attributes);

        this.setState({ attributes: attributes });
    }
    setTitle = (productDetails) => {
        let titleVariant = productDetails.data.variants[0].title;
        this.setState({ title: titleVariant })
    }
    setPrice = (productDetails) => {
        let titlePrice = productDetails.data.variants[0].price;
        this.setState({ price: titlePrice })
    }
    setDescription = (productDetails) => {
        let description = productDetails.data.description;
        this.setState({ description: description });
    }
    setImages = async (productDetails) => {
        let variants = productDetails.data.variants;
        let images = [];
        for (let i = 0; i < variants.length; i++) {
            let imageURL = await api.getProductImage(variants[i].image.url, 127, 127, 70);
            let imageID = variants[i].id;
            images.push({ imageURL, imageID });
            if (i === 0)
                this.setMainImage(variants[i].image.url, imageID);
        }
        this.setState({ images: images });
    }
    setMainImage = async (image, imageID) => {

        let mainImage = [];
        let mainImageURL = await api.getProductImage(image, 425, 425, 70);
        mainImage.push({ mainImageURL, imageID });
        this.setLargeImage(mainImage);
    }
    setLargeImage = (mainImage) => {
        this.setState({ mainImage: mainImage });
    }
    addToCart=async(event)=>{
        console.log(this.state.variantId);
        
        let added= this.state.variantId &&
                   this.state.quantity && 
                //    this.state.attributes.length === &&
                   await api.addToCart(this.state.variantId,this.state.quantity);
        debugger;
        console.log("PRODUCT ADDED: "+added.data);
    }
    sendDropdownData=async(val)=>{
        if(val!==[])
        {
            let variant= this.findVariantId(val);
            variant[0] && await this.setState({variantId:variant[0].id});
        }
        console.log(this.state.variantId);
    }
    findVariantId=(val)=>{
        return this.state.productDetails && 
                      this.state.productDetails.data.variants.filter(variant=>{
                      return variant.labels.some(label=>{
                            return label.attribute_id=== Object(val[0]).dropdownId && 
                            label.label_id === Object(val[0]).optionIndexValue
                        })
                    })
        
       //{dropdownId: "1", dropdownName: "Color", optionIndex: 2, optionIndexValue: "31", optionName: "White"}

    }
    getQuantity=(val)=>{
        debugger;
        this.setState({quantity:val});
    }
    render() {
        const { images, mainImage, attributes, title, price, description } = this.state;
        return (
            <div>
                <TopHomePage />
                <div className="side_container">
                    <div className="left_side_content">
                        <ProductDetailsLeftSide images={images} mainImage={mainImage} />
                    </div>
                    <div className="side_container">
                        <div className="middle_side_content">
                            <ProductDetailsMiddleSide title={title} price={price} description={description} />
                        </div>
                        <div className="right_side_content"><div className="dropdown_container">
                            <div className="dropdown_container">
                                <Dropdown attributes={attributes} sendDropdownData={this.sendDropdownData}/>
                            </div>
                        </div>
                        <QuantityBar getQuantity={this.getQuantity}/>
                        <div className="btn">
                            <button className="btn_addToCart" onClick={this.addToCart}><span>Add to cart</span></button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default ProductDetails;

 // <Dropdown colors={colors} sizes={sizes} waistSizes={waistSizes} legSizes={legSizes} fabricTypes={fabricTypes}/> 

    // setColors = (productDetails) => {
    //     let colorsLabels = productDetails.data.attributes.filter(item => item.title === "Color");
    //     this.setState({ colors: colorsLabels[0] })
    // }
    // setSizes = (productDetails) => {
    //     let sizesLabels = productDetails.data.attributes.filter(item => item.title === "Size");
    //     this.setState({ sizes: sizesLabels[0] })
    // }
    // setWaistSizes = (productDetails) => {
    //     let waistLabels = productDetails.data.attributes.filter(item => item.title === "Waist Size");
    //     this.setState({ waistSizes: waistLabels[0] })
    // }
    // setLegSizes = (productDetails) => {
    //     let sizesLegLabels = productDetails.data.attributes.filter(item => item.title === "Leg Size");
    //     this.setState({ legSizes: sizesLegLabels[0] })
    // }
    // setFabricTypes = (productDetails) => {
    //     let fabricTypesLabels = productDetails.data.attributes.filter(item => item.title === "Leg Size");
    //     this.setState({ fabricTypes: fabricTypesLabels[0] })
    // }

        // this.setColors(productDetails);
        // this.setSizes(productDetails);
        // this.setWaistSizes(productDetails);
        // this.setLegSizes(productDetails);
        // this.setFabricTypes(productDetails);

        // colors: [], sizes: [], 
        //       waistSizes: [], legSizes: [], fabricTypes: [], 