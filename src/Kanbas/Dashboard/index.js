import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import "C:/Users/pablo/OneDrive/Bureau/northeastern/webdev/kanbas-react-web-app3/src/styles.css"
import { TfiWrite } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{width: "100%"}}>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course, index) => (
            <div class="card h-100" style={{width: "330px", marginLeft: "15px"}}>
              <img src="/images/nuu.png" class="card-img-top" alt="..." />
              <BsThreeDotsVertical className="wd-icon" style={{ position: "absolute", top: "0", left: "280px",top:10, width: "25px", height: "25px", color:"white"}}/>
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
                  First Semester Full Term 2023
                  <br/>
                  <TfiWrite className="wd-icon"  style={{width: 25, height:25}}/>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;