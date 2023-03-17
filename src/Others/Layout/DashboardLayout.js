import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My appointment</Link></li>
                        <li><Link to='/dashboard/allUser'>All user</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;