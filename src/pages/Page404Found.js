import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Page404Found() {
  return (
    <div className="bg">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              {" "}
              <span className="text-danger">Opps!</span> Sayfa Bulunamadı
            </p>
            <p className="lead">Aradığınız sayfa mevcut değil.</p>
            <Button>
              <Link to="/">Geri Dön</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404Found;
