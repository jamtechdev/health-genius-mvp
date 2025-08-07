import Navbar from "@/_components/navbar";
import Profile from "../../../_components/profile";
import Footer from "@/_components/footer";
import { cookies } from 'next/headers';

export default function ProfilePage() {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token')?.value;

    return (
        <>
            <Navbar />
            <Profile id={token} />
            <Footer />
        </>
    )
}