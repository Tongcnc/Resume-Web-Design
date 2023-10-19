import learning1 from "../src/image/undraw_learning_1.svg";
import article from "../src/image/undraw_articles.svg";
import FindaBook from "../src/image/book-2.jpg";
import staticWeb from "../src/image/static-web.jpg";
import neatlyVDO from "../src/image/neatly.jpg";
import jobListing from "../src/image/static-job-listing.jpg";
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
  // {
  //   id: 3,
  //   title: "Resume-Website",
  //   image: resumeWebsite,
  //   link: "https://github.com/Tongcnc/Resume-Web-Design",
  //   linkdemo: "https://tongcnc-resume-dev.netlify.app",
  //   description:
  //     "Explore my journey through my resume website. Showcase of my technical prowess and coding skills.",
  //   tech: ["Javascript", "React", "CSS"],
  // },
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
  {
    id: 4,
    title: "Static Job Listing",
    image: jobListing,
    link: "https://github.com/Tongcnc/static-job-listings.git",
    linkdemo: "https://project-static-job-listings.netlify.app/",
    description:
      "Effortless Job Discovery: Our Website's Advanced Filters and Responsive Design Make Finding Opportunities by Language, Roles, and Tools a Breeze! (Challeange from frontendmentor.io)",
    tech: ["TailwindCSS", "JavaScript", "React"],
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
];

export const contactInfo = [
  {
    id: 1,
    title: "Github",
    image:
      "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    content: "Tongcnc",
    link: "https://github.com/Tongcnc",
  },
  {
    id: 2,
    title: "LinkedIn",
    image:
      "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z",
    content: "Chanokchol K.",
    link: "https://www.linkedin.com/in/chanokchol-klamphu/",
  },
  {
    id: 3,
    title: "Email",
    image:
      "M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z",
    content: "tongcnc3@gmail.com",
    link: "mailto:tongcnc3@gmail.com",
  },
  {
    id: 4,
    title: "Phone",
    image:
      "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z",
    content: "0925542693",
    link: "tel:0925542693",
  },
];

export const myCV = {
  link: "https://drive.google.com/file/d/1oD8GPq4xh2LvretN8SqWRXZJpb76ouIM/view?usp=sharing",
};
