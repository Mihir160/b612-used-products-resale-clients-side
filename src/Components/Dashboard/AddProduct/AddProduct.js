import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const imageKey = process.env.REACT_APP_imgbb_Key
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(new Date())

    // console.log(user)
    const { data: categoryname, isLoading } = useQuery({
        queryKey: ['categoryname'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-eight.vercel.app/categoryname')
            const data = await res.json()
            return data
        }
    })
    //for date picking
    const DatePicker = new Date();
    const date = `${DatePicker.getDate()}/${DatePicker.getMonth() + 1
        }/${DatePicker.getFullYear()}`;

    var timePicker = new Date();
    const time = timePicker.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    console.log(time)




    const productAdd = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        category_name: data.category_name,
                        image: imgData.data.url,
                        title: data.title,
                        location: data.location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        years_of_purchase: data.years_of_purchase,
                        years_of_use: data.years_of_use,
                        product_condition: data.product_condition,
                        post_time: `${date} ${time}`,
                        seller_name: data.seller_name,
                        seller_verified: data.seller_verified,
                        seller_phone: data.seller_phone,
                        seller_email: data.seller_email,
                        description: data.description
                    }

                    fetch('https://b612-used-products-resale-server-side-eight.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.title} is added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
         
            <div>
                <h1 className='text-white text-center mt-4'>Add Products</h1>
                <div className="hero-content">

                    <div className="card  w-full max-w-sm shadow-2xl shadow-white bg-base-100">
                        <div className="card-body">
                            <h1 className='text-white'>Add Products</h1>
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
                                    <label className="label"> <span className="label-text">years_of_purchase</span></label>
                                    <input type="text"
                                        {...register("years_of_purchase", {
                                            required: "years_of_purchase is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.years_of_purchase && <p className='text-red-600'>{errors.years_of_purchase?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">years_of_use</span></label>
                                    <input type="text"
                                        {...register("years_of_use", {
                                            required: "years_of_use is required",
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.years_of_use && <p className='text-red-600'>{errors.years_of_use?.message}</p>}
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
                                        defaultValue={user.email}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.seller_email && <p className='text-red-600'>{errors.seller_email?.message}</p>}
                                </div>


                                {/* <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Seller_verified</span></label>
                                        <input type="text"
                                            {...register("seller_verified", {
                                                required: "seller_verified is required",
                                            })}
                                            className="input input-bordered w-full max-w-xs" />
                                            {
                                             sellerUser.map(sellerVerified => <p>{sellerVerified.seller_verified}</p>)   
                                            }
                                        {errors.seller_verified && <p className='text-red-600'>{errors.seller_verified?.message}</p>}
                                    </div> */}


                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Image</span></label>
                                    <input type="file"
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
    );
};

export default AddProduct;