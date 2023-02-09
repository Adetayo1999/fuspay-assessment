import { FaTimes } from "react-icons/fa";
import { useModal } from "@/context";
import { Siderbar } from "../sidebar";

export const Modal = () => {
  const { toggle, handleToggleChange } = useModal();

  return (
    <div
      className={`fixed z-40 top-0 left-0 w-full h-screen md:hidden  flex bg-gray-800 bg-opacity-50 ${
        toggle ? "visible" : "invisible"
      } transition duration-[0.5s]`}
    >
      <div
        className={`h-full w-[60%] transition duration-[0.5s] bg-white ${
          toggle ? "translate-x-[0]" : "translate-x-[-100%]"
        } `}
      >
        <Siderbar />
      </div>
      <div className="absolute top-6 right-5 ">
        <button
          className="bg-[#293B96] flex justify-center items-center rounded-full w-8 h-8 text-white"
          onClick={handleToggleChange}
        >
          <FaTimes size={18} />
        </button>
      </div>
    </div>
  );
};
