import logo from "@/assets/logo.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-8 bg-white border-4 border-black border-solid shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] z-50 flex items-center justify-between gap-20">
      <div className="flex items-center justify-center gap-4 px-5.5">
        <Image
          src={logo}
          alt="logo"
          className="size-8 rounded-full p-1 bg-black"
        />
        <p className="font-bold text-xl text-primary">ais_aif</p>
      </div>

      <div className="flex relative">
        <LinkNav href="/#about" label="About //" />
        <LinkNav href="/#portfolio" label="Portfolio" />
        <LinkNav href="/#contact" label="Contact" />
      </div>
    </nav>
  );
}

const LinkNav = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      className="border-l-[5px] group border-black px-5.5 py-4 w-36 *:transition-all *:duration-300 *:ease-in-out"
    >
      <span className="font-medium text-lg group-hover:font-bold text-primary">
        {label}
      </span>
    </a>
  );
};

