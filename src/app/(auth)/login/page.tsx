import Login from "@/app/components/login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - SekaiSpace | Access Your Account",
  description:
    "Secure login to your SekaiSpace account. Access web development, mobile app, and cloud solution services dashboard. Your data is safe with us.",
  
  keywords: [
    "SekaiSpace login",
    "client login SekaiSpace",
    "web development account login",
    "mobile app dashboard access",
    "cloud solutions portal",
    "secure login page"
  ],

  openGraph: {
    title: "Login - SekaiSpace",
    description:
      "Sign in securely to your SekaiSpace account. Access your projects, manage services, and explore our web, mobile, and cloud solutions.",
    url: "https://sekaispace.vercel.app/login",
    type: "website",
    images: [
      {
        url: "/login-og-image.jpg", // create a clean professional login graphic
        width: 1200,
        height: 630,
        alt: "SekaiSpace Login Portal"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Login - SekaiSpace Account",
    description:
      "Secure login to your SekaiSpace account. Manage your web, mobile, and cloud development services in one place.",
    images: ["/login-twitter-image.jpg"]
  },

  alternates: {
    canonical: "https://sekaispace.vercel.app/login"
  },

  robots: {
    index: false, // prevents search engines from indexing login page
    follow: false
  }
};


export default function LoginPage(){
  return(
    <Login/>
  )
}