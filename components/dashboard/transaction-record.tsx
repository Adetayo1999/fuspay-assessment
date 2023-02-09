import { TransactionType } from "@/types";
import { convertNumberToCurrency } from "@/utils/currency-converter";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

const transactions: TransactionType[] = [
  {
    id: 1,
    amount: 0,
    date: "11:00am 21 oct",
    direction: "down",
    ref: "REF : 1234MT",
    status: "completed",
    description: "For Children School fees",
  },
  {
    id: 2,
    amount: 0,
    date: "11:00am 21 oct",
    direction: "up",
    ref: "REF : 1234MT",
    status: "pending",
    description: "For Children School fees",
  },
  {
    id: 3,
    amount: 0,
    date: "11:00am 21 oct",
    direction: "down",
    ref: "REF : 1234MT",
    status: "completed",
    description: "For Children School fees",
  },
  {
    id: 4,
    amount: 0,
    date: "11:00am 21 oct",
    direction: "up",
    ref: "REF : 1234MT",
    status: "pending",
    description: "For Children School fees",
  },
];

const states = {
  up: "bg-[#FFF1F1] text-[#FC6B6B]",
  down: "bg-[#E3FFF3] text-[#009A49]",
};

const statuses = {
  completed: "bg-[#F2FFF9] text-[#0EB85F]",
  pending: "bg-[#FFE4C2] text-[#F1992E]",
};

export const TransactionRecord = () => {
  return (
    <div className="mx-auto w-[95%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl text-[#1B1919] font-bold">
          Transaction Records
        </h2>
        <button className="flex items-center text-[#4F46E5] text-sm font-medium">
          <span>See All Transactions</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
      <div className="w-full overflow-x-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#0B112F] font-normal">
              <th></th>
              <th className="text-left p-3">Reference</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Description</th>
              <th className="text-left p-3">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(
              ({ direction, amount, date, description, id, ref, status }) => (
                <tr key={id} className="text-[#8F8F8F]">
                  <td className="text-left p-3">
                    <div
                      className={`w-[1.5rem] h-[1.5rem] rounded-full  flex justify-center items-center shrink-0 ${states[direction]} `}
                    >
                      {direction === "up" ? (
                        <HiArrowSmUp size={16} />
                      ) : (
                        <HiArrowSmDown size={16} />
                      )}
                    </div>
                  </td>
                  <td className="text-left p-3 text-[#0B112F] font-medium whitespace-nowrap">
                    {ref}
                  </td>
                  <td className="text-left p-3 whitespace-nowrap">
                    {convertNumberToCurrency("en-US", "USD", amount)}
                  </td>
                  <td className="text-left p-3 whitespace-nowrap">
                    {description}
                  </td>
                  <td className="text-left p-3 whitespace-nowrap">{date}</td>
                  <td className="text-left p-3">
                    <button
                      className={`capitalize  rounded-sm py-1 px-2 w-full ${statuses[status]}`}
                    >
                      {status}
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
