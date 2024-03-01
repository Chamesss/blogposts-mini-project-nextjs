"use client";
import Link from "next/link";
import { useState } from "react";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(() => (theme === "dark" ? true : false));

  const handleOnChange = () => {
    setToggle((prev) => !prev);
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-xm mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Chams Azouz
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link href="#null" className="text-white/90 hover:text-white">
            <FaYoutube />
          </Link>
          <Link href="#null" className="text-white/90 hover:text-white">
            <FaTwitter />
          </Link>
          <Link href="#null" className="text-white/90 hover:text-white">
            <FaGithub />
          </Link>
          <Link href="#null" className="text-white/90 hover:text-white">
            <FaLaptop />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <label
            htmlFor="light-switch"
            className="text-xl"
            style={{ color: "white" }}
          >
            Theme toggle
          </label>
          <input
            type="checkbox"
            name="light-switch"
            aria-label="Theme toggle"
            onChange={handleOnChange}
            checked={toggle}
          />
        </div>
      </div>
    </nav>
  );
}
