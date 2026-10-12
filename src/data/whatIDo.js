import frontend from "../assets/whatido/frontend.jpg";
import backend from "../assets/whatido/backend.jpg";
import ai from "../assets/whatido/ai.jpg";

/**
 * Existing fields (id, title, text, description, image, img, alt)
 * are preserved. New: `steps` — a "How I work" list per block.
 */
const whatIDo = [
  {
    id: "front-end",
    title: "Front End",
    text: "I build fast, responsive interfaces with React, HTML, CSS and JavaScript: clean layouts, smooth motion and a careful eye on mobile.",
    description:
      "I build fast, responsive interfaces with React, HTML, CSS and JavaScript: clean layouts, smooth motion and a careful eye on mobile.",
    image: frontend,
    img: frontend,
    alt: "Front-end work",
    side: "left",
    steps: [
      "Plan the layout first, in Figma or on paper.",
      "Build mobile-first with small, reusable React components.",
      "Test on real phone sizes and in both themes.",
      "Deploy to Netlify or GitHub Pages, then refine from feedback.",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    text: "I build APIs and authentication with Python, Flask, SQLAlchemy and JWT, and connect them to real databases.",
    description:
      "I build APIs and authentication with Python, Flask, SQLAlchemy and JWT, and connect them to real databases.",
    image: backend,
    img: backend,
    alt: "Backend work",
    side: "right",
    steps: [
      "Design the data and routes first.",
      "Build REST APIs with Flask and SQLAlchemy.",
      "Secure them with JWT authentication.",
      "Test every endpoint before connecting the frontend.",
    ],
  },
  {
    id: "ai",
    title: "AI",
    text: "I add AI to real products with the Gemini API and prompt engineering, from chat interfaces to agents like ZaibChat and ZaibHunt.",
    description:
      "I add AI to real products with the Gemini API and prompt engineering, from chat interfaces to agents like ZaibChat and ZaibHunt.",
    image: ai,
    img: ai,
    alt: "AI work",
    side: "left",
    steps: [
      "Start from the real problem the user has.",
      "Write and test prompts until answers are reliable.",
      "Call the Gemini API from my own backend so keys stay private.",
      "Improve with real conversations and edge cases.",
    ],
  },
];

export default whatIDo;