import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RouterApp from "./RouterApp";
import store from "./state/store";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <RouterApp />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
