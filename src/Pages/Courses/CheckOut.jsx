import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvider";
const CheckOut = () => {
  // as this route is wrapped by the private route
  const location = useLocation();
  const path = location.pathname;
  const [subject, setSubject] = useState({});
  // got the subject id through the path for loading data
  useEffect(() => {
    fetch(`https://assignment-10-server-pi.vercel.app${path}`)
      .then((res) => res.json())
      .then((data) => setSubject(data));
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={!theme ? { backgroundColor: "rgba(0, 0, 0, 0.675)" } : undefined}
      className="hero rounded-xl w-[80%] mx-auto bg-base-300"
    >
      <div className="hero-content w-[75%] flex-col lg:flex-row-reverse">
        <div className="card my-5 flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div
            style={
              !theme
                ? { backgroundColor: "rgb(0, 0, 0", color: "white" }
                : undefined
            }
            className="card-body "
          >
            <h1 className="text-center text-3xl font-semibold text-red-400">
              {subject?.name} Course
            </h1>
            <div className="form-control mt-1">
              <h1 className="text-center text-2xl py-2  ">
                Fee :
                <span className="text-5xl text-emerald-500 font-bold">
                  {subject?.price}
                </span>
                tk
              </h1>
              <div className="border text-lg font-semibold border-red-500 p-4 rounded-xl mt-3">
                <h1 className="text-2xl">In this course</h1>
                <p className="mt-1">
                  {" "}
                  <FaCheckSquare className="inline mr-1 text-green-400 mb-1" />{" "}
                  You will get recorded class 4 times in a week .
                </p>
                <p className="mt-1">
                  {" "}
                  <FaCheckSquare className="inline mr-1 text-green-400 mb-1" />{" "}
                  You will get life time access to all classes
                </p>
                <p className="mt-1">
                  {" "}
                  <FaCheckSquare className="inline mr-1 text-green-400 mb-1" />{" "}
                  You can access all quiz , test and notes on our website .
                </p>
                <p className="mt-1">
                  {" "}
                  <FaCheckSquare className="inline mr-1 text-green-400 mb-1" />{" "}
                  Our live class will be taken if needed .
                </p>
                <p className="mt-1">
                  {" "}
                  <FaCheckSquare className="inline mr-1 text-green-400 mb-1" />{" "}
                  We will consider your necessary feedback for doing better .
                </p>
              </div>
              <button className="btn mt-7 text-lg bg-red-500 border-none">
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
