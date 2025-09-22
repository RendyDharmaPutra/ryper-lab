import { type LucideIcon } from "lucide-react";

type MobileMenuBtnProps = {
  Icon: LucideIcon;
  setShow: () => void;
};

export const MobileMenuBtn = ({ Icon, setShow }: MobileMenuBtnProps) => {
  return (
    <button className="md:hidden text-white" onClick={setShow}>
      <Icon className="text-xl" />
    </button>
  );
};
