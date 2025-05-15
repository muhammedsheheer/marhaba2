import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Marhaba: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 py-8 md:px-20 md:py-12">
      <div className="absolute -top-80 right-0 z-50 hidden md:block">
        <Image
          src={"/images/home/marhaba/bg.png"}
          width={281}
          height={74}
          alt="image1"
          className="z-50 h-[900px] w-full"
        />
      </div>
      <div className="ga flex flex-col md:gap-16">
        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          <motion.h6
            className="text-center font-oswald text-4xl font-[400] uppercase text-[#9bd49f] md:text-start md:text-7xl md:tracking-[3px]"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Marhaba <br />
            scenes
          </motion.h6>
          <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start md:gap-6">
            <p className="max-w-[350px] px-2 text-center font-inter text-sm font-[500] text-[#000] md:text-start">
              Pair your meal with our creamy milkshakes, signature sundaes, or a
              variety of classic desserts that bring joy in every bite. Whether
              you`re grabbing a quick takeaway, enjoying a family dinner, or
              treating yourself to something sweet late at night, Marhaba is
              your go-to destination for food that feels as good as it tastes.
            </p>
            <div>
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#000] px-7 py-7 uppercase text-white hover:bg-[#2d2b2b]">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid h-full w-full grid-cols-2 gap-8 pt-8 md:grid-cols-4 md:gap-12 md:pt-0">
          <motion.img
            src={"/images/home/marhaba/1.png"}
            width={281}
            height={74}
            alt="image1"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[220px] w-full rounded-full object-cover md:h-[650px]"
          />
          <motion.img
            src={"/images/home/marhaba/2.png"}
            width={281}
            height={74}
            alt="image2"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[220px] w-full rounded-full object-cover md:h-[650px]"
          />
          <motion.img
            src={"/images/home/marhaba/3.png"}
            width={281}
            height={74}
            alt="image3"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[220px] w-full rounded-full object-cover md:h-[650px]"
          />
          <motion.img
            src={"/images/home/marhaba/4.png"}
            width={281}
            height={74}
            alt="image4"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-0 h-[220px] w-full rounded-full object-cover md:mt-[60%] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Marhaba;
