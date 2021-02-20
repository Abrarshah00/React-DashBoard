import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import Listview from "../components/Listview";
import Layout from "../components/Layout";
import Barchart from "../components/Barchart";
import "../styles/home.scss";
import Graphs from "../components/Graphs";

// import axios from "axios";
// import { SERVER } from "../config/constants";

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, showLoading] = useState(false);

  //   const getData = async () => {
  //     console.log("Getting stats");
  //     showLoading(true);
  //     try {
  //       const res = await axios.get(`${SERVER}/stats`);
  //       if (res && res.data) {
  //         setData(res.data);
  //         console.log(res.data);
  //       }
  //     } catch (err) {
  //       console.log("Error", err);
  //     } finally {
  //       showLoading(false);
  //     }
  //   };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <>
      <Layout>
        <Container fluid className=" mt-5">
          <div className="d-flex justify-content-between">
            <h3>Dashboard</h3>
            {/* <Button size="sm">Add Product</Button> */}
          </div>
          <hr />

          {/* <p className="text-muted">Orders Overview</p>
          <Row>
            <Col sm={6} md={4} lg={3} className="mb-2">
              <div className="border-left bg-white border-primary ">
                <Card.Body>
                  <h4 className="text-info">{data ? data.orders.placed : 0}</h4>
                  <span>Orders Placed</span>
                </Card.Body>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-2">
              <div className="border-left bg-white border-primary ">
                <Card.Body>
                  <h4 className="text-info">
                    {data ? data.orders.processing : 0}
                  </h4>
                  <span>Orders Processing</span>
                </Card.Body>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-2">
              <div className="border-left bg-white border-primary ">
                <Card.Body>
                  <h4 className="text-info">
                    {data ? data.orders.completed : 0}
                  </h4>
                  <span>Orders Completed</span>
                </Card.Body>
              </div>
            </Col>
          </Row> */}
          <p className="text-muted mt-3">Transaction Overview</p>
          {/* <Row> */}
          {/* <Col sm={6} md={4} lg={3} className="mb-2"> */}
          {/* <div className="border-left bg-white border-primary "> */}
          <Row>
            <Col md={6}>
              <Barchart />
            </Col>
            <Col md={6}>
              <Graphs />
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <Listview />
            </Col>
          </Row>
          {/* </div> */}
          {/* </Col> */}
          {/* </Row> */}
          {/* <p className="text-muted mt-3">Customers Overview</p>
          <Row>
            <Col sm={6} md={4} lg={3} className="mb-2">
              <div className="border-left bg-white border-primary ">
                <Card.Body>
                  <h4 className="text-info">{data ? data.users : 0}</h4>
                  <span>Active Customers</span>
                </Card.Body>
              </div>
            </Col>
          </Row>  */}
        </Container>
      </Layout>
    </>
  );
}

export default HomePage;
