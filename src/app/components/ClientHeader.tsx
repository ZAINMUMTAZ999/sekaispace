
"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

import one from "../../../public/trust (1).png";
import two from "../../../public/trust (2).png";
import three from "../../../public/trust (3).png";
import four from "../../../public/trust (4).png";
import five from "../../../public/trust (5).png";
import six from "../../../public/trust (6).png";
import seven from "../../../public/trust (7).png";
import eight from "../../../public/trust (8).png";
import nine from "../../../public/trust (9).png";
import ten from "../../../public/trust (10).png";

const techStackData = [
  { id: 1, image: one },
  { id: 2, image: two },
  { id: 3, image: three },
  { id: 4, image: four },
  { id: 5, image: five },
  { id: 6, image: six },
  { id: 7, image: seven },
  { id: 8, image: eight },
  { id: 9, image: nine },
  { id: 10, image: ten },
];

// Duplicate for seamless loop
const duplicatedTechStack = [
  ...techStackData,
  ...techStackData,
  ...techStackData,
];

export const ClientHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const cardWidth = 70;
  const gapWidth = 12;
  const totalCardWidth = cardWidth + gapWidth;
  const fullWidth = techStackData.length * totalCardWidth;

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [`0px`, `-${fullWidth}px`],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        },
      });
    }
  }, [isInView, fullWidth, controls]);

  return (
    <section
      className="relative -mt-1 py-6 bg-gray-900 overflow-hidden"
      ref={ref}
      //   style={{
      //   clipPath:
      //     'polygon(0% 15%, 0 1%, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 100%, 86% 100%, 80% 74%, 1% 73%, 1% 72%, 0 73%)',
      // }}
        style={{
        clipPath:
          'polygon(20% 0%, 80% 0%, 100% 0, 100% 100%, 88% 99%, 84% 76%, 0 73%, 0 0)',
      }}
    >
      {/* Purple gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-linear-to-l from-[#AE2FE0]/60 via-[#AE2FE0]/20 to-transparent pointer-events-none ">
      </div>

      <div className="relative z-10 w-full">
        <p className="text-white   mt-2 text-center px-4">
          Trusted by
        </p>

        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-3"
            animate={controls}
            style={{ width: "fit-content" }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={`${tech.id}-${index}`}
                className="flex flex-col justify-center items-center p-1 w-[70px] h-[70px] md:w-[120px] md:h-[120px] shrink-0"
              >
                <div className="flex justify-center  items-center w-[60px] h-[60px] md:w-[90px] md:h-[90px] relative mb-6">
                  <Image
                    src={tech.image}
                    alt="trust"
                    className={`object-contain white-logo text-white ${
                      // scale up smaller logos slightly
                      [2, 4, 7, 9].includes(tech.id)
                        ? "scale-125"
                        : "scale-110"
                    }`}
                    fill
                    sizes="(max-width: 768px) 50px, 80px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
