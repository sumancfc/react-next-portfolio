import { Experience } from "./interfaces";

const experiences: Experience[] = [
  {
    id: "1",
    company: "Bosch Rexroth",
    role: "Software Engineer",
    type: "Internship + Working Student",
    location: "Schwieberdingen, Germany",
    startDate: "03/2024",
    endDate: "02/2025",
    responsibilities: [
      {
        task: "Developed reusable Angular components and upgraded the Angular version from 12 to 18 for improved performance and maintainability.",
      },
      {
        task: "Created and managed monitoring dashboards using Prometheus and Grafana to track system performanceand reliability.",
      },
      {
        task: "Optimized queries in MongoDB to enhance database performance and efficiency.",
      },
      {
        task: "Implemented IoT solutions using MQTT to transmit data from devices to Azure Event Grid, and subsequently to a device portal for extensive data storage.",
      },
      {
        task: "Utilized Docker to containerize applications, improving deployment efficiency and scalability.",
      },
    ],
  },
  {
    id: "2",
    company: "Zepling IT Pvt.Ltd.",
    role: "Software Engineer",
    type: "Full-Time",
    location: "Kathmandu, Nepal",
    startDate: "12/2018",
    endDate: "08/2022",
    responsibilities: [
      {
        task: "Created modern, single-page web applications in JavaScript, TypeScript, React, Next.js, Vue.js, and Redux that incorporated responsive web design and frontend technology.",
      },
      {
        task: "Developed and implemented REST APIs using Node.js, Express.js, MongoDB, and MySQL, powering a high-performance web application; slashed response time by 40% and handled 10x more concurrent users.",
      },
      {
        task: "Optimized website performance by an average of 60%, reduced page load time by 40% and improved user interfaces (UI) and user experiences (UX).",
      },
      {
        task: "Coded reusable components to reduce code duplication and maintain code quality.",
      },
      {
        task: "Led the entire software development lifecycle encompassing requirements gathering, design, coding, testing, and deployment, facilitating on-time and within-budget project completion.",
      },
      {
        task: "Ensured continuous integration and deployment (CI/CD) processes using Git, GitLab and GitHub.",
      },
      {
        task: "Conducted comprehensive unit and integration testing, ensuring software quality and adherence to industry best practices; identified and resolved critical bugs, reducing production issues by 40%.",
      },
    ],
  },
  {
    id: "3",
    company: "OLE Nepal",
    role: "Associate Software Developer",
    type: "Contract",
    location: "Lalitpur, Nepal",
    startDate: "06/2018",
    endDate: "10/2018",
    responsibilities: [
      {
        task: "Collaborated with designers to transform wireframes, prototypes, and modern UI/UX into responsive web applications using web technologies like HTML, CSS, JavaScript, React, and Figma.",
      },
      {
        task: "Engineered robust RESTful APIs utilizing Node.js, Express.js, and MongoDB for seamless integration with a web application; optimized database queries resulting in a 50% reduction in API response time.",
      },
      {
        task: "Improved website loading time by 20%, increased website visits by 15%, and implemented a system to allow for consistent design and branding across all websites.",
      },
      {
        task: "Coordinated with QA teams to conduct manual testing of web applications, identifying, and resolving bugs, performance issues, and usability problems.",
      },
    ],
  },
];

export default experiences;
