import React from 'react';
import { FaMapMarkerAlt, FaUserCheck } from "react-icons/fa";
const AdvertiseCard = ({advertisedItem}) => {
    const { image, title, location, original_price, resale_price, years_of_purchase, 
        seller_name,  post_time, product_condition, description, seller_email, years_of_use } = advertisedItem
    return (
        <div>
               <div className="card lg:w-96 lg:h-full bg-base-100 shadow-2xl shadow-white">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex items-center gap-2'>
                        <FaMapMarkerAlt className='text-white'></FaMapMarkerAlt>
                        <p>{location}</p>
                    </div>
                    <p>Description : {description}</p>
                    <p>Original Price : ${original_price}</p>
                    <p>Resale Price : ${resale_price}</p>
                    <p>years_of_purchase : {years_of_purchase}</p>
                    <p>years_of_use : {years_of_use}</p>
                    <p>Condition : {product_condition}</p>
                    <p>Post Date/Time : {post_time}</p>
                    <div className='flex items-center'>
                        <p>Seller : {seller_name}</p>
{/*                         
                        {
                        

                          
                        verify?.seller_verified ==='verified'  && <p className='text-green-700'><FaUserCheck></FaUserCheck></p>    
                
                        } */}

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;