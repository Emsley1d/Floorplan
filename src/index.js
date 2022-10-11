import { createRoot } from "react-dom/client";

import App from "./App";
import FloorPlan from "./FloorPlan"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <App FloorPlan = {FloorPlan} />

    // <Post title={blogPost.title} author={blogPost.author} body={blogPost.body} comments={blogPost.comments}></Post>

);


// How to connect index and app??????