import { createRoot } from "react-dom/client";

import App from "./App";
import FloorPlan from "./FloorPlan"

// console.log(FloorPlan)
// ! FloorPlan not being imported as object???


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <App FloorPlan = {FloorPlan} />



);


//! How to connect index and app??????