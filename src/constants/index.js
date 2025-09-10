import project1 from "../assets/Playmate.svg";
import project2 from "../assets/AmazonHub.svg";
import project3 from "../assets/PetApp.svg";
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
    role: "Frontend Developer",
    company: "Nooon",
    description: [
      "Contributing to the development of Nooon’s B2B marketplace platform, focused on connecting hotels with influencer marketing opportunities",
      "Building responsive, performant React components with Tailwind CSS to deliver a clean, intuitive user interface for businesses and creators",
      "Collaborating closely with product and design teams to translate wireframes into engaging, user-friendly experiences",
      "Integrating API-driven features to streamline booking and partnership workflows between hotels and influencers",
      "Enhancing platform usability with smooth animations, accessibility improvements, and optimized navigation",
      "Actively participating in agile sprints, code reviews, and knowledge-sharing to improve overall engineering quality",
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
    year: "September 2021 - August 2023",
    logo: work,
    role: "Software Engineer - Frontend",
    company: "Infosys",
    description: [
      "Engineered scalable React and TypeScript components, ensuring reusability and performance across client projects",
      "Translated Figma designs into responsive, accessible interfaces compliant with WCAG 2.1 standards",
      "Integrated RESTful APIs to deliver real-time data and reliable user interactions",
      "Improved app responsiveness and reduced bundle sizes with Next.js optimization techniques",
      "Automated deployments with GitHub Actions, accelerating release cycles and reducing manual errors",
      "Strengthened testing coverage with Jest and React Testing Library, raising overall product quality",
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
  {
    year: "March 2021 - August 2021",
    logo: work,
    role: "Systems Engineer - UI developer",
    company: "Infosys",
    description: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility",
      "Built foundational React components to streamline development and improve maintainability",
      "Partnered with QA teams to troubleshoot UI regressions and enhance defect resolution speed",
      "Resolved browser rendering issues, improving consistency across Chrome, Safari, and Firefox",
      "Enhanced UI reliability through debugging tools and validation of user flows",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Browser Testing",
      "Debugging",
    ],
  },
];

export const PROJECTS = [
  {
    title: "PlayMate Web Application",
    image: project1,
    description: [
      "Engineered a dynamic full-stack web development project for sports arena booking, which streamlined arena reservations for both individual and team activities",
      "Leveraged React, Node.js, and Material UI to create intuitive user interfaces, while optimizing backend performance with MongoDB",
      "This approach enhanced frontend accessibility and led to a 40% increase in booking activities",
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
  email: "navale.p@northeastern.edu",
};
