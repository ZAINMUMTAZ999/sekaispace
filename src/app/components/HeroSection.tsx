// "use client";
// // /* eslint-disable react-hooks/rules-of-hooks */

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// // import { Link } from "react-router-dom";
// import { StaticImageData } from 'next/image';


// interface HeroSectionProps {
//   images: StaticImageData[];
//   isLoading?: boolean;
// }

// // Skeleton Loading Component (No changes needed here)
// const HeroSkeleton: React.FC = () => (
//   <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
//     <div className="absolute inset-0 pointer-events-none">
//       <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
//     </div>
//     <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-center">
//         <div className="md:col-span-2 flex flex-col justify-center space-y-8 animate-pulse">
//           <div className="space-y-4">
//             <div className="h-14 bg-gray-200 rounded-lg w-full"></div>
//             <div className="h-14 bg-gray-200 rounded-lg w-4/5"></div>
//           </div>
//           <div className="space-y-3">
//             <div className="h-5 bg-gray-200 rounded w-full"></div>
//             <div className="h-5 bg-gray-200 rounded w-5/6"></div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <div className="h-16 bg-gray-200 rounded-2xl w-48"></div>
//             <div className="h-16 bg-gray-200 rounded-2xl w-48"></div>
//           </div>
//         </div>
//         <div className="hidden md:flex md:col-span-3 h-[600px] items-center justify-center animate-pulse">
//             <div className="w-full h-full max-h-[550px] bg-gray-200 rounded-3xl transform -rotate-y-3"></div>
//         </div>
//       </div>
//     </div>
//   </section>
// );


// const HeroSection: React.FC<HeroSectionProps> = ({ images, isLoading = false }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToImage = (index: number) => setCurrentImageIndex(index);

//   if (isLoading) {
//     return <HeroSkeleton />;
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 }
//     }
//   };

//   // const itemVariants = {
//   //   hidden: { y: 20, opacity: 0 },
//   //   visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
//   // };

//   return (
//     <section className="relative -mt-32  min-h-screen   flex items-center  py-16 md:py-0
    
    
//     ">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-blob" />
//         <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       {/* UPDATED LINE: 
//         The 'max-w-7xl' class has been changed to 'max-w-screen-2xl' to make the content section wider on large screens.
//       */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-screen-2xl">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-12 lg:gap-x-16 items-center">
          
//           {/* --- Left Content: Staggered Animation --- */}
//           <motion.div
//             className="md:col-span-2 text-center md:text-left"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div 
//             // variants={itemVariants} 
//             className="inline-flex items-center bg-purple-100/60 text-purple-700 font-medium text-sm px-4 py-1.5 rounded-full mb-6">
//               We build scalable, modern solutions for growing startups.
//             </motion.div>

//             <motion.h1
//               // variants={itemVariants}
//                className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
//             >
//             The Tech Partner for Your
//   <span className="block text-4xl md:text-6xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-extrabold mt-1">
//     Startup Success
//   </span>
//             </motion.h1>
//            <motion.p
//   // variants={itemVariants}
//   className="mt-4 text-base md:text-lg text-slate-600 max-w-md mx-auto md:mx-0"
// >
//   From idea to launch, we deliver complete digital solutions to help your startup grow, scale, and lead.
// </motion.p>


//             <motion.div
//               // variants={itemVariants}
//               className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               <Link href="/contact">
//                 <motion.button
//                   className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
//                   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//                 >
//                   Get Started Now
//                 </motion.button>
//               </Link>
//               <Link href="/blogs">
//                   <motion.button
//                   className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-bold text-lg rounded-xl hover:border-purple-400 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
//                   whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//                 >
//                   Learn more
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </motion.div>
          
//           {/* --- Right Content: 3D Perspective Image --- */}
//           <div className="md:col-span-3" style={{ perspective: '1500px' }}>
//           <motion.div
//   initial={{ opacity: 0, scale: 0.96, y: 40 }}
//   animate={{ opacity: 1, scale: 1, y: 0 }}
//   transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
//   className="relative w-full h-[300px] sm:h-[450px] lg:h-[520px]"
// >

//               {/* MODIFIED: Sophisticated glow effect */}
//               <div className="absolute inset-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-20 blur-3xl -z-10"></div>

//               <AnimatePresence>
//                 <motion.img
//                   key={currentImageIndex}
//               src={images[currentImageIndex].src}
//                   alt={`Showcase ${currentImageIndex + 1}`}
//                   className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   style={{ transformStyle: 'preserve-3d' }}
//                 />
//               </AnimatePresence>

//               {/* Image Indicators */}
//               <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
//                 {images.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       index === currentImageIndex
//                         ? "bg-white/90 w-8 shadow"
//                         : "bg-white/40 hover:bg-white/60 w-2.5"
//                     }`}
//                     aria-label={`Go to image ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// "use client"
// import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
// #AE2FE0
export const HeroSection = () => {
  return (
    <div className="min-h-[72vh] -mt-2  bg-gray-900 flex justify-between items-center px-4 rounded-x relative overflow-hidden">
      {/* Purple shadow overlay from right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-linear-to-l from-[#AE2FE0]/60 via-[#AE2FE0]/20 to-transparent pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row w-full container mx-auto relative z-10">
        {/* Left Side - 70% on lg, full width on smaller screens */}
        <div className="w-full lg:w-[70%] p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 lg:mt-22">
          <div className="max-w-[700px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
              Engineering Intelligent & Scalable Digital Solutions
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg">
              We are a leading software development company engineering next-generation
              digital solutions, embedding AI and data-driven intelligence into workflows
              that fuel efficiency and unlock new growth opportunities.
            </p>
            <Link href="/contact"
              className="relative overflow-hidden bg-gray-700 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md
                         hover:bg-gray-600 transition-all duration-500 group hover:cursor-pointer text-sm sm:text-base"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Responsive video section */}
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start relative lg:-ml-16 mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/video.gif"
              alt="Animation"
              fill
              className="object-cover rounded-lg"
              unoptimized
              quality={100}
              priority
            />
{/* <img
  src="/video.gif"
  alt="Animation"
  className="object-cover rounded-lg w-full h-full"
/> */}
          </div>
        </div>
      </div>
    </div>
  )
}