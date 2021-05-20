import './ProductDetailsMiddleSide.css'

const ProductDetailsMiddleSide = (props) => {

    return (
        <div>
            <div className="middle_side_title">{props.title}</div>
            <div className="middle_side_price">${props.price}</div>
            <div className="middle_side_description">{props.description}</div>
        </div>
    )
}
export default ProductDetailsMiddleSide;

