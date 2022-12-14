import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
const ref = createRef();
const CourseDetails = () => {
  const subject = useLoaderData();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={!theme ? { backgroundColor: "rgba(0, 0, 0, 0.675)" } : undefined}
      className="home"
    >

      {/* the pdf downloader button  */}
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            className="text-xl bg-red-500 mb-3 hover:bg-red-300 rounded-lg py-2 px-3 text-white"
            onClick={toPdf}
          >
            Download Course Details
          </button>
        )}
      </Pdf>
      <div className=" mb-11">
        <div
          className="hero sm:h-[400px]"
          style={{
            backgroundImage: `url("https://live.staticflickr.com/1873/30723091118_44fe5a9b08_b.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1 className="mb-5  text-3xl  md:text-5xl font-bold">
                This is a 5 months crash course on{" "}
                <span className="text-red-500 font-bold">{subject.name}</span> .
              </h1>
              <p className="mb-5 italic text-lg lg:text-2xl">
                We are mainly focused on admission test of best collages of bd .
                In next 5 months (1st Nov to ending of March) , we will cover
                all important topics of {subject.name} text book . Regular test
                and quize will keep you on practice .
              </p>
              <Link
                to={`/checkout/${subject.id}`}
                className="px-5 hover:bg-transparent border duration-500 border-red-500 hover:text-red-500 py-2 mt-5 inline-block text-xl font-semibold bg-red-500 rounded-lg"
              >
                Get Premium Access
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-3xl mt-10 text-black  font-semibold text-center">
          More details
        </h1>
        <div
          style={
            !theme
              ? { backgroundColor: "rgb(0, 0, 0", color: "white" }
              : undefined
          }
          className="grid  xl:gap-6 mt-10 bg-base-100 rounded-xl xl:grid-cols-[3fr,2fr]"
        >
          <div className="sm:m-9 lg:m-0">
            <img
              className=" block h-[250px] xl:h-[380px] rounded-xl xl:rounded-tr-none xl:rounded-br-none w-full"
              src={subject.headerImg}
              alt=""
            />
          </div>

          {/* the pdf will contain this section below */}
          <div ref={ref} className="p-7  w-full">
            <h2 className="text-xl font-semibold">{subject.name}</h2>
            <div>
              {" "}
              <p className="font-bold">Total Classes: {subject.totalClass}</p>
              <p className="font-bold">Total Tests : {subject.totalTest}</p>
              <p className="font-bold">Total Quiz : {subject.totalQuize}</p>
            </div>
            <p className="font-bold">
              {subject.name} Teacher : {subject.mentor}
            </p>
            <p>
              <span className="font-bold"> Course Description : </span>
              <br />
              {subject.description}
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CourseDetails;
