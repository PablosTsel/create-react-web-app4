import { Link } from "react-router-dom";
import "./index.css";
import { TfiWrite } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard( 
  { courses, course, setCourse, addNewCourse, 
    deleteCourse, updateCourse }
  ) {
  return (
    <div style={{width: "100%"}}>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      
      <input value={course.name} className="form-control" 
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      
      <input value={course.number} className="form-control" 
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                   
      <input value={course.startDate} className="form-control" type="date"              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

      <input value={course.endDate} className="form-control" type="date"              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button className = "btn btn-success" style={{marginTop: 5}} type="button" onClick={ addNewCourse } >
        Add Course </button>
      <button className = "btn btn-warning" style={{marginTop: 5, marginLeft: 5}} onClick={updateCourse} >
        Update
      </button>

      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: "1px"}}>
          {courses.map((course, index) => (
            
            <div key={String(new Date().getUTCMilliseconds()) + index} className="card h-100" style={{width: "330px", marginLeft: "15px"}}>
              <img src="/images/nuu.png" className="card-img-top" alt="..." />
              <BsThreeDotsVertical className="wd-icon" style={{ position: "absolute", left: "280px", width: "25px", height: "25px", color:"white"}}/>
              <div className="card-body">
                <h5 className="card-title">{course.name} {course.number} </h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <button className = "btn btn-danger float-end" type="button" style={{marginLeft: "2px"}}
                onClick={ (event) => {
                  event.preventDefault();
                  deleteCourse(course);
                }}> Delete
                </button>

                <button className = "btn btn-success float-end" type="button"
                onClick={(event) => {
                event.preventDefault();
                setCourse(course);
                }}>
                Edit
                </button>



                <p className="card-text">
                  First Semester Full Term 2023
                  <br/>
                  <TfiWrite className="wd-icon"  style={{width: 25, height:25}}/>
                  {course.startDate},{course.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;