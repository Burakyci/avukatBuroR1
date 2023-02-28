import React, { useEffect } from "react";
import { usePosition } from "use-position";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../state/store";
import { getWeatherData } from "../state/slices/app.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../components/Loading";
import {
  faCloud,
  faMapLocation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function Weather() {
  const { weather } = useSelector((state) => state.app);
  const { data, loading } = weather;
  const dispatch = useAppDispatch();
  const { longitude, latitude } = usePosition();
  const values = {
    lat: latitude,
    lon: longitude,
  };

  useEffect(() => {
    getByData();
  }, [latitude, longitude]);

  console.log(data);
  const getByData = () => {
    if (longitude && latitude) {
      dispatch(getWeatherData(values));
    }
  };

  return (
    <div className="">
      {loading === false ? (
        <>
          {data && (
            <>
              <>
                <p className="m-2">
                  <FontAwesomeIcon className="me-2" icon={faMapLocation} />
                  {data.name}
                </p>
              </>
              <p className="m-3 mb-0">
                Sıcaklık:
                {data.main.temp}
                <span className="derece">°</span>
              </p>

              {/* {(() => {
                if (data.weather[0].description == "clear sky") {
                  return <FontAwesomeIcon icon={faSun} />;
                } else if (data.weather[0].description == "scattered clouds") {
                  return 
                } else {
                  return <div>catch all</div>;
                }
              })()} */}
              {(() => {
                switch (data.weather[0].description) {
                  case "clear sky":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "few clouds":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/02d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "scattered clouds":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/03d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "broken clouds":
                  case "overcast clouds":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/04d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "shower rain":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/09d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "rain":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/10d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "snow":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/13d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "thunderstorm":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/11d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "mist":

                  case "smoke":
                  case "haze":
                  case "sand/dust whirls":
                  case "fog":
                  case "sand":
                  case "dust":
                  case "volcanic ash":
                  case "squalls":
                  case "tornado":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/50d@2x.png"
                        alt="acik hava"
                      />
                    );
                  default:
                    break;
                }
              })()}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Weather;

// const getByWeather = async () => {
//   setWeather((prev) => ({
//     ...prev,
//     loading: true,
//   }));
//   const res = await getByData.getByDtata(latitude, longitude);
//   setWeather((prev) => ({
//     ...prev,
//     data: res,
//     loading: false,
//   }));
// useEffect(() => {
//   latitude && longitude && getByWeather(); // if al
// }, [latitude, longitude]);
// };
{
  /* <h4>
                Kordinat:
                {data.coord.lat}-{data.coord.lon}
                <span className="derece">°</span>
              </h4>

              <h4>
                Basınç: {data.main.pressure}
                <span className="derece">P</span>
              </h4>
              <h4>
                Nem:{data.main.humidity}
                <span className="derece"> %RH</span>
              </h4> */
}
