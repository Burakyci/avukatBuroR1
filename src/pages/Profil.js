import React, { useState } from "react";

import { useFormik } from "formik";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../state/store";
import { appUpdateProfil } from "../state/slices/auth.slice";
import { useEffect } from "react";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { getProfile } from "../state/slices/auth.slice";

function Profil() {
  const [edit, setEdit] = useState(false);
  const { user, profil } = useSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProfile())
  }, []);

  const handlerEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(edit);
  const formik = useFormik({
    initialValues: {
      title: "icra avukati",
      addres: "istanbul",
      fullName: "Burak Kalayci",
      email: "deneme@deneme.com",
      phone: "03122323",
      mobile: "05065799614",
      education: "uskudar Uni",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      // dispatch(appUpdateProfil(values));
    },
  });

  useEffect(() => {
    console.log("Maunt Edildi");
  }, [formik.values.name]);

  return (
    <div className="bg-dark">
      {
        profil.get?.error ? (
          <div>
            <h3>{profil.get?.error}</h3>
          </div>
        ) : (<div>
          {
            profil.get?.data?.firstName
          }
        </div>)
      }
      <form onSubmit={formik.handleSubmit}>
        <section className="bg-dark">
          <MDBContainer className="py-5 bg-dark">
            <MDBRow className="bg-dark">
              <MDBCol className="bg-dark" lg="4">
                <MDBCard className="mb-4 bg-dark">
                  <MDBCardBody className="text-center bg-dark">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    {edit ? (
                      <>
                        <p className="text-muted mb-1 bg-dark ">
                          Full Stack Developer
                        </p>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-muted mb-1 bg-dark ">
                            Full Stack Developer
                          </p>
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            id="title"
                            name="title"
                            className="text-muted mb-1 bg-dark "
                          />
                        </div>
                      </>
                    )}
                    {edit ? (
                      <>
                        <p className="text-muted  bg-dark ">
                          Bay Area, San Francisco, CA
                        </p>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-muted  bg-dark ">
                            Bay Area, San Francisco, CA
                          </p>
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.addres}
                            className="text-muted  bg-dark "
                            id="addres"
                            name="addres"
                          />
                        </div>
                      </>
                    )}

                    <div className="d-flex justify-content-center bg-dark mb-2">
                      <MDBBtn type="button">Follow</MDBBtn>
                      <MDBBtn outline type="button" className="ms-1 bg-dark">
                        Message
                      </MDBBtn>
                      {edit ? (
                        <>
                          <MDBBtn onClick={handlerEdit} className="ms-1">
                            duzenle
                          </MDBBtn>
                        </>
                      ) : (
                        <>
                          <MDBBtn
                            type="button"
                            onClick={handlerEdit}
                            className="ms-1"
                          >
                            kaydet
                          </MDBBtn>
                        </>
                      )}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8" className="bg-dark">
                <MDBCard className="mb-4 bg-dark">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <>
                            <MDBCardText className="text-muted bg-dark">
                              Full name
                            </MDBCardText>
                          </>
                        ) : (
                          <>
                            <div>
                              <MDBCardText className="text-muted bg-dark">
                                {
                                  `${profil.get?.data?.firstName} ${profil.get?.data?.lastName}`
                                }
                              </MDBCardText>
                              <input
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                                className="text-muted  bg-dark "
                                id="fullName"
                                name="fullName"
                              />
                            </div>
                          </>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <>
                            <MDBCardText className="text-muted">
                              example@example.com
                            </MDBCardText>
                          </>
                        ) : (
                          <>
                            <div>
                              <MDBCardText className="text-muted">
                                example@example.com
                              </MDBCardText>
                              <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="text-muted  bg-dark "
                                id="email"
                                name="email"
                              />
                            </div>
                          </>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <>
                            <p className="text-muted bg-dark ">
                              Full Stack Developer
                            </p>
                          </>
                        ) : (
                          <>
                            <MDBCardText className="text-muted">
                              (097) 234-5678
                            </MDBCardText>
                            <div>
                              <input
                                onChange={formik.handleChange}
                                value={formik.values.mobile}
                                className="text-muted  bg-dark "
                                id="mobile"
                                name="mobile"
                              />
                            </div>
                          </>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <>
                            {" "}
                            <MDBCardText className="text-muted">
                              (098) 765-4321
                            </MDBCardText>
                          </>
                        ) : (
                          <>
                            <MDBCardText className="text-muted">
                              (098) 765-4321
                            </MDBCardText>
                            <div>
                              <input
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                className="text-muted  bg-dark "
                                id="phone"
                                name="phone"
                              />
                            </div>
                          </>
                        )}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>education</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {edit ? (
                          <>
                            <MDBCardText className="text-muted">
                              Istanbul ticaret Universite Hukuk Fakultesi
                            </MDBCardText>
                          </>
                        ) : (
                          <>
                            <MDBCardText className="text-muted">
                              Istanbul ticaret Universite Hukuk Fakultesi
                            </MDBCardText>
                            <div>
                              <input
                                onChange={formik.handleChange}
                                value={formik.values.education}
                                className="text-muted  bg-dark "
                                id="education"
                                name="education"
                              />
                            </div>
                          </>
                        )}
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                {/* <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0 bg-dark">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0 bg-dark">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </form>
    </div>
  );
}

export default Profil;

{
  /* <form onSubmit={formik.handleSubmit}>
  <input
    style={{ color: "black" }}
    placeholder="name"
    id="name"
    name="name"
    type="text"
    onChange={formik.handleChange}
    value={formik.values.name}
  />
  <input
    id="photoUrl"
    placeholder="url giriniz"
    style={{ color: "black" }}
    name="photoUrl"
    type="text"
    onChange={formik.handleChange}
    value={formik.values.photo}
  />
  <button type="onSubmit" style={{ color: "black" }}>
    Guncelle
  </button>
</form>
<div className="bg-dark m-1 p-0 d-flex justify-content-center">
  <MDBContainer>
    <MDBRow className="">
      <MDBCol
        md="9"
        lg="7"
        xl="5"
        className="m-2 bg-dark"
        style={{ width: "100vh" }}
      >
        <MDBCard className="bg-dark" style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <MDBCardImage
                  style={{ width: "180px", borderRadius: "10px" }}
                  // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  src={user.photoURL}
                  alt="Generic placeholder image"
                  fluid
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <MDBCardTitle>{user.displayName}</MDBCardTitle>
                <MDBCardText>{user.metadata.lastSignInTime}</MDBCardText>

                <div
                  className="d-flex justify-content-start bg-dark rounded-3 p-2 mb-2"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div>
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
                <div className="d-flex pt-1">
                  <MDBBtn outline className="me-1 flex-grow-1">
                    Chat
                  </MDBBtn>
                  <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div> */
}
