import chatbot from "../assets/work/chatbot.jpg";
import jobhunt from "../assets/work/jobhunt.jpg";
import strikegear from "../assets/work/strikegear.jpg";

// real, working links — do not use "#" placeholders anywhere.
// if a URL is ever empty, WorkRow renders a disabled button instead.
const work = [
  {
    title: "ZaibChat",
    description:
      "A full-stack AI chatbot with multiple chats, voice input and a clean modern UI.",
    tech: ["React", "Flask", "Gemini API", "SQLAlchemy"],
    thumbnail: chatbot,
    liveUrl: "https://zaibchat.netlify.app/",
    repoUrl: "https://github.com/shahzaibuxui-sketch/ZaibChat-frontend",
  },
  {
    title: "ZaibHunt",
    description:
      "AI job-hunting agent. Upload your resume and let AI find your best-fit jobs.",
    tech: ["React", "Python", "Gemini API"],
    thumbnail: jobhunt,
    liveUrl: "https://zaibhunt.netlify.app/login",
    repoUrl: "https://github.com/shahzaibuxui-sketch/ZaibHunt",
  },
  {
    title: "StrikeGear",
    description:
      "B2B sportswear and streetwear manufacturing and export, based in Sialkot.",
    tech: ["React", "Vite", "CSS"],
    thumbnail: strikegear,
    liveUrl: "https://shahzaibuxui-sketch.github.io/strikegear/",
    repoUrl: "https://github.com/shahzaibuxui-sketch/strikegear",
  },
];

export default work;