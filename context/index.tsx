import { ModalContextType } from "@/types";
import { useState, useContext, createContext, useCallback } from "react";

const ModalContext = createContext({} as ModalContextType);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = useCallback(() => setToggle((prev) => !prev), []);

  return (
    <ModalContext.Provider value={{ toggle, handleToggleChange }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
