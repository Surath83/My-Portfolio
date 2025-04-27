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
    { id: 9, language: 'SQL DB', proficiency: 65 },
    { id: 10, language: 'HTML', proficiency: 100 },
    { id: 11, language: 'CSS', proficiency: 95 },
    { id: 12, language: 'BOOTSTRAP', proficiency: 90 },
    { id: 13, language: 'PHP', proficiency: 25 },
    { id: 14, language: 'MONGO DB', proficiency: 15 },
    { id: 15, language: 'EXPRESS JS', proficiency: 20 },
    { id: 16, language: 'REACT JS', proficiency: 75 },
    { id: 17, language: 'NODE JS', proficiency: 50 },
    { id: 18, language: 'RESTFUL API', proficiency: 50 },
    { id: 19, language: 'XAMPP', proficiency: 90 },
    { id: 20, language: 'GCP', proficiency: 20 },
    { id: 21, language: 'Flask', proficiency: 75 }
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
