import { NIGIcon, TronIcon, USAIcon } from "@/assets/svg";
import { WalletCardProps } from "@/types";
import { RiAddCircleLine } from "react-icons/ri";
import styles from "@/styles/wallets.module.css";
import { convertNumberToCurrency } from "@/utils/currency-converter";

const walletCards: WalletCardProps[] = [
  {
    id: 1,
    country: "Nigeria",
    amount: 5000458,
    CountryFlagIcon: NIGIcon,
    tronAmount: 548,
    cardColor: "card-one",
  },
  {
    id: 2,
    country: "USA",
    amount: 5000458,
    CountryFlagIcon: NIGIcon,
    tronAmount: 548,
    cardColor: "card-two",
  },
  {
    id: 3,
    country: "USA",
    amount: 5000458,
    CountryFlagIcon: NIGIcon,
    tronAmount: 548,
    cardColor: "card-three",
  },
];

export const WalletCard = ({
  CountryFlagIcon,
  amount,
  cardColor,
  country,
  tronAmount,
}: WalletCardProps) => {
  return (
    <div
      className={` ${styles[cardColor]} h-[15.438rem] w-[16.813rem] flex-shrink-0 rounded-2xl p-6 flex flex-col gap-y-5  `}
    >
      <div className="flex gap-x-5 pb-6 border border-b-[#444658] border-dashed">
        <div className="">
          <TronIcon scale={0.8} />
        </div>
        <div className="flex items-center gap-x-2 ">
          <h4 className="text-[#0D0D0D] font-semibold">
            {convertNumberToCurrency("en-US", "USD", tronAmount)}
          </h4>
          <p className="text-xs text-[#443B5A] ">USDT</p>
        </div>
      </div>
      <div className="">
        <p className="text-[#5E5E5E] text-sm">Balance</p>
        <h3 className="font-semibold text-[#0B112F]">
          {country === "USA"
            ? convertNumberToCurrency("en-US", "USD", amount)
            : convertNumberToCurrency("en-NG", "NGN", amount)}
        </h3>
      </div>
      <div className="flex gap-x-2 items-center text-[#0D0D0D] text-sm">
        <div className="">
          <CountryFlagIcon />
        </div>
        <p>{country}</p>
      </div>
    </div>
  );
};

export const Wallets = () => {
  return (
    <div className="">
      <div className="w-[95%] mx-auto flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-[#1B1919] ">Wallets</h3>
        <div className="">
          <button className="flex gap-x-2 items-center">
            <span>
              <RiAddCircleLine color="#44CF95" size={20} />
            </span>
            <span className="text-[#44CF95] font-bold ">Fund Wallet</span>
          </button>
        </div>
      </div>
      <div
        className={`${styles.cards__container} flex gap-x-5 overflow-x-scroll w-[95%] mx-auto `}
      >
        {walletCards.map((item) => (
          <WalletCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
