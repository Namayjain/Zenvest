import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="group flex flex-col items-start">
      <img
        src="/images/logo.png"
        alt="Zenvest Wealth logo"
        className="h-14 md:h-16 w-auto object-contain"
      />
      <span className="mt-1 text-[9px] font-bold tracking-wider text-navy-600 sm:text-[10px]">
        AMFI REGISTERED MUTUAL FUND DISTRIBUTOR
      </span>
    </Link>
  );
}
