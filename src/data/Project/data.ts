import podcastplatform from "../../../public/project/podcastPlatform.jpg";
import typecat from "../../../public/project/typecat.jpg";

export const projectsData = [
  {
    title: "Podcast Platform",
    projectlink: "https://podcast-platform-react-app.vercel.app/",
    description:
      "I created a full-stack dynamic web app, featuring a allows users to create podcasts, upload episodes, and share their content with others. Users can also browse and search for podcasts created by other users. Deployed on Vercel.",
    tags: [
      "React Js",
      "Redux Toolkit,",
      "React Router Dom",
      "Firebase",
    ],
    imageUrl: podcastplatform,
    github: {
      frontend:
      "https://github.com/MaheshB45/podcast-platform-react-app",
    },
  },
  {
    title: "Typing Speed Test",
    description:
      "multi-mode typing test website with the ability to save results for better analysis using React Js.",
    tags: ["React Js", "Material-UI", "react-toastify", "Firebase"],
    imageUrl: typecat,
    github: {
      frontend:
        "https://github.com/MaheshB45/React-App-Repo/tree/main/typing-speed-test",
    },
  },
] as const;