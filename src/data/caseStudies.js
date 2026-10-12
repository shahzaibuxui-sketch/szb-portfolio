// Case study content for the My Work pages.
// Drafted from your GitHub READMEs. Edit anything that is not 100% accurate.
// Leave `challenge` or `next` as "" to hide that section on the page.

const caseStudies = {
  zaibhunt: {
    slug: "zaibhunt",
    title: "ZaibHunt",
    tagline:
      "AI job-hunting agent: upload a resume, get AI-matched jobs and tailored cover letters.",
    role: "Full stack: frontend, backend and deployment",
    stack: [
      "React",
      "Vite",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "JWT",
      "Gemini API",
      "Adzuna API",
    ],
    overview:
      "Job hunting is repetitive: reading dozens of listings, judging which ones fit, and rewriting a cover letter each time. ZaibHunt automates that. You upload a resume, fetch live listings, and the app scores how well each job fits you and writes a cover letter for it.",
    built: [
      "JWT authentication with signup, login, protected routes and persistent sessions.",
      "PDF resume upload with text extraction (pdfplumber), stored per user.",
      "Live job listings from the Adzuna API, with duplicate detection.",
      "AI fit scoring: Gemini compares the resume with each job and returns a 0 to 100 score with a written explanation.",
      "One-click AI cover letters for each job, with copy to clipboard.",
      "Frontend deployed on Netlify, Flask API deployed on PythonAnywhere.",
    ],
    challenge:
      "While testing cover letters, a job description from a live job board contained hidden text telling the AI to insert a specific keyword and code into its output, and Gemini obeyed. That is a prompt injection attack hidden in third-party data. I fixed it by wrapping the job description in clear delimiters and telling the model to treat it strictly as data and ignore any commands inside it. Re-running the same poisoned listing then produced a clean cover letter.",
    next: "",
    liveUrl: "https://zaibhunt.netlify.app/login",
    repoUrl: "https://github.com/shahzaibuxui-sketch/ZaibHunt",
  },

  zaibchat: {
    slug: "zaibchat",
    title: "ZaibChat",
    tagline:
      "A full-stack AI chatbot with chat history, voice input and file upload.",
    role: "Full stack: frontend, backend and deployment",
    stack: ["React", "Vite", "CSS Variables", "Flask", "Gemini 2.5 Flash API"],
    overview:
      "ZaibChat is an AI chat assistant built with React and Flask and connected to Google's Gemini 2.5 Flash API. It has the features people expect from a modern chat app, and it works on both desktop and mobile.",
    built: [
      "Real-time AI chat powered by Gemini 2.5 Flash through my own Flask backend, so the API key stays private.",
      "Chat history in a sidebar, with rename and delete.",
      "Voice input using the Web Speech API.",
      "File and image upload support.",
      "Dark and light mode that remembers your choice with localStorage.",
      "Typing indicator, auto-scroll and a fully responsive layout.",
      "Frontend deployed on Netlify, backend deployed on PythonAnywhere.",
    ],
    challenge: "",
    next: "",
    liveUrl: "https://zaibchat.netlify.app/",
    repoUrl: "https://github.com/shahzaibuxui-sketch/ZaibChat-frontend",
    extraLinks: [
      {
        label: "Backend repo",
        url: "https://github.com/shahzaibuxui-sketch/ZaibChat-backend-",
      },
    ],
  },

  strikegear: {
    slug: "strikegear",
    title: "StrikeGear",
    tagline:
      "A multi-page sports e-commerce website with a working shopping cart.",
    role: "Design and frontend development",
    stack: ["HTML5", "CSS3", "JavaScript", "localStorage", "Intersection Observer"],
    overview:
      "StrikeGear is a complete multi-page sports e-commerce frontend with an athletic brand identity. It is built with plain HTML, CSS and JavaScript, with no frameworks and no build tools.",
    built: [
      "Six pages: Home, Shop, Cart, About, Contact and FAQ.",
      "Shopping cart with add, remove and quantity control, saved in localStorage.",
      "Product filtering by category and live search on the shop page.",
      "Scroll reveal animations using the Intersection Observer API.",
      "Toast notifications for cart actions, and form validation on Contact and the newsletter.",
      "Responsive layout with a hamburger menu on mobile.",
    ],
    challenge: "",
    next: "Product detail pages, user authentication, a backend with a real payment gateway, and a wishlist.",
    liveUrl: "https://shahzaibuxui-sketch.github.io/strikegear/",
    repoUrl: "https://github.com/shahzaibuxui-sketch/strikegear",
  },
};

export default caseStudies;