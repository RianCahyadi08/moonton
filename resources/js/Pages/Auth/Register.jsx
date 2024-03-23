import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // console.log(data)
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />

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
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel value="Name" />
                                    <TextInput
                                        autoComplete={"off"}
                                        type="text"
                                        name="name"
                                        // className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your name..."
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        
                                        // value={data.name}
                                    />
                                </div>

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                                <div>
                                    <InputLabel value="Email Address" />
                                    <TextInput
                                        autoComplete={"off"}
                                        type="email"
                                        name="email"
                                        // value={data.email}
                                        // className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Email Address"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <div>
                                    <InputLabel value="Password" />
                                    <TextInput
                                        autoComplete={"off"}
                                        type="password"
                                        name="password"
                                        // className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Password"
                                        // value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                <div>
                                    <InputLabel value="Confirmation Password" />
                                    <TextInput
                                        autoComplete={"off"}
                                        type="password"
                                        name="password_confirmation"
                                        // className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Confirmation Password"
                                        // value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <Link href={route("prototype.dashboard")}> */}
                                    <PrimaryButton
                                        className="rounded-2xl bg-alerange py-[13px] text-center"
                                        variant=""
                                        type="submit"
                                        // processing={processing}
                                        disabled={processing}
                                    >
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </PrimaryButton>
                                {/* </Link> */}
                                <Link href={route("login")}>
                                    <PrimaryButton
                                        className="rounded-2xl border border-white py-[13px] text-center"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                    <span className="text-base font-semibold">
                                        Sign Up
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
