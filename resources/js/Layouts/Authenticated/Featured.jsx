export default function Featured() {
    return <>
        <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <div className="gap-[30px] __scroll-selector">

                        {/* <!-- Movie Thumbnail --> */}
                        <div className="relative overflow-hidden group mr-[30px]">
                            <img src="/images/featured-1.png"
                                className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
                            {/* <!-- rating --> */}
                            <div className="rating absolute top-0 left-0">
                                <div className="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt="" />
                                    <span className="text-sm font-medium text-white mt-1">4.5/5.0</span>
                                </div>
                            </div>
                            {/* <!-- bottom detail --> */}
                            <div className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                rounded-br-[28px] flex justify-between items-center px-7">
                                <div>
                                    <div className="font-medium text-[22px] text-white">The Batman in Love</div>
                                    <p className="mb-0 text-white text-sm font-light">Action • Horror</p>
                                </div>
                                <div
                                    className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                    <img src="/icons/ic_play.svg" width="50" alt="" />
                                </div>
                            </div>
                            <a href="watching.html" className="inset-0 absolute z-50"></a>
                        </div>

                        {/* <!-- Movie Thumbnail --> */}
                        <div className="relative overflow-hidden group mr-[30px]">
                            <img src="/images/featured-2.png"
                                className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
                            {/* <!-- rating --> */}
                            <div className="rating absolute top-0 left-0">
                                <div className="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt="" />
                                    <span className="text-sm font-medium text-white mt-1">4.2/5.0</span>
                                </div>
                            </div>
                            {/* <!-- bottom detail --> */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                rounded-br-[28px] flex justify-between items-center px-7 h-[130px]">
                                <div>
                                    <div className="font-medium text-[22px] text-white">Despicable Me 2</div>
                                    <p className="mb-0 text-white text-sm font-light">Action • Adventure</p>
                                </div>
                                <div
                                    className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                    <img src="/icons/ic_play.svg" width="50" alt="" />
                                </div>
                            </div>
                            <a href="watching.html" className="inset-0 absolute z-50"></a>
                        </div>

                        {/* <!-- Movie Thumbnail --> */}
                        <div className="relative overflow-hidden group mr-[30px]">
                            <img src="/images/featured-3.png"
                                className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
                            {/* <!-- rating --> */}
                            <div className="rating absolute top-0 left-0">
                                <div className="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt="" />
                                    <span className="text-sm font-medium text-white mt-1">4.9/5.0</span>
                                </div>
                            </div>
                            {/* <!-- bottom detail --> */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                rounded-br-[28px] flex justify-between items-center px-7 h-[130px]">
                                <div>
                                    <div className="font-medium text-[22px] text-white">Train Dragons II</div>
                                    <p className="mb-0 text-white text-sm font-light">Love • Adventure</p>
                                </div>
                                <div
                                    className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                    <img src="/icons/ic_play.svg" width="50" alt="" />
                                </div>
                            </div>
                            <a href="watching.html" className="inset-0 absolute z-50"></a>
                        </div>

                        {/* <!-- Movie Thumbnail --> */}
                        <div className="relative overflow-hidden group mr-[30px]">
                            <img src="/images/featured-1.png"
                                className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
                            {/* <!-- rating --> */}
                            <div className="rating absolute top-0 left-0">
                                <div className="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt="" />
                                    <span className="text-sm font-medium text-white mt-1">4.5/5.0</span>
                                </div>
                            </div>
                            {/* <!-- bottom detail --> */}
                            <div className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                rounded-br-[28px] flex justify-between items-center px-7">
                                <div>
                                    <div className="font-medium text-[22px] text-white">The Batman in Love</div>
                                    <p className="mb-0 text-white text-sm font-light">Action • Horror</p>
                                </div>
                                <div
                                    className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                    <img src="/icons/ic_play.svg" width="50" alt="" />
                                </div>
                            </div>
                            <a href="watching.html" className="inset-0 absolute z-50"></a>
                        </div>
                    </div>
                </div>
    </>
}