/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";


export default function LayoutManager({ children, includeAuthLayout = false }) {

    return (
        <>
            {!includeAuthLayout && <AppLayout>{children}</AppLayout>}
            {includeAuthLayout && <AuthLayout>{children}</AuthLayout>}
        </>
    );
}
