import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignIn = () => {
    const { signIn  , googleSignIn ,  gitubSignIn , xSignIn,  facebookSign } = useContext(AuthContext);
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const signInUser = (email , password);
        console.log(signInUser);
        signIn(email , password)
     .then(result => {
        const loginUser = result.user;
        console.log(loginUser)
     })

    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const googleSign = result.user;
            console.log(googleSign)
        })
    }
    const handleSignInGithub = () =>{
        gitubSignIn()
        .then(result => {
            const githubSign = result.user;
            console.log(githubSign);
        })
    }
    const handleXSignIn = () =>{
        xSignIn()
        .then(result => {
            const xSign = result.user ;
            console.log(xSign); 
        })
    }
    const handleFacebookSign = () =>{
        facebookSign()
        .then(result => {
            const fbsign = result.user;
            console.log(fbsign);
        })
    }
    return (
        <div className=" hero min-h-screen bg-black ">
  <div className="hero-content flex-col  ">
  
    <div className="  shadow-xl border-2 rounded-lg border-green-500   ">
      <form onSubmit={handleSignIn} className="card-body">
        <div>
            {/* <h1 className="text-white  font-mono font-bold">Asslamoalikom </h1> */}
        </div>
        <div className="form-control">
          <label className="label"> 
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="Email"  name="email" className="p-2 rounded-2xl hover:border-y-2 border-white text-white font-bold" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="p-2 rounded-2xl hover:border-y-2 border-white text-white font-bold" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-outline text-white">Continue</button>
        </div>
        <div className="divider">OR</div>
        <div className="form-control mt-2">
          <button onClick={handleGoogleSignIn} className="btn btn-outline text-white"> <FcGoogle />Google</button>
        </div>
        <div className="form-control mt-2">
          <button onClick={handleSignInGithub} className="btn btn-outline text-white"><FaGithub />Github</button>
        </div>
        <div className="form-control mt-2">
          <button onClick={handleXSignIn} className="btn btn-outline text-white"><RiTwitterXLine /></button>
        </div>
        <div className="form-control mt-2">
          <button onClick={handleFacebookSign} className="btn btn-outline text-white"><FaFacebook />Facebook</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignIn;