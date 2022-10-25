import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const subject = useLoaderData();
  return (
    <div className="home mb-11">
      <div
        className="hero  h-[400px]"
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/1/11/Inner_Campus_of_ACC.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5  text-5xl font-bold">
              This is a 5 months crash course on{" "}
              <span className="text-red-500 font-bold">{subject.name}</span> .
            </h1>
            <p className="mb-5 italic text-2xl">
              We are mainly focused on admission test of best collages of bd .
              In next 5 months (1st Nov to ending of March) , we will cover all
              important topics of {subject.name} text book . Regular test and
              quize will keep you on practice .
            </p>
            <Link className="px-5 hover:bg-transparent border duration-500 border-red-500 hover:text-red-500 py-2 mt-5 inline-block text-xl font-semibold bg-red-500 rounded-lg">
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-3xl mt-10 text-black  font-semibold text-center">
        More details
      </h1>
      <div className="grid gap-6 bg-base-100 rounded-xl grid-cols-[3fr,2fr]">
        <div>
          <img
            className="block h-[380px] rounded-tl-xl rounded-bl-xl w-full"
            src={subject.headerImg}
            alt=""
          />
        </div>
        <div className="p-7 w-full">
          <h2 className="">{subject.name}</h2>
          <div>
            {" "}
            <p>Total Classes: {subject.totalClass}</p>
            <p>Total Tests : {subject.totalTest}</p>
            <p>Total Quiz : {subject.totalQuize}</p>
          </div>
          <p>
            {subject.name} Teacher : {subject.mentor}
          </p>
          <p>
            Course Description : <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sed delectus, dolores sint dolor ipsa eum quidem necessitatibus, ab
            eveniet provident sit quaerat pariatur ipsam neque voluptate iusto
            ratione consequatur!
          </p>
          <div className=" justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
