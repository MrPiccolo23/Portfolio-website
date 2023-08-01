import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import mongoDb from "../assets/MongoDB1.png"
import mysql from "../assets/MySQL2.png"
import firebase from "../assets/firebase.png"
import "../components/Experience.css";

const Experience = () => {

  const experiences = [
    // add your experience details here
    {
      title: "Independent Junior Developer",
      duration: "2023 - present",
      description: "I have been actively engaged in keeping my coding skills in JavaScript and Python up to date by practicing with both free and paid online platforms such as Codecademy, CodePen, Udemy, LeetCode, Codewars, and CodinGame. Utilising YouTube tutorials, I constructed my portfolio website using React.js and Tailwind CSS. Additionally, I created an 'InstagramClone- 2.0' web project employing technologies like Next.js, Tailwind CSS, Firebase v9, NextAuth, and Recoil. I have also taken the initiative to correct and enhance code within my GitHub repositories. To further showcase my proficiency, I have been considering taking the PCEP™ (Entry) and PCAP™ (Associate) exams from pythoninstitute.org, as well as the JSE (Entry: JS Core) and JSA (Associate: OOP & Adv Functions) exams from the js.institute. Distributed by Pearson VUE, these accredited certifications can complement my existing projects on GitHub and provide formal recognition of my skills. Although the associated costs have prevented me from taking these exams to date, I plan to pursue these certifications in the future to validate and further highlight my expertise.",
      skills: "JavaScript, Python, React.js, Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil, GitHub, Engagement with various online learning platforms, Construction of personal and complex projects, Code correction and enhancement, Initiative in pursuing professional certifications."
    },
    {
      title: "Cyber Security at Code Nation",
      duration: "May 2023 - Jun 2023",
      description: "Successfully completed an intensive four-week Cyber Security course, earning an accredited qualification. Gained comprehensive understanding of cyber threats, preventive measures, and system defence tools, including practical skills in averting exploits. Studied cyber threats, mastered tools to safeguard networked systems, constructed a cyber secure system using the OSI model, and demonstrated clear understanding of Cyber Security legislation, GDPR, and ethical practices. Protected a Raspberry Pi web server using Apache Harding in a hands-on project. Key achievement includes passing the final exam and securing accredited qualifications in Cyber Security.",
      skills: "LAMP Stack, Kali Linux, SSH, Cybersecurity Law, GDPR, Cyber Risk Management, OSI Model, Microsoft Teams, Apache, Raspberry Pi."
    },
    {
      title: "Junior Developer Bootcamp at Code Nation",
      duration: "Dec 2021 - Mar 2022",
      description: "Gained proficiency in building dynamic, responsive full-stack web applications through an extensive bootcamp. Exposed to a comprehensive array of programming languages and frameworks, mastering various technologies in a 12-week progressive learning experience. Achievements include the development of several projects such as building a CSS Navbar, cloning Google's homepage, creating an e-commerce React.js project, integrating APIs, and designing a full-stack Instagram clone. Excelled in collaborative group projects, culminating in the construction of a browser-based gaming site 'Arcade club' inspired by 'https://www.crazygames.com/', and earned a Master's certificate.",
      skills: "APIs, Discord, Trello, Visual Studio Code, REST APIs, MySQL, MongoDB, Firebase, Next.js, Express.js, Bootstrap, Tailwind CSS, npm, Node.js, React.js, JavaScript."
    },
    {
      title: "Develop Coding at Code Nation",
      duration: "Nov 2021 - Dec 2021",
      description: "Completed an intensive three-week coding course, honing Python, HTML, and CSS programming, along with web design skills and Agile methodologies. In the course, developed proficiency in Python through in-class challenges and activities, designed and built a text-based adventure game, and applied web design fundamentals to create unique personal websites. Collaboratively built a Python endangered species game and designed a personal 'ff7-Remake- fan site' that showcased new abilities. Earned an accredited qualification in IT User Skills.",
      skills: "Zoom, Discord, Trello, Microsoft Visual Studio Code, Python, CSS, HTML5."
    },
    // ... more experiences
  ];

  const techs = [
    {
      id: 1, 
      src: html, 
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2, 
      src: css, 
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3, 
      src: javascript, 
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4, 
      src: reactImage, 
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5, 
      src: tailwind, 
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6, 
      src: nextjs, 
      title: 'Next JS',
      style: 'shadow-white',
    },
    {
      id: 7, 
      src: node, 
      title: 'Node JS',
      style: 'shadow-green-400',
    },
    {
      id: 8, 
      src: github, 
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 9, 
      src: python, 
      title: 'Python',
      style: 'shadow-yellow-400',
    },
    {
      id: 10, 
      src: mongoDb, 
      title: 'MongoDB',
      style: 'shadow-green-400',
    },
    {
      id: 11, 
      src: mysql, 
      title: 'MySQL',
      style: 'shadow-orange-400',
    },
    {
      id: 12, 
      src: firebase, 
      title: 'Firebase',
      style: 'shadow-yellow-400',
    },
  ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
        </div>

        <div className='overflow-y-auto scrollbar-hide h-3/4 md:max-h-64 mt-4 mb-6'>
          {experiences.map((experience, index) => (
            <div key={index} className='mb-4'>
              <h3 className='text-2xl font-bold'>{experience.title}</h3>
              <p className='italic'>{experience.duration}</p>
              <p>{experience.description}</p>
              <p className='font-bold'>Skills: {experience.skills}</p>
            </div>
          ))}
        </div>

        <p className='text-2xl font-bold border-b-4 border-gray-500 p-2 inline'>
          Technologies I've worked with
        </p>

        <div className='w-2/3 sm:w-full grid grid-cols-2 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7 gap-4 text-center py-5 px-12 sm:px-0 h-3/5 md:h-auto mx-auto'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-4 sm:w-5 mx-auto'/>
              <p className='mt-2'>{title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Experience;