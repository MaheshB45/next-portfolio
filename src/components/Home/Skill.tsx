"use client";

import Image from "next/image";
import SectionHeader from "../Shared/SectionHeader";
import { skillsData } from "@/data/Skill/data";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <section
      className="mt-[8rem] lg:w-[55rem] xl:w-[65rem] lg:mx-auto leading-6 scroll-mt-28"
      id="skills"
    >
      <SectionHeader>Skills, Tools & Technology</SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-[1.75rem] mx-[1rem] md:ml-[1.5rem] md:mr-[1.5rem]">
      {skillsData.map((skill, index) => (
        <motion.div 
          className="w-[8rem] h-[8rem] bg-[#302F4E] hover:border-2 hover:border-x-[#F74C60] cursor-pointer rounded-full flex flex-col justify-center items-center gap-2"
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src={skill.logo} alt="picture" width={50} height={50}/>
          <div className="text-nowrap text-white">{skill.title}</div>
        
        </motion.div>
      ))}
      </div>
    </section>
  )
}
