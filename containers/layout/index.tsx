import { Header } from "@/components/header";
import { Siderbar } from "@/components/sidebar";
import { LayoutProps } from "@/types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#F9F9F9] h-screen  font-lato">
      <Header />
      <div className="flex h-full pt-[5rem]">
        <div className="flex-[0.2] hidden md:block bg-white">
          <Siderbar />
        </div>
        <div className="md:flex-[0.8] overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};
