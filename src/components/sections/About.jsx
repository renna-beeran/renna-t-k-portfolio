import { RevealOnScroll } from "../RevealOnScroll";
import { SkillSet } from "./SkillSet";
import profilePhoto from "../../assets/Photo_Renna.png";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "JavaServer Pages (JSP)",
  ];
  const backendSkills = ["Spring Boot", "Spring MVC", "Hibernate", "REST APIs"];
  const languages = ["Java", "Python", "C"];
  const databases = ["MySQL", "Microsoft SQL Server", "PostgreSQL"];
  const versionControl = ["Git", "GitHub"];
  const testingTools = ["Postman", "Swagger", "JUnit"];
  const ides = ["Eclipse", "VS Code"];
  const devops = ["Docker", "AWS", "Linux"];
  const methodologies = ["Agile", "Scrum"];
  const architecture = ["Microservices", "CI/CD"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#7d6353] to-[#3f322b] bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <img
              src={profilePhoto}
              alt="Renna T K"
              className="w-32 h-32 rounded-full object-cover object-top border-4 border-[#bfa074] shadow-lg mb-4 md:mb-0 mt-6"
            />
            <div className="flex-1 text-[#ac9c8d] text-lg">
              <p className="mb-4">
                Hi, I'm{" "}
                <span className="font-bold text-[#bfa074]">Renna T K</span> — a
                passionate Java Full Stack Developer who loves building clean,
                efficient, and impactful web applications. My journey began with a
                curiosity for how things work, which soon turned into a drive to
                create solutions that make a difference.
              </p>
              <p className="mb-4">
                <span className="font-semibold text-[#bfa074]">Values: </span>
                Integrity, continuous learning, and collaboration. I believe in
                writing code that is not just functional, but also maintainable
                and scalable.
              </p>
              <p className="mb-4">
                <span className="font-semibold text-[#bfa074]">Goals:</span> To
                contribute to innovative projects, grow as a developer, and help
                teams deliver exceptional digital experiences.
              </p>
              <p>
                Outside of coding, I enjoy exploring new technologies, reading,
                and connecting with like-minded professionals.
              </p>
            </div>
          </div>
          <div className="rounded-xl p-8 border-[#67605b]/10 border hover:-translate-y-1 transition-all">
            <p className="text-[#ac9c8d] mb-6">
              Result-oriented Java Full Stack Developer with 1+ years of
              experience in designing and developing scalable web applications
              using React.js, Spring Boot, and REST APIs. Proficient in
              developing interactive UIs, integrating microservices, and
              deploying robust back-end systems. Skilled in Agile methodologies,
              performance optimization, and cross-functional collaboration.
              Passionate about building clean, efficient code and delivering
              value in fast-paced environments
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <SkillSet heading={"Frontend"} skillList={frontendSkills} />
              <SkillSet heading={"Backend"} skillList={backendSkills} />
              <SkillSet
                heading={"Programming Languages"}
                skillList={languages}
              />
              <SkillSet heading={"Databases"} skillList={databases} />
              <SkillSet
                heading={"Version Control"}
                skillList={versionControl}
              />
              <SkillSet heading={"Testing Tools"} skillList={testingTools} />
              <SkillSet heading={"IDEs"} skillList={ides} />
              <SkillSet heading={"Cloud/Devops"} skillList={devops} />
              <SkillSet heading={"Methodologies"} skillList={methodologies} />
              <SkillSet heading={"Architectures"} skillList={architecture} />
            </div>
          </div>

          {/* Education and Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-[#67605b]/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-[#ac9c8d] space-y-2">
                <li>
                  <strong> B.Tech in Computer Science And Engineering</strong> -
                  College of Engineering Munnar (2019-2023)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-[#67605b]/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-[#ac9c8d]">
                <div>
                  <h4 className="font-semibold">
                    Software Developer at 6D Technologies, Bangalore (March 2024
                    - Present)
                  </h4>
                  <p>
                    Designed and developed scalable and modular web applications
                    using React.js, Spring Boot, and RESTful APIs, improving
                    system performance and user responsiveness
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at DRDO Bangalore (April 2023 - June 2023)
                  </h4>
                  <p>
                    Collaborated on a Python-based machine learning project
                    focused on gait phase recognition, applying libraries such
                    as Pandas, NumPy, and Scikit-learn for model training and
                    testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
