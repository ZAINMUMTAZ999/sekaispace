"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaBullhorn,
  FaShoppingCart,
  FaChartLine,
  FaPaintBrush,
  FaFileAlt,
  FaUsers,
  FaJava,
  FaDatabase
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiTestinglibrary,
  SiNextui
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const techStackData = [
  { 
    name: "MERN Stack", 
    icon: <SiMongodb className="text-green-600" />, 
    subIcons: [
      <SiMongodb key="mongo" className="text-green-600" />, 
      <SiExpress key="express" className="text-gray-700" />, 
      <FaReact key="react" className="text-blue-500" />, 
      <FaNodeJs key="node" className="text-green-500" />
    ] 
  },
  { name: "React Native", icon: <SiReact className="text-blue-500" /> },
  { name: "Software Testing", icon: <SiTestinglibrary className="text-blue-700" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-700" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Digital Marketing", icon: <FaBullhorn className="text-red-500" /> },
  { name: "Twitter/X", icon: <FaXTwitter className="text-gray-800" /> },
  { name: "Graphic Design", icon: <FaPaintBrush className="text-purple-600" /> },
  { name: "UI/UX Design", icon: <SiNextui className="text-purple-600" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Django", icon: <SiPython className="text-green-700" /> },
  { name: "SQL Database", icon: <FaDatabase className="text-blue-800" /> },
  { name: "SEO Optimization", icon: <FaChartLine className="text-green-500" /> },
  { name: "Content Creation", icon: <FaFileAlt className="text-blue-600" /> },
  { name: "Social Media", icon: <FaUsers className="text-blue-400" /> },
  { name: "E-commerce", icon: <FaShoppingCart className="text-orange-500" /> },
];

// Duplicate for smooth infinite scroll
const duplicatedTechStack = [...techStackData, ...techStackData];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const cardWidth = 300; // Increased for better spacing
  const fullWidth = techStackData.length * cardWidth;

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: `-${fullWidth}px`,
        transition: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        },
      });
    }
  }, [isInView, fullWidth, controls]);

  const pauseAnimation = () => controls.stop();
  const resumeAnimation = () => {
    controls.start({
      x: `-${fullWidth}px`,
      transition: {
        repeat: Infinity,
        duration: 28,
        ease: "linear",
      },
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50/50 py-0 lg:py-0  " ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-8   lg:mb-20">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl  mt-20 md:-mt-4 sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight ">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                We&apos;ve got the tools, the team, and the energy to make it happen.
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-sm md:text-lg lg:text-xl xl:text-xl  text-gray-600 leading-relaxed font-serif max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
          >
            Whether you&apos;re launching a brand, struggling with visibility, or planning your next big move
          </motion.p>

       
        </div>

        {/* Tech Stack Carousel */}
        <div className="relative">
      
          <div className="mt-12">
            <motion.div
              className="flex items-center gap-6"
              animate={controls}
            >
              {duplicatedTechStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  onMouseEnter={pauseAnimation}
                  onMouseLeave={resumeAnimation}
                   className="group flex flex-col justify-center items-center  p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-200 w-[180px] min-h-[110px] md:w-[300px] md:min-h-[180px] transform transition-all duration-300 ease-in-out flex-shrink-0"
                  whileHover={{ scale: 1.03, y: -4 }}
                  style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                >
                  {/* Icon and Title Section */}
                  <div className="text-xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className= "flex justify-center items-center text-2xl md:text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="flex items-center justify-start text-sm md:text-lg font-bold text-gray-800 leading-tight group-hover:text-purple-700 transition-colors duration-300">
                        {tech.name}
                      </h3>
                    </div>
                  </div>

                  {/* Sub Icons Section */}
                  {tech.subIcons && (
                    <div className="flex items-center gap-3 mt-4 w-full">
                      <div className="flex flex-wrap gap-2">
                        {tech.subIcons.map((subIcon, subIndex) => (
                          <div 
                            key={subIndex} 
                            className="text-sm md:text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                          >
                            {subIcon}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-purple-50/0 to-blue-50/0 group-hover:from-purple-50/20 group-hover:via-purple-50/10 group-hover:to-blue-50/20 rounded-2xl transition-all duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default TechStack;
