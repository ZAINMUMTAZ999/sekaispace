"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
    Globe,          // Icon for Domain
    // Server,         // Icon for Hosting
    GitMerge,       // Icon for CI/CD
    Rocket,         // Icon for Deployment
    // CheckCircle2,   // Icon for Quality
    CloudCog,       // Icon for Cloud Solutions
    ShieldCheck,    // Icon for Security
    Zap             // Icon for Performance
} from 'lucide-react';

// Define a type for a single service/feature object
interface ServiceFeature {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const CloudSolutions: React.FC = () => {
    // Array of features for the cloud solutions section
    const features: ServiceFeature[] = [
        { 
            name: 'Domain & Hosting', 
            description: 'Secure, reliable domain registration and high-performance hosting solutions tailored to your needs.',
            icon: <Globe size={32} className="text-blue-400" /> 
        },
        { 
            name: 'CI/CD Pipelines', 
            description: 'Automated build, test, and deployment pipelines to accelerate your development lifecycle.',
            icon: <GitMerge size={32} className="text-blue-400" /> 
        },
        { 
            name: 'Cloud Deployment', 
            description: 'Effortless deployment to major cloud platforms with scalability and security built-in.',
            icon: <Rocket size={32} className="text-blue-400" /> 
        },
        { 
            name: 'Managed Security', 
            description: 'Proactive security monitoring, updates, and best practices to protect your infrastructure.',
            icon: <ShieldCheck size={32} className="text-blue-400" /> 
        },
    ];
    
    // Animation variants for container elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    // Animation variants for item elements
    // const itemVariants = {
    //     hidden: { y: 20, opacity: 0 },
    //     visible: {
    //         y: 0,
    //         opacity: 1,
    //         transition: { type: 'spring', stiffness: 100 },
    //     },
    // };
    
    // --- Image URL ---
    const heroImageUrl = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop';
    
    return (
        <div className="w-full bg-gray-900">
            {/* --- Hero Section --- */}
            <div 
                className="relative w-full text-center px-4 py-20 md:py-28 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative z-10">
                    <motion.span 
                        className="text-base sm:text-lg text-blue-400 font-semibold tracking-wide"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Robust Cloud & DevOps Solutions
                    </motion.span>
                    <motion.p 
                        className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Streamline Your Infrastructure from Development to Deployment
                    </motion.p>
                </div>
            </div>

            {/* --- Core Services Section --- */}
            <div className="w-full flex flex-col items-center text-center py-16 sm:py-20 px-4 bg-gray-900">
                <motion.h3 
                    className="font-bold text-2xl sm:text-3xl text-white mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Our Cloud Services
                </motion.h3>
                <motion.p 
                    className="mb-12 text-sm tracking-wider text-gray-400 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    We provide a complete suite of cloud services to power your applications, ensuring high availability, performance, and security.
                </motion.p>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature) => (
                        <motion.div 
                            key={feature.name} 
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center flex flex-col items-center"
                            // variants={itemVariants}
                            whileHover={{ scale: 1.05, borderColor: '#60a5fa' }} // blue-400
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="p-4 bg-gray-700 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">{feature.name}</h4>
                            <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            {/* --- Why Choose Us Section --- */}
            <div className="w-full text-black bg-white py-16 sm:py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h3 
                        className="text-2xl sm:text-3xl font-bold mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Designed for Performance and Reliability
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center">
                            <Zap size={40} className="text-blue-400 mb-3" />
                            <h4 className="text-lg font-semibold">High Performance</h4>
                            <p className="text-gray-400 mt-1">Optimized infrastructure for lightning-fast load times.</p>
                        </div>
                        {/* Item 2 */}
                        <div className="flex flex-col items-center">
                            <ShieldCheck size={40} className="text-blue-400 mb-3" />
                            <h4 className="text-lg font-semibold">Ironclad Security</h4>
                            <p className="text-gray-400 mt-1">Multi-layered security to protect your data and users.</p>
                        </div>
                        {/* Item 3 */}
                        <div className="flex flex-col items-center">
                            <CloudCog size={40} className="text-blue-400 mb-3" />
                            <h4 className="text-lg font-semibold">Expert Support</h4>
                            <p className="text-gray-400 mt-1">Dedicated support from our team of cloud specialists.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudSolutions;
