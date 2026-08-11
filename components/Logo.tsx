import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="group flex flex-col items-start">
      <img
        src="/images/logo.png"
        alt="Zenvest Wealth logo"
        className="h-20 md:h-24 lg:h-28 w-auto object-contain"
      />
    </Link>
  );
}
