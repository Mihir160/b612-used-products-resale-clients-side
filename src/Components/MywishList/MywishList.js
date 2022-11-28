import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const MywishList = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    console.log(url)

    const { data: wishlists = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
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

    console.log(wishlists)
    return (
        <div>
        <h3 className="text-3xl mb-5">My Wishlist</h3>
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
                        wishlists &&
                        wishlists?.map((wishlist, i) => <tr key={wishlist._id}>
                            <th>{i + 1}</th>
                            <img className='w-20' src={wishlist.image} alt="" srcset="" />
                            <td>{wishlist.itemName}</td>
                            <td>{wishlist.resalePrice}</td>
                            <td>

                                {
                                    wishlist.resalePrice && !wishlist.paid && <Link to={`/dashboard/paymentwishlist/${wishlist._id}`}><button
                                    className='btn btn-outline  btn-sm'
                                >Pay</button></Link>
                                }

                                {
                                    wishlist.resalePrice && wishlist.paid && <span className='text-primary'>paid</span>
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

export default MywishList;