"use client"
import React from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// Defining the types for the props of the AnimatedCounter component.
// This resolves the "implicitly has an 'any' type" error.
type AnimatedCounterProps = {
    to: number;
    styleType: 'outline' | 'solid';
    suffix?: string; // The question mark makes this prop optional.
};

// Helper component for the animated number counter
// It smoothly animates a number from 0 to the target value when it comes into view.
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, styleType, suffix }) => {
    // `useMotionValue` creates a motion value, starting at 0.
    const count = useMotionValue(0);
    // `useTransform` creates a new motion value by transforming another, here we round the count.
    const rounded = useTransform(count, (latest) => Math.round(latest));
    // `useRef` to get a reference to the component's DOM element.
    const ref = React.useRef(null);
    // `useInView` detects when the referenced element enters the viewport.
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // `useEffect` hook to start the animation when `isInView` becomes true.
    React.useEffect(() => {
        if (isInView) {
            // The `animate` function from Framer Motion starts the animation.
            const controls = animate(count, to, {
                duration: 2, // Animation duration in seconds
                ease: "easeOut", // A gentle easing function
            });
            // The returned function is a cleanup function that stops the animation if the component unmounts.
            return () => controls.stop();
        }
    }, [isInView, count, to]);

    // Define styles based on the 'styleType' prop to match the reference image.
    const baseStyle = "text-7xl md:text-8xl lg:text-9xl font-sans tracking-tighter";
    const typeStyle = styleType === 'outline'
        ? 'font-extralight text-gray-900' // Using a light font weight for the "outline" effect
        : 'font-bold text-black';         // Using a bold font for the "solid" effect

    return (
        // The `ref` is attached here to the element we want to track.
        <p className={`${baseStyle} ${typeStyle}`} ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix && <span>{suffix}</span>}
        </p>
    );
};


// Main component, now updated with a light theme and new animations.
const YearsExperience = () => {

    // Stats data, including the styleType for each number to match the image.
    const stats = [
        { value: 1, label: "Year of Experience", suffix: "+", styleType: 'outline' },
        { value: 10, label: "Satisfied Clients", suffix: "+", styleType: 'solid' },
        { value: 15, label: "Technologies Mastered", suffix: "+", styleType: 'outline' },
        { value: 24, label: "Service & Support", suffix: "/7", styleType: 'solid' }
    ] as const;

    return (
        // Using a clean, professional light gray background.
        <section className="w-full bg-gray-50 text-gray-900 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
               

                {/* Grid for Statistics - now 2 columns on mobile and 4 on larger screens for better layout */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, index) => (
                         <motion.div key={index} className="flex flex-col items-center text-center" 
                        //  variants={itemVariants}
                         >
                            <AnimatedCounter to={stat.value} styleType={stat.styleType} suffix={stat.suffix} />
                            <p className="text-base text-gray-500 mt-2 max-w-[180px] mx-auto">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// Animation variants for the container to stagger the animation of its children.
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Animation variants for each individual stat item to fade and slide in.
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default YearsExperience;
