
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulaMenu from "../PopularMenu/PopulaMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulaMenu></PopulaMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;