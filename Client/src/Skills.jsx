/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import style from './Skills.module.css';

function MySlider({ value, animate }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1000;
    const stepTime = 10;
    const increment = value / (duration / stepTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setAnimatedValue(value);
        clearInterval(interval);
      } else {
        setAnimatedValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [animate, value]);

  const trackStyle = {
    background: `linear-gradient(to right, #7437cf ${animatedValue}%, #eee ${animatedValue}%)`,
  };

  return (
    <div className={style.slideritem}>
      <input
        className={style.gold_slider}
        type="range"
        min="0"
        max="100"
        value={animatedValue}
        disabled
        style={trackStyle}
      />
      <br />
      <span>{animatedValue}%</span>
    </div>
  );
}

function Skills() {
  const [skills] = useState([
    { id: 1, language: 'Java', proficiency: 80 },
    { id: 2, language: 'C', proficiency: 70 },
    { id: 3, language: 'Python', proficiency: 45 },
    { id: 4, language: 'JAVASCRIPT', proficiency: 70 },
    { id: 5, language: 'C++', proficiency: 5 },
    { id: 6, language: 'GO', proficiency: 5 },
    { id: 7, language: 'JDBC', proficiency: 70 },
    { id: 8, language: 'JAVA AWT', proficiency: 30 },
    { id: 9, language: 'SQL', proficiency: 45 },
    { id: 10, language: 'HTML', proficiency: 100 },
    { id: 11, language: 'CSS', proficiency: 95 },
    { id: 12, language: 'BOOTSTRAP', proficiency: 90 },
    { id: 13, language: 'PHP', proficiency: 25 },
    { id: 14, language: 'MONGO DB', proficiency: 45 },
    { id: 15, language: 'EXPRESS JS', proficiency: 20 },
    { id: 16, language: 'REACT JS', proficiency: 75 },
    { id: 17, language: 'NODE JS', proficiency: 50 },
    { id: 18, language: 'RESTFUL APIs', proficiency: 80 },
    { id: 19, language: 'XAMPP', proficiency: 90 },
    { id: 20, language: 'Pandas', proficiency: 70 },
    { id: 21, language: 'Flask', proficiency: 75 },
    { id: 22, language: 'React Native', proficiency: 40 },
    { id: 23, language: 'Docker', proficiency: 30 },
    { id: 24, language: 'GCP', proficiency: 35 },
    { id: 25, language: 'Tableau', proficiency: 80 },
    { id: 26, language: 'GIT', proficiency: 60 },
    { id: 27, language: 'GitHub', proficiency: 70 },
    { id: 28, language: 'Postman', proficiency: 85 },
    { id: 29, language: 'VS Code', proficiency: 90 },
    { id: 30, language: 'Anaconda', proficiency: 80 },
    { id: 31, language: 'Eclipse', proficiency: 70 },
    { id: 32, language: 'NetBeans', proficiency: 20 },
    { id: 33, language: 'Android Studio', proficiency: 20 },
    { id: 34, language: 'Vercel', proficiency: 40 },
    { id: 35, language: 'Render', proficiency: 55 },
  ]);

  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.2, // when 20% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.desc} ref={containerRef}>
      <h1 className={style.heading}>SKILLS:</h1>
      <ul className={style.ul}>
        {skills.map((skill) => (
          <li className={style.listitem} key={skill.id}>
            <h4>{skill.language}:</h4>
            <MySlider value={skill.proficiency} animate={animate} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
