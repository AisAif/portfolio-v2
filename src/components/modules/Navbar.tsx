"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 -translate-x-1/2 top-8 bg-white border-4 border-black border-solid shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] z-50 flex items-center justify-between gap-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 px-5.5"
      >
        <Image
          src={logo}
          alt="logo"
          className="size-8 rounded-full p-1 bg-black"
        />
        <p className="font-bold text-xl text-primary">ais_aif</p>
      </motion.div>

      <div className="flex relative">
        <LinkNav href="/#about" label="About //" index={0} />
        <LinkNav href="/#portfolio" label="Portfolio" index={1} />
        <LinkNav href="/#contact" label="Contact" index={2} />
      </div>
    </motion.nav>
  );
}

const LinkNav = ({
  href,
  label,
  index,
}: {
  href: string;
  label: string;
  index: number;
}) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      className="border-l-[5px] group border-black px-5.5 py-4 w-36 *:transition-all *:duration-300 *:ease-in-out"
    >
      <span className="font-medium text-lg group-hover:font-bold text-primary">
        {label}
      </span>
    </motion.a>
  );
};

