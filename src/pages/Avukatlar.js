import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import defaultLightkProfil from "../assets/screenshot.png";
import { NavLink } from "react-bootstrap";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBBtn,
  MDBCardTitle,
} from "mdb-react-ui-kit";

function Avukatlar() {
  return (
    <div className="container d-flex flex-wrap flex-flow">
      <div className="bg-dark m-1 p-0" style={{ width: "45%" }}>
        <MDBContainer className="">
          <MDBRow className="">
            <MDBCol
              md="9"
              lg="7"
              xl="5"
              className="m-2 bg-dark"
              style={{ width: "100vh" }}
            >
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "180px", borderRadius: "10px" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>Danny McLoan</MDBCardTitle>
                      <MDBCardText>Senior Journalist</MDBCardText>

                      <div
                        className="d-flex justify-content-start rounded-3 d-flex p-2 mb-2"
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
      </div>
      <div className="bg-dark m-1 p-0" style={{ width: "45%" }}>
        <MDBContainer>
          <MDBRow className="">
            <MDBCol
              md="9"
              lg="7"
              xl="5"
              className="m-2 bg-dark"
              style={{ width: "100vh" }}
            >
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "180px", borderRadius: "10px" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>Danny McLoan</MDBCardTitle>
                      <MDBCardText>Senior Journalist</MDBCardText>

                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
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
      </div>
    </div>
  );
}

export default Avukatlar;

// <div className="bg-dark m-1 p-0" style={{ width: "45%" }}>
//   <MDBContainer className="">
//     <MDBRow className="justify-content-center">
//       <MDBCol
//         md="9"
//         lg="7"
//         xl="5"
//         className="m-2 bg-dark"
//         style={{ width: "100vh" }}
//       >
//         <MDBCard style={{ borderRadius: "15px" }} className="bg-dark">
//           <MDBCardBody className="p-4 text-black">
//             <div>
//               <MDBTypography tag="h6">
//                 Exquisite hand henna tattoo
//               </MDBTypography>
//               <div className="d-flex align-items-center justify-content-between mb-3">
//                 <p className="small mb-0">
//                   <MDBIcon far icon="clock me-2" />3 hrs
//                 </p>
//                 <p className="fw-bold mb-0">$90</p>
//               </div>
//             </div>
//             <div className="d-flex align-items-center mb-4">
//               <div className="flex-shrink-0">
//                 <MDBCardImage
//                   style={{ width: "70px" }}
//                   className="img-fluid rounded-circle border border-dark border-3"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
//                   alt="Generic placeholder image"
//                   fluid
//                 />
//               </div>
//               <div className="flex-grow-1 ms-3">
//                 <div className="d-flex flex-row align-items-center mb-2">
//                   <p className="mb-0 me-2">@sheisme</p>
//                   <ul
//                     className="mb-0 list-unstyled d-flex flex-row"
//                     style={{ color: "#1B7B2C" }}
//                   >
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <MDBBtn outline color="dark" rounded size="sm">
//                     + Follow
//                   </MDBBtn>
//                   <MDBBtn
//                     outline
//                     color="dark"
//                     rounded
//                     size="sm"
//                     className="mx-1"
//                   >
//                     See profile
//                   </MDBBtn>
//                   <MDBBtn outline color="dark" floating size="sm">
//                     <MDBIcon fas icon="comment" />
//                   </MDBBtn>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <MDBCardText>52 comments</MDBCardText>
//             <MDBBtn color="success" rounded block size="lg">
//               <MDBIcon far icon="clock me-2" /> Book now
//             </MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   </MDBContainer>
// </div>
// <div className="bg-dark m-1 p-0" style={{ width: "45%" }}>
//   <MDBContainer>
//     <MDBRow className="justify-content-center">
//       <MDBCol md="9" lg="7" xl="5" className="mt-5">
//         <MDBCard style={{ borderRadius: "15px" }}>
//           <MDBCardBody className="p-4">
//             <div className="d-flex text-black">
//               <div className="flex-shrink-0">
//                 <MDBCardImage
//                   style={{ width: "180px", borderRadius: "10px" }}
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
//                   alt="Generic placeholder image"
//                   fluid
//                 />
//               </div>
//               <div className="flex-grow-1 ms-3">
//                 <MDBCardTitle>Danny McLoan</MDBCardTitle>
//                 <MDBCardText>Senior Journalist</MDBCardText>

