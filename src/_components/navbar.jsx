"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(props) {
    const { id } = props;
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const t = useTranslations();
    const [user, setUser] = useState(null);

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
    const getUser = async (id) => {
        try {
            const res = await fetch(`/api/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setUser(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching users:', error);
            return null;
        } finally {
        }
    }
    useEffect(() => {
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        if (user) {
            getUser(user?.id);
        }
    }, []);
    async function logout() {
        await fetch('/api/login', { method: 'GET' });
        window.location.href = `/${locale}/sign-in`;
    }

    return (
        <>
            <nav
                className="sticky top-0 z-50 border-b-4 border-cyan-500 bg-opacity-60 backdrop-blur-lg">
                <div
                    className="flex items-center justify-between lg:px-6 px-4 lg:py-0 py-2">
                    <div className="flex items-center gap-4">
                        <Link href="/profile">
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
                                        src={user ? user?.image : "/images/user-avatar.jpg"}
                                        className="w-10 h-10 object-cover icon-box"
                                        width={100}
                                        height={100}
                                        alt="profile"
                                    />
                                </Link>

                                <div className="hidden">
                                    <h6 className="text-sm font-semibold">Lucas</h6>
                                    <p
                                        className="text-xs text-gray-400">lucas@example.com</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={logout} className="text-[#ffffff] bg-[#ca2a30] text-xl py-[6px] px-[10px] cursor-pointer icon-box">
                            <i className="ph-fill ph-sign-out"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}