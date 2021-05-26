import CustomDropdown from '../CustomDropdown/CustomDropdown';
import './Dropdown.css';

const Dropdown = (props) => {

    const sendDropdownData=(val)=>{
       
        props.sendDropdownData(val);

    }
    let dropdowns = props.attributes && props.attributes.map(item => {
        return (
            <CustomDropdown item={item} sendDropdownData={sendDropdownData}/>
        )
    })

    return (
        <>
            {dropdowns}
        </>
    )
};

export default Dropdown;

// old solution not 
{/* <div className={`${item.attributeName}_dropdown`}> */ }

{/* <select className="colors_dropdown">
                    <option selected >Choose color</option>
                    {props.colors && props.colors.labels && props.colors.labels.map((color, index) => (
                        <option value={color.id}>{color.title}</option>
                    ))}
                </select> 
                <select className="sizes_dropdown">
                            <option selected >Choose size</option>
                            {props.sizes && props.sizes.labels && props.sizes.labels.map((size, index) => (
                                <option key = {index} value={size.id}>{size.title}</option>
                            ))}
                        </select>
                        <select className="waist_sizes_dropdown">
                            <option selected >Choose waist size</option>
                            {props.waistSizes && props.waistSizes.labels && props.waistSizes.labels.map((waistSize, index) => (
                                <option value={waistSize.id}>{waistSize.title}</option>
                            ))}
                        </select>
                        <select className="leg_sizes_dropdown">
                            <option selected >Choose leg size</option>
                            {props.legSizes && props.legSizes.labels && props.legSizes.labels.map((legSize, index) => (
                                <option key = {index} value={legSize.id}>{legSize.title}</option>
                            ))}
                        </select>
                        <select className="fabric_types_dropdown">
                            <option selected >Choose fabric types</option>
                            {props.fabricTypes && props.fabricTypes.labels && props.fabricTypes.labels.map((fabricTypes, index) => (
                                <option key = {index} value={fabricTypes.id}>{fabricTypes.title}</option>
                            ))}
                            </select> */}



