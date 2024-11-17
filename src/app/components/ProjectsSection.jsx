"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Currency Converter",
    description: "A currency converter application that allows users to convert between different currencies using real-time exchange rates.",
    technologies: ["TypeScript", "Inquirer.js"],
    codeLink: "https://github.com/yourusername/currency-converter",
    demoLink: "https://yourwebsite.com/currency-converter-demo",
    image: "/images/project01.jpg",
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A system for managing student records that allows adding, viewing, and deleting students.",
    technologies: ["TypeScript", "Inquirer.js"],
    codeLink: "https://github.com/yourusername/student-management-system",
    demoLink: "https://yourwebsite.com/student-management-system-demo",
    image: "/images/project02.jpg",
  },
  {
    id: 3,
    title: "Adventure Game",
    description: "An interactive adventure game where users can explore a castle, find treasures, and face challenges.",
    technologies: ["TypeScript", "Inquirer.js"],
    codeLink: "https://github.com/yourusername/adventure-game",
    demoLink: "https://yourwebsite.com/adventure-game-demo",
    image: "/images/project03.jpg",
  },
  {
    id: 4,
    title: "Advanced Todo List",
    description: "An advanced Todo list application that allows users to manage their tasks by adding, viewing, updating, deleting, and completing todos.",
    technologies: ["TypeScript", "Inquirer.js"],
    codeLink: "https://github.com/yourusername/advanced-todo-list",
    demoLink: "https://yourwebsite.com/advanced-todo-list-demo",
    image: "/images/project04.jpg",
  },
  {
    id: 5,
    title: "Bank Console Application",
    description: "A console application that simulates banking operations such as account management and transactions.",
    technologies: ["TypeScript", "OOP"],
    codeLink: "https://github.com/yourusername/bank-console-app",
    demoLink: "https://yourwebsite.com/bank-console-app-demo",
    image: "/images/project05.jpg", 
  },
  {
    id: 6,
    title: "Countdown Timer",
    description: "A countdown timer application that allows users to set a timer for a specified number of seconds.",
    technologies: ["TypeScript", "Inquirer.js", "date-fns"],
    codeLink: "https://github.com/yourusername/countdown-timer",
    demoLink: "https://yourwebsite.com/countdown-timer-demo",
    image: "/images/project06.jpg",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(
    (project) => tag === "All" || project.technologies.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="TypeScript"
          isSelected={tag === "TypeScript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Inquirer.js"
          isSelected={tag === "Inquirer.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="OOP"
          isSelected={tag === "OOP"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.codeLink}
              previewUrl={project.demoLink}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
