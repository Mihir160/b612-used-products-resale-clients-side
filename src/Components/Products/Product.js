import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaUserCheck } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';
import BookingModal from './BookingModal';
const Product = ({ product, setBooking }) => {
     const {user} = useContext(AuthContext)
    // console.log(product)
    const { image, title, location, original_price, resale_price, years_of_purchase, 
        seller_name, seller_verified, post_time, product_condition, description} = product
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
                    <p>Condition : {product_condition}</p>
                    <p>Post Date : {post_time}</p>
                    <div className='flex items-center'>
                        <p>Seller : {seller_name}</p>
                        {
                            seller_verified === 'verified' && <p className='text-green-700'><FaUserCheck></FaUserCheck></p>
                        }

                    </div>
                    <div className="card-actions justify-end">
                    <label onClick={()=> setBooking(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                     
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;