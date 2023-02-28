import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  faArrowAltCircleRight,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

function Chat() {
  const [massegeBox, setmassegeBox] = useState(false);
  const [chatRounded, setChatRounded] = useState(false);

  const visibilityMB = () => {
    massegeBox ? setmassegeBox(false) : setmassegeBox(true);
  };
  const visibilityCR = () => {
    chatRounded ? setChatRounded(false) : setChatRounded(true);
  };

  return (
    <div>
      <div className="chatRounded">
        <div>
          {chatRounded ? (
            <>
              <div className="d-flex">
                {massegeBox ? (
                  <>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div>
                      <MDBContainer className="py-5" style={{}}>
                        <MDBRow className="d-flex justify-content-center">
                          <MDBCol md="8" lg="6" xl="4" className="">
                            <MDBCard
                              id="chat1"
                              style={{
                                margin: "4px",
                                borderRadius: "15px",
                                backgroundColor: "black",
                                width: "300px",
                                left: "-150px",
                              }}
                            >
                              <MDBCardHeader
                                className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                                style={{
                                  borderTopLeftRadius: "15px",
                                  borderTopRightRadius: "15px",
                                }}
                              >
                                <MDBIcon fas icon="angle-left" />

                                <p className="mb-0 fw-bold">Live chat</p>
                                <MDBIcon fas icon="times" />
                              </MDBCardHeader>

                              <MDBCardBody>
                                <div className="d-flex flex-row justify-content-start mb-4">
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1"
                                    style={{ width: "45px", height: "100%" }}
                                  />
                                  <div
                                    className="p-3 ms-3"
                                    style={{
                                      borderRadius: "15px",
                                      backgroundColor: "rgba(57, 192, 237,.2)",
                                    }}
                                  >
                                    <p className="small mb-0 bg-black">
                                      Hello aasdand thank you for visiting
                                      MDBootstrap. Please click the video below.
                                    </p>
                                  </div>
                                </div>

                                <div className="d-flex flex-row justify-content-end mb-4">
                                  <div
                                    className="p-3 me-3 border"
                                    style={{
                                      borderRadius: "15px",
                                      backgroundColor: "#321414",
                                    }}
                                  >
                                    <p className="small mb-0 ">
                                      Thank you, I really like your product.
                                    </p>
                                  </div>
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    alt="avatar 1"
                                    style={{ width: "45px", height: "100%" }}
                                  />
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1"
                                    style={{ width: "45px", height: "100%" }}
                                  />
                                  <div
                                    className="ms-3"
                                    style={{ borderRadius: "15px" }}
                                  >
                                    <div className="bg-image">
                                      <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                                        style={{ borderRadius: "15px" }}
                                        alt="video"
                                      />
                                      <a href="#!">
                                        <div className="mask"></div>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1"
                                    style={{ width: "45px", height: "100%" }}
                                  />
                                  <div
                                    className="p-3 ms-3"
                                    style={{
                                      borderRadius: "15px",
                                      backgroundColor: "rgba(57, 192, 237,.2)",
                                    }}
                                  >
                                    <p className="small mb-0">...</p>
                                  </div>
                                </div>
                                <form
                                  action=""
                                  className="d-flex bg-white rounded-pill border justify-content-around align-item-center"
                                  style={{
                                    color: "white",
                                    width: "100%",
                                    height: "60px",
                                  }}
                                >
                                  <input
                                    name=""
                                    id="textAreaExample"
                                    cols="30"
                                    placeholder="Message..."
                                    style={{ color: "black" }}
                                  />
                                  <FontAwesomeIcon
                                    className="m-4"
                                    style={{
                                      color: "blue  ",
                                      background: "white",
                                      cursor: "pointer",
                                    }}
                                    icon={faPaperPlane}
                                  />
                                </form>
                                {/* <MDBTextArea
                          className="form-outline"
                          label="Type your message"
                          id="textAreaExample"
                          rows={4}
                        /> */}
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                    </div>
                  </>
                )}

                <MDBContainer className="py-5" style={{}}>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="8" lg="6" xl="4" className="">
                      <MDBCard
                        id="chat1"
                        style={{
                          margin: "4px",
                          borderRadius: "15px",
                          backgroundColor: "black",
                          width: "300px",
                          left: "-150px",
                        }}
                      >
                        <MDBCardHeader
                          className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                          style={{
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                          }}
                        >
                          <MDBIcon fas icon="angle-left" />
                          {/* <FontAwesomeIcon
                                    onClick={visibilityMB}
                                    icon={faArrowAltCircleLeft}
                                    className="chatIcon p-2"
                                    style={{ cursor: "pointer" }}
                                  /> */}
                          <p className="mb-0 fw-bold">Avukatlar</p>
                          <MDBIcon fas icon="times" />
                        </MDBCardHeader>

                        <MDBCardBody>
                          <div className="d-flex flex-row justify-content-start mb-4">
                            <h1
                              style={{
                                fontSize: "50px",
                                margin: "0px",
                                padding: "0px",
                                background: "red",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                              }}
                            ></h1>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />

                            <div
                              className="p-3 ms-3"
                              style={{
                                borderRadius: "15px",
                                backgroundColor: "rgba(57, 192, 237,.2)",
                              }}
                            >
                              <p className="small mb-0 bg-black">
                                Burak KALAyCI
                              </p>
                            </div>
                          </div>
                          <hr style={{ color: "white" }} />
                          <div className="d-flex flex-row justify-content-start mb-4">
                            <h1
                              style={{
                                color: "red",
                                fontSize: "50px",
                                margin: "0px",
                                padding: "0px",
                                background: "green",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                              }}
                            ></h1>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div
                              className="p-3 ms-3"
                              style={{
                                borderRadius: "15px",
                                backgroundColor: "rgba(57, 192, 237,.2)",
                              }}
                            >
                              <p className="small mb-0 bg-black">
                                Burak KALAyCI
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex flex-row justify-content-start mb-4">
                            <h1
                              style={{
                                color: "red",
                                fontSize: "50px",
                                margin: "0px",
                                padding: "0px",
                                background: "green",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                              }}
                            ></h1>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div
                              className="p-3 ms-3"
                              style={{
                                borderRadius: "15px",
                                backgroundColor: "rgba(57, 192, 237,.2)",
                              }}
                            >
                              <p className="small mb-0 bg-black">
                                Burak KALAyCI
                              </p>
                            </div>
                          </div>

                          <hr style={{ color: "white" }} />

                          <div className="d-flex flex-row justify-content-start mb-4">
                            <h1
                              style={{
                                color: "green",
                                fontSize: "50px",
                                margin: "0px",
                                padding: "0px",
                                background: "green",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                              }}
                            ></h1>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                              alt="avatar 1"
                              style={{ width: "45px", height: "100%" }}
                            />
                            <div
                              className="p-3 ms-3"
                              style={{
                                borderRadius: "15px",
                                backgroundColor: "rgba(57, 192, 237,.2)",
                              }}
                            >
                              <p className="small mb-0 bg-black">
                                Burak KALAyCI
                              </p>
                            </div>
                          </div>

                          {/* <form
                            action=""
                            className="d-flex bg-white rounded-pill border justify-content-around align-item-center"
                            style={{
                              color: "white",
                              width: "100%",
                              height: "60px",
                            }}
                          >
                            <input
                              name=""
                              id="textAreaExample"
                              cols="30"
                              placeholder="Message..."
                              style={{ color: "black" }}
                            />
                            <FontAwesomeIcon
                              className="m-4"
                              style={{
                                color: "blue  ",
                                background: "white",
                                cursor: "pointer",
                              }}
                              icon={faPaperPlane}
                            />
                          </form> */}
                          {/* <MDBTextArea
                          className="form-outline"
                          label="Type your message"
                          id="textAreaExample"
                          rows={4}
                        /> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <Button
          variant="success"
          onClick={visibilityCR}
          className="rounded-circle"
        >
          <FontAwesomeIcon icon={faComment} className="chatIcon p-2" />
        </Button>
      </div>
    </div>
  );
}

export default Chat;

// <div>
//   <div className="scale-06">
//     <MDBContainer
//       fluid
//       className="py-5"
//       style={{ backgroundColor: "black" }}
//     >
//       <MDBRow>
//         <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0 ">
//           <div className="d-flex justify-content-between ">
//             <div>
//               <h5 className="font-weight-bold mb-3 text-center text-lg-start m-2">
//                 Avukatlar
//               </h5>
//             </div>

//             <div>
//               <FontAwesomeIcon
//                 style={{ height: "25", cursor: "pointer" }}
//                 icon={faArrowAltCircleRight}
//                 className="m-2"
//                 onClick={visibility}
//               />
//             </div>
//           </div>

//           <MDBCard className="bg-black">
//             <MDBCardBody>
//               <MDBTypography listUnStyled className="mb-0">
//                 <li
//                   className="p-2 border-bottom"
//                   style={{ backgroundColor: "black" }}
//                 >
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">John Doe</p>
//                         <p className="small text-muted">
//                           Hello, Are you there?
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">Just now</p>
//                       <span className="badge bg-danger float-end">1</span>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="p-2 border-bottom">
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">Danny Smith</p>
//                         <p className="small text-muted">
//                           Lorem ipsum dolor sit.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">5 mins ago</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="p-2 border-bottom">
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">Alex Steward</p>
//                         <p className="small text-muted">
//                           Lorem ipsum dolor sit.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">Yesterday</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="p-2 border-bottom">
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">Ashley Olsen</p>
//                         <p className="small text-muted">
//                           Lorem ipsum dolor sit.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">Yesterday</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="p-2 border-bottom">
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">Kate Moss</p>
//                         <p className="small text-muted">
//                           Lorem ipsum dolor sit.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">Yesterday</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="p-2 border-bottom">
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">Lara Croft</p>
//                         <p className="small text-muted">
//                           Lorem ipsum dolor sit.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">Yesterday</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li className="p-2">
//                   <a href="#!" className="d-flex justify-content-between">
//                     <div className="d-flex flex-row">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
//                         alt="avatar"
//                         className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
//                         width="60"
//                       />
//                       <div className="pt-1">
//                         <p className="fw-bold mb-0">Brad Pitt</p>
//                         <p className="small text-muted">
//                           Lorem ipsum dolor sit.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <p className="small text-muted mb-1">5 mins ago</p>
//                       <span className="text-muted float-end">
//                         <MDBIcon fas icon="check" />
//                       </span>
//                     </div>
//                   </a>
//                 </li>
//               </MDBTypography>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//         {massegeBox ? (
//           <MDBCol md="6" lg="7" xl="8">
//             <MDBTypography listUnStyled>
//               <li className="d-flex justify-content-between mb-4">
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
//                   alt="avatar"
//                   className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
//                   width="60"
//                 />
//                 <MDBCard className="bg-black">
//                   <MDBCardHeader className="d-flex justify-content-between p-3 bg-black">
//                     <p className="fw-bold mb-0">Brad Pitt</p>
//                     <p className="text-muted small mb-0">
//                       <MDBIcon far icon="clock" /> 12 mins ago
//                     </p>
//                   </MDBCardHeader>
//                   <MDBCardBody>
//                     <p className="mb-0">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing
//                       elit, sed do eiusmod tempor incididunt ut labore et
//                       dolore magna aliqua.
//                     </p>
//                   </MDBCardBody>
//                 </MDBCard>
//               </li>
//               <li class="d-flex justify-content-between mb-4 bg-black">
//                 <MDBCard className="w-100 bg-black">
//                   <MDBCardHeader className="d-flex justify-content-between p-3">
//                     <p class="fw-bold mb-0">Lara Croft</p>
//                     <p class="text-muted small mb-0">
//                       <MDBIcon far icon="clock" /> 13 mins ago
//                     </p>
//                   </MDBCardHeader>
//                   <MDBCardBody className="bg-black">
//                     <p className="mb-0">
//                       Sed ut perspiciatis unde omnis iste natus error sit
//                       voluptatem accusantium doloremque laudantium.
//                     </p>
//                   </MDBCardBody>
//                 </MDBCard>
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
//                   alt="avatar"
//                   className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
//                   width="60"
//                 />
//               </li>
//               <li className="d-flex justify-content-between mb-4 bg-black">
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
//                   alt="avatar"
//                   className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
//                   width="60"
//                 />
//                 <MDBCard>
//                   <MDBCardHeader className="d-flex justify-content-between bg-black p-3">
//                     <p className="fw-bold mb-0">Brad Pitt</p>
//                     <p className="text-muted small mb-0">
//                       <MDBIcon far icon="clock" /> 10 mins ago
//                     </p>
//                   </MDBCardHeader>
//                   <MDBCardBody className="bg-black">
//                     <p className="mb-0">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing
//                       elit, sed do eiusmod tempor incididunt ut labore et
//                       dolore magna aliqua.
//                     </p>
//                   </MDBCardBody>
//                 </MDBCard>
//               </li>
//               <li className="bg-black mb-3 ">
//                 <MDBTextArea
//                   label="Message"
//                   className="bg-black"
//                   placeholder="Bize Danisabilirsiniz"
//                   id="textAreaExample"
//                   rows={4}
//                 />
//               </li>
//               <MDBBtn
//                 color="info"
//                 rounded
//                 className="float-end bg-black"
//                 style={{ color: "white" }}
//               >
//                 Send
//               </MDBBtn>
//             </MDBTypography>
//           </MDBCol>
//         ) : (
//           <></>
//         )}
//       </MDBRow>
//     </MDBContainer>
//   </div>
//   <Button variant="success" className="rounded-circle">
//     <FontAwesomeIcon icon={faComment} className="chatIcon p-2" />
//   </Button>
// </div>
