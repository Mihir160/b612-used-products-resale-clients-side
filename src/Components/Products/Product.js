import React from 'react';
import { FaMapMarkerAlt, FaUserCheck } from "react-icons/fa";
const Product = ({ product }) => {
    console.log(product)
    const { image, title, location, original_price, resale_price, years_of_use, seller_name, seller_verified, post_time, product_condition
    } = product
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
                    <p>Original Price : ${original_price}</p>
                    <p>Resale Price : ${resale_price}</p>
                    <p>Years of use : {years_of_use}</p>
                    <p>Condition : {product_condition}</p>
                    <p>Post Time : {post_time}</p>
                    <div className='flex items-center'>
                        <p>Seller : {seller_name}</p>
                        {
                            seller_verified === 'verified' && <p className='text-green-700'><FaUserCheck></FaUserCheck></p>
                        }

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;