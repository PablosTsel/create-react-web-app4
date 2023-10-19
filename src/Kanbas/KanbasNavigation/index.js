import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineInbox } from "react-icons/ai";
import { MdMediation } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { GiHelp } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import "./index.css";
function KanbasNavigation() {
  const links = ["Northeastern","Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Northeastern: <img src="/images/nuu.png" alt="..." style={{width: "60px", height: "60px"}}/>,
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    History: <AiFillClockCircle className="wd-icon" />,
    Inbox: <AiOutlineInbox className="wd-icon" />,
    Studio: <MdMediation className="wd-icon" />,
    Commons: <BsFillArrowRightSquareFill className="wd-icon" />,
    Help: <GiHelp className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;