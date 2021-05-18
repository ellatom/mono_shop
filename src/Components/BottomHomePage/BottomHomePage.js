import React from 'react';
import './BottomHomePage.css';
import ProductListing from '../ProductListing/ProductListing';
import api from '../API/Api';
import history from '../../history';
import {withRouter} from 'react-router-dom';

class BottomHomePage extends React.Component {

    state = { products: [], apiError: [] };
    
    componentDidMount = async () => {
        try {
            const response =
                await api.getAllProducts();

            this.setState({ products: response });
        }
        catch (error) {
            this.setState({ apiError: error });
        }
    }

    showProductDetails = async (event) => {
        let productID = event.target.parentElement.classList[0].split("-")[1];
       
        history.push({
            pathname:`/products/${productID}`,
            forceRefresh: true
          });
          history.go(0);
    }

    render() {
        const { products, apiError } = this.state;
        return (
            <div>
                <div className="header_container">
                    <div className="PRODUCTS">Products</div>
                    <div className="Rectangle-67-copy"></div>
                </div>

                <div className="grid-container"  onClick={(event)=>this.showProductDetails(event)} >
                    {products && <ProductListing products={products} />}
                    {apiError && <p>{apiError}</p>}
                </div>
            </div>
        )
    }
}

export default withRouter(BottomHomePage);