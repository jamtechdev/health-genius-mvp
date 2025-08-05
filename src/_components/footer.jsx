"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations();
    return (
        <>
            <footer className="bg-[#011f39] text-gray-200 text-sm lg:p-6 p-4">
                <div
                    className="mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                    {/* Copyright */}
                    <p className="text-center sm:text-left">{t("copyRight")}</p>

                    {/* Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition">{t("privacyPolicy")}</a>
                        <a href="#" className="hover:text-white transition">{t("termsOfService")}</a>
                    </div>
                </div>
            </footer>
        </>
    )
}