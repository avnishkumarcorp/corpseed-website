import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../client/Home/Home.jsx";
import About from "../client/about/About.jsx";
import Lifeatcorpseed from "../client/life-at-corpseed/Lifeatcorpseed.jsx";
export const approuter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",
      element:<Home/>
      },
      {
        path:"/about-us",
        element:<About/>
      },
      {
        path:"/life-at-corpseed",
        element:<Lifeatcorpseed/>
      }
    ]
  }
  
])

export default approuter;