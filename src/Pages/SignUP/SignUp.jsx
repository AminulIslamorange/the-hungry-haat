import{ useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication1.png'
import bgImg from '../../assets/others/authentication.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const SignUp = () => {
    const axiosPublic=useAxiosPublic();
    
    const {createUser,updateUserProfile}=useContext(AuthContext);
const {register, handleSubmit,reset,formState: { errors }}=useForm();
const navigate=useNavigate();
const location=useLocation();
const from = location.state?.from?.pathname || "/";
const onSubmit= (data) => {

    createUser(data.email,data.password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
            // create user Entry to the database
            const userInfo={
                email:data.email,
                name:data.name,
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                if(res.data.insertedId>0){
                    reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User data updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, { replace: true });

            }
            })

            
        })
        .catch(error=>console.error(error))
    })
    
    
    console.log(data)}
    return (
        <div
            className="hero bg-base-200 min-h-screen"
            style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Login Form - Shadow Added */}
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl rounded-xl p-6">
                    <h1 className="text-4xl font-bold text-center">Sign Up </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"{...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text"{...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"{...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"{...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-700">This field is required</span>}

                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn bg-[#D1A054] text-white hover:bg-[#b88640]" />
                        </div>
                    </form>
                    <p className="text-[#D1A054] text-center">
                        Already have an account?{" "}
                        <small>
                            <Link to="/login" className="text-[#D1A054] underline hover:text-blue-700">
                                Please Login
                            </Link>
                        </small>
                    </p>
                
                </div>

                {/* Image - Shadow Added */}
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" className="rounded-lg shadow-2xl w-full" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;