import { Banner } from "./banner";
import { TransactionRecord } from "./transaction-record";
import { Wallets } from "./wallets";

export const Dashboard = () => {
  return (
    <div className="py-4 flex flex-col gap-y-8">
      <Banner />
      <Wallets />
      <TransactionRecord />
    </div>
  );
};
