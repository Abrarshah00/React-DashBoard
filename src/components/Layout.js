/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../styles/layout.scss";

function Layout(props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Sidebar />
      <div className="main">{props.children}</div>
    </>
  );
}

export default Layout;
