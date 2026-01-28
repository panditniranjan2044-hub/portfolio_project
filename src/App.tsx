import { Outlet } from "react-router-dom";
import Navigation from "./component/navigation/Navigation";
import Footer from "./component/footer/Footer";

export default function App(){
  return(
    <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}