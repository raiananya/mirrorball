"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Mirrorball() {
  const playlists = [
    {
      title: "Peaceful Piano",
      description: "Gentle piano melodies to relax your mind.",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO",
      image: "/assets/icons/piano.jpg",
    },
    {
      title: "Deep Focus",
      description: "Ambient and minimal music to help you concentrate.",
      url: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ",
      image: "/assets/icons/music.jpg",
    },
    {
      title: "Stress Relief",
      description: "Soothing music to ease anxiety and stress.",
      url: "https://open.spotify.com/playlist/37i9dQZF1DWVrtsSlLKzro",
      image: "/assets/icons/stressRelief.jpg",
    },
    {
      title: "Sleep Sounds",
      description: "Calming sounds and lullabies to help you sleep.",
      url: "https://open.spotify.com/playlist/37i9dQZF1DWYcDQ1hSjOpY",
      image: "/assets/icons/sleep.jpg",
    },
  ];

  const [affirmation, setAffirmation] = useState("");

  const affirmations = [
    "You are enough, just as you are.",
    "One step at a time. You’re doing great.",
    "Your mind deserves peace.",
    "You shine even in your quiet moments.",
    "Every day is a fresh start.",
    "Breathe. You’ve got this.",
  ];

  const timeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! Try something calm and energizing.";
    if (hour < 18) return "Good afternoon! Focus with deep ambient sounds.";
    if (hour < 20) return "Good evening! Time to wind down with relaxing vibes.";
    return "Good night! Sleep well with gentle melodies.";
  };

  useEffect(() => {
    const randomAffirmation =
      affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(randomAffirmation);
  }, []);

  return (
    <div className="min-h-screen bg-dark-300 text-light-100 transition-all">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-800 bg-opacity-70">
        <Image
          src="/assets/icons/logo-full.png"
          alt="Logo"
          width={150}
          height={30}
        />
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact Us
          </Link>
          <Link href="/profile">
            <Image
              src="/assets/icons/user.svg"
              alt="User Profile"
              width={30}
              height={30}
            />
          </Link>
        </nav>
      </header>

      {/* Intro Text */}
      <div className="text-center mt-10 px-4">
        <h1 className="text-4xl font-bold text-green-400 animate-pulse">
          Welcome to Mirrorball
        </h1>
        <p className="text-gray-100 mt-2 text-md italic">{timeGreeting()}</p>
        <p className="text-gray-200 mt-1">{affirmation}</p>
      </div>

      {/* Playlist Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 py-12">
        {playlists.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 bg-opacity-80 rounded-xl p-4 shadow-md hover:shadow-green-500 transition-transform transform hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={180}
              height={180}
              className="rounded-lg mb-4 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center text-white">
              {item.title}
            </h2>
            <p className="text-gray-400 text-sm text-center mt-2">
              {item.description}
            </p>
            <div className="text-center mt-4">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
