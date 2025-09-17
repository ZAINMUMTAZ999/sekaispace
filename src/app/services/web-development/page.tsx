"use client";
import React from 'react';
import { BiSolidCustomize } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";
import { motion } from 'framer-motion';
import {
  SiMongodb,
  SiExpress,
  SiReact,
//   SiNextdotjs,
 
  SiNodedotjs,
  SiTypescript,
  SiTestinglibrary,
  SiNextui,
  SiTailwindcss
} from "react-icons/si";
import { CheckCircle2 } from 'lucide-react';

// Define a type for a single technology object for better type safety
interface Technology {
    name: string;
    icon: React.ReactNode;
}

const WebApp: React.FC = () => {
    // Array of technologies for the "What we offer" section
    const technologies: Technology[] = [
        { name: 'Ecommerce', icon: <MdOutlineComputer size={22} className="text-indigo-400" /> },
        { name: 'Custom Web Apps', icon: <BiSolidCustomize  size={22} className="text-indigo-400" /> },
        { name: 'Next.js', icon: <SiNextui size={22} className="text-indigo-400" /> },
        { name: 'React.js', icon: <SiReact size={22} className="text-indigo-400" /> },
        { name: 'TypeScript', icon: <SiTypescript size={22} className="text-indigo-400" /> },
        { name: 'Node.js', icon: <SiNodedotjs size={22} className="text-indigo-400" /> },
        { name: 'MongoDB', icon: <SiMongodb size={22} className="text-indigo-400" /> },
        { name: 'Express.js', icon: <SiExpress size={22} className="text-indigo-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} className="text-indigo-400" /> },
        { name: 'Software Testing', icon: <SiTestinglibrary size={22} className="text-indigo-400" /> },
    ];
    
    // Animation variants for container elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    // Animation variants for list items
    // const itemVariants = {
    //     hidden: { y: 20, opacity: 0 },
    //     visible: {
    //         y: 0,
    //         opacity: 1,
    //         transition: { type: 'spring', stiffness: 100 },
    //     },
    // };
    
    // --- Image URLs ---
    const islamabadImageUrl = 'https://images.unsplash.com/photo-1596495768399-9c44a2c1e4e8?q=80&w=2070&auto=format&fit=crop';
    const techImageUrl = 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop';

    return (
        <div className="w-full">
            {/* --- Hero/Introductory Section --- */}
            <div 
                className="relative w-full text-center px-4 py-20 md:py-28 bg-cover bg-center"
                style={{ backgroundImage: `url(${islamabadImageUrl})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10">
                    <motion.span 
                        className="text-base sm:text-lg text-indigo-400 font-semibold tracking-wide"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Custom & Scalable Web Applications
                    </motion.span>
                    <motion.p 
                        className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Islamabad-based firm providing secure, customizable web apps from design to deployment.
                    </motion.p>
                </div>
            </div>

            {/* --- "What we offer?" Section --- */}
            <div 
                className="relative w-full flex flex-col items-center text-center py-16 sm:py-20 px-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${techImageUrl})` }}
            >
                <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
                <div className="relative z-10 w-full flex flex-col items-center">
                    <motion.h3 
                        className="font-bold text-2xl sm:text-3xl text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Technology Stack
                    </motion.h3>
                    <motion.span 
                        className="mt-2 text-sm tracking-wider text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Modern tools for modern solutions
                    </motion.span>
                    <motion.section 
                        className="mt-8 p-4 sm:p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.ul 
                            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {technologies.map((tech) => (
                                <motion.li 
                                    key={tech.name} 
                                    className="flex items-center space-x-4 p-3 bg-gray-700 bg-opacity-70 rounded-lg"
                                    // variants={itemVariants}
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.9)', boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {tech.icon}
                                    <span className="font-medium text-white text-sm sm:text-base">{tech.name}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.section>
                </div>
            </div>
            
            {/* --- Quality and Testing Section --- */}
            <div className="w-full bg-white text-gray-800 py-16 sm:py-20 px-4">
                <motion.div 
                    className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4">
                            Commitment to Quality
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600">
                            To ensure reliability and performance, we conduct rigorous end-to-end and component-level testing. Our QA process guarantees your application is robust, secure, and ready for production.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <motion.div 
                            className="p-5 bg-indigo-500 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                           <CheckCircle2 size={48} className="text-white sm:w-16 sm:h-16"/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WebApp;
