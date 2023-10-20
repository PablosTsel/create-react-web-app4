import React from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { AiOutlineMenu } from "react-icons/ai";


function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <h2>
        <label style={{color : "red"}}>
        <AiOutlineMenu className="wd-icon" style={{marginLeft: "10px", marginRight: "10px"}} />
            Courses {course.name}  / {screen}
        </label>
        <hr/>

      </h2 >
      <div style={{width: 60}}>
        <CourseNavigation />
      </div>
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
            borderRadius: "0",
            marginRight: "-10",
            marginTop: "20px"
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;