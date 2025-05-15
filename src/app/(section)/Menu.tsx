import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#9bd49f] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute bottom-0 left-3 top-0 md:left-[5%]">
        <div className="h-full border-r-[1px] border-r-[#fff]" />
      </div>
      <div className="absolute bottom-0 right-3 top-0 md:right-[5%]">
        <div className="h-full border-r-[1px] border-r-[#fff]" />
      </div>
      <div className="absolute right-[10%] top-[5%] hidden md:block">
        <p className="max-w-[450px] text-center font-inter text-sm font-[500] text-[#fff] md:text-start">
          At Marhaba, located in the heart of Wilmslow, we blend the bold
          flavors of street food with the sweetness of indulgence. From sizzling
          burgers and flame-grilled peri peri to creamy milkshakes and classic
          desserts, every item is crafted to satisfy cravings with flair and
          freshness.
        </p>
      </div>
      <div className="relative z-40 flex h-full w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.h6
              className="text-center font-oswald text-4xl font-[400] uppercase text-[#fff] md:text-6xl md:tracking-[3px]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              OUR Menu
            </motion.h6>
            <p className="max-w-[450px] px-2 text-center font-inter text-sm font-[500] text-[#fff] md:hidden md:text-start">
              At Marhaba, located in the heart of Blackburn, we blend the bold
              flavors of street food with the sweetness of indulgence. From
              sizzling burgers and flame-grilled peri peri to creamy milkshakes
              and classic desserts, every item is crafted to satisfy cravings
              with flair and freshness.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 pt-4 md:gap-8 md:pt-10">
          <motion.img
            src={"/images/home/menu/1.png"}
            width={281}
            height={74}
            alt="image1"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[120px] w-full rounded-full object-cover md:h-[350px]"
          />
          <motion.img
            src={"/images/home/menu/2.png"}
            width={281}
            height={74}
            alt="image2"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[120px] w-full rounded-full object-cover md:h-[350px]"
          />
          <motion.img
            src={"/images/home/menu/3.png"}
            width={281}
            height={74}
            alt="image3"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[120px] w-full rounded-full object-cover md:h-[350px]"
          />
        </div>
        <div>
          <Link href={"/menu"}>
            <Button className="relative z-40 mt-10 flex items-center justify-center gap-3 rounded-none bg-[#000] px-7 py-7 uppercase text-white hover:bg-[#2d2b2b]">
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
