
import { FaCalendar, FaHome, FaPaypal, FaShoppingCart, } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
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
                                <NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><GoCodeReview /> Add Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking'><TbBrandBooking />My Booking</NavLink>
                            </li>
                </ul>
            </div>
            {/* for dashboard related table or data dashboad content */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;