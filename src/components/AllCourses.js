import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";

function AllCourses() {
  useEffect(() => {
    document.title = "All Courses | EduSiksha";
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateCourse = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-5">All Courses</h2>
      <div className="row">
        {courses.length > 0
          ? courses.map((item) => {
              return (
                <div className="col-md-4 mb-3">
                  <Course
                    key={item.id}
                    updateCourse={updateCourse}
                    course={item}
                  />
                </div>
              );
            })
          : ""}
        {courses.length <= 0 ? (
          <div className="text-center">
            <p>No Courses yet😟. Try to add some courses in <span style={{fontWeight:"bold"}} >AddCourse </span> section </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AllCourses;
