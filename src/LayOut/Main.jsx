
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location=useLocation();
    const hideHeaderAndFooter=location.pathname.includes('login')||location.pathname.includes('signUp')
    return (
        <div>
           { hideHeaderAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        {hideHeaderAndFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;