import Image from "next/image";
import { useTranslations } from "next-intl";
import { getMessages } from 'next-intl/server';
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import LayoutManager from "@/_components/layout-manager";
import SignIn from "@/_components/sign-in";
export async function generateMetadata(params) {
    const messages = await getMessages();
    const meta = messages?.meta || {};
    const siteURL = "";
    return {
        title: meta.home.title || "Default Title",
        generator: meta.home.generator || "Default Generator",
        applicationName: meta.home.applicationName || "Default App",
        referrer: "origin-when-cross-origin",
        keywords: [meta.home.keywords1 || "default", meta.home.keywords2 || "fallback"],
        description: meta.home.description || "Default description",
        alternates: {
            canonical: `${siteURL}`,
        },
        ogType: meta.home.ogType || "website",
        language: meta.home.language || "en",
    };
}

export default function Home() {
    const t = useTranslations();
    return (
        <>
            <LayoutManager includeAuthLayout={false}>
                <SignIn />
            </LayoutManager>
            
        </>
    );
}
