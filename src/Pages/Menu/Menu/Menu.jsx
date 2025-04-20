import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg'
import PopulaMenu from "../../Home/PopularMenu/PopulaMenu";


const Menu = () => {
    return (
        <div>
              <Helmet>
        <title>Hungry | menu</title>
        
      </Helmet>
      <Cover img={menuBg} title={'OUR MENU'} details={'Would you like to try a dish?'}></Cover>
      <PopulaMenu></PopulaMenu>
        </div>
    );
};

export default Menu;