import React from "react";
import { FaFileImport } from "react-icons/fa";
import { CgImport } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiTwotoneAlert } from "react-icons/ai";
import { AiOutlineDotChart } from "react-icons/ai";
import { AiTwotoneNotification } from "react-icons/ai";
import { PiNumberCircleOne } from "react-icons/pi";
import { PiNumberCircleTwo } from "react-icons/pi";



function StatusList() {
  return (
    <div className="col-10">
        <button className = "btn btn-secondary" type="button"Ks id="myBtn" onclick="myFunction()" style={{width: 200}}><FaFileImport className="wd-icon" />   Import Existing Content</button>
        <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 200, marginTop:20}}><CgImport className="wd-icon" />   Import From Commons</button>
        <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 200, marginTop:20}}><AiOutlineHome className="wd-icon" />   Choose Home Page</button>
        <button className = "btn btn-secondary" type="button"Ks id="myBtn" onclick="myFunction()" style={{width: 200, marginTop:20}}><AiOutlineBarChart className="wd-icon" />  View Course Stream</button>
        <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 200, marginTop:20}}><AiTwotoneAlert className="wd-icon" />   New Announcement</button>
        <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 200, marginTop:20}}><AiOutlineDotChart className="wd-icon" />   New Analytics</button>
        <button className = "btn btn-secondary" type="button" id="myBtn" onclick="myFunction()" style={{width: 200, marginTop:20}}><AiTwotoneNotification className="wd-icon" />   View Course Notifications</button>
        <div>
            <h3 style={{marginTop: 50}}>To do</h3>
            <hr/>
            <p style={{color: "red"}}><PiNumberCircleOne className="wd-icon" style={{width:20, height:20}}/>Grade A1 - ENV + HTML</p>
            <p style={{color: "grey", marginTop: -10}}>100 points • Sep 18 at 11:59pm</p>
            <p style={{color: "red"}}><PiNumberCircleTwo className="wd-icon" style={{width:20, height:20}}/>Grade A2 - CSS + Bootstrap</p>
            <p style={{color: "grey", marginTop: -10}}>100 points • Oct 02 at 11:59pm</p>
            <br/>

        </div>
    </div>

  );
}
export default StatusList;

