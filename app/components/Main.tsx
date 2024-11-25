"use client";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Main() {
  const cubicBezier = [0.32, 0.72, 0, 1];

  const parentVariants = {
    rest: {
      x: 0,
      transition: { duration: 0.7, ease: cubicBezier },
    },
    animated: {
      x: 200,
      transition: { duration: 0.7, ease: cubicBezier },
    },
  };

  const childVariants = {
    rest: {
      opacity: 0,
      transition: { duration: 0.7, ease: cubicBezier },
    },
    animated: {
      opacity: 1,
      transition: { duration: 0.7, ease: cubicBezier },
    },
  };

  return (
    <section className="py-[70px] flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        layout
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full mb-2">
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
          <h1 className="text-[32px] text-center sm:text-[45px] lg:text-[55px] text-[#111] font-bold">
            Hello! <br /> I&lsquo;m Nikita, <br /> Junior Frontend Developer
          </h1>
          <h3 className="text-[25px] text-center sm:text-[30px] lg:text-[40px]  font-semibold">
            I like to build useful and responsive web applications. Open to
            explore new opportunities and exciting projects.
          </h3>
        </div>
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="animated"
          whileTap="animated"
          className="mt-5 sm:mt-10 lg:mt-16 relative"
        >
          <Link
            href="mailto:cheapp78@gmail.com"
            className="w-full h-full absolute top-0 left-0 z-10"
          />
          <motion.div className="flex  items-center gap-1 transition-colors overflow-hidden bg-[#111] text-[20px] sm:text-[25px] font-semibold text-[#fff] py-2 px-5  rounded-full">
            <motion.span delay={0.5} variants={childVariants}>
              <MdEmail
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                size={36}
              />
            </motion.span>
            <motion.h1 variants={parentVariants}>get in touch</motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
