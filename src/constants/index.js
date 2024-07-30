import project1 from "../assets/PlaymateHomePage.png";
import project2 from "../assets/AmazonHub.png";
import project3 from "../assets/PetApp-HomePage.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dynamic and ambitious individual fueled by a deep passion for both design and development. With a solid foundation in computer science and a sharp eye for aesthetics, I am driven to craft captivating and efficient digital solutions that leave a lasting impression. As a graduate student in the field of Information Systems, I am eager to embark on a career journey as a software engineer/developer or front-end developer, where I can leverage my skills and creativity to create innovative solutions that exceed expectations.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2021 - August 2023",
    role: "System Engineer",
    company: "Infosys",
    description: `At Infosys, I developed automated tests using TOSCA, achieving a 70% increase in script reusability and scalability while ensuring user accessibility through thorough debugging. I led automation training sessions, enhancing team proficiency by 40% and cutting manual testing time by 70%. My role involved precise defect logging in ALM, collaborating closely with developers, and addressing project challenges with efficient test automation and project management. By optimizing testing procedures, I improved workflow efficiency by 30% and contributed to agile methodologies and unified testing processes with developers and business analysts.`,
    technologies: ["TOSCA", "ALM"],
  },
  {
    year: "March 2021 - June 2021",
    role: "System Engineer Intern",
    company: "Infosys",
    description: `Engaged in interdisciplinary team projects, leveraging expertise in Java, SQL and object oriented programming principles; utilizing automation testing tools Selenium, Cucumber to develop and deploy automated testing solutions, ensuring system's security, quality assurance and status validation. Facilitated troubleshooting sessions and cross-functional discussions, showcasing problem-solving abilities and technical proficiency in software development and documentation align with the project's vision`,
    technologies: ["HTML", "CSS", "Java", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "PlayMate Web Application",
    image: project1,
    description:
      "Engineered a dynamic full-stack web development project for sports arena booking, which streamlined arena reservations for both individual and team activities. Leveraged React, Node.js, and Material UI to create intuitive user interfaces, while optimizing backend performance with MongoDB. This approach enhanced frontend accessibility and led to a 40% increase in booking activities.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Material-UI",
      "MongoDB",
      "HTTP Restful APIs",
    ],
  },
  {
    title: "Amazon Hub App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Figma"],
  },
  {
    title: "Pet Perfect: Pet Adoption and Care App",
    image: project3,
    description:
      "Partnered with stakeholders to design a user-centric strategy for pet adoption, addressing key challenges in finding compatible companions. Developed initial wireframes and high-fidelity prototypes using Figma, iteratively refining them based on user feedback. This process enhanced the overall user experience and visual appeal, ensuring an intuitive and engaging interface.",
    technologies: ["Figma"],
  },
  // {
  //   title: "Blogging Platform",
  //   // image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "90 Bynner Street, Boston, MA 02130 ",
  phoneNo: "+1(857)654-8312 ",
  email: "navale.p@northeastern.edu",
};
