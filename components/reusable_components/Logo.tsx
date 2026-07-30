"use client";

// Next
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

// Images
import logo from "@/public/buy2logo 1.png";
// import logoDark from "@/public/Images/Logo dark.png";

//--------------------------
interface LogoProps {
  sizeClass?: string;
  // variant?: "default" | "white";
  // followTheme?: boolean;
  // inverseTheme?: boolean;
}
//--------------------------

export default function Logo({
  sizeClass = "w-[120px] sm:w-[160px] md:w-[200px]",
  // variant = "default",
  // followTheme = false,
  // inverseTheme = false,
}: LogoProps) {
  // const { resolvedTheme } = useTheme();

  // let logoSrc = logoDark;

  // if (followTheme) {
  //   logoSrc = resolvedTheme === "dark" ? logoWhite : logoDark;
  // } else if (inverseTheme) {
  //   logoSrc = resolvedTheme === "dark" ? logoDark : logoWhite;
  // } else {
  //   logoSrc = variant === "white" ? logoWhite : logoDark;
  // }

  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        className={`h-auto cursor-pointer ${sizeClass}`}
      />
    </Link>
  );
}
