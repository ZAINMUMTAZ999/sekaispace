"use client"
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { StaticImageData } from 'next/image';

// --- PORTFOLIO COMPONENTS ---

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    imageUrls: StaticImageData[];
    altText: string;
}

// --- IMPORTANT: IMPORT YOUR LOCAL IMAGES HERE ---
// Add these imports to the top of your component file.
// Make sure the paths are correct for your folder structure.
import p1 from '../assets/projects/1(1).webp';
import p2 from '../assets/projects/1(2).webp';
import p3 from '../assets/projects/1(3).webp';
import p4 from '../assets/projects/p2 (1).webp';
import p5 from '../assets/projects/p2 (2).webp';
import p6 from '../assets/projects/p2 (3).webp';
import p7 from '../assets/projects/6 (1).webp';
import p71 from '../assets/projects/6 (2).webp';
import p72 from '../assets/projects/6 (3).webp';
import p10 from '../assets/projects/p7 (1).webp';
import p11 from '../assets/projects/p7 (2).webp';
import p12 from '../assets/projects/piz (1).webp';
import p13 from '../assets/projects/piz (2).webp';
import p14 from '../assets/projects/piz (3).webp';
import p15 from '../assets/projects/p7 (3).webp';

// ... import all other images you need

// Data using the imported image variables.
const portfolioProjects: Project[] = [
    {
        id: 1,
        title: 'JobPortalApp',
        category: 'Web-Application',
        year: '© 2025',
        // Use the imported variables here instead of URLs
        imageUrls: [
          p1,p2,p3
        ],
        altText: 'A mockup of the Backyard Bookers mobile application interface.',
    },
    {
        id: 2,
        title: 'HotelBooking',
        category: 'Website',
        year: '© 2025',
        // And here...
        imageUrls: [
         p4,p5,p6
        ],
        altText: 'Homepage of the Big Bear Kratom e-commerce website.',
    },
    {
        id: 3,
        title: 'SaloonShop',
        category: 'Web-Application',
        year: '© 2025',
        // And here...
        imageUrls: [
         p7,p71,p72
        ],
        altText: 'Homepage of the Big Bear Kratom e-commerce website.',
    },
    {
        id: 4,
        title: 'RentalCar',
        category: 'Web-Application',
        year: '© 2025',
        // And here...
        imageUrls: [
         p10,p11,p15
        ],
        altText: 'Homepage of the Big Bear Kratom e-commerce website.',
    },
    {
        id: 5,
        title: 'PizzaMax',
        category: 'Web-Application',
        year: '© 2024',
        // And here...
        imageUrls: [
         p12,p13,p14
        ],
        altText: 'Homepage of the Big Bear Kratom e-commerce website.',
    },
   
];
// const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
//     }),
// };

const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
};

const PortfolioCard = ({ project, index }: { project: Project; index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (project.imageUrls.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imageUrls.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [project.imageUrls.length]);

    return (
        <motion.div
            className="group"
            // variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
        >
            <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 transition-shadow duration-500 ease-in-out group-hover:shadow-xl">
                <div>
                    <motion.img
                        key={currentImageIndex}
                        src={project.imageUrls[currentImageIndex].src}
                        alt={`${project.altText} - Image ${currentImageIndex + 1}`}
                        className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:-translate-y-2"
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ opacity: { duration: 0.5 } }}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found';
                        }}
                    />
                </div>
                {project.imageUrls.length > 1 && (
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                        {project.imageUrls.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center text-gray-600">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm">{project.year}</span>
            </div>
        </motion.div>
    );
};

const PortfolioSection = () => (
    <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">PORTFOLIO</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Selected Works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {portfolioProjects.map((project, index) => (
                    <PortfolioCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    </section>
);


const Portfolio = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <main>
                <PortfolioSection />
               
            </main>
           
        </div>
    );
}
export default Portfolio;
