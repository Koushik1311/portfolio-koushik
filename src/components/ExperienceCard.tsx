"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center snap-mandatory bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="./mentorsity.jpg"
        alt="company"
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Web Developer</h4>
        <p className="font-bold text-2xl mt-1">Mentorsity</p>
        <div className="flex space-x-2 my-2">{/* Tech used */}</div>
        <p className="uppercase py-5 text-gray-300">
          August 2023 - December 2023
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
        </ul>
      </div>
    </article>
  );
}
