import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider";
import { updateProfile } from "firebase/auth";
import { ThemeContext } from "../ThemeProvider";
const Register = () => {
  const { logInWithGoogle, logInWithGitHub, registerWithPass } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    registerWithPass(email, password)
      .then((res) => {
        setError("");
        setInfo("Registered Successfully");
        updateProfile(res.user, { displayName: name, photoURL: photoURL }).then(
          () => {}
        );
      })
      .catch((e) => setError(e.message));
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={
        !theme
          ? { backgroundColor: "rgba(0, 0, 0, 0.8) ", color: "white" }
          : undefined
      }
      className="hero  min-h-screen bg-base-200"
    >
      <div className="hero-content p-0 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[50%] flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl text-red-600 font-bold">
            Register Now
          </h1>
          <p className="py-6">
            Register to "Learn With Goal" for buying our course . Be the member
            of dedicated students group . We are always active to help you to
            reach your goal .
          </p>
        </div>
        <div
          className={`card flex-shrink-0 w-[90%] sm:w-full max-w-sm ${
            !theme ? "bg-[rgba(0,0,0,0.6)]" : "bg-base-100"
          } shadow-2xl bg-base-100`}
        >
          <form onSubmit={register} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold  text-red-600">
                  Full Name
                </span>
              </label>
              <input
                autoComplete="true"
                name="name"
                type="text"
                placeholder="Full name"
                className={`input input-bordered ${
                  !theme
                    ? " focus:outline focus:outline-offset-2 focus:outline-white"
                    : ""
                }`}
                required={true}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold  text-red-600">
                  Email
                </span>
              </label>
              <input
                autoComplete="true"
                name="email"
                type="email"
                placeholder="email"
                className={`input input-bordered ${
                  !theme
                    ? " focus:outline focus:outline-offset-2 focus:outline-white"
                    : ""
                }`}
                required={true}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold  text-red-600">
                  Password
                </span>
              </label>
              <input
                autoComplete="true"
                required={true}
                name="password"
                type="password"
                placeholder="password"
                className={`input input-bordered ${
                  !theme
                    ? " focus:outline focus:outline-offset-2 focus:outline-white"
                    : ""
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold  text-red-600">
                  Photo URL
                </span>
              </label>
              <input
                autoComplete="true"
                name="photoURL"
                type="text"
                placeholder="Photo URL"
                className={`input input-bordered ${
                  !theme
                    ? " focus:outline focus:outline-offset-2 focus:outline-white"
                    : ""
                }`}
              />
            </div>
            <p className="text-red-500 font-semibold ml-1">{error}</p>
            <p className="text-green-500 font-semibold ml-1">{info}</p>
            <p className="text-sm mt-4">
              Already have an account ?
              <Link
                className="text-blue-400 hover:font-semibold hover:text-blue-600"
                to="/login"
              >
                Login Now
              </Link>
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-red-600">
                Register
              </button>
              <div>
                <p className="text-center divider mt-2">Or</p>
                <p>Continue With :</p>
                <p className="text-center mt-3">
                  <FaGoogle
                    onClick={() =>
                      logInWithGoogle()
                        .then((res) => {
                          setError("");
                          setInfo("Registered Successfully");
                        })
                        .catch((e) => setError(e.message))
                    }
                    className="inline text-3xl mx-7 hover:text-black text-red-600"
                  ></FaGoogle>
                  <FaGithub
                    onClick={() =>
                      logInWithGitHub()
                        .then((res) => {
                          setError("");
                          setInfo("Registered Successfully");
                        })
                        .catch((e) => setError(e.message))
                    }
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

export default Register;
