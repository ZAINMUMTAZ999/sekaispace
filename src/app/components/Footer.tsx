import { Facebook, Mail, Phone } from 'lucide-react';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="bg-[#aab8b7] text-black py-12 mt-20">
      <div className="max-w-7xl mx-auhref px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>

            <span className="text-lg md:text-xl font-bold text-blue-700d">
                <b>
                  Sekai
                  </b>
                Space
              </span>
          <p className="text-sm  text-black">
            Building innovative, scalable digital solutions href empower your startup.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-black underline ">
            <li><Link href="/webApp" className="hover:text-gray-500 ">Web Development</Link></li>
            <li><Link href="/mobileApp" className="hover:text-gray-500">Mobile Apps</Link></li>
            <li><Link href="/cloudSolutions" className="hover:text-gray-500">Cloud Deployment</Link></li>
            <li><Link href="/digitalmarketing" className="hover:text-">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-black underline">
            <li><Link href="/aboutUs" className="hover:text-gray-500">About Us</Link></li>
            <li><Link href="/allBlogs" className="hover:text-gray-500">Blogs</Link></li>
            <li><Link href="/contactUs" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>

        {/* Social + Contact */}
      <div>
  <h3 className="text-sm sm:text-lg font-semibold mb-4 text-black">Connect with Us</h3>
  
  {/* --- Social Media Links --- */}
  <div className="flex space-x-4 mb-4 text-black">
    <a href="https://www.facebook.com/share/16V3vs43jQ/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500"><Facebook size={20} /></a>
    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500"><Twitter size={20} /></a> */}
    {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500"><Instagram size={20} /></a> */}
    {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500"><Linkedin size={20} /></a> */}
  </div>

  {/* --- Clickable Email and Phone with Icons --- */}
   <div className="space-y-2">
      {/* Clickable Email with Icon */}
      <span
        // href="mailhref:mzainmumtaz99@gmail.com"
        className="text-sm text-black flex items-center group"
      >
        <Mail size={16} className="mr-2 flex-shrink-0 text-gray-600 group-hover:text-gray-500 transition-colors" />
        {/* <span className="group-hover:underline group-hover:text-white transition-colors">
          mzainmumtaz99@gmail.com
        </span> */}

<a
  href="mailhref:mzainmumtaz99@gmail.com"
  className="group-hover:underline group-hover:text-gray-500 transition-colors"
>
  mzainmumtaz99@gmail.com
</a>

      </span>

      {/* Clickable Phone with Icon */}
      <a
        href="tel:+923246288217"
        className="text-sm text-black flex items-center group"
      >
        <Phone size={16} className="mr-2 flex-shrink-0 text-gray-600 group-hover:text-gray-500 transition-colors" />
        <span className="group-hover:underline group-hover:text-gray-500transition-colors">
          +92324-6288217
        </span>
      </a>
    </div>
</div>
      </div>

      {/* Bothrefm Line */}
      <div className="mt-12  border-purple-700 pt-6 text-center text-sm text-black">
        &copy; {new Date().getFullYear()} SekaiSpace.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
