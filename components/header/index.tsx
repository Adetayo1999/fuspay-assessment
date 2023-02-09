import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import userImage from "@/assets/images/user.png";
import { ArrowDownIcon, LogoIcon, NotificationIcon } from "@/assets/svg";
import { useModal } from "@/context";

export const Header = () => {
  const { handleToggleChange, toggle } = useModal();

  return (
    <header className="bg-white py-4 h-[5rem] fixed w-full">
      <div className="w-[90%] mx-auto flex justify-between items-center h-full">
        <div className="">
          <LogoIcon scale={0.8} />
        </div>
        <div className="flex items-center gap-x-10">
          <button>
            <NotificationIcon scale={0.8} />
          </button>
          <button className="flex items-center gap-x-3">
            <Image src={userImage} alt="Timothy" />
            <div className="flex items-center  gap-x-2">
              <h4 className="font-semibold text-sm">Timothy</h4>
              <ArrowDownIcon />
            </div>
          </button>
          <button
            className={`inline-block md:hidden relative z-50 ${
              toggle && "invisible"
            }`}
            onClick={handleToggleChange}
          >
            <RxHamburgerMenu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
