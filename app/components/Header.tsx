"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const linkClassName = `hover:text-[#111] transition`;
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-5 w-3/4 sm:w-2/4 md:w-2/4 lg:w-1/3 xl:w-1/4 fixed top-5 left-1/2 -translate-x-1/2 bg-[#e4e4e4] shadow-xl px-4 py-2 rounded-full">
      <Link
        className={clsx(linkClassName, pathname === "/" && "text-[#111]")}
        href="/"
      >
        About me
      </Link>
      <Link
        className={clsx(linkClassName, pathname === "/blog" && "text-[#111]")}
        href="/blog"
      >
        Blog
      </Link>
      <Link
        className={clsx(
          linkClassName,
          pathname === "/projects" && "text-[#111]"
        )}
        href="/projects"
      >
        Projects
      </Link>
    </nav>
  );
}
