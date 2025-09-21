import { type LucideIcon } from "lucide-react";

type NavItemProps = {
  Icon: LucideIcon;
  nameRoute: string;
  destinationRoute: string;
};

export const NavItem = ({
  Icon,
  nameRoute,
  destinationRoute,
}: NavItemProps) => {
  return (
    <a
      href={destinationRoute}
      className="flex items-center space-x-3 md:space-x-2 hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-gray-800 py-2 px-4 rounded-xl mobile-nav-link"
    >
      <Icon className="w-4 h-4" />
      <span className="font-bold">{nameRoute}</span>
    </a>
  );
};
