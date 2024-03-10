import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "@/Layouts/Authenticated/Topbar";
import Featured from "@/Layouts/Authenticated/Featured";

export default function Authenticated({auth, children }) {
    // debugger
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start sidebar */}
                <Sidebar auth={auth} />
                {/* End sidebar */}
                {/* Start content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Start: Topbar */}
                        {/* {console.log(user)} */}
                        <Topbar name={auth.name}/>
                        {/* <Topbar/> */}
                        {/* Start: End topbar */}
                        {/* <Featured /> */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* End content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
