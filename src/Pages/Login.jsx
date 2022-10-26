import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../ContextProvider";
import { useState } from "react";
const Login = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  const navigate = useNavigate();
  const { logInWithGoogle, logInWithPass, logInWithGitHub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const logIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInWithPass(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(from);
      })
      .catch((e) => setError(e.message));
  };
  return (
    <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content w-[50%] flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-red-600 font-bold">Login now!</h1>
          <p className="py-6">
            Log in to "Learn With Goal" for buying our course . We are always
            active to help you to reach your goal .
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={logIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-600">Email</span>
              </label>
              <input
                autoComplete="true"
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required={true}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-600">Password</span>
              </label>
              <input
                autoComplete="true"
                required={true}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-red-500 font-semibold ml-1">{error}</p>
              <p className="text-sm mt-4">
                New to "Learn With Goal" ?{" "}
                <Link
                  className="text-blue-400 hover:font-semibold hover:text-blue-600"
                  to="/register"
                >
                  Register Now
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-red-600">
                Login
              </button>
              <div>
                <p className="text-center divider mt-2">Or</p>
                <p>Continue With :</p>
                <p className="text-center mt-3">
                  <FaGoogle
                    onClick={() => logInWithGoogle().then((result) => {navigate(from);})}
                    className="inline text-3xl mx-7 hover:text-black text-red-600"
                  ></FaGoogle>
                  <FaGithub
                    onClick={() => logInWithGitHub().then((res) => {navigate(from);})}
                    className="inline text-3xl mx-7 hover:text-black text-red-600"
                  ></FaGithub>
                </p>
              </div>
              <Link
                to="/"
                className="text-center pt-4  text-blue-400 hover:font-semibold hover:text-blue-600"
              >
                Go to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
