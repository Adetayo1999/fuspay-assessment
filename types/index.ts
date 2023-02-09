export interface IconType {
  scale?: number;
  color?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

interface IconComponentType {
  ({ color, scale }: IconType): JSX.Element;
  defaultProps: {
    color: string | undefined;
    scale: number;
  };
}

export interface SidebarButtonType {
  id: number;
  title: string;
  path: string;
  Icon: IconComponentType;
}

export interface WalletCardProps {
  id: number;
  amount: number;
  tronAmount: number;
  country: string;
  CountryFlagIcon: IconComponentType;
  cardColor: string;
}

export interface TransactionType {
  id: number;
  ref: string;
  amount: number;
  date: string;
  direction: "up" | "down";
  status: "pending" | "completed";
  description: string;
}

export interface ModalContextType {
  toggle: boolean;
  handleToggleChange: () => void;
}
