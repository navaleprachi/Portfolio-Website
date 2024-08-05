import project1 from "../assets/Playmate.svg";
import project2 from "../assets/AmazonHub.svg";
import project3 from "../assets/PetApp.svg";
import education1 from "../assets/NortheasternLogo.svg";
import education2 from "../assets/SPPULogo.svg";
import work from "../assets/InfosysLogo.svg";

export const HERO_CONTENT = `I am a dynamic and ambitious individual fueled by a deep passion for both design and development. With a solid foundation in computer science and a sharp eye for aesthetics, I am driven to craft captivating and efficient digital solutions that leave a lasting impression. As a graduate student in the field of Information Systems, I am eager to embark on a career journey as a software engineer/developer or front-end developer, where I can leverage my skills and creativity to create innovative solutions that exceed expectations.`;

export const ABOUT_TEXT = `As a dedicated software engineer currently pursuing a Master of Science in Information Systems at Northeastern University, I bring a strong foundation in front-end and back-end development. With hands-on experience in HTML, CSS, JavaScript, React, Python, and Java, I have successfully enhanced user engagement and optimized website performance through responsive design and efficient coding practices. My tenure at Infosys has honed my skills in creating robust automation test suites with Selenium and Cucumber, optimizing databases, and ensuring high-quality deliverables. Passionate about crafting intuitive and scalable web solutions, I am committed to driving innovation and delivering exceptional user experiences in dynamic, forward-thinking environments.`;

export const EDUCATION = [
  {
    year: "September 2023 - Expected May 2025",
    logo: education1,
    university: "Northeastern University",
    degree: "Master of Science in Information Systems",
    description: [
      "Currently pursuing a Master's in Information Systems at Northeastern University, Boston, MA, with an expected graduation date of May 2025",
      "Coursework includes Web Design and User Experience, User Experience Design and Testing (UI/UX), Database Management and Design, and Application Engineering and Development",
      "Equipped with advanced skills in designing intuitive user interfaces, managing complex databases, and developing robust applications, all contributing to expertise in creating seamless and impactful digital experiences",
    ],
  },
  {
    year: "August 2016 - May 2020",
    logo: education2,
    university: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering in Computer Engineering ",
    description: [
      "Graduated with a Bachelor's degree in Computer Engineering from Savitribai Phule Pune University, Pune, India, in May 2020",
      "Coursework covered Web Technology, Data Structures and Algorithms, Software Engineering and Project Management, Information Systems and Engineering Economics, Computer Networking, Machine Learning, and Cloud Computing",
      "This foundation provided a strong technical base and the skills necessary to tackle complex engineering challenges and contribute effectively to innovative technology solutions",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "July 2021 - August 2023",
    logo: work,
    role: "Frontend Developer",
    company: "Infosys",
    description: [
      "At Infosys, I specialize in creating responsive and efficient web pages using HTML, CSS, and JavaScript, which have boosted user engagement by 30%",
      "With React.js, I develop scalable web solutions, cutting development time by 20%",
      "Collaborating with cross-functional teams, I ensure seamless and intuitive user experiences",
      "My focus on performance optimization has halved page load times, while my expertise in automated testing and code reviews has significantly reduced post-deployment bugs",
    ],
    technologies: ["TOSCA", "ALM"],
  },
  {
    year: "March 2021 - June 2021",
    logo: work,
    role: "System Engineer",
    company: "Infosys",
    description: [
      "Developed comprehensive automation test suites for web applications using Selenium and Cucumber with Java, executing over 1000 test scenarios and markedly reducing manual testing efforts",
      "Collaborated with developers to design and enhance MySQL databases, boosting query performance and data reliability. Integrated automated tests that identified and resolved more than 200 bugs during the development cycle",
    ],
    technologies: ["HTML", "CSS", "Java", "mySQL"],
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
  address: "90 Bynner Street, Boston, MA 02130 ",
  phoneNo: "+1(857)654-8312 ",
  email: "navale.p@northeastern.edu",
};
