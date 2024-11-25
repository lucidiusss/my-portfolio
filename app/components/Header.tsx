"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  cubicBezier,
} from "framer-motion";

export default function Header() {
  const cubicBezier = [0.32, 0.72, 0, 1];
  const linkClassName = `hover:text-[#111] transition`;
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, transition: { duration: 0.7, ease: cubicBezier } },
        hidden: { y: -100, transition: { duration: 0.7, ease: cubicBezier } },
      }}
      animate={hidden ? "hidden" : "visible"}
      className="z-50 flex justify-center items-center w-full fixed top-5 left-0"
    >
      <nav className="flex w-3/4 sm:w-2/4 md:w-2/4 lg:w-1/3 xl:w-1/4 justify-center gap-5 bg-[#e4e4e4] shadow-xl px-4 py-2 rounded-full">
        <Link
          className={clsx(linkClassName, pathname === "/" && "text-[#111]")}
          href="/"
        >
          main
        </Link>
        <Link
          className={clsx(linkClassName, pathname === "/blog" && "text-[#111]")}
          href="/blog"
        >
          blog
        </Link>
        <Link
          className={clsx(
            linkClassName,
            pathname === "/projects" && "text-[#111]"
          )}
          href="/projects"
        >
          projects
        </Link>
      </nav>
    </motion.div>
  );
}
