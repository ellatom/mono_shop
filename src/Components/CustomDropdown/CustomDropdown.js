import { useState , useEffect} from 'react';
import './CustomDropdown.css';

const CusotmDropdown = (props) => {
    //set values of dropdowns
    const [selectedOption,setSelectedOption]= useState([]);
    
    useEffect(() => {
        
        props.sendDropdownData(selectedOption);
    }, [selectedOption])

    const updateSelected=(event)=>{

        let index= event.target.selectedIndex;
        let indexValue= event.target.value;
        let newSelectedOption = [{dropdownId:event.target.classList[2],
                                dropdownName:event.target.classList[1],
                                optionIndex:index,
                                optionIndexValue:indexValue,
                                optionName:event.target.options[index].innerHTML}];
        setSelectedOption([ ...selectedOption, ...newSelectedOption]);
        //child component send data to parent
        // props.sendDropdownData(selectedOption);
    }

    return (
            <div>
                <select className={`dropdown ${props.item.attributeName} ${props.item.attributeId}`} onChange={updateSelected} >
                    <option selected >Choose {props.item.attributeName}</option>
                    {props.item.labels && props.item.labels.map((label, index) => (
                        <option value={label.id}>{label.title}</option>
                    ))}
                 </select>
            </div>
    )
};
export default CusotmDropdown;