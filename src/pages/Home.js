import React from "react";
import Chat from "../components/Chat";
// import videoBg from "../assets/video/homeBg1.mp4";

function Home() {
  return (
    <div className="bgHome">
      {/* <video autoPlay muted loop>
        <source src={videoBg} type="video/mp4"></source>
      </video> */}

      <div className="homeContainer d-flex justify-content-evenly align-items-center">
        <div>asdas</div>
        <div>
          <p className="f-flex align-items-start">Sizi Biz Savunalim!!!</p>
          <p>Adalet kâinatın ruhudur</p>
        </div>
      </div>
      <div className="chatContainer">
        <Chat />
      </div>
    </div>
  );
}

export default Home;
