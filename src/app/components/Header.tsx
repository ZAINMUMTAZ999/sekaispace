"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../assets/logo.svg";
// import { Button } from "./ui/button";
// import { AppContext } from "../context/AppNotify";
// import Logout from "../(auth)/logout/page";


const navLinks = [
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/app-development" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "Pricing", href: "/pricing" }
];

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();
  // const { isLogged, isAdmin } = AppContext();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="SekaiSpace"
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
          <span className="text-xl font-bold text-blue-700">
            <b>Sekai</b>Space
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((nav) => {
            const isActive =
              pathname === nav.href ||
              (nav.subLinks && pathname.startsWith("/services"));

            if (nav.subLinks) {
              return (
                <div
                  key={nav.name}
                  className="relative"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {nav.name} <ChevronDown size={16} />
                  </button>
                  {servicesDropdown && (
                    <div className="absolute left-0 -mt-0.5 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                      {nav.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={nav.name}
                href={nav.href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
  {/* Desktop Admin BTNs */}
        {/* <div className="hidden lg:block">
          <span>
            {isAdmin && (
              // <Link href="/about">Logout</Link>
              // <Logout/>
              <div>
                <Link href="/addblog">
                  <Button>Add Blog</Button>
                </Link>

                <Link href="/getcontactslist" className="m-2">
                  <Button>AllContacts</Button>
                </Link>
              </div>
            )}
          </span>
        </div> */}

        {/* Desktop Login Button */}
        {/* <div className="hidden lg:block">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            {isLogged ? (
              // <Link href="/about">Logout</Link>
              <Logout />
            ) : (
              <Link href="/login">Login</Link>
            )}
          </Button>
        </div>
       */}
        {/* Mobile menu icon */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileNav(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
          mobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <aside className="relative h-full w-72 bg-white p-6 shadow-xl">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setMobileNav(false)}
          >
            <X size={28} />
          </button>

          <nav className="mt-10 flex flex-col gap-4">
            {navLinks.map((nav) => {
              const isActive =
                pathname === nav.href ||
                (nav.subLinks && pathname.startsWith("/services"));
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [open, setOpen] = useState(false);

              if (nav.subLinks) {
                return (
                  <div key={nav.name}>
                    <button
                      onClick={() => setOpen(!open)}
                      className={`flex w-full items-center justify-between px-2 py-2 font-medium ${
                        isActive ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {nav.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open && (
                      <div className="ml-4 mt-1 flex flex-col">
                        {nav.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileNav(false)}
                            className="px-2 py-1 text-gray-700 hover:text-blue-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={nav.name}
                  href={nav.href}
                  onClick={() => setMobileNav(false)}
                  className={`px-2 py-2 font-medium ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {nav.name}
                </Link>
              );
            })}

            {/* Mobile Login Button */}
            {/* <Button
              asChild
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLogged ? <Logout /> : <Link href="/login">Login</Link>}
            </Button> */}
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
