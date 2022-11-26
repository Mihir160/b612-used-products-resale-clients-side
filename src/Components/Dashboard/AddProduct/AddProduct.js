import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {data:  categoryname, isLoading } = useQuery({
        queryKey:['categoryname'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/categoryname')
            const data = await res.json()
            return data
        }
    })
    const productAdd = data => {
               console.log(data)
    }
    return (
        <div>
            <h1 className='text-white'>Add Products</h1>
            <div>
            <div className="">
                <div className="hero-content">

                    <div className="card  w-full max-w-sm shadow-2xl shadow-white bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(productAdd)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Product Name</span></label>
                                    <input type="text" {...register("title", {
                                        required: "Product Name is Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Description</span></label>
                                    <input type="text"
                                        {...register("description", {
                                            required: "description is required"
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input type="text"
                                        {...register("location", {
                                            required: "Location is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Resale_price</span></label>
                                    <input type="text"
                                        {...register("resale_price", {
                                            required: "resale_price is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Original_price</span></label>
                                    <input type="text"
                                        {...register("original_price", {
                                            required: "original_price is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Product_condition</span></label>
                                    <input type="text"
                                        {...register("product_condition", {
                                            required: "product_condition is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.product_condition && <p className='text-red-600'>{errors.product_condition?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Post_time</span></label>
                                    <input type="text"
                                        {...register("post_time", {
                                            required: "post_time is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.post_time && <p className='text-red-600'>{errors.post_time?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Seller_name</span></label>
                                    <input type="text"
                                        {...register("seller_name", {
                                            required: "seller_name is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.seller_name && <p className='text-red-600'>{errors.seller_name?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Seller_phone</span></label>
                                    <input type="text"
                                        {...register("seller_phone", {
                                            required: "seller_phone is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.seller_phone && <p className='text-red-600'>{errors.seller_phone?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Seller_email</span></label>
                                    <input type="text"
                                        {...register("seller_email", {
                                            required: "seller_email is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.seller_email && <p className='text-red-600'>{errors.seller_email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Seller_verified</span></label>
                                    <input type="text"
                                        {...register("seller_verified", {
                                            required: "seller_verified is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.seller_verified && <p className='text-red-600'>{errors.seller_verified?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Image</span></label>
                                    <input type="text"
                                        {...register("image", {
                                            required: "image is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Category_name</span></label>
                                    <select
                                        {...register('category_name')}
                                        className="select input-bordered w-full max-w-xs">
                                          {
                                            categoryname.map(categoryName => <option key={categoryName._id}>{categoryName.category_name}</option>)
                                          }  
                                         
                                         {/* <option>Buyer</option> */}
                                    </select>
                                </div>
                                <input className='btn btn-outline w-full mt-6' value="Submit" type="submit" />
                              
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;