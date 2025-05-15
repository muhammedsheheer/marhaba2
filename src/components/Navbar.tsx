"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4`,
        pathname === "/" ? "bg-transparent" : "pt-4",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-12">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-16">
            <Link
              href={"/"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4] hover:underline"
                  : "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000] hover:underline"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4] hover:underline"
                  : "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000] hover:underline"
              }
            >
              Order Online
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-28"
              />
            </Link>

            <Link
              href={"/about-us"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4] hover:underline"
                  : "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000] hover:underline"
              }
            >
              Our Story
            </Link>

            <Link
              href={"/contact"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4] hover:underline"
                  : "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000] hover:underline"
              }
            >
              Contact
            </Link>
            <Link
              href={"/table-booking"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4] hover:underline"
                  : "text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000] hover:underline"
              }
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-20"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={clsx(
          "bar",
          pathname === "/" ? "bg-[#ffff]" : "bg-[#C9A7BF]",
        )}
      ></div>
      <div
        className={clsx(
          "bar",
          pathname === "/" ? "bg-[#ffff]" : "bg-[#C9A7BF]",
        )}
      ></div>
      <div
        className={clsx(
          "bar",
          pathname === "/" ? "bg-[#ffff]" : "bg-[#C9A7BF]",
        )}
      ></div>
    </div>
  );
};
