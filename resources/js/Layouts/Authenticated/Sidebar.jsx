import { Link } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";
import MenuItem from "./MenuItem";
import { UserMenus } from "./MenuList";
import { UserOthers } from "./MenuList";

export default function Sidebar({ user, auth, activePlan }) {
    // debugger
    // console.log(UserMenu);

    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                        {/* <!-- Menu --> */}
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>
                            {UserMenus.map(function (userMenu, index) {
                                console.log(userMenu);
                                return (
                                    <MenuItem
                                        key={`${index}-${userMenu.text}`}
                                        link={userMenu.link}
                                        icon={userMenu.icon}
                                        text={userMenu.text}
                                        isActive={
                                            userMenu.link &&
                                            route().current(userMenu.link)
                                        }
                                    />
                                );
                            })}
                        </div>
                        {/* <!-- ./Menu --> */}

                        {/* <!-- Others --> */}
                        <div>
                            <div className="text-gray-1 side-link mb-4">
                                Others
                            </div>
                            {UserOthers.map(function (userOther, index) {
                                return (
                                    <MenuItem
                                        key={`${index}-${userOther.text}`}
                                        link={userOther.link}
                                        icon={userOther.icon}
                                        text={userOther.text}
                                        isActive={
                                            userOther.link &&
                                            route().current(userOther.link)
                                        }
                                        method={userOther.method}
                                    />
                                );
                            })}
                        </div>
                        {/* <!-- ./Others --> */}

                        {/* <!-- Subscription details --> */}
                        {activePlan && (
                            <SubscriptionDetail
                                name={activePlan.active_plan.name}
                                isPremium={
                                    activePlan.active_plan.name === "Premium"
                                }
                                activeDays={activePlan.active_day}
                                remainingActiveDays={
                                    activePlan.remaining_active_days
                                }
                            />
                        )}
                        {/* <!-- ./Subscription details --> */}
                    </div>
                </div>
            </aside>
        </>
    );
}
