import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-80   text-base-content">
                        <li className='bg-orange-700 rounded-xl'><Link to="/dashboard">My Orders</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;