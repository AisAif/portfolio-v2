"use client";
import Image from "next/image";
import Smile from "../decorations/smile";
import Card from "../ui/Card";
import projects from "@/data/projects";
import arrowRightUpIcon from "@/assets/icons/arrow-left-right.svg";
import { useState } from "react";
import Button from "../ui/Button";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Portfolio() {
  const [limit, setLimit] = useState(4);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio" ref={ref} className="p-20 max-w-360 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex items-center justify-center mb-6 gap-12"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl font-bold"
        >
          My own projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: -45, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="bg-[#BAE6FF] scale-50 shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.44)] transform -translate-x-14 -translate-y-5"
        >
          <Smile />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 gap-20 mx-auto px-4 mb-12">
        {projects.slice(0, limit).map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <Card
              shadow
              className="h-134 p-8 border-4 hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="border-4 border-black bg-red-200 border-solid h-74 relative mb-6">
                <Image
                  fill
                  src={project.img}
                  alt={project.name}
                  className="object-cover"
                />
              </div>
              <div className="flex gap-16 items-start justify-center">
                <div className="flex flex-col gap-3 items-start">
                  <p className="font-bold text-2xl">{project.name}</p>
                  <p className="font-medium">{project.description}</p>
                </div>
                <div className="bg-black overflow-clip shadow-[4px_4px_0px_0px_#8e8f87] size-8 aspect-square">
                  <Image
                    src={arrowRightUpIcon}
                    alt="arrowRightUpIcon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
      {limit < projects.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Button onClick={() => setLimit(limit + 2)}>See more</Button>
        </motion.div>
      )}
    </section>
  );
}

