import React, { useContext } from "react";

import Header from "../Commons/Header/Header";
import { ThemeContext } from "../ThemeProvider";

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header></Header>
      <div
        style={!theme ? { backgroundColor: "rgba(0, 0, 0, 0.9) " } : undefined}
        className="py-6"
      >
        <div
          className="hero w-[95%] md:w-[70%]  mx-auto my-5"
          style={{
            backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20201017/pngtree-question-mark-on-a-pink-pastel-background-3d-illustration-image_422717.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="px-[20px]  md:px-[60px] lg:px-[120px] xl:px-[250px]">
              <h1 className="mb-5 text-2xl sm:text-4xl font-bold">
                Q1 : What is CORS ?
              </h1>
              <p className="mb-5 text-xs sm:text-sm md:text-md lg:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero w-[95%] md:w-[70%]  mx-auto my-5"
          style={{
            backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20201017/pngtree-question-mark-on-a-pink-pastel-background-3d-illustration-image_422717.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="px-[20px]  md:px-[60px] lg:px-[120px] xl:px-[250px]">
              <h1 className="mb-5 text-2xl sm:text-4xl font-bold">
                Q2 : Why am I using Firebase & what are the alternatives ?
              </h1>
              <p className="mb-5 text-xs sm:text-sm md:text-md lg:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero w-[95%] md:w-[70%]  mx-auto my-5"
          style={{
            backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20201017/pngtree-question-mark-on-a-pink-pastel-background-3d-illustration-image_422717.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="px-[20px]  md:px-[60px] lg:px-[120px] xl:px-[250px]">
              <h1 className="mb-5 text-2xl sm:text-4xl font-bold">
                Q3 : How does Private Route Works ?
              </h1>
              <p className="mb-5 text-xs sm:text-sm md:text-md lg:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero w-[95%] md:w-[70%]  mx-auto my-5"
          style={{
            backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20201017/pngtree-question-mark-on-a-pink-pastel-background-3d-illustration-image_422717.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="px-[20px]  md:px-[60px] lg:px-[120px] xl:px-[250px]">
              <h1 className="mb-5 text-2xl sm:text-4xl font-bold">
                Q4 : What is Node? How does Node work ?
              </h1>
              <p className="mb-5 text-xs sm:text-sm md:text-md  lg:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Blog;
