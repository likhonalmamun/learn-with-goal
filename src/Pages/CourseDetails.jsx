import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  return <div>{data.name}</div>;
};

export default CourseDetails;
