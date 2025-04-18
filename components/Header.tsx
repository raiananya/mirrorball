"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-4 shadow-md bg-dark-400">
        <div className="flex items-center space-x-2">
          <Image src="/assets/icons/logo-full.png" alt="Logo" width={150} height={30} />
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/contact" className="hover:text-green-500">Contact Us</Link>
          <Link href="/profile">
            <Image src="/assets/icons/user.svg" alt="User Profile" width={30} height={30} />
          </Link>
        </nav>
      </header>
  );
};

export default Header;