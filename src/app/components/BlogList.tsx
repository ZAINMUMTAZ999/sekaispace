"use client";

// import Image from "next/image";
import { addBlogTypes } from "../Api";

export default function BlogsList({ data }:{data:addBlogTypes[]}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Latest Blogs</h2>

      {/* Responsive grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((blog) => {
          const { title } = blog;

          return (
            <article
              key={title}
              className="overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                {/* Blog image */}
                {/* <Image
                  src={imageFile}
                  alt={title}
                  fill
                  className="object-cover"
                /> */}
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {title}
                </h3>
                {/* <p className="text-sm text-gray-500">{date}</p> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
