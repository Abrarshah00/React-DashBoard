import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import {
  FaHome,
  FaUsers,
  FaUserAlt,
  FaRegChartBar,
  FaRegSun,
} from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "../styles/sidebar.scss";
// import Logo from "../assets/images/logo_en.png";

function Sidebar(props) {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const logout = () => {
    localStorage.setItem("user", null);
    history.push("/");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="bg-white custom-sidebar">
      <div className="d-flex justify-content-between align-items-center p-4">
        {/* <img
          src={Logo}
          alt="Orzel Logo"
          className="img-fluid pr-3"
          width="100"
        /> */}
      </div>
      <div className="d-flex flex-column h-80">
        <Nav navbar={true} className="flex-column px-2">
          <Nav.Item>
            <Nav.Link as={Link} to="/home" className="text-dark">
              <FaHome className="mr-2" /> Homepage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/settings" className="text-dark">
              <FaUserAlt className="mr-2" /> Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className="text-dark">
              <FaRegChartBar className="mr-2" /> Metrics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/settings" className="text-dark">
              <FaRegSun className="mr-2" /> Settings
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="custom-list-group mt-auto d-flex align-items-center ml-4">
          {/* <img
          src={Logo}
          className="img-fluid rounded-circle px-2"
          width="75"
        /> */}
          <div>
            <h6 className="font-weight-bolder mb-0">{user ? user.name : ""}</h6>
            <span className="font-weight-light font-size-small text-gray">
              {user ? user.email : ""}
            </span>
            <br />
            <Link onClick={logout} className="font-size-small text-danger">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
