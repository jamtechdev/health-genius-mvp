import { getMessages } from "next-intl/server";
import SignUp from "../../../_components/sign-up";
export async function generateMetadata(params) {
    const messages = await getMessages();
    const meta = messages?.meta || {};
    const siteURL = "";
    return {
        title: meta.signUp.title,
        generator: meta.signUp.generator,
        applicationName: meta.signUp.applicationName,
        referrer: "origin-when-cross-origin",
        keywords: [meta.signUp.keywords1, meta.signUp.keywords2 ],
        description: meta.signUp.description,
        alternates: {
            canonical: `${siteURL}`,
        },
        ogType: meta.signUp.ogType || "website",
        language: meta.signUp.language || "en",
    };
}
export default function SignUpPage() {

    return (
        <>
            <SignUp />
        </>
    )
}