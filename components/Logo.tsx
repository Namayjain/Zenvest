import Link from "next/link";

export default function Logo({ variant = "dark", size = "large" }: { variant?: "dark" | "light", size?: "normal" | "large" }) {
  return (
    <Link href="/" className="group flex flex-col items-start overflow-visible">
      <img
        src="/images/logo.png"
        alt="Zenvest Wealth logo"
        className={
          size === "large"
            ? "h-20 md:h-24 lg:h-28 w-auto object-contain scale-x-[1.25] origin-left"
            : "h-12 md:h-20 w-auto object-contain scale-x-[1.1] origin-left"
        }
      />
    </Link>
  );
}
