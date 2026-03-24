"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { techStack } from "@/data/tech-stacks";

export default function Services() {
  return (
    <section className=" bg-primary">
      <Marquee speed={50} pauseOnHover={true}>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="py-8 mx-8 flex flex-col items-center gap-2 min-w-32"
          >
            <div className="relative w-20 h-20">
              <Image
                src={tech.image}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-white">{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

