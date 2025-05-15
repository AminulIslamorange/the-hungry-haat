import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, recipe, price,_id } = item;
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    const [,refetch]=useCart();
    const navigate=useNavigate();
    const location=useLocation();
    const handleAddToCart=()=>{
        
        if(user && user?.email){
            // send data to the database
            const cartItems={
                menuId:_id,
                email:user.email,
                name,image,price
            }
            axiosSecure.post('/carts',cartItems)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refatch the cart
                    refetch();
                }
            })

        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login for Order!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send User to the Login Page
                navigate('/login',{ state:{ from: location }})

                }
              });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="text-white bg-slate-900 px-2 mr-2 right-2 top-2 absolute">$: {price}</p>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="justify-start">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>{handleAddToCart(item)}} 
                     className="btn btn-outline border-0 border-b-4  mt-2 text-center text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;