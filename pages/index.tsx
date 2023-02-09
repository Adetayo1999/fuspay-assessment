import { Account } from "@/components/account";
import { Dashboard } from "@/components/dashboard";

const Home = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-4">
        <h1 className="text-[#1B1919] text-xl md:text-3xl font-bold">
          Overview
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between h-full">
        <div className="mb-6 md:mb-0 md:w-[68%] bg-white rounded-sm shadow-sm">
          <Dashboard />
        </div>
        <div className=" md:w-[30%] bg-white rounded-sm shadow-sm flex-shrink-0">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Home;
