// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// const text = "ANTEPHAN";

// const letterVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       type: "spring",
//       stiffness: 300,
//     },
//   }),
// };

// const Hero: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry?.isIntersecting) {
//           setInView(false);
//           setTimeout(() => setInView(true), 50);
//         }
//       },
//       { threshold: 0.5 },
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen w-full overflow-hidden"
//     >
//       <video
//         className="absolute left-0 top-0 h-full w-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         src="/videos/bg.mp4"
//         poster="/images/thumbnail.png"
//       />
//       <div className="absolute inset-0 bg-[rgba(0,0,0,0.43)]" />

//       <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 md:gap-8">
//         <h1 className="flex gap-2 text-center font-playfair text-5xl font-[400] uppercase tracking-[2px] text-[#fff] md:text-[150px]">
//           {inView &&
//             [...text].map((letter, i) => (
//               <motion.span
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 animate="visible"
//                 variants={letterVariants}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//         </h1>

//         <Button className="font-montserrat rounded-none bg-[#079EBC] px-6 py-6 text-center text-sm font-[500] uppercase tracking-[1.276px] text-[#fff] hover:bg-[#3994a6] md:hidden md:px-7 md:py-7">
//           <Link href={"/table-booking"}>Book Now</Link>
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const text = "ANTEPHAN";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/home/hero/bg.png"
      >
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.43)]" />

      {/* <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 md:gap-8">
        <h1 className="flex gap-2 text-center font-playfair text-5xl font-[400] uppercase tracking-[2px] text-[#fff] md:text-[150px]">
          {inView &&
            [...text].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
        </h1>

        <Button className="rounded-none bg-[#079EBC] px-6 py-6 text-center font-montserrat text-sm font-[500] uppercase tracking-[1.276px] text-[#fff] hover:bg-[#3994a6] md:hidden md:px-7 md:py-7">
          <Link href={"/table-booking"}>Book Now</Link>
        </Button>
      </div> */}
    </section>
  );
};

export default Hero;
