import FindaBook from "../src/image/FindaBook.mp4";
import Launching from "../src/image/undraw_Launching.svg";
import Convert from "../src/image/undraw_convert.svg";
import learning from "../src/image/undraw_learning.svg";
import upgrade from "../src/image/undraw_upgrade.svg";
import article from "../src/image/undraw_articles.svg";
import crudProject1 from "../src/image/crud-project-1.png";
import staticWeb from "../src/image/static-website.mp4";
import neatlyVDO from "../src/image/neatly.mp4";

export const educationAndWork = [
  {
    id: 1,
    name: "Educations,",
    year: "2013-2023",
    image: Convert,
    details: [
      {
        id: 1,
        name: "Coding Bootcamp,",
        year: "Jun-Oct 2023",
        school: "Full-Stack Software Development",
      },
      {
        id: 2,
        name: "Faculty of Industail Education and Technology Field of study Architecture",
        year: "2016 - 2020",
        school: "KMITL",
        // school: "King mongkut's institute of technology ladkrabang",
      },
      {
        id: 3,
        name: "English-Mathematics,",
        year: "2013-2016",
        school: "Saint Joseph Thiphawan School ",
      },
    ],
  },
  {
    id: 2,
    name: "Work Experience,",
    year: "Jun 2021 - Jan 2023",
    image: article,
    details: [
      {
        id: 1,
        name: "Junior Architecture/Interior Designer,",
        year: "Jun 2021- Jan 2023",
        school: "Techup Thailand",
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

export const portfolioInfo = [
  {
    id: 1,
    title: "Find a Book",
    image: FindaBook,
    link: "https://github.com/Tongcnc/Findbook-on-Google.git",
    description:
      "With our user-friendly search feature, you can effortlessly find the books in simply enter keywords, titles, or authors, and let our website do the rest, we provide direct links to Google Play",
    tech: ["CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "Neatly Hotel",
    image: neatlyVDO,
    link: "https://github.com/PasinPeat/neatly-website-client.git",
    description:
      "Hotel booking Website | Team Project Final (6 members) A hotel website with CRUD features enables users to book rooms, and manage reservations. Offers the user accounts for profile management and admin controls for content management.",
    tech: ["Typescript", "React", "Tailwind", "DaisyUI", "MUI", "Swiperjs"],
  },
  {
    id: 3,
    title: "CRUD Users",
    image: crudProject1,
    link: "https://github.com/Tongcnc/crud-users-project.git",
    description:
      "With our user-friendly search feature, you can effortlessly find the books in simply enter keywords, titles, or authors, and let our website do the rest, we provide direct links to Google Play",
    tech: ["TailwindCSS", "JavaScript", "React"],
  },
  {
    id: 4,
    title: "Static Website",
    image: staticWeb,
    link: "https://github.com/techupth/html-css-git-mini-project-html-project-sliver-group2.git",
    description:
      "With our user-friendly search feature, you can effortlessly find the books in simply enter keywords, titles, or authors, and let our website do the rest, we provide direct links to Google Play",
    tech: ["TailwindCSS", "HTML"],
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
    id: 2,
    title: "Instragram",
    image:
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-14.png&r=255&g=255&b=255",
    content: "https://instagram.com/tongcnc?igshid=MzRlODBiNWFlZA%3D%3D",
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
  link: "https://drive.google.com/file/d/1qNASBxZ7yyG2z-8ayoTm0nPX6ld5wraS/view?usp=sharing",
};
