"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Card from "../ui/Card";
import photo from "@/assets/images/photo.jpg";
import ideaIcon from "@/assets/icons/idea.svg";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex items-center justify-center min-h-screen px-20 max-w-360 mx-auto"
    >
      <div className="flex items-center justify-center gap-30">
        <div className="flex flex-col gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-200 flex flex-col gap-5"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[54px] font-bold leading-tight"
            >
              Software engineer{" "}
              <span className="underline-secondary">specializing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-lg font-medium"
            >
              I am proficient in multiple programming languages, including
              TypeScript, PHP, Golang, and Python, enabling me to craft
              innovative and efficient solutions for complex challenges.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button onClick={() => router.push("/#portfolio")}>
              See Portfolio
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Card
            shadow
            className="size-128 p-12 border-4 hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="bg-[rgba(73,72,72,0.19)] border-4 border-black border-solid size-full">
              <Image
                src={photo}
                alt="photo"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="absolute -left-5 top-21.5"
            >
              <div className="bg-secondary border-2 border-black border-solid rounded-full size-24 p-2 shadow-[4px_4px_0px_0px_black]">
                <Image src={ideaIcon} alt="idea" className="w-full h-full" />
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

