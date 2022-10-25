import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [allSubjects, setAllSubjects] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-pi.vercel.app")
      .then((res) => res.json())
      .then((data) => setAllSubjects(data));
  }, []);
  return (
    <div>
      <h3>
        <ul className="menu rounded-box bg-base-300 p-5 text-xl font-semibold ">
          <li >
            <Link className="focus:bg-red-500 duration-300" to="/">Overview</Link>{" "}
          </li>
          {allSubjects.map((subject) => (
            <li key={subject.id}>
            
              <Link className="focus:bg-red-500 duration-300"  to={`/subject/${subject.id}`}>{subject.name}</Link>{" "}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default SideNav;
