import Portfolio from "./components/Portfolio";
import WorkingMethodology from "./components/WorkingMethodolgy";
import TechStack from "./components/TechStack";
import GetallReviews from "./components/GetallReviews";
import { HeroSection } from "./components/HeroSection";
import YearsExperience from "./components/YearsExperience";
import { BlogsLaningPage } from "./components/BlogsLaningPage";
import FaqSection from "./components/Faqs";
import { ClientHeader } from "./components/ClientHeader";

export default function Home() {
  return (
    <section className=" overflow-hidden bg-white">
      <HeroSection />

      <ClientHeader />

      <TechStack />
      <WorkingMethodology />
      <Portfolio />

      <h1 className="flex justify-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide tracking-tight text-gray-900">
        <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
          Customer&apos;s Reviews
        </span>
      </h1>

      <GetallReviews />
      <YearsExperience />
      <BlogsLaningPage />
      <FaqSection />
    </section>
  );
}
