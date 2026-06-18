"use client";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

export default function HoverFooterDemo() {
  // Footer link data
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Employee Handbook", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "https://wa.me/919743399992" },
        { label: "Support", href: "https://wa.me/919743399992" },
        {
          label: "Live Chat",
          href: "https://wa.me/919743399992",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "msbuilderdevelopers@gmail.com",
      href: "mailto:msbuilderdevelopers@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 97433 99992",
      href: "tel:+919743399992",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 63633 04103",
      href: "tel:+916363304103",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "2nd floor, Kumbeshwara Complex, Devanahalli, Karnataka - 562110",
      href: "https://www.google.com/maps/search/?api=1&query=2nd+floor,+Kumbeshwara+Complex,+Devanahalli,+Karnataka+-+562110"
    },
  ];

  // Social media icons
  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ), 
      label: "Facebook", 
      href: "#" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      label: "Instagram", 
      href: "https://www.instagram.com/ms__builders__developers?igsh=MTRpazB3N2FvY2xhMw%3D%3D&utm_source=qr" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ), 
      label: "Twitter", 
      href: "#" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"/>
        </svg>
      ), 
      label: "Dribbble", 
      href: "#" 
    },
    { 
      icon: <Globe size={20} />, 
      label: "Globe", 
      href: "#" 
    },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8 border border-white/5 bg-black">
      <div className="max-w-7xl mx-auto p-10 md:p-14 z-40 relative">
        
        {/* Google Maps Section on Top */}
        <div className="mb-12 flex flex-col lg:flex-row gap-8 items-stretch border-b border-white/10 pb-12">
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3ca2fa]/20 bg-[#3ca2fa]/5 text-xs text-[#3ca2fa] w-fit font-mono tracking-wider">
              ✦ OUR HEADQUARTERS ✦
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              MS BUILDERS & DEVELOPERS
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              2nd floor, Kumbeshwara Complex, Devanahalli, Karnataka - 562110
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2nd+floor,+Kumbeshwara+Complex,+Devanahalli,+Karnataka+-+562110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-[#3ca2fa] hover:text-white transition-colors duration-200 w-fit font-semibold tracking-wider uppercase"
            >
              <span>Open Location in Maps</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-2/3 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <iframe
              title="MS Builders & Developers Location Map"
              src="https://maps.google.com/maps?q=2nd%20floor,%20Kumbeshwara%20Complex,%20Devanahalli,%20Karnataka%20-%20562110&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-3xl font-bold">MS</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              MS BUILDERS & DEVELOPERS is a premium real estate, construction, interior designing, and renovation firm.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-base font-semibold mb-6 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-[#3ca2fa] transition-colors text-gray-400 text-sm font-light"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-base font-semibold mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-[#3ca2fa] transition-colors text-sm font-light leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors text-sm font-light leading-relaxed">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-800 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>


        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="MS" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
