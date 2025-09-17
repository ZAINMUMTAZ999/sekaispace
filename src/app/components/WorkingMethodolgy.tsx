"use client"
import {
  BarChart3, Palette, Code,  Users, Lightbulb, Settings, Globe,
} from 'lucide-react';
  
import { motion } from 'framer-motion';
import { SiTestinglibrary } from 'react-icons/si';

const WorkingMethodology = () => {
  const methodologySteps = [
    {
      id: '01',
      title: 'Product Analysis',
      description: 'We assess your product based on market trends and pricing to evaluate its potential lifespan in the market. Our comprehensive analysis includes competitor research, market positioning, and scalability assessment.',
      icon: BarChart3,
      color: 'from-cyan-400 to-cyan-600',
      shadowColor: 'shadow-[0_0_15px_#22d3ee]',
    },
    {
      id: '02',
      title: 'Wireframe or UI/UX Design',
      description: 'We propose solutions or improvements for your product through UI/UX design to boost creativity and user engagement. Our design process focuses on user-centered design principles and modern aesthetics.',
      icon: Palette,
      color: 'from-blue-400 to-blue-600',
      shadowColor: 'shadow-[0_0_15px_#3b82f6]',
    },
    {
      id: '03',
      title: 'Product Development',
      description: 'We create high-quality, customized software designed to meet your specific needs and seamlessly support your business goals. Using cutting-edge technologies and best practices for optimal performance.',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      shadowColor: 'shadow-[0_0_15px_#a855f7]',
    },
    {
      id: '04',
      title: 'Product Testing',
      description: 'Our team conducts exhaustive testing to guarantee your product\'s reliability, quality, cost-efficiency, and minimal post-launch maintenance. We ensure comprehensive coverage across all functionality.',
      icon: SiTestinglibrary,
      color: 'from-pink-400 to-pink-600',
      shadowColor: 'shadow-[0_0_15px_#ec4899]',
    },
    {
      id: '05',
      title: 'Future Cooperation',
      description: 'Our team will assist in resolving any bugs or technical issues while providing ongoing support, maintenance, and feature enhancements to ensure long-term success of your product.',
      icon: Users,
      color: 'from-orange-400 to-red-500',
      shadowColor: 'shadow-[0_0_15px_#f97316]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Stylish Heading */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                Our Working Methodology
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven 5-step process that transforms your ideas into market-ready solutions
            </p>
          </motion.div>
        </div>

        {/* Methodology Cards */}
        {/* <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-12 mb-16"> */}
   
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-12 mb-16">
          {methodologySteps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <motion.div 
                key={step.id} 
                className="relative group "
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connecting Line */}
                {index < methodologySteps.length - 1 && (
                  <div className="hidden xl:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
                )}

                {/* Step Container */}
                <div className="relative z-10  bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group-hover:border-gray-200 sm:max-h-[300px] md:min-h-[700px] flex flex-col w-72 rounded-2xl md:rounded-full">
                  {/* Step Number Circle */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center relative overflow-hidden ${step.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="absolute inset-1 rounded-full bg-white opacity-20"></div>
                      <span className="text-white font-bold text-2xl relative z-10">{step.id}</span>
                      <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-ping group-hover:animate-pulse"></div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 md:w-24 md:h:24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300 ">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4  border-t border-gray-100">
                    <div className={`w-16 h-2 bg-gradient-to-r ${step.color} rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        

        {/* Decorative Line Under Cards */}
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-8 h-8 border-2 border-blue-300 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            <div className="w-6 h-6 bg-purple-300 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-blue-300 relative animate-spin" style={{animationDuration: '20s'}}>
          <div className="absolute inset-4 rounded-full border-2 border-blue-200"></div>
          <div className="absolute inset-8 rounded-full border border-blue-100"></div>
        </div>
      </div>
      <div className="absolute top-10 right-10 w-24 h-24 opacity-20">
        <Settings className="w-full h-full text-gray-400 animate-spin" style={{animationDuration: '15s'}} />
        <Globe className="absolute top-2 right-2 w-8 h-8 text-blue-400 animate-pulse" />
      </div>
      <div className="absolute bottom-10 left-10 w-20 h-20 opacity-15">
        <div className="relative">
          <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -top-1 -right-3 w-3 h-3 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-3 left-1 w-5 h-5 bg-purple-300 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
      <div className="absolute bottom-20 right-20 w-32 h-32 opacity-20">
        <div className="relative">
          <Lightbulb className="w-24 h-24 text-yellow-400 fill-current animate-pulse" />
          <div className="absolute -top-2 -right-2 w-8 h-1 bg-gray-400 rotate-45"></div>
          <div className="absolute -bottom-1 -left-3 w-6 h-1 bg-gray-400 -rotate-12"></div>
          <div className="absolute top-8 -right-4 w-4 h-1 bg-gray-400 rotate-12"></div>
        </div>
      </div>

      {/* Enhanced Pulses */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default WorkingMethodology;