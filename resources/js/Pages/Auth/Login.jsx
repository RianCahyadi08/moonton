import { useEffect } from 'react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head, useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';

export default function Login() {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        // remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('login'));
    };

    return (
        <>
            <>
                <Head title="Sign In" />
            </>
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel value="Email Address" />
                                    <TextInput
                                        autoComplete={"off"}
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                </div>
                                <div>
                                    <InputLabel value="Password" />
                                    <TextInput
                                        autoComplete={"off"}
                                        type="password"
                                        name="password"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <Link href={route("prototype.dashboard")}> */}
                                    <PrimaryButton
                                        type="submit"
                                        variant="primary"
                                        className="rounded-2xl bg-alerange py-[13px] text-center"
                                        disabled={processing}
                                        processing={processing}
                                    >
                                        <span className="text-base font-semibold">
                                            Start Watching
                                        </span>
                                    </PrimaryButton>
                                {/* </Link> */}
                                {/* <a
        href="/"
        className="rounded-2xl bg-alerange py-[13px] text-center"
    >
        <span className="text-base font-semibold">
            Start Watching
        </span>
    </a> */}
                                <Link href={route("register")}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                        className="rounded-2xl border border-white py-[13px] text-center"
                                    >
                                        <span className="text-base font-semibold">
                                            Create New Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                {/* <a
        href="sign_up.html"
        className="rounded-2xl border border-white py-[13px] text-center"
    >
        <span className="text-base text-white">
            Create New Account
        </span>
    </a> */}
                                {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
<span className="text-base font-semibold">
    Start Watching
</span>
</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
