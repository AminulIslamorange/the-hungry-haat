import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const imgage_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // need to image upload to imagebibi and then get an url
    const imagefile = { image: data.image[0] };
    const res = await axiosPublic.post(imgage_hosting_api, imagefile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send data to the database
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // now data send to database post api
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"---What's new?---"}
      ></SectionTitle>
      <div className="mx-24" style={{ background: "var(--Dark-07, #F3F3F3)" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="from-control w-full p-4">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Recipe Name"
              {...register("name")}
            />
          </div>
          <div className="flex gap-24">
            {/* category */}
            <div className="from-control w-full ml-24">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue="default"
                className="select select-primary  "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soups">Soups</option>
                <option value="Desserts">Desserts</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>

            {/* input */}
            <div className="from-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                placeholder=" Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <fieldset className="fieldset mx-4 my-2">
            <legend className="fieldset-legend">Recepe Details</legend>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea h-24 w-full px-4"
              placeholder="Details"
            ></textarea>
          </fieldset>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input m-4"
          />
          <br />

          <button className="btn bg-[#B58130]  items-center">
            {" "}
            Add Item <FaUtensils />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
