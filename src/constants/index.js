import project1 from "../assets/Playmate.svg";
import project2 from "../assets/AmazonHub.svg";
import project3 from "../assets/PetApp.svg";
import project4 from "../assets/AIMemoryWebPage.png";
import project5 from "../assets/meal_plan.png";
import education1 from "../assets/NortheasternLogo.svg";
import education2 from "../assets/SPPULogo.svg";
import work from "../assets/InfosysLogo.svg";
import work1 from "../assets/nooonapp_logo.jpeg";

export const HERO_CONTENT = `“Building human-centered digital experiences with React, Next.js, and great design.”

\nI’m a passionate frontend engineer with a strong foundation in computer science and a keen eye for design. Recently graduated with a Master’s in Information Systems from Northeastern University, I specialize in creating scalable, responsive, and visually engaging web applications. With hands-on experience in React, TypeScript, and modern UI frameworks, I thrive at the intersection of design and development crafting solutions that not only perform seamlessly but also leave a lasting impression.`;

export const ABOUT_TEXT = `I’m Prachi Navale, a Frontend Engineer and recent Master’s graduate in Information Systems from Northeastern University (May 2025). I specialize in building secure, scalable, and intuitive web applications that balance performance with exceptional user experience.

\nMy journey began at Infosys, where I crafted responsive UIs and strengthened accessibility for global clients, and has grown through projects like PlayMate, a full-stack sports booking platform, and a Smart Student Life Manager iOS app, blending creativity with problem-solving to make everyday experiences smoother. Currently, at Nooon, I’m shaping the future of digital marketplaces by building seamless subscription and payment flows with React, Next.js, and Stripe.

\nBeyond the code, I’m passionate about designing human-centered products, experimenting with Web3 and emerging tech, and collaborating with teams that thrive on innovation. Whether it’s optimizing a checkout flow or bringing a UI concept to life, I’m driven by the challenge of turning ideas into impactful digital experiences.`;

