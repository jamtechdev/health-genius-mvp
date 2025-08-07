import Dashboard from "@/_components/Dashboard";
import Footer from "@/_components/footer";
import Navbar from "@/_components/navbar";
import { findUserByID } from "@/_services/userService";

export default async function Page({ params }) {
    const { id } = await params;

    return (
        <>
            <Navbar />
            <Dashboard id={id} />
            <Footer />
        </>
    )
}