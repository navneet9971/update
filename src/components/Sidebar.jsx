import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"START NEW APPLICATION",
            
        },
        {
            path:"/review",
            name:"REVIEW APPLICATION",
        },
        {
            path:"/myaccount",
            name:"MY ACCOUNT",
        },
        {
            path:"/check",
            name:"CHECK GST OF COMPLIANCE",
        },
        
        {
            path:"/add",
            name:"ADD USERS",
        },
        {
            path:"/download",
            name:"DOWNLOAD FORM",
        },
        {
            path:"/view",
            name:"VIEW REPORTS",
        
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Hello,</h1>
                   <div style={{marginLeft: isOpen ? "-95px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>

               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;