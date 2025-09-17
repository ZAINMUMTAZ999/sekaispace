"use client"
 import { useQuery } from "@tanstack/react-query";
import {  searchPageContact } from "../Api";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
import { useState } from "react";
// import DOMPurify from "dompurify";
// import Pagination from "@/components/Pagination";

// import { useSearchContext } from "@/context/SearchContext";

// import { BlogSkeleton } from "../blogs/page";

// import { useSearchContext } from "../context/SearchContext";
import Pagination from "../components/Pagination";
import { BlogSkeleton } from "../components/blog";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
// import { BlogSkeleton } from "./Blog";


export default function GetContactUs  () {
//   const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
const searchParams = {
//   title: search.title,
  page: page.toString(),
};

// include anything that affects the result inside the queryKey array
const queryKey = ["allContactUsList",  searchParams.page];

const {
  data: allContactUsList,
  isLoading,
  error,
} = useQuery({
  queryKey,                                   // ✅ array from above
  queryFn: () => searchPageContact(searchParams), // ✅ function returning a promise
});

  
  console.log("allContactUsList", allContactUsList);


  if (isLoading)
    return <BlogSkeleton/>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">Failed to load blogs.</div>
    );

  // If a blog is selected, find it
// const selectedBlog = selectedBlogId
//   ? allContactUsList?.data?.find((blog) => blog._id === selectedBlogId)
//   : null;


  // Handle Read More click
  // const handleReadMore = (id) => {
  //   setSelectedBlogId(id);
  //   // Scroll to top for better UX
  //   window.scrollTo(0, 0);
  // };

  // Handle going back to all blogs
  // const handleBack = () => {
  //   setSelectedBlogId(null);
  // };

  // If a blog is selected, show only that blog
  // if (selectedBlog) {
  //   return <SingleBlogView blog={selectedBlog} onBack={handleBack} />;
  // }

  // Otherwise show the list of all blogs
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Contacts list</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {allContactUsList?.data?.map((blog) => (
    <div
      key={blog._id}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-1 space-y-2">
        <div>
          <span className="font-bold underline text-gray-800">Name:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.name}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Email:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.email}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Phone Number:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.phoneNumber}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Interested In:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.interestedIn}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Message:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.message}</span>
        </div>
      </div>
    </div>
  ))}
</div>

           <Pagination
  page={allContactUsList?.pagination?.page || 1}
  pages={allContactUsList?.pagination?.pages || 1}
  onPageChange={(page) => setPage(page)}
/>

    </div>
  );
};

// export default GetContactUs;
 