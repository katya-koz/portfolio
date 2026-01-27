import { useState } from "react";
import "./App.scss";
import Section from "./templates/Section";
import TypeWriterText from "./components/TypeWriterText";
import { HStack } from "./components/HStack";
import TimeLine from "./components/TimeLine";
import ProjectPanel from "./components/ProjectPanel";
import ProjectsSection from "./components/ProjectsSection";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [currentLine, setCurrentLine] = useState(0);

  const experiences = [
    {
      title: "Virtual Reality & Perception Lab",
      role: "Research Assistant",
      logoSrc: "/images/cvr_logo.png",
      date: "August 2025 - Present",
    },
    {
      title: "Mackenzie Health",
      role: "Software Engineer Intern",
      logoSrc: "/images/mh.png",
      date: "August 2024 - August 2025",
    },
    {
      title: "Virtual Reality & Perception Lab",
      role: "Research Assistant",
      logoSrc: "/images/cvr_logo.png",
      date: "May 2023 - August 2024",
    },
  ];
  const languages = [
    "Java",
    "C#",
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "C",
    "C++",
    "Bash",
    "Verilog",
    "R",
    "SCSS/CSS",
    "Matlab",
  ];

  const frameworks = [
    ".NET Core",
    "ASP.NET",
    "Spring Boot",
    "Kafka",
    "ReactJS",
    "NodeJS",
    "Express.js",
    "Pandas",
    "PyTorch",
    "Unity",
  ];
  const data = ["PostgreSQL", "MongoDB", "MSSQL(T - SQL)", "SSIS"];

  const devops = [
    "Docker",
    "Azure, AWS (S3, CloudFront)",
    "Nginx",
    "JUnit",
    "Debian/Linux",
    "JMeter",
    "Maven",
    "Gradle",
    "Selenium",
    "Git",
  ];

  const projects = [
    {
      title: "BlueBid",
      description:
        "Real-time online auction platform built with a microservices architecture. Supports secure authentication, live bidding via WebSockets, and scalable containerized deployment; performance-tested under hundreds of concurrent users. Led a group of 4.",

      imageSrc: [
        "bluebid/bluebid_2.png",
        "bluebid/bluebid_4.png",
        "bluebid/bluebid_6.png",
        "bluebid/bluebid_7.png",
        "bluebid/bluebid_8.png",
        "bluebid/bluebid_9.png",
        "bluebid/bluebid_10.png",
        "bluebid/bluebid_11.png",
        "bluebid/bluebid_1.png",
      ],
      technologies: [
        "Java Spring Boot",
        "Apache Kafka",
        "ReactJS",
        "OAuth2.0",
        "Spring Cloud Gateway",
        "Websockets",
        "Docker",
        "Nginx",
        "Jmeter",
      ],
      link: "https://github.com/katya-koz/eecs-4413-project",
    },
    {
      title: "KatyaFlix",
      description:
        "Self-hosted media management platform for organizing personal video collections. Enables users to track watch history, manage lists, and stream content through a web interface.",

      imageSrc: [
        "katyaflix/katyaflix_6.jpg",
        "katyaflix/katyaflix_5.jpg",
        "katyaflix/katyaflix_1.jpg",
        "katyaflix/katyaflix_3.jpg",
        "katyaflix/katyaflix_2.jpg",
        "katyaflix/katyaflix_4.jpg",
      ],
      technologies: [
        "NodeJS",
        "ReactJS",
        "TypeScript",
        "Nginx",
        "Docker",
        "Bash",
        "Debian",
      ],
      link: "https://github.com/katya-koz/movie-library",
    },
    {
      title: "SALLY API",
      description:
        "Internal backend platform developed during my co-op at Mackenzie Health. Centralizes authentication, user management, reporting, email, and scheduled jobs for the management of over 10,000 employees across multiple hospital services.",

      imageSrc: ["sallyapi/sallyapi_1.png"],
      technologies: ["C#", "ASP.NET", "REST API", "Quartz.NET", "SQL", "IIS"],
    },
    {
      title: "Badgeify",
      description:
        "Internal workflow automation tool developed at Mackenzie Health to streamline employee badge issuance. Integrates with Active Directory and external vendors to eliminate manual errors, successfully processing over 1,500 employee badges. Powered by SALLY API.",

      imageSrc: [
        "badgeify/badgeify_2.jpg",
        "badgeify/badgeify_3.jpg",
        "badgeify/badgeify-demo.mp4",
      ],
      technologies: ["C#", "ASP.NET", "JavaScript", "SQL", "IIS"],
    },
    {
      title: "Handsify",
      description:
        "Internal dashboard application for managing and maintaining over 10,000 IoT devices across a hospital network. Provides real-time tracking and reporting, with early ML work to predict maintenance needs and reduce manual inspections. Powered by SALLY API.",

      imageSrc: [
        "handsify/handsify_3.jpg",
        "handsify/handsify_4.jpg",
        "handsify/handsify-demo.mp4",
      ],
      technologies: ["C#", "ASP.NET", "JavaScript", "SQL", "IIS"],
    },

    {
      title: "Pawfect Pairs",
      description:
        "Pet adoption platform that matches prospective owners with pets based on preferences and scoring algorithms. Includes scheduling, donations, and sponsorship features. Took a leading role in a 6 member academic team project.",

      imageSrc: [
        "pawfectpairs/pawfectpairs_2.jpg",
        "pawfectpairs/pawfectpairs_3.jpg",
        "pawfectpairs/pawfectpairs_4.jpg",
        "pawfectpairs/pawfectpairs_5.jpg",
        "pawfectpairs/pawfectpairs_6.jpg",
        "pawfectpairs/pawfectpairs_7.jpg",

        "pawfectpairs/pawfectpairs_9.jpg",
        "pawfectpairs/pawfectpairs_10.jpg",
        "pawfectpairs/pawfectpairs_11.jpg",

        "pawfectpairs/pawfectpairs_13.jpg",
      ],
      technologies: ["Java", "JavaFX", "PostgreSQL", "JUnit", "Gradle", "CSS"],
      link: "https://github.com/katya-koz/eecs-2311-group-project",
    },
    {
      title: "FPGA Digital Safe",
      description:
        "Digital safe prototype built on a DE10-Lite FPGA board. Implements secure input handling and access logic using Verilog as part of a digital logic design course.",

      imageSrc: [
        "digitallock/digitallock_1.jpg",
        "digitallock/digitallock-demo.mp4",
        //"digitallock/digitallock_report.pdf",
      ],
      technologies: ["Verilog", "FPGA", "Quartus Prime"],
      link: "https://github.com/katya-koz/digital-safe",
    },
    {
      title: "Personal Website",
      description:
        "Super meta - this is the website you're on right now. I'm constantly fixing it up and adding new stuff. It's mobile friendly!",

      imageSrc: ["personalwebsite/personalwebsite-1.png"],
      technologies: ["Typescript", "React", "SCSS", "Tailwind"],
      link: "https://github.com/katya-koz/portfolio",
    },
    {
      title: "Automatic NFC Pet Feeder",
      description:
        "Arduino automated pet feeder prototype using NFC for pet identification. Controls feeding access and portions based on detected tags.",

      imageSrc: [
        "autopetfeeder/autopetfeeder_1.png",
        "autopetfeeder/autopetfeeder_2.png",
        "autopetfeeder/autopetfeeder_demo.mp4",
      ],
      technologies: ["Arduino", "C++", "NFC"],
    },
    {
      title: "YUrRoom",
      description:
        "Meeting room booking system for York staff and students, supporting room reservations, extensions, administrative management, and integrated deposit and payment processing. Collaborated in a group of 5.",
      imageSrc: [
        "yurroom/yurroom_1.png",
        "yurroom/yurroom_2.png",
        "yurroom/yurroom_3.png",
        "yurroom/yurroom_4.png",
        "yurroom/yurroom_5.png",
        "yurroom/yurroom_6.png",
      ],
      technologies: ["Java", "JavaFX", "Randoop"],
      link: "https://github.com/katya-koz/eecs-3311-project",
    },
    {
      title: "Balloono",
      description:
        "Multiplayer browser game inspired by Bomberman with real-time gameplay and procedurally generated maps. Supports user accounts and online multiplayer using Firebase Realtime Database.",

      imageSrc: [
        "balloono/balloono_5.jpg",
        "balloono/balloono_2.jpg",
        "balloono/balloono_demo.mp4",
      ],
      technologies: ["Javascript", "HTML", "FireBase"],
      link: "https://github.com/katya-koz/balloono-clone",
    },
    {
      title: "Medicine Tracker",
      description:
        "Prototype system for managing weekly medication schedules and reminders. Built using Arduino and Java to assist patients or healthcare managers with medication adherence.",

      imageSrc: [
        "medicinetracker/medicinetracker_1.jpg",
        "medicinetracker/medicinetracker_demo.mp4",
        // "medicinetracker/medicinetimer_report.pdf",
      ],
      technologies: ["Java", "Arduino"],
      link: "https://github.com/katya-koz/medicine-tracker",
    },
    {
      title: "Vampire Hunt Game",
      description:
        "Retro-style 2D scrolling game developed in Python using Pygame. Created as a high school computer science capstone project.",

      imageSrc: [
        "vampirehuntgame/hunt1.jpg",
        "vampirehuntgame/hunt2.jpg",
        "vampirehuntgame/hunt3.jpg",
        "vampirehuntgame/hunt4.jpg",
        "vampirehuntgame/hunt5.jpg",
        "vampirehuntgame/demo.mp4",
      ],
      technologies: ["Python", "Pygame"],
      link: "https://github.com/katya-koz/vampire-hunt-game",
    },
  ];

  const handleComplete = () => {
    setCurrentLine(currentLine + 1);
    document.getElementById("typewriter")?.classList.remove("shifted");
  };

  return (
    <main className="dark:text-white text-slate-800 dark:bg-slate-800 bg-slate-50 scroll-smooth">
      <Section name="navbar">
        <>
          <div className="flex md:flex-row flex-col md:justify-between md:justify-center mt-6">
            <p className="text-2xl m-2 terminal-font">katya_koz@katdroid:~$</p>
            <div className="flex items-center">
              <a href="#skills">
                <p className="text-lg m-2 text-glow">/skills</p>
              </a>

              <a href="#experience">
                <p className="text-lg m-2 text-glow">/experience</p>
              </a>

              <a href="#projects">
                <p className="text-lg m-2 text-glow">/projects</p>
              </a>
              <DarkModeToggle />
            </div>
          </div>
          <hr className="border-slate-200 dark:border-slate-700" />
        </>
      </Section>
      <Section name="hero">
        <>
          <div className="flex-col">
            <div className="terminal-background w-100">
              <div id="typewriter" className="typewriter shifted">
                {currentLine >= 0 && (
                  <TypeWriterText
                    speed={150}
                    handleCompletedTyping={handleComplete}
                  >
                    Hi,
                  </TypeWriterText>
                )}
                {currentLine >= 1 && (
                  <TypeWriterText
                    speed={150}
                    handleCompletedTyping={handleComplete}
                    isLastLine
                  >
                    I'm Katya.
                  </TypeWriterText>
                )}
              </div>
            </div>
            <div className=" justify-between flex flex-col md:flex-row">
              <div className="flex-col">
                <p className="text-xl m-4 ml-0 leading-loose">
                  I'm a third year Software Engineering (Security Stream)
                  student at York University. I love seeing a project through
                  from start to finish and am happiest when I get to see the
                  impact of my work. I'm currently working on building a game
                  engine in C++. <br />
                  <br />
                  Aside from programming, I like to watch movies, read, play
                  games, and bake. I consider myself a little bit of a film
                  buff, so if you're interested in some of my movie
                  recommendations don't hesitate to message me on Linkedin :D
                </p>
              </div>
              <div className="basis-1/4 w-1/2 md:w-full self-center aspect-square shrink-0 flex align-center">
                <img
                  src="/images/portrait6.png"
                  alt="Profile"
                  className="drop-shadow-lg w-full h-auto object-cover rounded-full self-center"
                />
              </div>
            </div>

            <div className="flex align-left gap-3 ">
              <a href="https://github.com/katya-koz" target="_blank">
                <i
                  className="
                        text-glow 
                        text-2xl 
                        bi bi-github"
                ></i>
              </a>
              <a href="https://ca.linkedin.com/in/katya-koz" target="_blank">
                <i
                  className="
                        text-glow 
                        text-2xl 
                        bi bi-linkedin"
                ></i>
              </a>
            </div>

            <hr className="border-slate-200 dark:border-slate-700" />
          </div>
        </>
      </Section>

      <Section name="skills">
        <>
          <h2 className="text-xl font-semibold">Languages</h2>
          <HStack items={languages}></HStack>
          <h2 className="text-xl font-semibold">Frameworks & Libraries</h2>
          <HStack items={frameworks}></HStack>
          <h2 className="text-xl font-semibold">Data</h2>
          <HStack items={data}></HStack>
          <h2 className="text-xl font-semibold">DevOps & Tools</h2>
          <HStack items={devops}></HStack>

          <hr className="border-slate-200 dark:border-slate-700" />
        </>
      </Section>

      <Section name="experience">
        <>
          <TimeLine items={experiences}></TimeLine>
          <div className="m-6"></div>
          <hr className="border-slate-200 dark:border-slate-700" />
        </>
      </Section>
      <Section name="projects">
        <>
          <ProjectsSection>
            {projects.map((n, index) => (
              <ProjectPanel key={index} project={n}></ProjectPanel>
            ))}
          </ProjectsSection>
        </>
      </Section>

      <footer className="flex justify-center p-6">
        <p className="text-lg">
          © Copyright {new Date().getFullYear()} Katya Kozlovsky
        </p>
      </footer>
    </main>
  );
}

export default App;
