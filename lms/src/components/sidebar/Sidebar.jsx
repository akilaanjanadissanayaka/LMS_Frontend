import React,{ useState } from 'react';
import "./sidebar.css";
import { Link } from "react-router-dom";
import { SidebarDataAdmin,SidebarDataStudent,SidebarDataTeacher } from '../../data/Data';


const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    return (
        
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">

        <h3 className="sidebarTitle">Menu</h3>
        
        <ul className="sidebarList">
            {SidebarDataAdmin.map((item, index) => {
                return (
                    <div>
          <Link to={item.linkto} className="link">
          <li className={selected === index ? "sidebarListItem active" :"sidebarListItem"} 
          key={index}
          onClick={() => {
            setSelected(index);
          }}
          >
            <item.icon className="sidebarIcon" />
            {item.heading}
          </li>
          </Link>
          
          </div>
            );
         })}
        </ul>
   
      </div>
     
    </div>
  </div>
    );
};

export default Sidebar;