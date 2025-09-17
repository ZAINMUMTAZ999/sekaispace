import PricingAndContactPage from "../components/pricing";
import type { Metadata } from 'next';

// SEO Metadata for Pricing Page
export const metadata: Metadata = {
  title: "Pricing Plans -  SekaiSpace | Affordable Web Development Services ",
  description: "Compare our web development pricing plans starting from 25,000 PKR. Basic websites, admin panels, and custom web apps for businesses in Pakistan.",
  
  keywords: [
    "web development pricing Pakistan",
    "website cost Pakistan", 
    "affordable web development",
    "website pricing plans",
    "custom web app development cost",
    "Pakistan web developer rates",
    "SekaiSpace pricing"
  ],

  // openGraph: {
  //   title: "Affordable Web Development Pricing Plans - SekaiSpace",
  //   description: "Get professional websites starting from 25,000 PKR. Compare our Basic, Standard, and Enterprise plans for your business needs.",
  //   url: "https://sekaispace.vercel.app/pricing",
  //   type: "website",
  //   images: [
  //     {
  //       url: "/pricing-og-image.jpg", // Create this image
  //       width: 1200,
  //       height: 630,
  //       alt: "SekaiSpace Web Development Pricing Plans"
  //     }
  //   ]
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Affordable Web Development Pricing - Starting 25,000 PKR",
  //   description: "Professional websites with admin panels, SEO, and maintenance included. Compare our pricing plans.",
  //   images: ["/pricing-twitter-image.jpg"]
  // },

  // alternates: {
  //   canonical: "https://sekaispace.vercel.app/pricing"
  // }
};



export default function Pricing(){
  return(
    <PricingAndContactPage/>
  )
}