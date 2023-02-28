// import { createContext, useState } from "react";

// export const GlobalContext = createContext();

// export const ContextProvider = (props) => {
//   const [theme, setTheme] = useState("Dark");

//   const [weather, setWeather] = useState({
//     lon: null,
//     lot: null,
//     data: null,
//     error: null,
//     loading: null,
//   });

//   const data = {
//     theme,
//     setTheme,
//     weather,
//     setWeather,
//   };
//   return (
//     <GlobalContext.Provider value={data}>
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };
