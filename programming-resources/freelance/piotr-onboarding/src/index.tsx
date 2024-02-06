import * as React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "./assets/scss/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
