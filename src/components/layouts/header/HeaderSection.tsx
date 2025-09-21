import { DesktopNav } from "./navigation/DesktopNav";
import { LogoHeader } from "./LogoHeader";
import { useState } from "react";
import { MobileMenuBtn } from "./navigation/MobileMenuBtn";
import { Menu, X } from "lucide-react";
import { MobileNavSection } from "./navigation/MobileNavSection";

export const HeaderSection = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 border-b-2 border-gray-100/20 backdrop-blur bg-transparent">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <LogoHeader />

          <DesktopNav />

          <MobileMenuBtn Icon={Menu} setShow={() => setShow(true)} />
        </div>
      </section>

      <MobileNavSection show={show} setShow={() => setShow(false)} />
    </header>
  );
};
