import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ subject }) => {
  return (
    <div className="card w-full shadow-xl image-full">
      <figure>
        <img className="opacity-100" src={subject.img} alt="Subject" />
      </figure>
      <div className="card-body  opacity-100">
        <h2 className="card-title text-white  text-2xl">
          Subject : <span className="text-white">{subject.name}</span>
        </h2>
        <div>
          <p className="text-lg text-white font-semibold">
            Total Classes :{" "}
            <span className="text-white">{subject.totalClass}</span>
          </p>
          <p className="text-lg text-white font-semibold">
            Total Test :{" "}
            <span className="text-white">{subject.totalTest}</span>
          </p>
        </div>
        <p className="text-lg text-white font-semibold">
          Class Mentor :{" "}
          <span className="text-white"> {subject.mentor}</span>
        </p>
        <div className="card-actions justify-end">
          <Link
            className="px-3 py-1 rounded-lg hover:border border border-red-400 hover:bg-transparent hover:text-red-300 text-lg font-semibold bg-red-600"
            to={`/subject/${subject.id}`}
          >
            View details <FaArrowAltCircleRight className="inline"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
