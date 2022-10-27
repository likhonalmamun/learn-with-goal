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
                CORS stand for cross-origin resource sharing . It is an
                HTTP-based security mechanism which allows requests from some
                specific origins (domain , port , scheme etc.) . CORS is used in
                almost all wellknown browsers and it allows any website to
                request , access and use some data from particular server which
                allows cross-origin. It has given more freedom of using APIs as
                well .
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
                Firebase is an application building platform by google . You can
                make , host , serve application for web , android and IOS all
                together !! It is light , user friendly ,time saving , secure ,
                wellknown and trusted as well . By using firebase we can also
                use any other google services like google drive , sheet etc .
                And it saves you from writing boring backend codes ! Anyway ,
                there are many alternatives of firebase . AuthO , MongoDB ,
                Back4App , Backendless and Kuzzle are reliable among them .
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
                React Private route ensures that only logged in users can see
                and access the contents inside the private route . Usually
                sensitive components are passed inside Private route component
                as children . So use at first comes to the Private route
                component and the component checks that the user is logged in or
                not . If the user is logged in , it takes the user to the child
                component , Otherwise it takes the user to login page and
                replaces the sensitive components path .
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
                Node.js is a runtime backend javascript runtime environment .
                Javascript is a client side scripting language . Node.js uses
                javascript in backend by converting it to machine language with
                the help of Chrome V8 engine . <br /> Node.js works with two
                concepts 1. asynchronous 2. Non-blocking I/O . That means it can
                handle multiple requests with a single thread without blocking
                the thread for single task .
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Blog;
