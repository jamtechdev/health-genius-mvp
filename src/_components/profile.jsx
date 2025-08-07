"use client";
import { useEffect, useState } from "react";
import { mockUsers } from "@/app/api/data/user";
import details from "../app/api/user.json";
import { Link } from "@/i18n/navigation";

export default function Profile(props) {
    const { id } = props;
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const getAllUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            return null;
        } finally {
            setLoading(false);
        }
    };
    const getUser = async () => {
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
        } catch (error) {
            console.error('Error fetching users:', error);
            return null;
        }
    }
    useEffect(() => {
        getAllUsers();
        getUser();
    }, []);
    if (loading) return <p>Loading...</p>
    return (
        <>
            {user?.type == "B2C" &&
                <div className="min-h-screen lg:p-6 p-4 min-h-[calc(100vh-132px)]">
                    <div className="grid grid-cols-12 gap-6">
                        <Link href={`/profile/${user?.id}` || ''}
                            className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Julie"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                <div
                                    className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">
                                    <h2 className="text-xl font-semibold text-white">
                                        {user?.name}, {user?.age}
                                    </h2>
                                    <p className="text-sm text-gray-300">
                                        {user?.description}
                                    </p>
                                    <i
                                        className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            }
            {user?.type == "B2B" &&
                <>
                    <div className="min-h-screen">

                        <main className="lg:p-6 p-4 min-h-[calc(100vh-132px)]">
                            <div className="grid grid-cols-12 gap-6">
                                {users && users?.length > 0 && users?.map((user, index) => (
                                    <Link key={index} href={`/profile/${user?.id}` || ''}
                                        className="card group relative flex flex-col items-center text-center shadow-lg rounded-xl overflow-hidden transition-shadow hover:shadow-2xl cursor-pointer !p-0 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-2">
                                        <div className="w-full overflow-hidden">
                                            <img
                                                src={user?.image}
                                                alt="Julie"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <div
                                            className="absolute bottom-0 left-0 right-0 w-full px-4 pt-20 pb-5 bg-gradient-to-b from-transparent to-[#01424d] ">
                                            <div
                                                className="transition-all duration-500 group-hover:translate-y-[-8px] text-left relative">
                                                <h2 className="text-xl font-semibold text-white">
                                                    {user?.name}, {user?.age}
                                                </h2>
                                                <p className="text-sm text-gray-300">
                                                    {user?.description} {user?.type == "B2B" ? (user?.type) : ''}
                                                </p>
                                                <i
                                                    className="ph ph-arrow-up-right absolute text-3xl bottom-0 right-0 transition-all duration-500 group-hover:rotate-[45deg]"></i>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </main>

                    </div>
                </>}
        </>
    )
}