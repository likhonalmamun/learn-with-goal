import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

const Error = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={
        !theme
          ? {
              backgroundColor: "rgb(0, 0, 0.8)",
              height: "100vh ",
            }
          : undefined
      }
      className="py-[20vh]"
    >
      <div
        style={
          !theme
            ? {
                backgroundColor: "rgb(0, 0, 0)",
                color: "white",
                border: "2px solid white",
              }
            : undefined
        }
        className=" h-fit  sm:h-[300px] md:w-[90%] w-[96%] lg:w-[60%] p-4 text-center bg-gray-300 mx-auto  rounded"
      >
        <h1 className="text-4xl text-red-500">
          An unknown error has occured !
        </h1>
        <p className="text-2xl">Server responded with 404 Not Found ! </p>
        <p>Check your pathname</p>
        <p className="divider">Or</p>
        <Link
          className=" text-xl font-semibold text-blue-600 underline hover:text-blue-400 duration-300"
          to="/"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
