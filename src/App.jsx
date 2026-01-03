 import {  Outlet } from "react-router-dom"
import Header from "./client/header/Header"
import Footer from "./client/footer/Footer"
 const App = () => {
  
  return (
    <div className="w-full min-h-screen" >
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}




export default App
