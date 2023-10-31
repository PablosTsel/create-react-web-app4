import ModuleList from "../Modules/ModuleList";
import StatusList from "../Status/StatusList";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";



function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <div className="hello wd-width-900px" style={{marginLeft: "300px"}}>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 140 }}>Collapse All</button>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 140, marginLeft: 20}}>View Progress</button>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 140, marginLeft: 20}}>Publish All</button>
            <button className = "btn btn-danger" type="button" id="myBtn" onclick="myFunction()" style={{width: 140, marginLeft: 20}}><AiOutlinePlus className="wd-icon"  /> Module</button>
            <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{marginLeft: 18}}><BsThreeDotsVertical className="wd-icon" /></button>
            </div>
            <div style={{marginTop: "10px" }}>
            <ModuleList />
            </div>
        </div>
        <div className="col-2">
            <h2>Status</h2>
            <StatusList />
        </div>
    </div>
  );
}
export default Home;
