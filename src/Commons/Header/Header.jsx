import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider";
import { ThemeContext } from "../../ThemeProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <div className="navbar px-10 bg-black">
      <div className="flex-1 items-center">
        <img className="h-16" src="/assets/logo.jpg" alt="" />
        <NavLink className="text-xl text-white ml-3 font-bold" to="/">
          <span className="text-red-600">L</span>EARN
          <span className="text-red-600">W</span>ITH
          <span className="text-red-600">G</span>OAL
        </NavLink>
      </div>

      <div className="text-xl font-semibold  text-white">
        <NavLink
          className={`mr-4 hover:text-red-600 duration-300 ${({ isActive }) =>
            isActive ? "activeLink" : ""}`}
          to="/"
        >
          Courses
        </NavLink>
        <NavLink
          className={`mr-4 hover:text-red-600 duration-300 ${({ isActive }) =>
            isActive ? "text-red-500" : "text-nothing"}`}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={`mr-4 hover:text-red-600 duration-300 ${({ isActive }) =>
            isActive ? "activeLink" : ""}`}
          to="/FAQ"
        >
          FAQ
        </NavLink>
        {user?.uid ? (
          <>
            <button onClick={logOut}>Log Out</button>
            <img
              title={user?.displayName ? user.displayName : "User"}
              className="h-14 mx-2 rounded-full"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://marketplace.canva.com/EAE6OJ2qP8U/1/0/1600w/canva-gamer-with-glasses-character-twitch-profile-picture-CVfgWIJGgRo.jpg"
              }
              alt=""
            />
          </>
        ) : (
          <NavLink className="mr-4 hover:text-red-600 duration-300" to="/login">
            Login
          </NavLink>
        )}
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              onClick={() => setTheme(!theme)}
              type="checkbox"
              className="toggle bg-red-600"
            />
            <span className="label-text text-white mx-2">
              {theme ? "LIGHT" : "DARK"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
