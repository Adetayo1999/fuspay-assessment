import { useState } from "react";
import { SavingsIcon } from "@/assets/svg";
import { convertNumberToCurrency } from "@/utils/currency-converter";
import { MdKeyboardArrowRight } from "react-icons/md";

const AccountCard = () => {
  return (
    <div className="border border-[#E9E9E9] rounded-lg p-6 flex flex-col gap-y-4">
      <div className="flex gap-x-4 items-center">
        <div
          className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
          style={{
            background: "linear-gradient(180deg, #E8B41D 0%, #CF8226 100%)",
          }}
        >
          <SavingsIcon />
        </div>
        <p className="text-sm text-[#0D0D0D] font-semibold">Gold Savings</p>
      </div>
      <div className="flex gap-x-3 items-center">
        <h4 className="text-[#0B112F] font-bold">567.8744</h4>
        <p className="text-[#515259] text-sm">
          {convertNumberToCurrency("en-US", "USD", 135.25)}
        </p>
      </div>
      <div className="flex md:justify-center items-center">
        <button className="flex justify-center items-center gap-x-2 bg-[#44CF95] text-[#FFFFFF] text-sm px-4 py-2 rounded">
          <span>View Savings</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

const RealTimeAssistant = () => {
  const [active, setActive] = useState("link-1");

  const status: { [key: string]: string } = {
    processing: "bg-[#F55F0A]",
    completed: "bg-[#44CF95]",
  };

  const Txs = [
    {
      id: 1,
      status: "processing",
      amount: 1000,
    },
    {
      id: 2,
      status: "completed",
      amount: 1000,
    },
    {
      id: 3,
      status: "completed",
      amount: 1000,
    },
    {
      id: 4,
      status: "completed",
      amount: 1000,
    },
  ];

  return (
    <div className="mt-4">
      <div className="mb-4">
        <h3 className="text-xl text-[#1B1919] font-bold">
          Real-time Assistant
        </h3>
      </div>
      <div className="">
        <div className="flex gap-x-7 mb-4">
          <button
            className={` after:w-[6rem] after:h-[3px] after:block after:rounded-md  pb-1 text-left ${
              active === "link-1"
                ? " after:bg-[#293B96] text-[#293B96] font-bold "
                : "text-[#666666]"
            }`}
            onClick={() => setActive("link-1")}
          >
            On-going Tx
          </button>
          <button
            className={`after:w-[6rem] after:h-[3px] after:block after:rounded-md  pb-1 text-left ${
              active === "link-2"
                ? " after:bg-[#293B96] text-[#293B96] font-bold "
                : "text-[#666666]"
            }`}
            onClick={() => setActive("link-2")}
          >
            Authorize Tx
          </button>
        </div>
        <div className="flex flex-col gap-y-3">
          {Txs.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center pb-4 border-b border-[#EFEFEF]"
            >
              <div className="">
                <h4 className="text-[#444444] font-bold">
                  {convertNumberToCurrency("en-US", "USD", item.amount)}
                </h4>
                <p className="capitalize text-[#444444] text-sm">
                  {item.status}
                </p>
              </div>
              <div
                className={`h-[0.75rem] w-[0.75rem] rounded-full ${
                  status[item.status]
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Account = () => {
  return (
    <div className="p-5 flex flex-col gap-y-5">
      <h2 className="text-2xl text-[#1B1919] font-bold">Savings</h2>
      <AccountCard />
      <RealTimeAssistant />
    </div>
  );
};
