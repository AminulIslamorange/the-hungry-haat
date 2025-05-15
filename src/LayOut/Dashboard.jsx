
import { FaCalendar, FaHome, FaPaypal, FaShoppingCart, } from "react-icons/fa";

import { IoMenu } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart]=useCart();
    return (
        <div className="flex">
            {/* for navigation */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul   className="menu p-4 gap-4">
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
                            </li>
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