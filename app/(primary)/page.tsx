"use client";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const parentVariants = {
    rest: {
      x: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    animated: {
      x: 200,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const childVariants = {
    rest: {
      transform: "translateX(0)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    animated: {
      transform: "translateX(75px)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-[70px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        layout
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full mb-2 mt-10 sm:mt-5 lg:mt-16">
          <Image
            className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full"
            loader={({ src }) => src}
            src="/photo.jpg"
            alt="Photo"
            width={10}
            height={10}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] text-center sm:text-[45px]  text-[#111] font-bold">
            Hello, I'm Nikita Isaev
          </h1>
          <h3 className="text-[25px] text-center sm:text-[30px]  font-semibold">
            Junior Frontend Developer, based in Saint-Petersburg. Open to
            explore new opportunities and exciting projects.
          </h3>
        </div>
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="animated"
          className="mt-5 sm:mt-10 lg:mt-16 relative"
        >
          <Link
            href="mailto:cheapp78@gmail.com"
            className="w-full h-full absolute top-0 left-0 z-10"
          />
          <motion.div className="flex items-center gap-1 transition-colors overflow-hidden bg-[#111] text-[20px] sm:text-[25px] font-semibold text-[#fff] py-2 px-5  rounded-full">
            <motion.span variants={childVariants}>
              <MdEmail />
            </motion.span>
            <motion.h1 variants={parentVariants}>get in touch</motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
