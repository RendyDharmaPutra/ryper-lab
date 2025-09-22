import { NavItem } from "./NavItem";
import { Globe, House, Users } from "lucide-react";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex gap-10 space-x-6 lg:space-x-8">
      <NavItem Icon={House} nameRoute="Home" destinationRoute="/" />
      <NavItem Icon={Globe} nameRoute="Blog" destinationRoute="/blogs" />
      <NavItem Icon={Users} nameRoute="About" destinationRoute="/about" />
    </nav>
  );
};
