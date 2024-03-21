"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="/DP.jpg"
        alt="DP"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Dynamic and motivated Full Stack Web Developer. Passionate about
          crafting visually appealing and intuitive web applications. Committed
          to continuous learning and growth, I thrive in collaborative
          environments and excel in delivering results. Seeking an opportunity
          to apply my skills and contribute to innovative projects as a part of
          a progressive organization. Open to exciting career prospects and
          ready to make a positive impact in the programming field.
        </p>
      </div>
    </motion.div>
  );
}
