import React from 'react';

const Product = ({ product }) => {
    console.log(product)
    const { image, title,location,original_price    } = product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{location}</p>
                    <p>Price: ${original_price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;