"use client";  // Ensures the component is a Client Component

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function BlogPage() {
  return (
    <div className="min-h-screen  bg-dark-300  text-light-100">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-800">
        <Image src="/assets/icons/logo-full.png" alt="Logo" width={150} height={30} />
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link>
          <Link href="/profile">
            <Image src="/assets/icons/user.svg" alt="User Profile" width={30} height={30} />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10">
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Small steps, <span className="text-green-400 glow-effect">Big progress.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            We believe that personal stories are a powerful tool to further connectedness, resilience, and recovery.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <Image src="/assets/icons/insideOut.png" alt="Hero Image" width={350} height={350} className="max-w-xs md:max-w-sm lg:max-w-md"/>
        </div>
      </section>

      {/* Blog Grid - With Hover Glow Effect */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6 py-8">
        {[
          {
            title: "PICKING UP THE PIECES",
            desc: "Under treatment for hearing voices since August 2014",
            img: "/assets/icons/moment.png",
            link: "https://sambandhhealth.wordpress.com/2018/05/24/picking-up-the-pieces/",
          },
          {
            title: "AVOIDING BURNOUT: STRATEGIES FOR A BALANCED WORK LIFE",
            desc: "Are you feeling that you might have job burnout?",
            img: "/assets/icons/fine.png",
            link: "https://heartitout.in/blogs/workplace-concerns/avoiding-burnout-strategies-for-a-balanced-work-life/",
          },
          {
            title: "THE STORY ABOUT MY SUCCESS",
            desc: "From childhood had always been a shy and anxious person.",
            img: "/assets/icons/peopleLove.png",
            link: "https://sambandhhealth.wordpress.com/2019/08/29/the-story-about-my-success/",
          },
          {
            title: "FINDING INNER HARMONY IN A DIGITAL WORLD",
            desc: "Connection, support, but potential isolation.",
            img: "/assets/icons/sns.png",
            link: "https://heartitout.in/blogs/lifestyle-wellness/finding-inner-harmony-in-a-digital-world/#p1",
          },
          {
            title: "DOMESTIC VIOLENCE AND MENTAL HEALTH IN SOUTH ASIA",
            desc: "Mental health link demands support, interventions.",
            img: "/assets/icons/domestic.png",
            link: "https://heartitout.in/blogs/lifestyle-wellness/silent-struggles-domestic-violence-and-mental-health-in-south-asia/",
          },
          {
            title: "EMBRACING OPPORTUNITIES DESPITE THE DOUBT",
            desc: "Silencing inner critic, stronger relationships, greater achievements.",
            img: "/assets/icons/selfLove.png",
            link: "https://www.youngminds.org.uk/young-person/blog/tips-for-quieting-your-inner-critic/",
          }
        ].map((blog, index) => (
          <div key={index} className="p-6 rounded-xl bg-gray-800 text-center shadow-lg transition transform hover:scale-105 hover:shadow-green-500 flex flex-col items-center">
            <Image src={blog.img} alt={blog.title} width={150} height={150} className="w-full max-w-[120px] md:max-w-[180px] h-auto mb-4"/>
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-400 mt-2">
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline transition">
                {blog.desc}
              </a>
            </p>
          </div>
        ))}


      

      </section>

      {/* Contact Section */}
      <section className="text-center mt-16 mb-10">
        <h2 className="text-3xl font-semibold">Have Questions?</h2>
        <p className="text-gray-400 mt-2">Reach out to us anytime.</p>
        <Link href="/contact">
          <button className="mt-4 px-6 py-3 text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-full transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

