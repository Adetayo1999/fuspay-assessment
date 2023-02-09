import { useState } from "react";
import {
  LogoutIcon,
  ProfileIcon,
  OverviewIcon,
  FinanceIcon,
  PaymentIcon,
} from "@/assets/svg";
import { SidebarButtonType } from "@/types";

const sidebarButtons: SidebarButtonType[] = [
  {
    id: 1,
    title: "Overview",
    path: "/",
    Icon: OverviewIcon,
  },
  {
    id: 2,
    title: "Finance",
    path: "/",
    Icon: FinanceIcon,
  },
  {
    id: 3,
    title: "Payment",
    path: "/",
    Icon: PaymentIcon,
  },
  {
    id: 4,
    title: "Profile",
    path: "/",
    Icon: ProfileIcon,
  },
];

export const Siderbar = () => {
  const [active, setActive] = useState(sidebarButtons[0].title);

  const handleActiveChange = (title: string) => {
    if (active !== title) {
      setActive(title);
    }
  };

  return (
    <div className="py-10 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-y-5">
        {sidebarButtons.map(({ Icon, id, title }) => (
          <div className="h-[3.75rem] relative" key={id}>
            {active === title && (
              <div
                className="absolute left-0 h-full t-0 w-[0.7rem] bg-[#293B96] "
                style={{ borderRadius: "0px 0.625rem 0.625rem 0px" }}
              />
            )}
            <button
              className={`flex items-center gap-x-4 w-[70%] mx-auto h-full
               ${
                 active === title ? "text-white bg-[#293B96]" : "text-[#A7ADC8]"
               }
               rounded-2xl  px-5`}
              onClick={() => handleActiveChange(title)}
            >
              <span>
                <Icon color={active === title ? "white" : "#A2A9CB"} />
              </span>
              <span>{title}</span>
            </button>
          </div>
        ))}
      </div>
      <div className="h-[3.75rem]">
        <button className="flex items-center gap-x-4 w-[70%] mx-auto h-full px-5 text-[#FF4842]">
          <span>
            <LogoutIcon />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
