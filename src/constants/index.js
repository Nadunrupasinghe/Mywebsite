import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  University_of_Moratuwa_logo,
  CDB,
  Cambridge,
  DS,
  freshlyy,
  hardware,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education & Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React & React Native",
    icon: web,
  },
  {
    title: "NodeJs",
    icon: mobile,
  },
  {
    title: "ExpressJs",
    icon: backend,
  },
  {
    title: "MongoDB",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Univeristy of Moratuwa",
    company_name: "Undergraduate",
    icon: University_of_Moratuwa_logo,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "I'm an undergraduate in the faculty of Information Technology at University of Moratuwa and,I'm currently following the B.Sc. (Hons) Information Technology and Management degree program.",
    ],
  },
  {
    title: "Citizen Development Business",
    company_name: "Junior Operation Assistant",
    icon: CDB,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Feb 2021",
    points: [
      "I worked as a Junior Operation Assistant at Citizen Development Business Finance PLC. I was responsible for the day to day operations of Early Settlements of the Head Office and I was also responsible for the customer service as well.",
    ],
  },
  {
    title: "D.S. Senanayake College",
    company_name: "Advanced Level and Ordinary Level",
    icon: DS,
    iconBg: "#E6DEDD",
    date: " 2012 - 2019",
    points: [
      "I completed my Advanced Level and Ordinary Level examinations at D.S. Senanayake College, Colombo 07. I did A/L Examination in the stream of Arts and was placed 12th in the Colombo district in the stream of Arts in the year 2019.",
    ],
  },
  {
    title: "Cambridge International School",
    company_name: "Primary Education",
    icon: Cambridge,
    iconBg: "#E6DEDD",
    date: "2002 - 2012",
    points: [
      "I completed my primary education at Cambridge International School.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Freshlyy - Crop Selling Platform",
    description:
      "Freshlyy is a platform that facilitates small-scale household farmers who are living in urban areas, to sell their fresh produce at retail price to nearby customers. Customers can get freshly homemade produce to their doorstep which will save their valuable time while earning profit. ",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
    ],
    image: freshlyy,
    showLink: false,
    source_code_link: "https://github.com/",
  },
  {
    name: "Priority System For Emergency Vehicles",
    description:
      "This project is about a priority system for emergency vehicles. The main objective of this project is to provide a solution for the traffic congestion problem in Sri Lanka.When an emergency vehicle is approaching, the traffic lights will be changed to green and the other vehicles will be stopped.",
    tags: [
      {
        name: "Atmel Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Proteus",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: hardware,
    showLink: false,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
