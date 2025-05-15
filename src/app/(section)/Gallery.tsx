import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="h-full w-full bg-[#fff] px-3 py-8 md:px-10">
      <div className="flex items-center justify-center pb-2">
        <h1 className="text-center font-oswald text-7xl font-[400] uppercase tracking-[3px] text-[#9bd49f] md:text-[150px] md:tracking-[10px]">
          archives
        </h1>
      </div>
      {/*big screen */}
      <div className="hidden flex-row gap-2 md:flex md:gap-6">
        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-[40%] md:gap-6">
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex flex-row gap-2 md:hidden md:gap-6">
        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[150px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[150px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[150px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[150px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[150px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#9bd49f] p-2">
            <motion.img
              src={"/images/home/gallery/3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[150px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
