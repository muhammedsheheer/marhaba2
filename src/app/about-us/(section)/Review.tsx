"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Reviews = () => {
  const { reviews } = useRestaurant();

  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] pb-10">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/bg/bg.png"}
          width={281}
          height={74}
          alt="image1"
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <div className="absolute -top-10 right-0 z-0 md:-top-60">
        <Image
          src={"/images/home/review/bg1.png"}
          width={281}
          height={74}
          alt="image1"
          className="z-0 h-[300px] w-full object-cover md:h-[1000px]"
        />
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2 pb-10 md:pb-24">
            <motion.h6
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="text-center font-oswald text-4xl font-[400] uppercase tracking-[3px] text-[#C06CA7] md:text-7xl md:tracking-[4px]"
            >
              REVIEWS FROM <br /> OUR CLIENTS
            </motion.h6>
          </div>
        </div>
        <div className="relative ml-4 flex w-full">
          {reviews && (
            <Carousel className="w-full px-4 md:px-60 2xl:px-[450px]">
              <CarouselContent className="flex w-full gap-4">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-full bg-white py-12 md:py-28"
                    >
                      <div className="flex flex-col gap-3 bg-transparent px-6 pb-4 md:pb-6">
                        <div className="flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#C19D56]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4 pt-4 md:pt-6">
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#000] md:px-4 lg:leading-[120%]">
                            {review.text.text}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 pt-4 md:pt-14">
                          <Image
                            src={review.authorAttribution.photoUri}
                            alt="profileimage"
                            width={80}
                            height={80}
                            className="w-14 rounded-full object-cover"
                          />
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#595959] md:px-4 lg:leading-[120%]">
                            {review.authorAttribution.displayName}
                          </p>
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-xs font-[500] uppercase tracking-[2px] text-[#595959] md:px-4 lg:leading-[120%]">
                            {review.relativePublishTimeDescription}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#D48FC0] text-[#D48FC0] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#D48FC0] text-[#D48FC0] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
