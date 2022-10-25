import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("https://assignment-10-server-pi.vercel.app/data")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>tthis is home of ccourses</div>;
};

export default Home;
