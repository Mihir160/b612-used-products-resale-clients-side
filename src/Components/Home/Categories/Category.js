import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const {category_name, image,category_id} = category
    
    return (
        <div >
            <div className="card lg:w-96 lg:h-full  bg-base-100 shadow-2xl shadow-white image-full">
                <figure><img src={image} alt="phone" /></figure>
                <div className="card-body">
                    <div className="card-actions  justify-center mt-12">
                       <Link  to={`/products/${category_id}`}> <button className="btn btn-primary btn-outline">{category_name}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;