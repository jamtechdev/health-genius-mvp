/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect } from 'react';

export default function AppProvider({ children }) {

    // useEffect(() => {
    //     if ("serviceWorker" in navigator) {
    //         navigator.serviceWorker.register("/firebase-messaging-sw.js")
    //             .then((registration) => {
    //                 console.log("✅ Service Worker registered:", registration);
    //             })
    //             .catch((error) => {
    //                 console.error("❌ Service Worker registration failed:", error);
    //             });
    //     }
    // }, []);
    return (
        <>
            {/* <Provider store={store}> */}
            {children}
            {/* </Provider> */}
        </>
    );
}
