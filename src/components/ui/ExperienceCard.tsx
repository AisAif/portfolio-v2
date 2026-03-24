"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  id: number;
  date: string;
  title: string;
  activities: string[];
  index: number;
}

export default function ExperienceCard({
  id,
  date,
  title,
  activities,
  index,
}: ExperienceCardProps) {
  const [randomRotation] = useState(Math.floor(Math.random() * 6) - 2);
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.15, ease: "easeOut" }}
      className="hover:z-20"
    >
      <div
        className="bg-white border-4 border-black rounded-xs shadow-[11.465px_11.465px_0px_0px_#bfbfb4] hover:scale-105 transition-all duration-300 ease-in-out"
        style={{ transform: `rotate(${randomRotation}deg)` }}
      >
        <div className="flex flex-col gap-8 p-10">
          <p className="font-medium text-2xl text-primary">{date}</p>
          <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-2xl text-primary">{title}</h3>
            <ul className="font-medium text-xl text-muted list-disc ml-6">
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

