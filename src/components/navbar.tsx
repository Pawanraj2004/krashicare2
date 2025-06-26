'use client';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo (2).png";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    // Injecting the Botpress script dynamically
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://mediafiles.botpress.cloud/bd7b4505-ab4c-475d-a17d-09a67180ac88/webchat/v2.1/config.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  // Load Google Translate script and initialize the widget
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      const script = document.createElement('script');
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    }
  }, []);

  return (
    <nav className="flex fixed top-0 left-0 backdrop-blur-sm z-50 bg-aquamarine-100 mt-7">
      <div className="flex w-screen items-center justify-evenly">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Image
              src={Logo}
              alt={`${siteConfig.name} Logo`}
              width={100}
              className="logo"
              style={{
                borderTopLeftRadius: '30%',
                borderBottomRightRadius: "30%",
                padding: '10px',
                backgroundColor: 'white',
              }}
            />
          </p>
        </div>

        <ul className="flex gap-20">
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/" style={{ color: 'green', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/about" style={{ color: 'green', textDecoration: 'none' }}>
              About Us
            </Link>
          </li>
          <li
            className="relative cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div style={{ color: 'green', textDecoration: 'none', width: '125px', textAlign: 'center' }}>Features</div>
            {isDropdownOpen && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg p-4 rounded-md mt-1.5">
                <li className="hover:bg-green-200 p-2 br-5">
                  <Link href="/home" style={{ color: 'green', textDecoration: 'none' }}>
                    Disease Detection
                  </Link>
                </li>
                <li className="hover:bg-green-200 p -2 br-5">
                  <Link href="/sensor" style={{ color: 'green', textDecoration: 'none' }}>
                    Crop Monitoring
                  </Link>
                </li>
                <li className="hover:bg-green-200 p-2 br-5">
                  <Link href="/models" style={{ color: 'green', textDecoration: 'none' }}>
                    3D Models
                  </Link>
                </li>
                <li className="hover:bg-green-200 p-2 br-5">
                  <Link href="/marketplace" style={{ color: 'green', textDecoration: 'none' }}>
                    Marketplace
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm navbar-about-link">
            <Link href="/contact" style={{ color: 'green', textDecoration: 'none' }}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            <Link href="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Login/SignUp
            </Link>
          </button>

          {/* Google Translate Dropdown */}
          <div id="google_translate_element"></div>

          <ThemeToggle style={{ backgroundColor: 'green', padding: '10px', borderRadius: '50%' }} />
        </div>
      </div>
    </nav>
  );
}
