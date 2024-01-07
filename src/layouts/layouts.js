import Footer from "./footer";
import Header from "./header";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default RootLayout;
