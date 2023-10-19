import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiTick } from "react-icons/ti";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
        <div className="float-end wd-flex-row-container">
        <button className = "btn btn-success" type="button" id="myBtn" onclick="myFunction()" ><TiTick className="wd-icon" /></button>
        <p style={{color: "green", marginTop: "8px", marginLeft: "10px", marginRight: "10px"}}>Published</p>
        <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()"><BsThreeDotsVertical className="wd-icon" /></button>
        </div>
        <br/>
        <br/>


        <hr/>

      <h3>Assignment Name</h3>
      <hr/>
      <input value={assignment.title}
             className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary float-end">
        Cancel
      </Link>
      {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
      <button onClick={handleSave} className="btn btn-danger me-2 float-end">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;