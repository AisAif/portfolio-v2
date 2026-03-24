"use client";
import experiences from "@/data/experiences";
import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "motion/react";

export default function Experiences() {
  return (
    <section className="p-20 max-w-360 mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-bold text-5xl mb-12 max-w-200 text-balance leading-tight"
      >
        My Experiences
      </motion.h1>

      <div className="relative mx-auto flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} index={index} />
        ))}
      </div>
    </section>
  );
}

