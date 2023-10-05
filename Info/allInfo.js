import learning1 from "../src/image/undraw_learning_1.svg";
import article from "../src/image/undraw_articles.svg";
import FindaBook from "../src/image/book-2.jpg";
import staticWeb from "../src/image/static-web.jpg";
import neatlyVDO from "../src/image/neatly.jpg";
import crudVDO from "../src/image/crud-project-1.png";
import resumeWebsite from "../src/image/resume-web.png";

export const educationAndWork = [
  {
    id: 1,
    name: "Educations",
    year: "2013-2023",
    image: learning1,
    details: [
      {
        id: 1,
        name: "Coding Bootcamp,",
        year: "Jun-Oct 2023",
        school: "Full-Stack Software Development",
        description: null,
      },
      {
        id: 2,
        name: "Faculty of Industail Education and Technology Field of study Architecture",
        year: "2016-2020",
        school: "King mongkut's institute of technology ladkrabang, KMITL",
        description: null,
      },
      {
        id: 3,
        name: "English-Mathematics,",
        year: "2013-2016",
        school: "Saint Joseph Thiphawan School ",
        description: null,
      },
    ],
  },
  {
    id: 2,
    name: "Work Experience",
    year: "Jun 2021 - Jan 2023",
    image: article,
    details: [
      {
        id: 1,
        name: "Architecture / Interior Designer,",
        year: "Jun 2021 - Jan 2023",
        school: "PRIMARY WORKSHOP AND DESIGN COMPANY LIMITED",
        description: [
          "Design and present data analysis results, sources, case studies, concepts, master plans, and customize the solutions that fit the customers’ needs",
          "Collaborate with specialists, constructors, engineers, and suppliers in the global supply chain.",
          "Surveying the area, attending meetings, collecting, analyzing data, following up, coordinating, and summarizing results.",
        ],
      },
    ],
  },
];

export const mySkillInfo = [
  {
    id: 1,
    title: "Front-End Developer",
    program: [
      "HTML",
      "Cascading Style Sheets(CSS)",
      "Tailwind CSS",
      "React",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "Back-End Developer",
    program: ["MongoDB", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Others",
    program: ["Software Testing", "Version Control with Git and Github"],
  },
];

export const portfolioInfoFront = [
  {
    id: 3,
    title: "Resume-Website",
    image: resumeWebsite,
    link: "https://github.com/Tongcnc/Resume-Web-Design",
    linkdemo: "https://tongcnc-resume-dev.netlify.app",
    description:
      "Explore my journey through my resume website. Showcase of my technical prowess and coding skills.",
    tech: ["Javascript", "React", "CSS"],
  },
  {
    id: 5,
    title: "Education Website",
    image: staticWeb,
    link: "https://github.com/techupth/html-css-git-mini-project-html-project-sliver-group2.git",
    linkdemo: "https://future-education-project.netlify.app/",
    description:
      "Static Education Website | Team mini Project (5 members) | A static education website that provides educational content, resources, and information without dynamic or interactive features.It typically consists of fixed web pages with text, images, and elements, offering information on various educational programs. ",
    tech: ["TailwindCSS", "HTML"],
  },
];

export const portfolioInfoBack = [
  {
    id: 1,
    title: "Find a Book",
    image: FindaBook,
    link: "https://github.com/Tongcnc/Findbook-on-Google.git",
    linkdemo: "https://find-a-book-gg.netlify.app",
    description:
      "With our user-friendly search feature, you can effortlessly find the books in simply enter keywords, titles, or authors, and let our website do the rest, we provide direct links to Google Play",
    tech: ["CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "Neatly Hotel",
    image: neatlyVDO,
    link: "https://github.com/PasinPeat/neatly-website-client.git",
    linkdemo: null,
    description:
      "Hotel booking Website | Team Project Final (6 members) | A hotel website with CRUD features enables users to book rooms, and manage reservations. Offers the user accounts for profile management and admin controls for content management.",
    tech: [
      "Typescript",
      "React",
      "Tailwind",
      "DaisyUI",
      "MUI",
      "Swiperjs",
      "Node.js",
      "Express.js",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "CRUD Users",
    image: crudVDO,
    link: "https://github.com/Tongcnc/crud-users-project.git",
    linkdemo: null,
    description:
      "A website with CRUD features enables users to create,edit and deletate their account",
    tech: ["TailwindCSS", "JavaScript", "React", "Node.js", "Express.js"],
  },
];

export const contactInfo = [
  {
    id: 1,
    title: "Github",
    image:
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=255&g=255&b=255",
    content: "https://github.com/Tongcnc",
  },
  {
    id: 3,
    title: "Linkedin",
    image:
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-4.png&r=255&g=255&b=255",
    content: "https://www.linkedin.com/in/chanokchol-klamphu/",
  },
  {
    id: 4,
    title: "Email",
    image:
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-email-10.png&r=255&g=255&b=255",
    content: "tongcnc3@gmail.com",
  },
  {
    id: 5,
    title: "Telphone",
    image:
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-phone-8.png&r=255&g=255&b=255",
    content: "0925542693",
  },
];

export const myCV = {
  link: "https://drive.google.com/file/d/10suUs-gmVlIizArwD7pqwwIEC1-hB8Kr/view?usp=sharing",
};
