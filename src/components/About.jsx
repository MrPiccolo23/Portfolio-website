import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full min-h-screen bg-gradient-to-b
        from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 
                    border-gray-500'>About</p>
                </div>
                <p className='text-l mt-20'>
                    I am a committed IT professional with a diverse background in software, web development, and cybersecurity. My proficiency in various programming languages, frameworks, and cloud services has enabled me to make substantial contributions in tech-oriented settings. As a Cyber Security graduate from Code Nation, I acquired an accredited qualification and a profound understanding of cyber threats, preventive techniques, and system defence strategies, including compliance with legal requirements like GDPR.
                </p>
                <br />
                <p className='text-l'>
                    In my role as a Junior Developer at Code Nation, I cultivated a comprehensive understanding of several programming languages and frameworks, including JavaScript, HTML, CSS, Node.js, React.js, MySQL, and MongoDB. This experience led to the creation of full-stack web applications and collaboration on a browser-based gaming site project. Additionally, I enhanced my Python programming skills during Code Nation's Develop Coding Course, and created a personal website that showcases my web design and development abilities. My education includes accredited qualifications in IT User Skills, Cyber Security Principles, and a Master Coding Course certificate from Code Nation, underscoring my readiness for a challenging tech environment.
                </p>
                <br />
                <br />
                <p className='text-l'>
                    I have diligently maintained and updated my coding skills in JavaScript and Python, using platforms like Codecademy, CodePen, Udemy, LeetCode, Codewars, and CodinGame. By utilising YouTube tutorials, I built a portfolio website with React.js and Tailwind CSS and developed projects such as 'InstagramClone- 2.0'. I also continually refine the code within my GitHub repositories. To further certify my skills, I am considering taking the PCEP™ (Entry) and PCAP™ (Associate) exams from pythoninstitute.org, and the JSE (Entry: JS Core) and JSA (Associate: OOP & Adv Functions) exams from js.institute. These Pearson VUE-distributed certifications will complement my existing work and reinforce my professional expertise, though the associated costs have delayed my pursuit of these qualifications to date.
                </p>
                <br />
            </div>
        </div>
    );
};

export default About;