/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function AuthLayout({ children, }) {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    );
}
