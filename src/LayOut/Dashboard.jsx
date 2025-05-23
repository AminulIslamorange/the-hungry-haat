
import { FaAd, FaCalendar, FaHome, FaList, FaPaypal, FaShoppingCart, FaUsers, FaUtensils, } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

import { IoMenu } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";

import { GoCodeReview } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart]=useCart();

    // Todo get for admin
    const isAdmin=true;
    return (
        <div className="flex">
            {/* for navigation */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul   className="menu p-4 gap-4">
                    {
                        isAdmin?<>
                        <li>
                                <NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink>
                            </li>
                        <li>
                                <NavLink to='/dashboard/addItems'><FaUtensils /> add items</NavLink>
                            </li>
                        <li>
                                <NavLink to='/dashboard/manageItems'><FaList/> manage items</NavLink>
                            </li>
                        <li>
                                <NavLink to='/dashboard/manageBooking'><TbBrandBooking /> Manage bookings</NavLink>
                            </li>
                        <li>
                                <NavLink to='/dashboard/allUsers'><FaUsers /> all users</NavLink>
                            </li>

                        
                        </>:<>
                        <li>
                                <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'><FaCalendar /> Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaPaypal /> Payment </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart ({cart.length}) </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><GoCodeReview /> Add Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking'><TbBrandBooking />My Booking</NavLink>
                            </li></>
                    }
                             <div className="divider"></div>
                    {/* common navlink for admin and user */}
                    <li>
                        <NavLink to='/'><FaHome />  Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'> <IoMenu />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaShopify />  Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><MdOutlineContactPhone /> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* for dashboard related table or data dashboad content */}
            <div className="flex-1 m-4 p-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;