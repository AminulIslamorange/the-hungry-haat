import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const axiosPublic=useAxiosPublic();
    const location=useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName,
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)

            })
            navigate(from, { replace: true });
        })

    }
    return (
         <div>
             <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-dash btn-warning px-32"><FaGoogle /> Google</button>
            
        </div>
    );
};

export default SocialLogin;