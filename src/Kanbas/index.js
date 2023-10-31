import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name:"New Course",
    number: "New Course Nº",
    startDate: new Date(),
    endDate: new Date(),
  });
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };

  const deleteCourse = (course) => {
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
    <div className="d-flex">

      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={
          <Dashboard     
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
              } />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Calendar" element={<h1>Inbox</h1>} />
          <Route path="Calendar" element={<h1>History</h1>} />
          <Route path="Calendar" element={<h1>Studio</h1>} />
          <Route path="Calendar" element={<h1>Commons</h1>} />
          <Route path="Calendar" element={<h1>Help</h1>} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;