export const EDUCATION = [
  {
    year: "September 2023 - May 2025",
    logo: education1,
    university: "Northeastern University",
    degree: "Master of Science in Information Systems",
    description: [
      "Specialized in software development, front-end engineering, and UI/UX design, blending technical expertise with design thinkin.",
      "Completed hands-on projects using React, Node.js, MongoDB, and Redux, delivering scalable and user-friendly web applications",
      "Collaborated on academic and real-world projects, emphasizing agile methodologies, design systems, and cross-functional teamwork",
      "Graduate Teaching Assistant for Programs, Structure, and Algorithm — mentored students and clarified complex concepts, enhancing learning outcomes",
    ],
  },
  {
    year: "August 2016 - May 2020",
    logo: education2,
    university: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering in Computer Engineering ",
    description: [
      "Graduated with a Bachelor's degree in Computer Engineering, building a strong foundation in software development and computing principles",
      "Completed projects and coursework in Web Technologies, Data Structures & Algorithms, Software Engineering, Computer Networking, Machine Learning, and Cloud Computing",
      "Developed problem-solving, programming, and project management skills, enabling effective contribution to complex engineering and technology solutions",
      "Collaborated on team-based projects, emphasizing agile methodologies, design implementation, and practical application of theoretical concepts",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    logo: work1,
    role: "Software Engineer",
    company: "Nooon",
    description: [
      "Architected and shipped a subscription and billing system using Stripe APIs, Next.js, and PostgreSQL — supporting usage-based plan enforcement across 2,000+ influencers and 50+ hotel partners",
      "Engineered server-rendered dashboards with parallelized data fetching in Next.js App Router, reducing page load times by 33%",
      "Built and maintained a reusable React + Tailwind CSS component library across marketplace and analytics interfaces, cutting UI duplication and accelerating feature delivery by 18%",
      "Integrated Google Places API with structured validation and fallback handling, reducing manual hotel onboarding effort by 40%",
      "Translated high-fidelity Figma designs into accessible, production-ready React components, compressing design-to-development cycles by 30%",
      "Contributed to CI/CD pipelines via GitHub Actions and led code reviews, improving deployment consistency and reducing production regressions",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "BitBucket",
      "Stripe",
    ],
  },
  {
    year: "March 2021 - August 2023",
    logo: work,
    role: "Software Engineer",
    company: "Infosys",
    description: [
      "Led frontend development for enterprise-grade React + TypeScript dashboards serving 10,000+ internal users, building reusable component libraries that accelerated feature delivery by 30%",
      "Designed complex data visualization and reporting interfaces integrated with RESTful microservices, optimizing API interactions to improve response times by 25%",
      "Refactored legacy UI modules into modular, component-driven architecture, decreasing frontend defects by 20% and improving long-term maintainability",
      "Improved accessibility and responsive design across global teams by implementing WCAG 2.1 standards, enhancing cross-device usability",
      "Applied data structure optimization techniques to improve rendering performance in data-intensive dashboards",
      "Collaborated with backend, QA, and product teams to ensure seamless API integration and alignment on scalable, production-ready features",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "Jest",
      "CI/CD",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI Memory Compression System",
    image: project4,
    description: [
      "Built an AI memory persistence system that solves the long-context problem for LLMs",
      "The system chunks and embeds conversation history into PostgreSQL with pgvector, retrieves semantically relevant memories using a 3-factor ranking algorithm (relevance + recency + importance), and compresses older messages into hierarchical summaries — reducing token usage by 85% while preserving long-term context recall",
      "Built end-to-end with FastAPI, OpenAI GPT-4o-mini, and a React + TypeScript frontend featuring a real-time Memory Inspector panel",
    ],
    technologies: [
      "Python",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "RAG Retrieval-Augmented Generation",
      "LLM Memory Management",
      "OpenAI GPT-4o-mini",
    ],
    link: "https://github.com/navaleprachi/AI_Memory_System",
  },
  {
    title: "PlayMate Web Application",
    image: project1,
    description: [
      "Built a full-stack sports community web application where athletes and fitness enthusiasts can discover venues, book facilities, join events, and connect with others",
      "Implemented JWT authentication with access, refresh, and reset token flows, integrated Google Maps Platform API for location-based venue discovery, and built booking management workflows supporting 25+ facilities — with a 40% improvement in data retrieval performance via query optimization and caching",
      "Built end-to-end with React, Node.js, Express, and MongoDB as a 4-person team using Agile practices",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Material-UI",
      "MongoDB",
      "Restful APIs",
    ],
    link: "https://github.com/navaleprachi/PlayMate-Web-Application",
  },
  {
    title: "Mealgorithm - Smart Student Life Manager iOS App",
    image: project5,
    description: [
      "Built an AI-powered iOS app that helps university students manage groceries, plan meals, and track budgets in one unified experience",
      "Integrated the Spoonacular API to deliver personalized, dietary-preference-based meal recommendations, built expiry-aware grocery tracking with daily push notifications, and implemented visual budget insights using Swift Charts — reducing food waste by up to 30% and saving students an estimated $50–$100/month",
      "Built end-to-end with SwiftUI, Core Data, and MVVM architecture as a solo project",
    ],
    technologies: [
      "SwiftUI",
      "Core Data",
      "MVVM",
      "Spoonacular API",
      "Swift Charts",
      "Xcode",
    ],
    link: "https://github.com/navaleprachi/Mealgorithm",
  },
  {
    title: "Amazon Hub App",
    image: project2,
    description: [
      "In light of the instability and uncertainty surrounding the future of X (formerly Twitter), users are increasingly seeking a stable and reliable platform for social interaction",
      "Recognizing this opportunity, I designed Amazon Hub, a feature that seamlessly integrates social engagement, content sharing, and a unique shopping experience within the existing Amazon ecosystem",
      "This UI/UX design project on Figma aims to create a cohesive and enriching user experience, allowing users to connect with others and enjoy integrated shopping all in one place. Explore how Amazon Hub bridges the gap between social media and e-commerce, offering a dependable alternative for users",
    ],
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/fhSxY4jqSkUjfwUTW0r1oJ/PrachiNavale_Spring24?page-id=934%3A2&type=design&node-id=1473-4890&t=zEZoGB5yIZweaDBN-0&scaling=scale-down&starting-point-node-id=1473%3A4886&content-scaling=fixed",
  },
  {
    title: "Pet Perfect: Pet Adoption and Care App",
    image: project3,
    description: [
      "Many individuals struggle to find an animal companion that seamlessly fits into their lifestyle and living situation.",
      "Challenges such as the lack of personalized guidance, uncertainty about pet care requirements, limited access to adoption resources, and concerns about long-term commitment often lead to compatibility issues, overwhelming decisions, and hesitation towards pet ownership.",
      "To address these challenges, I designed PetMatch, a UI/UX project on Figma, focused on providing users with tailored recommendations, comprehensive pet care information, and streamlined access to adoption resources.",
      "PetMatch aims to simplify the process of finding the perfect pet, ensuring a harmonious and fulfilling pet ownership experience.",
    ],
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/fhSxY4jqSkUjfwUTW0r1oJ/PrachiNavale_Spring24?page-id=409%3A2&node-id=409-684&t=DwWBhTPUz9fQuR2f-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=409%3A684",
  },
];

export const CONTACT = {
  address: "Boston, MA 02130 ",
  phoneNo: "+1(857)654-8312 ",
  email: "prachi0407@gmail.com",
};
