"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {  TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import { Link } from 'react-router-dom';




// Define the type for a core value
// interface CoreValue {
//   title: string;
//   description: string;
//   icon: React.ElementType;
// }



// Replace this with your company's core values
// const coreValues: CoreValue[] = [
//   { 
//     title: 'Innovation', 
//     description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.', 
//     icon: Target 
//   },
//   { 
//     title: 'Customer-Centric', 
//     description: 'Our clients are at the heart of everything we do. Their success is our success.', 
//     icon: Users 
//   },
//   { 
//     title: 'Integrity', 
//     description: 'We believe in transparent, honest, and ethical practices in all our engagements.', 
//     icon: Briefcase
//   },
//   { 
//     title: 'Vision', 
//     description: 'We are forward-thinking, always anticipating the future needs of the market and our clients.', 
//     icon: Eye 
//   },
// ];


// --- ANIMATION VARIANTS for Framer Motion ---

// Parent container variant to orchestrate animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
      delayChildren: 0.3,
    },
  },
};

// Child item variant for fade-in-up effect
// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100,
//       damping: 12,
//     },
//   },
// };


// --- CORE VALUE CARD COMPONENT ---
// const CoreValueCard: React.FC<{ value: CoreValue }> = ({ value }) => (
//     <motion.div 
//         // variants={itemVariants}
//         className="bg-gray-800/60 p-6  rounded-2xl flex flex-col items-center text-center border border-gray-700/50"
//     >
//         <div className="bg-indigo-500/20 p-4 rounded-full mb-4 border border-indigo-400/50">
//            <value.icon className="w-8 h-8 text-indigo-300" />
//         </div>
//         <h3 className="text-xl font-semibold text-black mb-2">{value.title}</h3>
//         <p className="text-black text-sm leading-relaxed">{value.description}</p>
//     </motion.div>
// );


// --- MAIN ABOUT US COMPONENT ---
export default function About () {
  return (
    <div className=" font-sans bg-white text-black p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.section
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-4">
            <span className="text-indigo-700">Sekai</span>Space
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-black">
            We are a passionate team of innovators, creators, and problem-solvers dedicated to building the future of technology.
          </p>
        </motion.section>

        {/* Our Story & Mission Section */}
        <motion.section
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-20 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-2"
        //    variants={itemVariants}
           >
            <Image
              src="https://placehold.co/600x400/1E293B/3B82F6?text=Our+Journey" 
              alt="Our journey illustrated" 
              height={12}
              width={12}
              // fill
              quality={100}
              unoptimized={true}
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
           
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/FFFFFF?text=Image'; }}
            />
          </motion.div>
          <motion.div className="lg:col-span-3" 
          
        //   variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Story</h2>
            <p className="text-black font-serif mb-4 leading-relaxed">
              Founded in 2024, SekaiSpace started with a simple yet powerful idea: to leverage technology to solve complex business challenges. Our journey began in a small garage, fueled by caffeine and a shared vision. We&apos;ve since grown into a dynamic company, but our core mission remains the same.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to empower businesses with transformative digital solutions. We strive to create intuitive, efficient, and scalable products that not only meet but exceed our clients&apos; expectations, driving growth and fostering innovation in their respective industries.
            </p>
          </motion.div>
        </motion.section>
        
        {/* Core Values Section */}
        <section className="mb-20 md:mb-24">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Our Core Values
            </motion.h2>
            <motion.div 
                className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* {coreValues.map((value, index) => (
             
                    <span className="text-black">

                        <CoreValueCard  key={index} value={value} />
                    </span>
                ))} */}
            </motion.div>
        </section>


        {/* Join Our Team Section */}
        <motion.section
          className="text-center bg-gray-800/50  rounded-2xl p-8 sm:p-10 md:p-16 border border-indigo-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        //   variants={itemVariants}
        >
          <motion.div
            className="flex justify-center items-center mb-6"
            animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
            }}
          >
             <TrendingUp className="w-16 h-16 text-indigo-800" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">We&apos;re Growing!</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-black mb-8">
            We are committed to expanding our workforce and aim to surpass 150 employees by the end of this year, reflecting our continued growth and dedication to excellence.
          </p>
          {/* <motion.a
            href="/careers" // Point this to your careers page
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 sm:px-8 rounded-lg shadow-lg text-base"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          > */}
            <Link href="/contact"   className="mt-6 p-4 rounded-full w-full bg-blue-600 hover:bg-blue-700 text-white">
            Join Our Team
            </Link>
          {/* </motion.a> */}
        </motion.section>

      </div>
    </div>
  );
};

// export default AboutUsSection;
