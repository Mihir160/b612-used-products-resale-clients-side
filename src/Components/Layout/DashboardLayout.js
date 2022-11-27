import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
   

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-base-100 shadow-2xl shadow-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 gap-4  text-base-content">
                        {
                            isBuyer && <>
                                <li className='bg-orange-700 rounded-xl'><Link to="/dashboard/myorders">My Orders</Link></li>
                            </>
                        }

                      

                        {
                            isAdmin && <>
                                <li className='bg-orange-700 rounded-xl'><Link to="/dashboard/sellers">All Sellers</Link></li>
                                <li className='bg-orange-700 rounded-xl'><Link to="/dashboard/buyers">All Buyers</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='bg-orange-700 rounded-xl'><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li className='bg-orange-700 rounded-xl'><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;