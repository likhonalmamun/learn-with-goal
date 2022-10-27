import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvider";

const SideNav = () => {
  const [allSubjects, setAllSubjects] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-pi.vercel.app")
      .then((res) => res.json())
      .then((data) => setAllSubjects(data));
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div className=" text-black ">
      <h3>
        <ul
          style={
            !theme ? { backgroundColor: "black", color: "white" } : undefined
          }
          className="menu rounded-box bg-base-300 p-5 text-xl gap-1  lg:block flex flex-row flex-wrap font-semibold "
        >
          <li>
            <Link
              className="focus:bg-red-500 lg:border-none border border-black  duration-300"
              to="/"
            >
              Overview
            </Link>{" "}
          </li>
          {allSubjects.map((subject) => (
            <li key={subject.id}>
              <Link
                className="focus:bg-red-500 lg:border-none border border-black duration-300"
                to={`/subject/${subject.id}`}
              >
                {subject.name}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default SideNav;
