import React from "react";
import { useFormik } from "formik";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import shield from "../assets/shield.png";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "buraklyci@hotmailcim",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  {
    /* <MDBInput
    id="firstName"
    name="firstName"
    v-model="name"
    wrapperClass="mb-4"
    placeholder="isim"
  /> */
  }
  return (
    <div>
      <div
        className="mx-auto gradient-custom mt-5"
        style={{ maxWidth: "800px", height: "400px" }}
      >
        <MDBRow className="pt-3 mx-3 bg-dark ">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "50px", marginLeft: "10px" }}
            >
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">
                Hoş Geldiniz
              </MDBTypography>
              <p className="white-text">
                You are 30 seconds away from compleating your order!
              </p>
              <img style={{ width: "100%" }} src={shield} alt="" />
            </div>
            <div className="text-center"></div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4 bg-dark">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3 bg-dark">
                  <MDBTypography tag="h4" style={{ color: "white" }}>
                    iletişime Geç
                  </MDBTypography>
                </div>
                <form className="mb-0" onSubmit={formik.handleSubmit}>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        id="name"
                        name="name"
                        label="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        label="Konu"
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4 me-1">
                    <MDBCol>
                      <MDBTextArea
                        placeholder="Mesajiniz"
                        type="text"
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                      />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn
                      type="submit"
                      rounded
                      style={{ backgroundColor: "#0062CC" }}
                    >
                      Gönder
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
export default Contact;
