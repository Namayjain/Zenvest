import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="group flex items-center">
      <img
        src="/images/logo.png"
        alt="Zenvest Wealth logo"
        className="h-10 w-auto max-w-[180px] object-contain"
      />
    </Link>
  );
}
