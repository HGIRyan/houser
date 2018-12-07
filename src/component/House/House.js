import React from 'react';


export default function House(props) {
    let { property_name, address, city, state, zipcode, monthly_rent, imglink, id, deleteHouseFn, desired_rent } = props;
    return (
        <div>
            <div key={id} className='House'>
                <div className='House_img' >
                    <img src={imglink} alt={property_name} className='House_img' />
                </div>
                <div className='House_box'>
                    <h1 className='house_h1'>Name: {property_name}</h1>
                    <h1 className='house_h1'>Address: {address}</h1>
                    <h1 className='house_h1'>City: {city}</h1>
                    <h1 className='house_h1'>State: {state}</h1>
                    <h1 className='house_h1'>ZipCode: {zipcode}</h1>
                </div>
                <div className='pay'>
                    <h1 className='house_h1'>Monthly Rent: ${monthly_rent}</h1>
                    <h1 className='house_h1'>Desired Rent: ${desired_rent}</h1>
                </div>
                <button className='house_butt' onClick={() => { deleteHouseFn(id) }}>Delete</button>
            </div>
        </div>
    )
}