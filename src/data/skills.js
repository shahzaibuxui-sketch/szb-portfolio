// Level rule used below: 80 and above = "Advanced", under 80 = "Intermediate".
const skills = [
  {
    group: "Frontend",
    items: [
      { name: "HTML5", value: 90, level: "Advanced" },
      { name: "CSS3", value: 90, level: "Advanced" },
      { name: "JavaScript (ES6+)", value: 85, level: "Advanced" },
      { name: "React JS", value: 75, level: "Intermediate" },
      { name: "Bootstrap", value: 80, level: "Advanced" },
      { name: "jQuery", value: 70, level: "Intermediate" },
      { name: "Responsive Design", value: 90, level: "Advanced" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Python", value: 75, level: "Intermediate" },
      { name: "Flask", value: 75, level: "Intermediate" },
      { name: "SQLAlchemy", value: 70, level: "Intermediate" },
      { name: "JWT Authentication", value: 70, level: "Intermediate" },
      { name: "REST APIs", value: 75, level: "Intermediate" },
      { name: "Gemini API / AI Integration", value: 80, level: "Advanced" },
    ],
  },
  {
    group: "UI/UX",
    items: [{ name: "Figma", value: 85, level: "Advanced" }],
  },
  {
    group: "CS Fundamentals",
    items: [
      { name: "Object-Oriented Programming", value: 70, level: "Intermediate" },
      { name: "Data Structures & Algorithms", value: 65, level: "Intermediate" },
      { name: "Git & GitHub", value: 80, level: "Advanced" },
    ],
  },
  {
    group: "Other",
    items: [
      { name: "localStorage", value: 85, level: "Advanced" },
      { name: "Prompt Engineering", value: 80, level: "Advanced" },
    ],
  },
];
export default skills;