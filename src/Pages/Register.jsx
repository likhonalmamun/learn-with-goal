import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content w-[50%] flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-red-600 font-bold">Register Now</h1>
          <p className="py-6">
            Register to "Learn With Goal" for buying our course . Be the member
            of dedicated students group . We are always active to help you to
            reach your goal .
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-600">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-600">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-600">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-600">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-500 font-semibold ml-1">
              This is error message
            </p>
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
