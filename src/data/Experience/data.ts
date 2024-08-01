import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Savitribai Phule Pune University",
    location: "India, Maharashtra",
    description:
      "I graduated with a BBA(CA) Computer Application Degree in Computer Science & Engineering",
    icon: LuGraduationCap,
    date: "2018 - 2021",
  },
  {
    title: "React Js Developer Intern",
    location: "India, Delhi(Remote)",
    description:
      "I completed an internship at Mentorsity from February 2024 to July 2024, where I gained experience in front-end web development using technologies such as React (Next.js) and Tailwind CSS. Building the user interface. I was also appreciated for my contributions and work ethic.",
    icon: CgWorkAlt,
    date: "2024",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;