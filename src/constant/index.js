import { adrightly, citrusbits } from "../assets/images";
import {
    contact,
    css,
    pizza,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    shopping,
    tailwindcss,
    typescript,
    hand,
    phone,
    movie,
    map
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Adrightly",
        icon: adrightly,
        iconBg: "#eb7134",
        date: "Oct 2020 - Dec 2021",
        points: [
            "Progressed from a junior-level developer to a team lead role, demonstrating exceptional technical acumen and leadership skills.",
            "Implemented full-stack solutions (MERN) and constructed robust RESTful APIs using Node.js with the Express framework, while also designing schemas for MongoDB databases.",
            "Integrated third-party APIs to efficiently fetch and manage data.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Citrusbits",
        icon: citrusbits,
        iconBg: "#ebdb34",
        date: "Jan 2022 - Nov 2023",
        points: [
            "Led development efforts in various projects including Rubios, Evenple, Gravity Coffee, Feed U, Soul Link, Alaska, and Radius XR.",
            "Established project timelines and ensured timely completion of tasks.",
            "Demonstrated adaptability by swiftly acquiring and applying new skills, enhancing operational efficiency, and productivity.",
            "Proactively identified and resolved technical challenges, contributing to improved operations and service delivery",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Asmar09',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/asmar-munir-806109159',
    }
];

export const projects = [
    {
        iconUrl: hand,
        theme: 'btn-back-red',
        name: 'Real Time AI GESTURE RECOGNITION',
        description: 'Developed a web application that detecting gestures from hand poses in real time. Using fingerpose javascript library, Tensorflow.JS and React.JS.',
        link: 'https://github.com/Asmar09/HandGesture',
    },
    {
        iconUrl: map,
        theme: 'btn-back-pink',
        name: 'Mpartial Website Clone',
        description: 'Built a clone of Mpartial website, mpartial leverages AI, computer vision tech, and data analytics to quickly evaluate geospatial scans and data related to property damage.',
        link: 'https://github.com/Asmar09/React-Website',
    },
    {
        iconUrl: phone,
        theme: 'btn-back-green',
        name: 'Real Time AI OBJECT DETECTOR',
        description: 'Developed a web application that detecting objects in real time. Using Tensorflow.JS, React.JS and using webcamto detect object in real time.',
        link: 'https://github.com/Asmar09/ObjectDetector',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-blue',
        name: 'Movie Website',
        description: 'Designed and built a movie web app that allows users to search for movies by title, sort them by genre, view trending and upcoming movies.',
        link: 'https://github.com/Asmar09/MoviesWebiste',
    },
    {
        iconUrl: pizza,
        theme: 'btn-back-orange',
        name: 'Real Time Pizza Deliver Application',
        description: 'Realtime online pizza order app using Node Js, Express Js and Mongo DB. Using tailwind css for frontend as a css framework using EJS template engine as well also using socket.io for realtime communication.',
        link: 'https://github.com/Asmar09/Pizza_Delivery',
    },
    {
        iconUrl: shopping,
        theme: 'btn-back-yellow',
        name: 'E-Commerce Website',
        description: 'Developed an E-Commerce website using React.js. The project consists of a home page with all products, a specific detail page for each product and a shopping cart page where users can add the products they want.',
        link: 'https://github.com/Asmar09/E-Commerce',
    }
];