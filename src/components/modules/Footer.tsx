"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:p-20 px-4 pt-4 pb-28 max-w-360 mx-auto"
    >
      <div className="flex items-center justify-between gap-4 md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-2 md:gap-3"
        >
          <Image
            src={logo}
            alt="logo"
            className="size-8 md:size-12 p-1 bg-black rounded-full"
          />
          <p className="font-normal text-xl md:text-2xl text-primary">
            ais_aif
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-medium text-lg md:text-2xl text-center"
        >
          © {new Date().getFullYear()} Ais Aif
        </motion.p>
      </div>
    </motion.footer>
  );
}

