"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const t = useTranslations();

    const LANGUAGES = [
        { code: "en", label: t("languages.en") },
        { code: "fr", label: t("languages.fr") },
    ];

    const handleChangeLocale = (e) => {
        const newLocale = e.target.value;
        const segments = pathname.split("/");
        const restOfPath = LANGUAGES.some(({ code }) => code === segments[1])
            ? segments.slice(2)
            : segments.slice(1);

        const newPathname = `/${newLocale}/${restOfPath.join("/")}`;
        const queryString = searchParams.toString();
        const url = queryString ? `${newPathname}?${queryString}` : newPathname;
        router.push(url);
    };
    // function logout(){
    //     localStorage.removeItem('user');
    //     router.push(`${locale}/sign-in`);
    // }

    return (
        <>
            <nav
                className="sticky top-0 z-50 border-b-4 border-cyan-500 bg-opacity-60 backdrop-blur-lg">
                <div
                    className="flex items-center justify-between lg:px-6 px-4 lg:py-0 py-2">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard">
                            <img src="/images/logo.png"
                                alt="Health Genius Logo"
                                className="md:max-w-[145px] max-w-[120px] p-1" />
                        </Link>
                        <ul
                            className="lg:hidden items-center flex-1 hidden">
                            <li>
                                <a
                                    className="no-underline text-white flex items-center gap-2 font-semibold p-6 bg-[#0098c0] text-lg"
                                    href="#"><i
                                        className="ph ph-gauge text-2xl"></i>
                                    Dashboard</a>
                            </li>
                            <li>
                                <a
                                    className="no-underline text-white flex items-center gap-2 font-semibold p-6 hover:bg-[#0098c0] text-lg"
                                    href="#"><i
                                        className="ph ph-dna text-2xl"></i> DNA
                                    Traits</a>
                            </li>
                            <li>
                                <a
                                    className="no-underline text-white flex items-center gap-2 font-semibold p-6 hover:bg-[#0098c0] text-lg"
                                    href="#"><i
                                        className="ph ph-usb text-2xl"></i> Connected
                                    Devices</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center gap-2 bg-cyan-500 p-2 icon-box cursor-pointer">
                            <img src="/images/EN-flag.png"
                                className="w-[25px] h-[25px] rounded-full" />
                            <select
                                value={locale}
                                onChange={handleChangeLocale}
                                className="bg-transparent text-black font-semibold text-lg outline-none appearance-none px-1">
                                {LANGUAGES.map(({ code, label }) => (
                                    <option key={code} value={code}>
                                        {label}
                                    </option>
                                ))}
                                {/* <option value="en">EN</option>
                                <option value="fr">FR</option> */}
                            </select>
                        </div>
                        <div className="relative hidden">
                            <i className="ph ph-bell text-2xl"></i>
                            <span
                                className="absolute top-[-8px] right-[-8px] bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">24</span>
                        </div>
                        <div className="relative">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Link href={'/profile'}>
                                    <Image
                                        src="/images/user-avatar.jpg"
                                        className="w-10 h-10 object-cover icon-box"
                                        width={100}
                                        height={100}
                                        alt="profile"
                                    />
                                </Link>
                                {/* <button
                                    onClick={logout}
                                    className="bg-transparent text-white font-semibold text-lg outline-none px-1 cursor-pointer"
                                >
                                    Logout
                                </button> */}
                                <div className="hidden">
                                    <h6 className="text-sm font-semibold">Lucas</h6>
                                    <p
                                        className="text-xs text-gray-400">lucas@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}