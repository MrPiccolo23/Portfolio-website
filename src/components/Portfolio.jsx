import React, { useState } from 'react';
import InstaClone1 from '../assets/portfolio/InstaClone1.jpg';
import MongoDB from "../assets/portfolio/MongoDB.jpg";
import ArcadeClub from "../assets/portfolio/ArcadeClub.jpg";
import InstaClone2 from "../assets/portfolio/InstaClone2.jpg";
import MySQL from "../assets/portfolio/ConatctPage-MySQL.jpg";
import Python from "../assets/portfolio/Python.jpg";


const Portfolio = () => {



    const portfolios = [
        {
            id: 1, 
            title: "InstagramClone-1.0",
            src: InstaClone1,
            github: ["https://github.com/MrPiccolo23/InstagramClone1.0-Front-End.git", "https://github.com/MrPiccolo23/InstagramClone1.0-Back-End.git"], 
            demo: "https://drive.google.com/uc?export=view&id=1YMYCaqomCTonaPapuAROtTX0TjBEIaLQ"
        },
        {
            id: 2, 
            title: "InstagramClone-2.0",
            src: InstaClone2,
            github: ["https://github.com/MrPiccolo23/InstagramClone2.0.git"],
            demo: "https://drive.google.com/uc?export=view&id=1bNEK7lJfKlZYcvp1rSPG_U0arjXn6ImJ"
        },
        {
            id: 3, 
            src: ArcadeClub,
            title: "ArcadeClub-GameSite",
            github: ["https://github.com/MrPiccolo23/Desk4-FinalProject-ArcadeClub.git"],
            demo: "https://drive.google.com/uc?export=view&id=1euPn4Nxc_9Bhmd8FzJuYv5afyoAa7aN7"
        },
        {
            id: 4, 
            src: MySQL,
            title: "ContactPage-MySQL",
            github: ["https://github.com/MrPiccolo23/Full-Stack-SQL.git"],
            demo: "https://drive.google.com/uc?export=view&id=11zDcG4ZxxpEocTBshhUAwyi-vyudiJ-9"
        },
        {
            id: 5, 
            src: MongoDB,
            title: "MovieCLI-MongoDB",
            github: ["https://github.com/MrPiccolo23/Movie-CLI.git"],
            demo: "https://drive.google.com/uc?export=view&id=1vYhA8ZyvCU6iH62OAqTJvxd3xVmtrj0M"
        },
        {
            id: 6, 
            src: Python,
            title: "PythonCLI-QuizGame",
            github: ["https://github.com/MrPiccolo23/PythonCLI-EndangeredQuiz.git"],
            demo: "https://drive.google.com/uc?export=view&id=1IVYzjzB9QZrbUDamSNLpwEIP_4l8NmJc"
        },
    ];

    const [showFallback, setShowFallback] = useState(false);
    const [fallbackLinks, setFallbackLinks] = useState([]);

    const openLinks = (links) => {
        // Reset the fallback state
        setShowFallback(false);
        setFallbackLinks([]);

        links.forEach(link => {
            const newWindow = window.open(link, '_blank');
            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                setShowFallback(true);
                setFallbackLinks(links);
            }
        });
    }
    
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>Here are some of the projects I've built </p>
                </div>
    
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({id, title, src, github, demo})=>(
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <div className='flex items-center justify-center bg-gray-500 h-12 rounded-t-lg'>
                                    <p className='text-white text-lg'>{title}</p>
                                </div>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button onClick={() => window.open(demo, "_blank")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button onClick={() => openLinks(github)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
    
                {
                    showFallback && 
                    <div>
                        <p>Your pop-up blocker has prevented us from opening the code links in new windows. You can manually visit the code by clicking the links below:</p>
                        {
                            fallbackLinks.map((link, index) => <p key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>)
                        }
                    </div>
                }
            </div>
        </div>
    );
    };
    
    
    export default Portfolio;