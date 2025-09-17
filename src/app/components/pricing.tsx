



    "use client";
    import { motion } from "framer-motion";
    import Link from "next/link";
    import { useForm } from "react-hook-form";
    import { Check, Mail, MapPin, Phone, X, Send } from "lucide-react";
    import { contactUsApi, contactUsTypes } from "../Api";
    import WhatsAppLinkButtonPricing from "@/app/components/ContactPricing";
    import { useMutation } from "@tanstack/react-query";
    import { AppContext } from "../context/AppNotify";
    import { useRouter } from "next/navigation";
    import { useEffect } from "react";

    export default function PricingAndContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<contactUsTypes>();
    const { showToast } = AppContext();
    const router = useRouter();

    const { mutate: apiMutate, isPending: isLoading } = useMutation({
        mutationFn: contactUsApi,
        onSuccess: async () => {
        showToast({ type: "SUCCESS", message: "Message Sent!" });
        router.push("/");
        },
        onError: (error: Error) => {
        showToast({ type: "ERROR", message: error?.message });
        },
    });

    const onSubmits = handleSubmit((data) => apiMutate(data));

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        }
    }, []);

    const pricingPlans = [
        {
        name: "Basic",
        price: "Starting from 25,000 PKR",
        description:
            "Ideal for personal projects or small businesses needing a professional online presence.",
        features: [
            {
            text: "4 to 5 Pages Website (Home, Contact, About, Products/Rooms)",
            included: true,
            },
            { text: "Responsive on all devices & Fast Loading", included: true },
            { text: "Free Maintenance 24/7", included: true },
            { text: "User Authentication", included: true },
            { text: "WhatsApp Chat Integration", included: true },
            { text: "Google Maps", included: true },
            { text: "7 Days Free Support", included: true },
        ],
        isPopular: false,
        },
        {
        name: "Standard",
        price: "Starting from 50,000 PKR",
        description:
            "Perfect for growing businesses that require more functionality and control.",
        features: [
            { text: "Everything in Basic plus:", included: true },
            { text: "Role-Based Access", included: true },
            { text: "Admin Panel", included: true },
            { text: "Custom Dashboard", included: true },
            { text: "Interactive Charts", included: true },
            { text: "On-Page SEO", included: true },
            { text: "Custom Domain Setup", included: true },
            { text: "6 months Free Maintenance", included: true },
            { text: "Full Source Code", included: true },
            { text: "Revisions", included: true },
        ],
        isPopular: true,
        },
        {
        name: "Enterprise Plan",
        price: "Custom Web Apps",
        description: "For Startups & growing companies needing full-scale apps",
        features: [
            { text: "Everything in Basic & Standard plus:", included: true },
            { text: "Custom Web Apps", included: true },
            { text: "Payment Gateway Integration", included: true },
            { text: "Multi-user Dashboards", included: true },
            { text: "Reports & Analytics", included: true },
            { text: "Dedicated Support Plan", included: true },
        ],
        isPopular: false,
        },
    ];

    return (
        <main className="bg-gray-50 min-h-screen">
        {/* --- Pricing Section --- */}
        <section className="w-full bg-gray-50 text-gray-900 py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-8 sm:mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-3 sm:mb-4">
                Find the Perfect Plan for You
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Transparent pricing for projects of all sizes. Let&apos;s build
                something amazing together.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                {pricingPlans.map((plan, index) => (
                <motion.div
                    key={index}
                    className={`relative border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col h-full ${
                    plan.isPopular 
                        ? "border-blue-500 shadow-lg sm:shadow-xl bg-white" 
                        : "border-gray-200 shadow-md bg-white"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="flex-grow flex flex-col">
                    {plan.isPopular && (
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 sm:px-4 sm:py-1 rounded-full uppercase whitespace-nowrap">
                            Most Popular
                        </span>
                        </div>
                    )}
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-600 underline tracking-wide">
                        {plan.name}
                    </h3>
                    
                    <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 min-h-[32px] sm:min-h-[40px] leading-relaxed">
                        {plan.description}
                    </p>
                    
                    <div className="mt-3 sm:mt-4">
                        <span className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 break-words">
                        {plan.price}
                        </span>
                    </div>

                    <div className="flex-grow mt-4 sm:mt-6">
                        <ul className="space-y-2 sm:space-y-3">
                        {plan.features.map((feature, fIndex) => (
                            <li
                            key={fIndex}
                            className="flex items-start text-xs sm:text-sm md:text-base"
                            >
                            {feature.included ? (
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                            ) : (
                                <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                            )}
                            <span
                                className={`leading-relaxed ${
                                feature.included 
                                    ? "text-gray-800" 
                                    : "text-gray-500 line-through"
                                }`}
                            >
                                {feature.text}
                            </span>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="mt-6 sm:mt-8 space-y-2">
                        <Link
                        href="#contact-form"
                        className={`block w-full text-center font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                            plan.isPopular
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-blue-400 text-white hover:bg-blue-500"
                        }`}
                        >
                        Get Started
                        </Link>
                        <div className="w-full">
                        <WhatsAppLinkButtonPricing
                            phoneNumber="923246288217"
                            message="Hi, I'm interested in your services!"
                        />
                        </div>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact-form" className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-8 sm:mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-3 sm:mb-4">
                Let&apos;s Start a Project
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Have a question or a project in mind? Fill out the form below and
                we&apos;ll get back to you.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto">
                {/* Contact Form */}
                <motion.div
                className="w-full lg:w-2/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                >
                <form
                    onSubmit={onSubmits}
                    className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                        Full Name
                        </label>
                        <input
                        type="text"
                        {...register("name", {
                            required: "Full name is required",
                        })}
                        className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                        placeholder="John Doe"
                        />
                        {errors.name && (
                        <span className="text-red-500 text-xs mt-1 block">
                            {errors.name.message}
                        </span>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email Address
                        </label>
                        <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                            },
                        })}
                        className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                        placeholder="you@example.com"
                        />
                        {errors.email && (
                        <span className="text-red-500 text-xs mt-1 block">
                            {errors.email.message}
                        </span>
                        )}
                    </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                        Phone Number
                        </label>
                        <input
                        type="tel"
                        {...register("phoneNumber", {
                            required: "Phone number is required",
                        })}
                        className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                        placeholder="+92 300 1234567"
                        />
                        {errors.phoneNumber && (
                        <span className="text-red-500 text-xs mt-1 block">
                            {errors.phoneNumber.message}
                        </span>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                        Interested In
                        </label>
                        <select
                        {...register("interestedIn", {
                            required: "Please select an option",
                        })}
                        className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                        >
                        <option value="">Select a service...</option>
                        <option value="Basic Plan">Basic Plan</option>
                        <option value="Standard Plan">Standard Plan</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Other">Other</option>
                        </select>
                        {errors.interestedIn && (
                        <span className="text-red-500 text-xs mt-1 block">
                            {errors.interestedIn.message}
                        </span>
                        )}
                    </div>
                    </div>

                    <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Your Message
                    </label>
                    <textarea
                        {...register("message", {
                        required: "Message is required",
                        })}
                        rows={4}
                        className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm sm:text-base"
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                        <span className="text-red-500 text-xs mt-1 block">
                        {errors.message.message}
                        </span>
                    )}
                    </div>

                    <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                    </div>
                </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                className="w-full lg:w-1/3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                >
                <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl h-full">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
                    <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-semibold text-sm sm:text-base">Our Office</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Bank Square Plaza, F-11 Markaz, Islamabad, Pakistan
                        </p>
                        </div>
                    </div>
                    <a
                        href="mailto:mzainmumtaz99@gmail.com"
                        className="flex items-start hover:text-blue-600 transition-colors"
                    >
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-semibold text-sm sm:text-base">Email Us</h4>
                        <p className="text-gray-600 text-xs sm:text-sm break-all">
                            mzainmumtaz99@gmail.com
                        </p>
                        </div>
                    </a>
                    <a
                        href="tel:+923246288217"
                        className="flex items-start hover:text-blue-600 transition-colors"
                    >
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-semibold text-sm sm:text-base">Call Us</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">+92-3246288217</p>
                        </div>
                    </a>
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </section>
        </main>
    );
    }