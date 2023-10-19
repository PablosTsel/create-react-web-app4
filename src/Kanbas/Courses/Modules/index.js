import ModuleList from "./ModuleList";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Modules() {
  return (
    <div>
            <div className="hello wd-width-900px" style={{marginLeft: "500px"}}>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 140 }}>Collapse All</button>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 140, marginLeft: 20}}>View Progress</button>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 140, marginLeft: 20}}>Publish All</button>
            <button className = "btn btn-danger" type="button" id="myBtn" onclick="myFunction()" style={{width: 140, marginLeft: 20}}><AiOutlinePlus className="wd-icon"  /> Module</button>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{marginLeft: 20}}><BsThreeDotsVertical className="wd-icon" /></button>
            </div>
            <div style={{marginTop: "15px"}}>
            <ModuleList />
            </div>
    </div>
  );
}
export default Modules;
