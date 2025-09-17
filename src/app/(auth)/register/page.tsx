import Register from "@/app/components/register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account - SekaiSpace | Get Started with Web, Mobile & Cloud Solutions",
  description:
    "Join SekaiSpace today. Create your free account to access affordable web development, mobile app development, and cloud solutions tailored for your business.",

  keywords: [
    "SekaiSpace register",
    "create account SekaiSpace",
    "sign up web development services",
    "mobile app solutions sign up",
    "cloud services registration",
    "join SekaiSpace",
    "business digital solutions Pakistan"
  ],

  openGraph: {
    title: "Register - SekaiSpace | Create Your Account",
    description:
      "Sign up for SekaiSpace and start your journey with professional web development, mobile apps, and cloud solutions. Affordable plans starting at 25,000 PKR.",
    url: "https://sekaispace.vercel.app/register",
    type: "website",
    images: [
      {
        url: "/register-og-image.jpg", // design a professional signup image
        width: 1200,
        height: 630,
        alt: "SekaiSpace Register Page"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Register - SekaiSpace",
    description:
      "Create your SekaiSpace account to access professional web, mobile, and cloud solutions. Start building today.",
    images: ["/register-twitter-image.jpg"]
  },

  alternates: {
    canonical: "https://sekaispace.vercel.app/register"
  }
};

export default function RegisterPage(){
  return(
    <Register/>
  )
}