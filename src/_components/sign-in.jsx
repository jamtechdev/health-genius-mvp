"use client";
import { useForm } from 'react-hook-form';
import { useRouter } from "@/i18n/navigation";

export default function SignIn() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok) {
            alert(result.message);
            return;
        }
        localStorage.setItem('user', JSON.stringify(result.user));
        router.push(`/profile/${result?.user?.id}`);
    };
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <video
                muted
                autoPlay
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/images/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-full max-w-2xl md:p-6 p-4 z-10">
                <div className="card p-8 text-white">
                    {/* <!-- Logo --> */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/images/logo.png"
                            alt="Health Genius Logo"
                            className="max-w-[220px] w-full" />
                    </div>

                    {/* <!-- Header --> */}
                    <div className="pb-3 text-left">
                        <h1 className="text-4xl font-bold pb-2">Sign in</h1>
                        <p className="text-white">Please fill the below details to
                            continue</p>
                    </div>

                    {/* <!-- Form --> */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-white mb-1">Email</label>
                            <input
                                {...register('email', { required: 'Email is required' })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-[#001b31] border border-[#001b31] text-white placeholder-gray-400 text-base outline-none focus:border-[#00f6ff] border-[#0098c0]" />
                        </div>

                        <div>
                            <label className="block text-white mb-1">Password</label>
                            <input
                                {...register('password', { required: 'Password is required' })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 bg-[#001b31] border border-[#001b31] text-white placeholder-gray-400 text-base outline-none focus:border-[#00f6ff] border-[#0098c0]" />
                        </div>

                        <div className="text-right">
                            <a href="/forgot-password.html"
                                className="text-[#00f6ff] underline">Forget
                                password</a>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#0098c0] text-white py-3 px-6 font-semibold hover:bg-[#00f6ff] hover:text-[#000000] transition-all duration-500 flex items-center justify-center gap-2 icon-box">
                                Continue <i className="ph ph-arrow-right text-lg"></i>
                            </button>
                        </div>
                    </form>

                    {/* <!-- Footer Links --> */}
                    <div className="pt-6 space-y-3 text-center">
                        <p className="m-0">
                            Don’t have an account? <a href="/sign-up.html"
                                className="text-[#00f6ff] underline">Signup</a>
                        </p>
                        <p className="m-0">
                            <a href="#" className="text-[#00f6ff] underline">Privacy
                                policy</a> |
                            <a href="#" className="text-[#00f6ff] underline">Terms
                                condition</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* <script src="./assets/js/main.js"></script> */}
        </div>
    )
}