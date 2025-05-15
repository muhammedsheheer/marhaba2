import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[url('/images/home/reserve/bg1.png')] bg-cover bg-center">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <motion.div
        className="ml-6 flex h-full w-[80%] flex-col gap-5 bg-[#fff] px-4 py-8 md:ml-[10%] md:w-[30%] md:gap-8 md:py-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="font-oswald text-5xl font-[400] uppercase tracking-[3px] text-[#9bd49f] md:text-8xl md:tracking-[6px]">
          Reserve <br /> your <br />
          table
        </h1>
        <p className="max-w-[350px] px-2 text-start font-inter text-sm font-[500] text-[#000] md:text-start">
          Pair your meal with our creamy milkshakes, signature sundaes, or a
          variety of classic desserts that bring joy in every bite. Whether
          you`re grabbing a quick takeaway, enjoying a family dinner, or
          treating yourself to something sweet late at night, Marhaba is your
          go-to destination for food that feels as good as it tastes.
        </p>
        <div>
          <Link href={"/table-booking"}>
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#000] px-7 py-7 uppercase text-white hover:bg-[#2d2b2b]">
              Reserve
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Reserve;
