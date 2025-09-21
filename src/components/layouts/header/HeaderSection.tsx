import { DesktopNav } from "./navigation/DesktopNav";
import { LogoHeader } from "./LogoHeader";
import { MobileNav } from "./navigation/MobileNav";
import { useState } from "react";
import { MobileMenuBtn } from "./navigation/MobileMenuBtn";
import { Menu, X } from "lucide-react";

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

      {show && (
        <section className="fixed top-0 right-0 px-4 py-7 h-screen w-64 bg-gray-900/95 backdrop-blur-3xl md:hidden z-[999]">
          <div className="flex justify-end">
            <MobileMenuBtn Icon={X} setShow={() => setShow(false)} />
          </div>

          <MobileNav />
        </section>
      )}
    </header>
  );
};
