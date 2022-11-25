import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';

const Products = () => {
  

    const products = useLoaderData()
    const [booking, setBooking] = useState([])
    // console.log(booking)
 
    return (
        <div>

             <div className='grid gap-6 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3  mt-12 mb-12'>
                {
                    products.map((product) => <Product key={product._id} product={product} setBooking={setBooking}></Product>)
                }
            </div>
            <BookingModal booking={booking}></BookingModal>
        </div>
    );
};

export default Products;