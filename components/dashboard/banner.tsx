import { IoMdAddCircle } from "react-icons/io";
import { CalendarIcon } from "@/assets/svg";
import { convertNumberToCurrency } from "@/utils/currency-converter";

export const Banner = () => {
  return (
    <div className="">
      <div className="bg-[#293B96] rounded-lg md:h-[7.375rem] w-[95%] mx-auto flex justify-between text-white  md:items-center px-8 flex-col md:flex-row py-5 md:py-0 ">
        <div className="mb-4 md:mb-0">
          <div className="flex gap-x-3 mb-1 text-sm">
            <span>
              <CalendarIcon />
            </span>
            <span>Friday 22nd, October 2022</span>
          </div>
          <div className="">
            <h1 className="font-bold text-lg md:text-2xl">Good Evening</h1>
          </div>
        </div>
        <div className="">
          <button className="flex gap-x-2 items-center justify-center rounded-sm bg-[#55D8A1] w-[11rem] text-sm  h-[2.813rem]">
            <span>
              <IoMdAddCircle fontSize={23} />
            </span>
            <span className="font-medium">Create New Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};
