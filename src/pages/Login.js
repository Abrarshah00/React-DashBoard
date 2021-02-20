import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles/login.scss";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      // event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);

    const payload = {
      email,
      password,
    };
    console.log(payload);

    history.push("/home");
    form.reset();
  };
  return (
    <div class="login-box">
      <div className="login-container d-flex align-items-center">
        <Card>
          <Card.Header className="text-dark border-bottom border-primary bg-white">
            <h1>Welcome</h1>
          </Card.Header>
          <Card.Body>
            {error ? <p className="text-danger">{error}</p> : ""}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  required
                  name="email"
                  size="sm"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="custom-rounded"
                />
                <Form.Control.Feedback type="invalid">
                  Email is invalid
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <InputGroup className="mb-3">
                  <Form.Control
                    required
                    name="password"
                    size="sm"
                    type={passwordShown ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="custom-rounded"
                    id="password"
                  />
                  <InputGroup.Append>
                    <InputGroup.Checkbox
                      aria-label="Checkbox for following text input"
                      onClick={togglePasswordVisiblity}
                    />
                  </InputGroup.Append>
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  Password is required
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                type="submit"
                size="sm"
                block
                className="custom-rounded btn-secondary"
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
