import { lazy , Suspense } from 'react';
import style from './About.module.css';
const Aboutme = lazy(() => import('./Aboutme'));
const About = () => {  
    return (
        <>
            <div className={style.desc}>
                <h1 className={style.heading}>INTRODUCTION :</h1>
                <br />
                <h4>
                    <p>My name is Surath Chowdhury, and I was born and raised in Kolkata, India. I completed my schooling there up to the 12th grade. After finishing high school, I moved to Bangalore to pursue my B.Tech studies. I come from a small, close-knit nuclear family.</p>
                    <p>&emsp;&emsp;From a very young age, I developed a fascination with electronic devices, and this curiosity gradually extended to computers as I grew older. My father played a significant role in nurturing my interest by encouraging me to explore and learn more about computers. Over time, this early curiosity turned into a deep passion for technology and its endless possibilities.</p>
                    <p>&emsp;&emsp;Today, I am driven by my love for innovation and problem-solving, which motivates me to explore new ideas and work on projects that bridge my technical knowledge with practical applications.</p>
                </h4>
                <br />
                <br />
                <Suspense fallback={<div>Loading...</div>}>
                    <Aboutme />
                </Suspense>
            </div>
        </>
    );
};

export default About;
