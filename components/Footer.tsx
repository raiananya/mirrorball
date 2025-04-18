"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-300 text-light-100 py-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Copyright Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} MirrorBall. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-green-500 text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-green-500 text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
