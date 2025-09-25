import { NavItem } from "./NavItem";
import { Globe, House, Users } from "lucide-react";

export const MobileNav = () => {
  return (
    <nav className="space-y-6">
      <NavItem Icon={House} nameRoute="Home" destinationRoute="/" />
      <NavItem Icon={Globe} nameRoute="Blog" destinationRoute="/blogs" />
      <NavItem Icon={Users} nameRoute="About" destinationRoute="/about" />
    </nav>
  );
};
