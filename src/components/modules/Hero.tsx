"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Card from "../ui/Card";
import photo from "@/assets/images/photo.jpg";
import ideaIcon from "@/assets/icons/idea.svg";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen px-20 max-w-360 mx-auto"
    >
      <div className="flex items-center justify-center gap-30">
        <div className="flex flex-col gap-12 items-start">
          <div className="relative max-w-200 flex flex-col gap-5">
            <h1 className="text-[54px] font-bold leading-tight">
              Software engineer{" "}
              <span className="underline-secondary">specializing</span>
            </h1>
            <p className="text-lg font-medium">
              I am proficient in multiple programming languages, including
              TypeScript, PHP, Golang, and Python, enabling me to craft
              innovative and efficient solutions for complex challenges.
            </p>
          </div>

          <Button onClick={() => router.push("/#portfolio")}>
            See Portfolio
          </Button>
        </div>

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

          <div className="absolute -left-5 top-21.5">
            <div className="bg-secondary border-2 border-black border-solid rounded-full size-24 p-2 shadow-[4px_4px_0px_0px_black]">
              <Image src={ideaIcon} alt="idea" className="w-full h-full" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

