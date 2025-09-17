"use client";
import { useQuery } from "@tanstack/react-query";
import {  searchPage } from "../Api";
import { useState } from "react";
import DOMPurify from "dompurify";
import Pagination from "../components/Pagination";
// import { useSearchContext } from "../context/SearchContext";
import { addBlogTypes } from "../Api"; // Assuming type definition is here
import Image from "next/image";

// A robust date formatting utility
const formatDate = (dateString: Date | string) => {
  if (!dateString) return "Unknown date";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const day = date.getDate().toString().padStart(2, '0');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

// Skeleton UI Component (with matching responsive grid)
export const BlogSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">All Blogs</h1>
      {/* This grid now matches the main AllBlogs component for a smooth loading transition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse flex flex-col h-full">
            <div className="w-full h-[200px] bg-gray-300" />
            <div className="p-6 flex flex-col flex-1">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6 mb-4"></div>
              <div className="h-3 bg-gray-300 rounded w-24 mb-4"></div>
              <div className="mt-auto">
                <div className="h-10 bg-gray-300 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="w-10 h-10 bg-gray-300 rounded-md animate-pulse" />
        ))}
      </div>
    </div>
  );
};

interface SingleBlogViewProps {
  blog: addBlogTypes;
  onBack: () => void;
}

// Single Blog View (with responsive text and layout)
const SingleBlogView = ({ blog, onBack }: SingleBlogViewProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
      <button onClick={onBack} className="mb-6 flex items-center text-blue-600 hover:text-blue-800 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to All Blogs
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {blog.imageFile && (
          <Image src={blog.imageFile} alt={blog.title} className="w-full object-cover"
height={12}
quality={100} // Max quality
  unoptimized={true}
width={12}

            // style={{ maxHeight: "500px" }}
             />
        )}

        <div className="p-4 sm:p-8">
          {/* Responsive header: stacks on mobile, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex-1">{blog.title}</h1>
            <div className="text-sm text-gray-500 flex-shrink-0">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" strokeWidth="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(blog.date || blog.createdAt)}
              </div>
            </div>
          </div>
          
          <p className="text-base text-gray-700 mb-8">{blog.description}</p>
          
          <div className="border-t border-gray-200 pt-8">
            {/* Responsive prose for better readability on all devices */}
            <div
              className="prose prose-sm sm:prose-base max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.textEditor),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

 const Blogs =()=> {
  // const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

const searchParams = {
  // title: search.title,
  page: page.toString(),
};

const { data: searchResult, isLoading, error } = useQuery({
  queryKey: ["searchBlogs", searchParams],       // ✅ array key
  queryFn: () => searchPage(searchParams),       // ✅ function that returns a promise
  placeholderData: (prev) => prev,               // ✅ v5 replacement for keepPreviousData
});
// console.log("blogs",searchResult?.data)
  // Find the selected blog from the already fetched list. No need for a second API call.
  const selectedBlog = selectedBlogId
    ? searchResult?.data.find((blog) => blog._id === selectedBlogId)
    : null;

  if (isLoading && !searchResult) return <BlogSkeleton />; // Show skeleton only on initial load
  if (error) return <div className="text-center py-8 text-red-500">Failed to load blogs.</div>;

  const handleReadMore = (id: string) => {
    setSelectedBlogId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedBlogId(null);
  };
  
  // If a blog is selected, render the detailed view
  if (selectedBlog) {
    return <SingleBlogView blog={selectedBlog} onBack={handleBack} />;
  }
  
  // Sort blogs by creation date (newest first)
  const sortedBlogs = searchResult?.data ? [...searchResult.data].sort((a, b) => {
    const dateA = new Date(a.date || a.createdAt || 0).getTime();
    const dateB = new Date(b.date || b.createdAt || 0).getTime();
    return dateB - dateA;
  }) : [];
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">All Blogs</h1>
      
      {/* Responsive Grid: 1 col on mobile, 2 on sm, 3 on lg, 4 on xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedBlogs?.map((blog:addBlogTypes) => (
          <div key={blog._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            {blog.imageFile && (
              <div className="w-full h-48 overflow-hidden">
                {/* <Image 
                src={blog.imageFile} alt={blog.title} height={24} width={24}  
                quality={100} // Max quality
                className="w-full h-full object-cover" 
                
                /> */}
                <Image
                unoptimized={true}
  src={blog.imageFile}
  alt={blog.title}
  width={24}
  height={24}             // fixed size
  quality={80}            // optimized quality
  className="object-cover  w-full h-full" // keeps aspect ratio
  priority={false}        // lazy-load by default
  placeholder="empty" 
/>

              </div>
            )}
            <div className="p-4 sm:p-6 flex flex-col flex-1">
              {/* Responsive font sizes */}
              <h2 className="text-lg sm:text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                {blog.description}
              </p>
              <div className="text-xs text-gray-500 mb-4">
                {formatDate(blog.date || blog.createdAt)}
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => handleReadMore(blog._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full sm:w-auto"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Pagination
          page={searchResult?.pagination.page || 1}
          pages={searchResult?.pagination?.pages || 1}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
};
export default Blogs;