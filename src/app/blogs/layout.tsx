import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SekaiSpace Tech Blog - AI & Web Development Articles",
  description:
    "Explore the SekaiSpace blog for expert articles on AI, web development, MERN stack, Next.js, and the latest software trends.",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  // no "use client" here!
  return <>{children}</>;
}
