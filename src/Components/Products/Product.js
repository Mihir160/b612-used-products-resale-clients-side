import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt, FaUserCheck } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';



const Product = ({ product, setBooking}) => {
     
     const {user} = useContext(AuthContext)
    const { image, title, location, original_price, resale_price, years_of_purchase, 
        seller_name,  post_time, product_condition, description, seller_email } = product
      
    //     const url = `http://localhost:5000/verify?email=${seller_email}`
    //     // console.log(url)
    //     const { data: verify, refetch } = useQuery({
    //         queryKey: ['verify'],
    //         queryFn: async () => {
    //             const res = await fetch(url, {
    //             });
    //             const data = await res.json();
    //             return data;
    //         }
    //     })
    // console.log(verify?.seller_verified)
   
    const wishlistHandle = wishlist =>{
            console.log(wishlist)
            console.log(wishlist.category_name)
            const wishlistadd = {
                userName: wishlist.seller_name,
                email : user.email,
                seller_email: wishlist.seller_email,
                itemName : wishlist.title,
                resalePrice: wishlist.resale_price,
                phone : wishlist.seller_phone,
                location : wishlist.location,
                bookingId : wishlist._id,
                image : wishlist.image
            }
            // console.log(wishlistadd)

            fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistadd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                  
                    toast.success('Wishlist confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })
    }

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
                    <p>Post Date/Time : {post_time}</p>
                    <div className='flex items-center'>
                        <p>Seller : {seller_name}</p>
{/*                         
                        {
                        

                          
                        verify?.seller_verified ==='verified'  && <p className='text-green-700'><FaUserCheck></FaUserCheck></p>    
                
                        } */}

                    </div>
                    <div className="card-actions justify-end">
                    <label onClick={()=> wishlistHandle(product)}  
                    className="btn btn-primary">Wishlist</label>
                    <label onClick={()=> setBooking(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                     
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;