//                 <div
//                   className="d-flex justify-content-start rounded-3 p-2 mb-2"
//                   style={{ backgroundColor: "#efefef" }}
//                 >
//                   <div>
//                     <p className="small text-muted mb-1">Articles</p>
//                     <p className="mb-0">41</p>
//                   </div>
//                   <div className="px-3">
//                     <p className="small text-muted mb-1">Followers</p>
//                     <p className="mb-0">976</p>
//                   </div>
//                   <div>
//                     <p className="small text-muted mb-1">Rating</p>
//                     <p className="mb-0">8.5</p>
//                   </div>
//                 </div>
//                 <div className="d-flex pt-1">
//                   <MDBBtn outline className="me-1 flex-grow-1">
//                     Chat
//                   </MDBBtn>
//                   <MDBBtn className="flex-grow-1">Follow</MDBBtn>
//                 </div>
//               </div>
//             </div>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   </MDBContainer>
// </div>
// <div className="bg-dark m-1 p-0" style={{ width: "45%" }}>
//   <MDBContainer>
//     <MDBRow className="justify-content-center">
//       <MDBCol
//         md="9"
//         lg="7"
//         xl="5"
//         className="m-2"
//         style={{ width: "100vh" }}
//       >
//         <MDBCard
//           style={{ borderRadius: "15px", backgroundColor: "#93e2bb" }}
//         >
//           <MDBCardBody className="p-4 text-black">
//             <div>
//               <MDBTypography tag="h6">
//                 Exquisite hand henna tattoo
//               </MDBTypography>
//               <div className="d-flex align-items-center justify-content-between mb-3">
//                 <p className="small mb-0">
//                   <MDBIcon far icon="clock me-2" />3 hrs
//                 </p>
//                 <p className="fw-bold mb-0">$90</p>
//               </div>
//             </div>
//             <div className="d-flex align-items-center mb-4">
//               <div className="flex-shrink-0">
//                 <MDBCardImage
//                   style={{ width: "70px" }}
//                   className="img-fluid rounded-circle border border-dark border-3"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
//                   alt="Generic placeholder image"
//                   fluid
//                 />
//               </div>
//               <div className="flex-grow-1 ms-3">
//                 <div className="d-flex flex-row align-items-center mb-2">
//                   <p className="mb-0 me-2">@sheisme</p>
//                   <ul
//                     className="mb-0 list-unstyled d-flex flex-row"
//                     style={{ color: "#1B7B2C" }}
//                   >
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <MDBBtn outline color="dark" rounded size="sm">
//                     + Follow
//                   </MDBBtn>
//                   <MDBBtn
//                     outline
//                     color="dark"
//                     rounded
//                     size="sm"
//                     className="mx-1"
//                   >
//                     See profile
//                   </MDBBtn>
//                   <MDBBtn outline color="dark" floating size="sm">
//                     <MDBIcon fas icon="comment" />
//                   </MDBBtn>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <MDBCardText>52 comments</MDBCardText>
//             <MDBBtn color="success" rounded block size="lg">
//               <MDBIcon far icon="clock me-2" /> Book now
//             </MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   </MDBContainer>
// </div>
// <div className="bg-dark m-1 p-0" style={{ width: "45%" }}>
//   <MDBContainer>
//     <MDBRow className="justify-content-center">
//       <MDBCol
//         md="9"
//         lg="7"
//         xl="5"
//         className="m-2"
//         style={{ width: "100vh" }}
//       >
//         <MDBCard
//           style={{ borderRadius: "15px", backgroundColor: "#93e2bb" }}
//         >
//           <MDBCardBody className="p-4 text-black">
//             <div>
//               <MDBTypography tag="h6">
//                 Exquisite hand henna tattoo
//               </MDBTypography>
//               <div className="d-flex align-items-center justify-content-between mb-3">
//                 <p className="small mb-0">
//                   <MDBIcon far icon="clock me-2" />3 hrs
//                 </p>
//                 <p className="fw-bold mb-0">$90</p>
//               </div>
//             </div>
//             <div className="d-flex align-items-center mb-4">
//               <div className="flex-shrink-0">
//                 <MDBCardImage
//                   style={{ width: "70px" }}
//                   className="img-fluid rounded-circle border border-dark border-3"
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
//                   alt="Generic placeholder image"
//                   fluid
//                 />
//               </div>
//               <div className="flex-grow-1 ms-3">
//                 <div className="d-flex flex-row align-items-center mb-2">
//                   <p className="mb-0 me-2">@sheisme</p>
//                   <ul
//                     className="mb-0 list-unstyled d-flex flex-row"
//                     style={{ color: "#1B7B2C" }}
//                   >
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                     <li>
//                       <MDBIcon fas icon="star fa-xs" />
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <MDBBtn outline color="dark" rounded size="sm">
//                     + Follow
//                   </MDBBtn>
//                   <MDBBtn
//                     outline
//                     color="dark"
//                     rounded
//                     size="sm"
//                     className="mx-1"
//                   >
//                     See profile
//                   </MDBBtn>
//                   <MDBBtn outline color="dark" floating size="sm">
//                     <MDBIcon fas icon="comment" />
//                   </MDBBtn>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <MDBCardText>52 comments</MDBCardText>
//             <MDBBtn color="success" rounded block size="lg">
//               <MDBIcon far icon="clock me-2" /> Book now
//             </MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   </MDBContainer>
// </div>
