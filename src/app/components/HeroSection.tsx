
import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <div className="min-h-[72vh] -mt-2  bg-gray-900 flex justify-between items-center px-4 rounded-x relative overflow-hidden">
      {/* Purple shadow overlay from right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-linear-to-l from-[#AE2FE0]/60 via-[#AE2FE0]/20 to-transparent pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row w-full container mx-auto relative z-10">
        {/* Left Side - 70% on lg, full width on smaller screens */}
        <div className="w-full lg:w-[70%] p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 lg:mt-22">
          <div className="max-w-[700px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
              Engineering Intelligent & Scalable Digital Solutions
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg">
              We  leading software development company engineering next-generation
              digital solutions, embedding AI and data-driven intelligence into workflows
              that fuel efficiency and unlock new growth opportunities.
            </p>
            <Link href="/contact"
              className="relative overflow-hidden bg-gray-700 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md
                         hover:bg-gray-600 transition-all duration-500 group hover:cursor-pointer text-sm sm:text-base"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Responsive video section */}
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-start relative lg:-ml-16 mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/video.gif"
              alt="Animation"
              fill
              className="object-cover rounded-lg"
              unoptimized
              quality={100}
              priority
            />
{/* <img
  src="/video.gif"
  alt="Animation"
  className="object-cover rounded-lg w-full h-full"
/> */}
          </div>
        </div>
      </div>
    </div>
  )
}