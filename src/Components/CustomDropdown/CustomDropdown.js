import './CustomDropdown.css';
// import React,{useState} from 'react';
const CusotmDropdown = (props) => {

    return (
            <div>
                <select className={`dropdown ${props.item.attributeName}`} >
                    <option selected >Choose {props.item.attributeName}</option>
                    {props.item.labels && props.item.labels.map((label, index) => (
                        <option value={label.id}>{label.title}</option>
                    ))}
                 </select>
            </div>
    )
};
export default CusotmDropdown;