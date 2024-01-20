import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signInUser,signinWithGoogle} =useContext(AuthContext);
    const navigate =useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.error(error);
        })

    }
        const handleGoogleSignIn = () => {
            signinWithGoogle()
            .then(result =>console.log(result.user))
            .catch(error =>console.error(error))
        }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" required placeholder="Enter your email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder=" Enter your password" className="input input-bordered"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="mx-auto mb-4"> Do not have an account?Please <Link className="text-blue-600 font-bold" to="/register">Rrgister</Link> </p>
        <p><button onClick={handleGoogleSignIn} className="btn btn-active btn-ghost ml-[150px] mb-5">Google</button></p>
    </div>
  </div>
</div>
    );
};

export default Login;