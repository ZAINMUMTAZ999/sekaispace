import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SekaiSpace Srv Blog – AI & Web Development Articles",
  description:
    "Explore the SekaiSpace blog for expert articles on artificial intelligence, web development, MERN stack, Next.js, and the latest software trends. New posts published regularly with pagination for easy browsing.",
  keywords: [
    "SekaiSpace blog",
    "AI tutorials",
    "web development articles",
    "MERN stack tips",
    "Next.js guides",
    "software engineering blog",
    "Pakistan tech blog",
    "full-stack development posts",
    "frontend backend tutorials",
    "AI web development news"
  ],
  openGraph: {
    title: "SekaiSpace Tech Blog – AI & Web Development Insights",
    description:
      "Stay updated with AI, web development, and software engineering insights from SekaiSpace. Browse paginated posts and learn from our experts.",
    url: "https://sekaispace.vercel.app/blogs",
    type: "website",
    images: [
      {
        url: "/blogs-og-image.jpg", // add a featured image for sharing
        width: 1200,
        height: 630,
        alt: "SekaiSpace Tech Blog – AI and Web Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SekaiSpace Tech Blog – AI & Web Development Articles",
    description:
      "Expert tips and tutorials on AI, MERN stack, and modern web development. Read our latest blog posts with easy pagination.",
    images: ["/blogs-twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://sekaispace.vercel.app/blogs"
  }
};
export default function Services () {




  return (
<div className="flex justify-center min-h-screen">
Services
</div>
  );
};

