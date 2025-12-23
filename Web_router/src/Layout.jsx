import React from "react";
import Home from "./Compo/Home/Home";
import Footer from "./Compo/Footer/Footer";
import Header from "./Compo/Header/Header";
import { Outlet } from "react-router";
function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        
        </>
    )
}

export default Layout