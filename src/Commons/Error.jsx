import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-[300px] w-[60%] p-4 text-center bg-gray-300 mx-auto my-[20vh] rounded">
      <h1 className="text-4xl text-red-500">An unknown error has occured !</h1>
      <p className="text-2xl">Server responded with 404 Not Found ! </p>
      <p>Check your pathname</p>
      <p className="divider">Or</p>
      <Link className=" text-xl font-semibold text-blue-600 underline hover:text-blue-400 duration-300" to="/">Go back to home</Link>
    </div>
  );
};

export default Error;
