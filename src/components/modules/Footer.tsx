import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="p-20 max-w-360 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="logo"
            className="size-12 p-1 bg-black rounded-full"
          />
          <p className="font-normal text-2xl text-primary">ais_aif</p>
        </div>

        <p className="font-medium text-2xl text-center">
          © {new Date().getFullYear()} Ais Aif
        </p>
      </div>
    </footer>
  );
}

