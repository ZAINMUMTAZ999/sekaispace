"use client"
import { useQuery } from '@tanstack/react-query'; // Assuming you are using 'react-query'
// import { addBlogTypes } from '../../../backend/src/models/addBlog.models'; // Adjust the path as per your project structure
import {addBlogTypes} from "../Api";
import { motion } from 'framer-motion';
// Assuming your allBlogsApi is defined in "@/Api"
import { allBlogsApi } from '../Api';
import Link from 'next/link';
import Image from 'next/image';
// import { Link } from 'react-router-dom';





// Helper function to format the date
const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = monthNames[date.getMonth()];

  // Ensure day is always two digits (e.g., 05 for May 5th)
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${formattedDay}-${month}-${year}`;
};


export const BlogsLaningPage = () => {
  const {
    data: displayedBlogs,
    isLoading,
    error,
  } = useQuery<addBlogTypes[], Error>({
    queryKey: ['allBlogs'],
    queryFn: allBlogsApi,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48 text-lg text-gray-700">
        <BlogsLandingPageSkeleton/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-48 text-lg text-red-600">
        Error loading blogs: {error.message}
      </div>
    );
  }

  // Slice to get only the first 3 blogs, as per the image
//   const top3Blogs = displayedBlogs?.slice(0, 3);
const top3Blogs = displayedBlogs
  ?.slice() // create a shallow copy to avoid mutating the original array
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);


  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* "Latest Blogs" Header similar to the image */}
       <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                Latest Blogs
              </span>
              {/* <span
                className="block h-1 w-1/2 mx-auto mt-3 rounded-full animate-pulse
                  bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500
                  shadow-[0_0_10px_#9333ea,0_0_20px_#3b82f6,0_0_30px_#06b6d4]"
              /> */}
            </h1>
          </motion.div>
      {top3Blogs && top3Blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
          {top3Blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform duration-200 hover:scale-[1.01] hover:shadow-xl
                         flex flex-col
                         relative"
            >
              {/* Image Container with potential gradient overlay */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-lg">
                {blog.imageFile && (
                  <Image
                src={blog.imageFile}
    alt={blog.title}
    fill
    quality={80}               // reduces size without losing much quality
    // className="object-cover"
    priority={false}  

                    className="w-full h-full object-cover"
                  />
                )}
                {/* Optional: Gradient overlay as seen in some image parts */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                 {/* Date overlay as seen in the image - adjust positioning as needed */}
                 {blog.date && (
                    <div className="absolute bottom-3 left-3 bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md">
                      {formatDate(blog.date)}
                    </div>
                 )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {blog.title}
                </h2>
                {/* Description Snippet */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {blog.description.substring(0, 150)}...
                </p>
                {/* Read More Link */}
                <Link
               href="/blogs"
                  className="text-purple-700 hover:text-purple-900 font-semibold text-sm self-start mt-auto flex items-center"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          {/* <Link to="/allBlogs" className="text-white bg-blue-600 hover:bg-blue-700  rounded-md font-medium transition-colors">All</Link> */}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-8">No blogs to display.</p>
      )}
    </div>
  );
};
// Skeleton component for individual elements
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
);
const ShimmerSkeleton = ({ className = "" }) => (
  <div className={`relative overflow-hidden bg-gray-200 rounded ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
  </div>
);
export const BlogsLandingPageSkeleton = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Header Skeleton */}
      {/* <div className="mb-8">
        <div className="flex justify-center">
          <ShimmerSkeleton className="h-12 sm:h-16 lg:h-20 xl:h-24 w-80 sm:w-96 lg:w-[32rem]" />
        </div>
      </div> */}

      {/* Blog Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-72 gap-6">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col relative"
          >
            {/* Image Skeleton */}
            <div className="relative w-full h-12 sm:h-12 md:h-12 sm:mt-12 overflow-hidden rounded-t-lg">
              <ShimmerSkeleton className="w-full h-full" />
              {/* Date badge skeleton */}
              <div className="absolute bottom-3 left-3">
                <Skeleton className="h-6 w-20 bg-gray-300" />
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="p-4 flex flex-col flex-grow space-y-3">
              {/* Title Skeleton */}
              <div className="space-y-2">
                <ShimmerSkeleton className="h-6 w-full" />
                <ShimmerSkeleton className="h-6 w-3/4" />
              </div>

              {/* Description Skeleton */}
              <div className="flex-grow space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>

              {/* Read More Link Skeleton */}
              <div className="mt-auto pt-2">
                <div className="flex items-center">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Loading text */}
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-gray-600 ml-2">Loading latest blogs...</span>
        </div>
      </div>

    
    </div>
  );
};