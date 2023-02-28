import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Page404Found from "./pages/Page404Found";
import Avukatlar from "./pages/Avukatlar";
import Profil from "./pages/Profil";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./state/store";
import { authInit } from "./state/slices/auth.slice";
import { fireAuth } from "./config/FirebaseConfig";
import ChatPage from "./pages/ChatPage";
import Contact from "./pages/Contact";
import AppNavbar from "./components/AppNavbar";

export default function RouterApp() {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    const subscription = fireAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authInit(user));
      }
    });
    return () => subscription();
  }, []);

  // TODO: move this to redux with an init action
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      <>
        {loading == true ? (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Page404Found />} />
          </Routes>
        ) : (
          <Routes>
            {!user ? (
              <Route path="/" index={true} element={<Login />} />
            ) : (
              <>
                <Route path="/" element={<AppNavbar />}>
                  <Route index={true} element={<Home />} />
                  <Route path="*" element={<Page404Found />} />
                  <Route path="/profil" element={<Profil />} />
                  <Route path="/avukatlar" element={<Avukatlar />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/chat" element={<ChatPage />} />
                </Route>
              </>
            )}
          </Routes>
        )}
      </>
    </div>
  );
}
