"use client";
import { useQuery } from "@tanstack/react-query"
import { allBlogsApi } from "../Api"
import BlogsList from "../components/BlogList";
import Image from "next/image";


export default function Page(){
const { data, isLoading, error } = useQuery({
  queryKey: ["searchBlogs"],        // ✅ must be an array
  queryFn: () => allBlogsApi(),     // ✅ your API function
  // keepPreviousData: true,        // optional
});

console.log(data);

    return (
        // {data?.map}
        <div>
        {data?.map((blog)=>{
            const {description,title,imageFile,_id}= blog;
            return(
                // eslint-disable-next-line react/jsx-key
                <div className="flex" key={_id}>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                {imageFile && (
  <Image src={imageFile} width={400} height={250} alt="imageJob" />
)}


                </div>
            )
        })}
        </div>
    )

}