"use client";
import Image from "next/image";
import Smile from "../decorations/smile";
import Card from "../ui/Card";
import projects from "@/data/projects";
import arrowRightUpIcon from "@/assets/icons/arrow-left-right.svg";
import { useState } from "react";
import Button from "../ui/Button";

export default function Portfolio() {
  const [limit, setLimit] = useState(4);
  return (
    <section id="portfolio" className="p-20 max-w-360 mx-auto">
      <div className="relative flex items-center justify-center mb-6 gap-12">
        <h2 className="text-5xl font-bold">My own projects</h2>
        <div className="bg-[#BAE6FF] scale-50 -rotate-45 shadow-[-9px_10px_0px_0px_rgba(0,0,0,0.44)] transform -translate-x-14 -translate-y-5">
          <Smile />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 mx-auto px-4 mb-12">
        {projects.slice(0, limit).map((project, index) => (
          <a key={index} href={project.link} target="_blank">
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
          </a>
        ))}
      </div>
      {limit < projects.length && (
        <div className="flex items-center justify-center">
          <Button onClick={() => setLimit(limit + 2)}>See more</Button>
        </div>
      )}
    </section>
  );
}

