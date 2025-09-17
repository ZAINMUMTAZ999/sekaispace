"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
    Smartphone,     // Icon for Android
    Feather,        // Icon for Flutter
    Flame,          // Icon for Firebase
    Database,       // Icon for SQLite/PaperDB
    Package,        // Icon for SDKs
    FileCode,       // Icon for Java/Kotlin
    // CheckCircle2,   // Icon for Testing
    Wrench,         // Icon for Custom Apps
    Home,           // Icon for Bottom Nav
    LayoutGrid,     // Icon for Bottom Nav
    User,           // Icon for Bottom Nav
    Wifi,           // Icon for Status Bar
    BatteryFull     // Icon for Status Bar
} from 'lucide-react';

// Define a type for a single technology object for better type safety
interface Technology {
    name: string;
    icon: React.ReactNode;
}

const MobileApp: React.FC = () => {
    // Array of technologies for the mobile app development section
    const technologies: Technology[] = [
        { name: 'Android Native', icon: <Smartphone size={22} className="text-emerald-400" /> },
        { name: 'Flutter', icon: <Feather size={22} className="text-emerald-400" /> },
        { name: 'Java', icon: <FileCode size={22} className="text-emerald-400" /> },
        { name: 'Kotlin', icon: <FileCode size={22} className="text-emerald-400" /> },
        { name: 'Firebase', icon: <Flame size={22} className="text-emerald-400" /> },
        { name: 'Custom SDKs', icon: <Package size={22} className="text-emerald-400" /> },
        { name: 'SQLite', icon: <Database size={22} className="text-emerald-400" /> },
        { name: 'PaperDB', icon: <Database size={22} className="text-emerald-400" /> },
        { name: 'Custom Apps', icon: <Wrench size={22} className="text-emerald-400" /> },
    ];
    
    // Animation variants for container elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.5 },
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
    const heroImageUrl = 'https://images.unsplash.com/photo-1607703703520-bb2a8e3a21f3?q=80&w=2070&auto=format&fit=crop';
    const qaImageUrl = 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2070&auto=format&fit=crop';
    
    return (
        <div className="w-full">
            {/* --- Hero/Introductory Section --- */}
            <div 
                className="relative w-full text-center px-4 py-20 md:py-28 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10">
                    <motion.span 
                        className="text-base sm:text-lg text-emerald-400 font-semibold tracking-wide"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Innovative & High-Performance Mobile Applications
                    </motion.span>
                    <motion.p 
                        className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        From native Android development to cross-platform Flutter apps, we build solutions that perform.
                    </motion.p>
                </div>
            </div>

            {/* --- Mobile Tech Stack Section with Phone Frame --- */}
            <div className="relative w-full flex flex-col items-center text-center py-16 sm:py-20 px-4 bg-gray-900 overflow-hidden">
                 <motion.h3 
                    className="font-bold text-2xl sm:text-3xl text-white mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Mobile Development Technologies
                </motion.h3>
                <motion.span 
                    className="mb-10 text-sm tracking-wider text-gray-400"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    The right tools for every challenge
                </motion.span>

                {/* --- Animated Mobile Phone Frame --- */}
                <motion.div
                    className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] sm:h-[600px] w-[280px] sm:w-[300px] shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="w-[14px] h-[4px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[100px] rounded-s-lg"></div>
                    <div className="w-[14px] h-[36px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[140px] rounded-s-lg"></div>
                    <div className="w-[14px] h-[36px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[190px] rounded-s-lg"></div>
                    <div className="w-[14px] h-[52px] bg-gray-800 dark:bg-gray-800 absolute -end-[12px] top-[140px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 flex flex-col">
                        {/* --- Phone Status Bar --- */}
                        <div className="w-full h-8 px-4 flex justify-between items-center text-white bg-gray-900 z-10">
                            <span className="text-xs font-semibold">9:41</span>
                            <div className="flex items-center space-x-1">
                                <Wifi size={14} />
                                <BatteryFull size={14} />
                            </div>
                        </div>

                        {/* --- Content Inside the Phone --- */}
                        <div className="w-full flex-1 p-3 overflow-y-auto">
                            <motion.ul 
                                className="grid grid-cols-1 gap-3"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {technologies.map((tech) => (
                                    <motion.li 
                                        key={tech.name} 
                                        className="flex items-center space-x-3 p-3 bg-gray-700 bg-opacity-50 rounded-lg"
                                        // variants={itemVariants}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.9)' }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    >
                                        {tech.icon}
                                        <span className="font-medium text-white text-sm">{tech.name}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                        
                        {/* --- Phone Bottom Navigation Bar --- */}
                        <div className="w-full h-16 px-4 flex justify-around items-center text-gray-400 bg-gray-800 border-t border-gray-700 z-10">
                            <div className="flex flex-col items-center text-emerald-400">
                                <Home size={24} />
                                <span className="text-xs mt-1">Home</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <LayoutGrid size={24} />
                                <span className="text-xs mt-1">Apps</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <User size={24} />
                                <span className="text-xs mt-1">Profile</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* --- Quality and Testing Section --- */}
            <div className="w-full bg-white text-gray-800 py-16 sm:py-20 px-4">
                <motion.div 
                    className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-4">
                            Uncompromising Quality & Testing
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Every app undergoes rigorous testing across multiple devices. We combine automated tests with manual QA to ensure a bug-free, smooth, and secure user experience, ready for the App Store.
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm md:w-2/5">
                        <motion.img 
                            src={qaImageUrl}
                            alt="Mobile App Quality Assurance"
                            className="rounded-xl shadow-2xl object-cover w-full h-full"
                            whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px -10px rgba(0,0,0,0.3)" }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MobileApp;
