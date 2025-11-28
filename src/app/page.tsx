
// import HeroSection from "@/components/HeroSection";
// import { StaticImageData } from 'next/image';

// Import your images
// import img1 from "../app/assets/landing-page/landing (1).webp";
// import img2 from "../app/assets/landing-page/landing (2).webp";
// import img3 from "../app/assets/landing-page/landing (3).webp";
// import img4 from "../app/assets/landing-page/landing (4).webp";
// import img5 from "../app/assets/landing-page/landing (5).webp";



import Portfolio from "./components/Portfolio";
// import YearsExperience from "./components/YearsExperience";
// import  GetallReviews  from "./components/GetallReviews";
import WorkingMethodology from "./components/WorkingMethodolgy";
// import { BlogsLaningPage } from "./components/BlogsLaningPage";
import TechStack from "./components/TechStack";
import GetallReviews from "./components/GetallReviews";
import {HeroSection} from "./components/HeroSection";
import YearsExperience from './components/YearsExperience';
import { BlogsLaningPage } from './components/BlogsLaningPage';
import FaqSection from "./components/Faqs";
import { ClientHeader } from "./components/ClientHeader";
// import { Metadata } from 'next';
// import HeroSection from "./components/HeroSection";
// import Portfolio from "@/components/Portfolio";



// const imageList:StaticImageData[] = [img1, img2, img3, img4, img5];

export default function Home() {
  return (
  <section className=" overflow-hidden bg-white">

      <HeroSection />
      <ClientHeader />



      <TechStack/>  
      <WorkingMethodology/>
      <Portfolio/>
      
      {/* <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      > */}
        <h1 className="flex justify-center text-3xl  font-extrabold tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">

            Customer&apos;s Reviews
          </span>
        </h1>
      {/* </motion.div> */}
      
      <GetallReviews/>
      <YearsExperience/>
      <BlogsLaningPage
      />
      <FaqSection/>
      {/* Add other sections here as needed */}
    </section>
  );
};

// export default LandingPage;