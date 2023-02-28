import React from "react";
import "./darkLightMode.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../state/store";
import { handleTheme } from "../../state/slices/app.slice";

function DarkLight() {
  const dispatch = useAppDispatch();
  const { settings } = useSelector((state) => state.app);
  return (
    <div>
      <div className="darkLightMode">
        <div>
          <span className="switch">
            <input
              onChange={() => dispatch(handleTheme())}
              type="checkbox"
              id="switch-round"
            />
            <label htmlFor="switch-round"></label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DarkLight;
