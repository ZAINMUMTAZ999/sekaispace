import Image from "next/image"
import { Button } from "./ui/button"


export default function HeroSection() {
  return (
    <section className="min-h-[72vh] bg-gray-900 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-[#AE2FE0]/60 via-[#AE2FE0]/20 to-transparent pointer-events-none" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center relative mt-16">
        {/* Left content */}
        <div className="w-full lg:w-[65%] py-12 lg:py-20">
          <div className="max-w-[680px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Engineering Intelligent & Scalable Digital Solutions
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8">
              We are a leading software development company engineering
              next-generation digital solutions, embedding AI and data-driven
              intelligence into workflows that fuel efficiency and unlock new
              growth opportunities.
            </p>

            <Button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 text-base hover:cursor-pointer">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right media */}
        <div className="w-full lg:w-[45%] relative h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
        
          <Image
            src="/video.gif"
            alt="Hero visual"
            fill
            className="object-cover  rounded-lg"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
            unoptimized
          />

        </div>
      </div>
    </section>
  )
}
