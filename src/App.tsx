import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.scss";
import Section from "./templates/Section";
import { SkillCarousel } from "./components/SkillCarousel";
import TypeWriterText from "./components/TypeWriterText";
import { HStack } from "./components/HStack";
import TimeLine from "./components/TimeLine";
import ProjectPanel from "./components/ProjectPanel";

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
        "Led a team to build a real-time online auction platform with a microservices architecture focused on scalability and reliability. The system supports secure user authentication, live bidding updates, and containerized deployment for easy scaling. Performance testing confirmed stable operation under hundreds of concurrent users.",
      date: "December 2025",
      imageSrc: [
        "katyaflix/katyaflix_1.jpg",
        "katyaflix/katyaflix_2.jpg",
        "katyaflix/katyaflix_3.jpg",
        "katyaflix/katyaflix_4.jpg",
        "katyaflix/katyaflix_5.jpg",
        "katyaflix/katyaflix_6.jpg",
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
        "To organize my personal (legally owned) media collection, I created a system to keep track of my lists and watchtimes.",
      date: "December 2025",
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
      link: "https://github.com/katya-koz/eecs-4413-project",
    },
    {
      title: "SALLY API",
      description:
        "Designed and created from the ground up during my co-op term at Mackenzie Health. Secure .NET backend API tool hosted via IIS, centralizing data access, user authentication, reporting, emailing, and user/profile management of over 10,000 employees across 5 services. Fills the gap between lacking third party software from previous contractors and expedites in house app developments.",
      date: "December 2025",
      imageSrc: ["sallyapi/sallyapi_1.jpg"],
      technologies: [
        "C#",
        "ASP.NET",
        "REST API",
        "Quartz.NET",
        "JavaScript",
        "SQL",
        "IIS",
      ],
    },
    {
      title: "Badgeify",
      description:
        "Developed during my co-op term at Mackenzie Health. Workflow automation tool to expedite the employee badge issuance process for the Security department, which is a critical task. Previously a manual, error prone task performed across two separate web UIs, Badgeify integrates with Active Directory to use employee profiles as the source of truth. It automatically maps the correct fields to two external contractor services, eliminating spelling mistakes and misassignments. To date, it has successfully expedited, consolidated, and updated over 1,500 employee badges. Utilizes SALLY API.",
      date: "December 2025",
      imageSrc: [
        "badgeify/badgeify_1.jpg",
        "badgeify/badgeify_2.jpg",
        "badgeify/badgeify_3.jpg",
        "badgeify/badgeify-demo.mp4",
      ],
      technologies: [
        "C#",
        "ASP.NET",
        "SQL",
        "REST API",
        "Quartz.NET",
        "JavaScript",
        "SQL",
        "IIS",
      ],
    },
    {
      title: "Handsify",
      description:
        "Created during my co-op term at Mackenzie Health to manage over 10,000 smart hand sanitizer sensors acrosss the hospital. Handsify provides a visual dashboard to streamline sensor maintenance and tracking. Began development of a machine learning model to predict maintenance needs, reducing manual inspection time and saving an estimated 7+ hours of monthly on floor maintenance. Utilizes SALLY API.",
      date: "December 2025",
      imageSrc: [
        "handsify/handsify_1.jpg",
        "handsify/handsify_2.jpg",
        "handsify/handsify_3.jpg",
        "handsify/handsify_4.jpg",
        "handsify/handsify-demo.mp4",
      ],
      technologies: [
        "C#",
        "ASP.NET",
        "SQL",
        "REST API",
        "Quartz.NET",
        "JavaScript",
        "SQL",
        "IIS",
      ],
    },
    {
      title: "Personal Website",
      description:
        "Super meta - this is the website you're on right now. I'm constantly fixing it up and adding new stuff. It's mobile friendly!",
      date: "December 2025",
      imageSrc: ["personalwebsite/personalwebsite-1.jpg"],
      technologies: ["Typescript", "React", "SCSS", "Tailwind"],
    },
    {
      title: "Pawfect Pairs",
      description:
        "Pawfect Pairs is designed to help prospective pet owners find their perfect match; users set personal preferences and apply filters, and are scored with the best potential matches. The platform also features a user-pet meetup scheduler, as well as a donation/sponsorship system (one time or recurring). Took a leading role in this project for my Software Development Project course (EECS 2311).",
      date: "December 2025",
      imageSrc: [
        "pawfectpairs/pawfectpairs_1.jpg",
        "pawfectpairs/pawfectpairs_2.jpg",
        "pawfectpairs/pawfectpairs_3.jpg",
        "pawfectpairs/pawfectpairs_4.jpg",
        "pawfectpairs/pawfectpairs_5.jpg",
        "pawfectpairs/pawfectpairs_6.jpg",
        "pawfectpairs/pawfectpairs_7.jpg",
        "pawfectpairs/pawfectpairs_8.jpg",
        "pawfectpairs/pawfectpairs_9.jpg",
        "pawfectpairs/pawfectpairs_10.jpg",
        "pawfectpairs/pawfectpairs_11.jpg",
        "pawfectpairs/pawfectpairs_12.jpg",
        "pawfectpairs/pawfectpairs_13.jpg",
        "pawfectpairs/pawfectpairs_14.jpg",
        "pawfectpairs/pawfectpairs_15.jpg",
      ],
      technologies: ["Java", "JavaFX", "PostgreSQL", "JUnit", "Gradle", "CSS"],
    },
    {
      title: "FPGA Digital Safe",
      description:
        "Built and programmed a prototyped digital safe using a DE10-Lite FPGA board. For my Digital Logic Design (EECS 3201) course.",
      date: "December 2025",
      imageSrc: [
        "digitallock/digitallock_1.jpg",
        "digitallock/digitallock-demo.mp4",
        "digitallock/digitallock_report.pdf",
      ],
      technologies: ["Verilog", "FPGA", "Quartus Prime"],
    },
    {
      title: "Balloono",
      description:
        "In this competitive multiplayer game, similar to Bomberman, players blast through the map with balloons, collect powerups, and defeat opponents, earning currency ('shallots') to purchase cosmetic items in the shop. Supports user account creation, and randomly generated maps. Uses Firebase Realtime database for multiplayer experience.",
      date: "h",
      imageSrc: [
        "balloono/balloono_5.jpg",
        "balloono/balloono_1.jpg",
        "balloono/balloono_2.jpg",
        "balloono/balloono_3.jpg",
        "balloono/balloono_4.jpg",
        "balloono/balloono_demo.mp4",
      ],
      technologies: [
        "C#",
        "ASP.NET",
        "SQL",
        "REST API",
        "Quartz.NET",
        "JavaScript",
        "SQL",
        "IIS",
      ],
    },
    {
      title: "Medicine Tracker",
      description:
        "Prototyped a medicine tracker to help patients or healthcare managers input weekly medication schedules, receive reminders, and mark off medications as they're taken. Developed as an optional final project in the introductory object oriented programming course, addressing the need for enhanced medical management. Made with Arduino and Java (firmata4j library).",
      date: "December 2025",
      imageSrc: [
        "medicinetracker/medicinetracker_1.jpg",
        "medicinetracker/medicinetracker_demo.mp4",
        "medicinetracker/medicinetimer_report.pdf",
      ],
      technologies: ["Java", "Arduino"],
    },
    {
      title: "Vampire Hunt Game",
      description:
        "10th grade culminating computer science project. Retro style, edge scrolling game. Created with Python and Pygame.",
      date: "December 2025",
      imageSrc: [
        "vampirehuntgame/hunt1.jpg",
        "vampirehuntgame/hunt2.jpg",
        "vampirehuntgame/hunt3.jpg",
        "vampirehuntgame/hunt4.jpg",
        "vampirehuntgame/hunt5.jpg",
        "vampirehuntgame/demo.mp4",
      ],
      technologies: ["Python", "Pygame"],
    },
  ];

  const handleComplete = () => {
    setCurrentLine(currentLine + 1);
    document.getElementById("typewriter")?.classList.remove("shifted");
  };

  return (
    <main className="bg-slate-50">
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
                  student at York University. I love taking on new challenges,
                  and thrive when I get to see the impact of my work. I'm
                  currently working on building a game engine in C++. <br />
                  <br />
                  Aside from programming, I like to watch movies, read (fiction
                  and memoirs), play games, and bake. I consider myself a little
                  bit of a film buff, so if you're interested in some of my
                  movie recommendations don't hesitate to message me on Linkedin
                  :D
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
              <a href="https://github.com/katya-koz">
                <i
                  className="
                        transition-colors
                        duration-200
                        ease-in-out hover:text-teal-400 text-2xl 
                        bi bi-github"
                ></i>
              </a>
              <a href="https://ca.linkedin.com/in/katya-koz">
                <i
                  className="
                        transition-colors
                        duration-200
                        ease-in-out hover:text-teal-400 text-2xl 
                        bi bi-linkedin"
                ></i>
              </a>
            </div>

            <hr className="border-line" />
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

          <hr className="border-line" />
        </>
      </Section>

      <Section name="experience">
        <>
          <TimeLine items={experiences}></TimeLine>
          <hr className="border-line" />
        </>
      </Section>
      <Section name="projects">
        <div className="flex flex-wrap">
          {projects.map((n, index) => (
            <ProjectPanel key={index} project={n}></ProjectPanel>
          ))}

          <hr className="border-line" />
        </div>
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
