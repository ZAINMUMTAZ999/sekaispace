import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web, Mobile & Cloud Solutions - SekaiSpace | Affordable Development Services",
  description:
    "SekaiSpace offers professional web development, mobile app development, and cloud solutions. Get custom websites, apps, and scalable cloud services starting from 25,000 PKR.",
  
  keywords: [
    "web development Pakistan",
    "mobile app development Pakistan",
    "cloud solutions Pakistan",
    "affordable web development",
    "custom software development",
    "website pricing Pakistan",
    "SekaiSpace services",
    "business digital solutions"
  ],

  openGraph: {
    title: "SekaiSpace | Web, Mobile & Cloud Solutions",
    description:
      "Professional web, mobile, and cloud solutions for businesses. Affordable pricing starting from 25,000 PKR. Build scalable websites, apps, and cloud platforms with SekaiSpace.",
    url: "https://sekaispace.vercel.app/services",
    type: "website",
    images: [
      {
        url: "/services-og-image.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "SekaiSpace Web, Mobile & Cloud Development Services"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "SekaiSpace - Web, Mobile & Cloud Development",
    description:
      "We provide affordable web development, mobile apps, and cloud solutions. Starting from 25,000 PKR.",
    images: ["/services-twitter-image.jpg"]
  },

  alternates: {
    canonical: "https://sekaispace.vercel.app/services"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
