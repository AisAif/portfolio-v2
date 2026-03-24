"use client";
import { useState } from "react";
import Button from "../ui/Button";
import socials from "@/data/socials";
import Image, { StaticImageData } from "next/image";
import { XIcon } from "lucide-react";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="contact" className="px-4 py-20">
      <div className="bg-white border-[6px] border-black border-solid shadow-[21px_21px_0px_0px_rgba(0,0,0,0.4)] mx-auto max-w-308 py-14">
        <div className="text-center flex flex-col gap-4">
          <h2 className="font-medium text-5xl text-black">Let’s Connect</h2>
          <p className="font-normal text-2xl text-center px-4 text-balance mx-auto">
            Have a question or just want to connect?
          </p>
        </div>

        <div className="flex items-center justify-center mt-8 relative">
          <div className="flex items-center justify-center w-[352.904px]">
            <Button onClick={() => setIsOpen(true)}>Contact me</Button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}

const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white border-[6px] border-black border-solid shadow-[21px_21px_0px_0px_rgba(0,0,0,0.4)] w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b-4 border-black">
          <h3 className="font-bold text-3xl">Contact Me</h3>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center bg-red-500 border-4 border-black border-solid shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <XIcon />
          </button>
        </div>

        <div className="p-6">
          <SocialsList />
        </div>
      </div>
    </div>
  );
};

const SocialsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {socials.map((social) => (
        <SocialCard key={social.id} social={social} />
      ))}
    </div>
  );
};

const SocialCard = ({
  social,
}: {
  social: {
    id: number;
    link: string | null;
    img: StaticImageData;
    value: string;
    description: string;
  };
}) => {
  const handleClick = () => {
    if (social.link) {
      window.open(social.link, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full p-4 flex items-center gap-4 bg-white border-4 border-black border-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] hover:translate-x-1 hover:translate-y-1 transition-all text-left cursor-pointer disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
      disabled={!social.link}
    >
      <Image src={social.img} alt={social.value} className="size-12 shrink-0" />
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-lg">{social.value}</h4>
        <p className="font-normal text-sm text-black/80 mt-1">
          {social.description}
        </p>
      </div>
    </button>
  );
};

