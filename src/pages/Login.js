import React, { useState } from "react";
import { useFormik } from "formik";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../state/store";
import { appLogin, appSingup } from "../state/slices/auth.slice";
import Logo from "../assets/logo.png";

function Login() {
  const [mod, setMod] = useState(true);
  const dispatch = useAppDispatch();

  const { login, signup } = useSelector((state) => state.auth);

  const formikLogin = useFormik({
    initialValues: {
      email: "deneme@deneme.com",
      password: "123456",
    },
    onSubmit: async (values) => {
      dispatch(appLogin(values));
    },
  });

  const formikSingup = useFormik({
    initialValues: {
      email: "deneme@deneme.com",
      password: "123456",
    },
    onSubmit: async (values) => {
      dispatch(appSingup(values));
      // TODO: signup actions
    },
  });

  React.useEffect(() => {
    const { loading, error } = login;
    if (loading === false && error !== null) {
      alert(error);
    }
  }, [login]);

  return (
    <div className="bg-black">
      {mod === true ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container>
              <Row className="vh-100 d-flex justify-content-center align-items-center bg-black">
                <Col md={8} lg={6} xs={12}>
                  <div className=""></div>
                  <Card className="shadow bg-black">
                    <Card.Body>
                      <div className="mb-3 mt-md-4">
                        <img src={Logo} alt="" />
                        <h2 className="fw-bold mb-2 text-uppercase ">
                          Avukat Buro
                        </h2>
                        <p className="mb-5">
                          Lütfen kullanıcı adı ve şifrenizi girin!!
                        </p>
                        <div className="mb-3">
                          <Form onSubmit={formikLogin.handleSubmit}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label className="text-center">
                                Email address
                              </Form.Label>
                              <Form.Control
                                name="email"
                                type="email"
                                onChange={formikLogin.handleChange}
                                value={formikLogin.values.email}
                                placeholder="Enter email"
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                name="password"
                                onChange={formikLogin.handleChange}
                                value={formikLogin.values.password}
                                placeholder="Enter email"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicCheckbox"
                            >
                              <p className="small">
                                <a className="text-primary" href="#!">
                                  Forgot password?
                                </a>
                              </p>
                            </Form.Group>
                            <div className="d-grid">
                              <Button
                                disabled={login.loading}
                                variant="primary"
                                type="submit"
                              >
                                {login.loading ? "Loading..." : "Login"}
                              </Button>
                            </div>
                          </Form>
                          <div className="mt-3">
                            <p className="mb-0  text-center">
                              Don't have an account?{" "}
                              <a
                                onClick={() => {
                                  setMod(false);
                                }}
                                className="text-primary fw-bold"
                              >
                                Sign Up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container>
              <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                  <div className="border border-3 border-primary"></div>
                  <Card className="shadow">
                    <Card.Body>
                      <div className="mb-3 mt-md-4">
                        <img src={Logo} alt="" />
                        <h2 className="fw-bold mb-2 text-uppercase ">
                          Avukat Buro
                        </h2>
                        <p className=" mb-5">
                          Lütfen kullanıcı adı ve şifrenizi girin!!
                        </p>
                        <div className="mb-3">
                          <Form onSubmit={formikSingup.handleSubmit}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label className="text-center">
                                Email address
                              </Form.Label>
                              <Form.Control
                                name="email"
                                type="email"
                                onChange={formikSingup.handleChange}
                                value={formikSingup.values.email}
                                placeholder="Enter email"
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                name="password"
                                onChange={formikSingup.handleChange}
                                value={formikSingup.values.password}
                                placeholder="Enter email"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicCheckbox"
                            >
                              <p className="small">
                                <a className="text-primary" href="#!">
                                  Forgot password?
                                </a>
                              </p>
                            </Form.Group>
                            <div className="d-grid">
                              <Button variant="primary" type="submit">
                                Signup
                              </Button>
                            </div>
                          </Form>
                          <div className="mt-3">
                            <p className="mb-0  text-center">
                              Don't have an account?{" "}
                              <a
                                onClick={() => {
                                  setMod(true);
                                }}
                                className="text-primary fw-bold"
                              >
                                Sign Up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Login;
