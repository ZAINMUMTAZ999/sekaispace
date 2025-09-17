"use client";

import dynamic from "next/dynamic";
// import TextEditor from "../components/text-editor";  
const TextEditor = dynamic(() => import("../components/text-editor"), {
  ssr: false,
});
// export const dynamic = "force-dynamic";

import { addBlogApi } from "../Api";
import { AppContext } from "../context/AppNotify";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {addBlogTypes} from "../Api";
import { ImagePlus, Type, FileText, Info, Send } from "lucide-react";
import { Button } from "../components/ui/button";

import Image from "next/image";

// Blog Form Skeleton Loading Component
const BlogFormSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="grid gap-6 mt-6">
        <div className="flex flex-col space-y-2">
          <div className="h-4 w-36 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="mt-6 bg-gray-100 rounded-xl p-6">
        <div className="h-6 w-48 mx-auto bg-gray-200 rounded mb-6"></div>
        <div className="h-64 bg-gray-200 rounded-md"></div>
        <div className="h-10 w-32 mt-6 bg-gray-200 rounded-md mx-auto"></div>
      </div>
    </div>
  );
};

export default function AddBlog () {
  const { showToast } = AppContext();


  const [loadingInitial, setLoadingInitial] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<addBlogTypes>();
  

  const selectedFile = watch("imageFile") as unknown as FileList | undefined;
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Handle image preview - fixed type issue
  useEffect(() => {
    if (selectedFile && selectedFile[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setPreviewImage(result);
        }
      };
      reader.readAsDataURL(selectedFile[0]);
    } else {
      setPreviewImage(null);
    }
  }, [selectedFile]);
  const queryclient = useQueryClient();

const { mutate: submitBlog, isPending: isSubmitting } = useMutation({
  mutationFn: addBlogApi, // your API call
  onSuccess: async () => {
    showToast({ type: "SUCCESS", message: "Blog successfully published!" });

    // ✅ v5 syntax: queryKey must be an array inside an object
    await queryclient.invalidateQueries({ queryKey: ["validateToken"] });


  },
  onError: (error: Error) => {
    showToast({
      type: "ERROR",
      message: error?.message || "Failed to publish blog",
    });
  },
});

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingInitial(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onSubmitBlog = (data: addBlogTypes) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("textEditor", data.textEditor);
    if (data.imageFile && data.imageFile[0]) {
      formData.append("imageFile", data.imageFile[0]);
    }
    submitBlog(formData);
  };

  if (loadingInitial) {
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Blog Post</h1>
        <BlogFormSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Create New Blog Post</h1>
        <p className="text-gray-600 mt-2">Share your expertise with our community</p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit(onSubmitBlog)}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <Type className="w-4 h-4 mr-2" />
              Blog Title
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
              })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter an engaging title"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <ImagePlus className="w-4 h-4 mr-2" />
              Cover Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                {...register("imageFile", { required: "Cover image is required" })}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {previewImage && (
                <div className="mt-3 relative w-full h-32 rounded-lg overflow-hidden">
                  <Image 
                    src={previewImage} 
                     fill  
                    alt="Preview" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </div>
            {errors.imageFile && (
              <span className="text-red-500 text-sm">{errors.imageFile.message}</span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Info className="w-4 h-4 mr-2" />
            Brief Description
          </label>
          <input
            type="text"
            {...register("description", {
              required: "Description is required",
              maxLength: {
                value: 150,
                message: "Description should be under 150 characters"
              }
            })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Write a short, engaging description (max 150 characters)"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">{errors.description.message}</span>
          )}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-center mb-6 flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            Blog Content
          </h2>
          <div className="mt-4">
            <Controller
              name="textEditor"
              control={control}
              defaultValue=""
              rules={{ required: "Blog content is required" }}
              render={({ field, fieldState }) => (
                <>
                  <TextEditor value={field.value} onChange={field.onChange} />
                  {fieldState.error && (
                    <span className="text-red-500 text-sm block mt-2">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Publishing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Publish Blog
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};