import React from "react";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <>
      <div
        className="hero  h-[400px]"
        style={{
          backgroundImage: `url("https://engineersdiarybd.com/wp-content/uploads/2020/06/IMG_6300.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5  text-5xl font-bold">
              Welcome to "<span className="text-red-600">L</span>EARN
              <span className="text-red-600">W</span>ITH
              <span className="text-red-600">G</span>OAL" .
            </h1>
            <p className="mb-5 italic text-2xl">
              If you are a student of SSC-2022 and you have set your goal to get
              admitted to{" "}
              <span className="text-red-500 font-bold">Notre Dame</span>/
              <span className="text-red-500 font-bold">Holy Cross</span>/
              <span className="text-red-500 font-bold">Adamjee Cantonment</span>{" "}
              college, then join our 5 month journey and achieve your goal .We
              are committed to guide you and fulfill your dream.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
