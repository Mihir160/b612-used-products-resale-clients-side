import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Myorders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://b612-used-products-resale-server-side-eight.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    // console.log(bookings)



    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <img className='w-20' src={booking.image} alt="" srcset="" />
                                <td>{booking.itemName}</td>
                                <td>{booking.resalePrice}</td>
                                <td>

                                    {
                                        booking.resalePrice && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button
                                        className='btn btn-outline  btn-sm'
                                    >Pay</button></Link>
                                    }

                                    {
                                        booking.resalePrice && booking.paid && <span className='text-primary'>paid</span>
                                    }
                                    

                            
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;