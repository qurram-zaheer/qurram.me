"use client";
import { Mukta, Satisfy } from "next/font/google";
import Typewriter from "typewriter-effect";

import Navbar from "../components/Navbar";
import WorkCard from "../components/WorkCard";
import CustomTimeline from "../components/CustomTimeline";

const megrim = Mukta({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

const experience = [
  {
    name: "Data Engineer",
    date: "July '23 - Present",
    company: "Otis AI",
    company_url: "https://meetotis.com",
    color: "blue-400",
  },
  {
    name: "Software Engineer Co-op",
    date: "Jan. '23 - April '23",
    company: "Tulip Retail",
    company_url: "https://www.tulip.com/",
    my_work: "https://well.ca",
    color: "rose-400",
  },
  {
    name: "Software Engineer Intern",
    date: "March '23 - Dec. '23",
    company: "Otis AI",
    company_url: "https://meetotis.com",
    my_work: "https://meetotis.com",
    color: "blue-400",
  },
];

const projects = [
  {
    name: "Athena",
    tech: ["Next.js", "PyTorch", "flask", "MongoDB"],
    desc: "Pokemon battle AI + analytics dashboard for all competitive needs.",
    github_link: "https://github.com/qurram-zaheer/athena",
    live_link: "",
  },
  {
    name: "QConnect",
    tech: ["React", "Django", "RabbitMQ", "MongoDB", "K8s"],
    desc: "Productivity aware repository quality analysis dashboard, using Git and Jira data.",
    live_link: "",
  },
  {
    name: "PokeTwo",
    tech: ["React", "Express", "Websockets", "MongoDB"],
    desc: "Online multiplayer browser pokemon battling game, supports upto 200 players",
    github_link: "https://github.com/qurram-zaheer/poketwo",
    live_link: "",
  },
  {
    name: "Covindia",
    tech: ["Flask", "nginx", "JavaScript"],
    desc: "India's first district-wise COVID-19 tracker. Won 10th place in India's Hack the Crisis 2020",
    github_link: "https://github.com/covindia/CovIndia-BigDataBox",
    live_link: "",
  },
  {
    name: "Not A Real Game",
    tech: ["Pygame"],
    desc: "2d game with multiple attack types, enemy AI, and dynamic obstacles",
    github_link: "https://github.com/qurram-zaheer/not-a-real-game",
    live_link: "",
  },
  {
    name: "qUnderstat",
    tech: ["BeautifulSoup", "Seaborn", "Selenium"],
    desc: "One scraper to scrape soccer data from fbref, understat, whoscored, and transfermarkt.",
    github_link: "https://github.com/qurram-zaheer/qunderstat",
    live_link: "",
  },
  {
    name: "Option prediction using Kalman filters",
    tech: ["Pandas", "numpy", "scikit-learn"],
    desc: "Using kalman filters to predict volatility in stock options.",
    github_link: "https://github.com/qurram-zaheer/option-prediction",
    live_link: "",
  },
  {
    name: "Ship detection from satellite imagery",
    tech: ["YOLOv4"],
    desc: "Detecting ships of any size from satellite imagery",
    github_link: "https://github.com/qurram-zaheer/Size-Invariant-Ship-Detection",
    live_link: "",
  },
];

export default function Landing() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-stretch mt-40 font-semibold text-center overflow-x-hidden">
        <>
          <div className={`${megrim.className} + text-6xl text-gray-700`}>
            Hi, my name is Qurram
          </div>
          <div
            className={`${megrim.className} + text-6xl text-pteal mt-4 select-none`}
            style={{ display: "inline" }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I build things with <span style='color: #87A0DE;'>TypeScript</span>"
                  )
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString("<span style='color: #87A0DE;'>Python</span>")
                  .pauseFor(1000)
                  .deleteChars(6)
                  .typeString("<span style='color: #87A0DE;'>Java</span>")
                  .pauseFor(1000)
                  .deleteChars(4)
                  .typeString("<span style='color: #87A0DE;'>Rust</span>")
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                loop: true,
                autoStart: true,
                delay: 62,
                deleteSpeed: 62,
              }}
            />
          </div>
          <div className="text-gray-600 text-center font-normal mt-8 max-w-3xl text-xl mx-auto">
            Code, Soccer, Sleep. In that order.
          </div>
          <div className="rounded-full bg-pteal px-4 py-2 mt-20 text-navy font-medium text-base max-w-3xl mx-auto hover:bg-teal-950 ease-in duration-200 cursor-pointer hover:text-gray-200">
            <a href="https://github.com/qurram-zaheer">Check out my GitHub</a>
          </div>
        </>

        <div className="flex flex-col max-w-3xl mx-8 sm:mx-auto" id="about">
          <div className="flex items-center mt-28 select-none">
            <div className="text-pteal text-lg">01</div>
            <div className="ml-4 text-gray-700 text-base font-semibold">About</div>
            <div
              className="bg-gray-700 text-navy w-full flex-1 ml-4"
              style={{ height: "1px" }}
            ></div>
          </div>

          <div className="text-gray-500 text-justify font-normal max-w-3xl mt-8 px-2 sm:px-12">
            I am a programmer with expertise in TypeScript and Python. I have
            experience in building scalable, secure, reliable, and aesthetically
            pleasing web applications using various libraries and frameworks. I
            also have experience in building complex data pipelines for big data
            or machine learning problems using Kafka, Spark and Airflow. I
            approach every task with the intention to put in maximum effort and
            produce the highest possible quality of work. I have continuosly
            honed my skills across the tech stack, from backend, frontend, and
            even infrastructure, mostly due to my work at multiple startups.
          </div>
        </div>

        <div className="flex flex-col max-w-3xl mx-8 sm:mx-auto sm:w-full" id="exp">
          <div className="flex items-center mt-16 select-none">
            <div className="text-pteal text-lg">02</div>
            <div className="ml-4 text-gray-700ß text-base font-semibold">
              Experience
            </div>
            <div
              className="bg-gray-700 text-navy flex-1 ml-4"
              style={{ height: "1px" }}
            ></div>
          </div>

          <div className="mt-6 text-left px-2 sm:px-12 max-w-3xl">
            <div className="grid justify-center grid-cols-12">
              <div className="w-3 h-3 rounded-full border-2 border-blue-500 row-span-1 mx-auto">
                <div className="row-span-11"></div>
              </div>
            </div>
            {experience.map((e) => <div key={e.name}>
                <CustomTimeline experience={e}></CustomTimeline>
                <div className="grid justify-center grid-cols-12">
                  <div className="w-3 h-3 rounded-full border-2 border-blue-500 row-span-1 mx-auto">
                    <div className="row-span-11"></div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        <div className="flex flex-col max-w-3xl mx-8 sm:mx-auto" id="work">
          <div className="flex items-center mt-16 select-none">
            <div className="text-pteal text-lg">03</div>
            <div className="ml-4 text-gray-700 text-base font-semibold">Work</div>
            <div
              className="bg-gray-700 text-navy w-full flex-1 ml-4"
              style={{ height: "1px" }}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 mt-8 justify-center gap-4 select-none ">
            {projects.map((project) => (
              <WorkCard key={project.name} project={project}></WorkCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col max-w-3xl mx-8 sm:mx-auto mb-20" id="contact">
          <div className="flex items-center mt-16 select-none">
            <div className="text-pteal text-lg">04</div>
            <div className="ml-4 text-gray-700 text-base font-semibold">Contact</div>
            <div
              className="bg-gray-700 text-navy w-full flex-1 ml-4"
              style={{ height: "1px" }}
            ></div>
          </div>

            
          <div className={`${megrim.className} text-gray-500 text-justify font-normal max-w-3xl mt-4 px-2 sm:px-12 text-base`}>
            Want to get in touch with me for code, soccer, or even pokemon related stuff? Hit me up on
            <a href="https://www.linkedin.com/in/qurram-zaheer-syed/" className="text-blue-400"> LinkedIn</a>, <a href="mailto:qurram.zaheer@gmail.com" className="text-blue-400">Email</a>, or find me on <a href="https://github.com/qurram-zaheer" className="text-blue-400">GitHub</a>,
          </div>
        </div>
      </div>
    </div>
  );
}
