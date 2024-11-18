import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app/App";
import "./index.css";
import store from "./app/store.js"
import {Provider} from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App/>
    </Provider>
);
