
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulaMenu = () => {
  const [menu]=useMenu();
  const popular = menu.filter((item) => item.category === "popular");


  return (
    <section>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>

      <div className="md:grid grid-cols-2">
        {
        popular .map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))
        }
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopulaMenu;
