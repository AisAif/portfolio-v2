interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "relative border-4 border-black font-bold md:text-2xl text-lg text-center whitespace-nowrap transition-transform hover:scale-105";
  const primaryStyles = "bg-[#bae6ff] rounded-full md:px-8 md:py-4 px-4 py-2";
  const secondaryStyles = "bg-white md:px-8 md:py-3 px-4 py-2";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles} ${className}`}
    >
      {children}
      <div className="hidden md:block absolute -bottom-14 -right-16 scale-75">
        <Decoration />
      </div>
    </button>
  );
}

const Decoration = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="90"
      viewBox="0 0 77 90"
      fill="none"
    >
      <path
        d="M60.283 13.9774C59.6952 13.0773 54.4411 12.321 48.42 12.1446C39.0557 11.8997 37.4743 12.2608 36.9196 14.1637C35.333 18.9329 37.5338 20.0043 48.4795 19.888C60.349 19.5833 63.3391 18.2035 60.283 13.9774Z"
        fill="black"
      />
      <path
        d="M42.8011 42.7226C31.2635 35.127 27.7238 34.0017 27.977 38.2609C28.0798 39.9911 32.0201 43.3633 39.8059 48.5105C46.3383 52.7972 52.0169 56.1996 52.6824 56.1601C53.2148 56.1284 53.6601 54.6327 53.5573 52.9024C53.4149 50.5066 50.7279 47.995 42.8011 42.7226Z"
        fill="black"
      />
      <path
        d="M28.4901 66.0512C22.4319 56.2601 15.247 47.738 13.8383 48.7567C11.4043 50.5041 12.8474 54.559 19.0769 62.7372C22.423 67.3468 26.051 72.2068 27.0776 73.7486C28.1042 75.2904 29.3812 76.5502 30.0467 76.5106C32.8418 76.3445 32.1814 71.976 28.4901 66.0512Z"
        fill="black"
      />
    </svg>
  );
};

