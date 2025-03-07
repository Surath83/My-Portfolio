/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import style from './Skills.module.css'
import React,{ useState } from 'react';

function MySlider({ skill, value}) {
    const trackStyle = {
        background: `linear-gradient(to right, #7437cf ${value}%, #ffffff ${value}%)`,
      };
  return (
    <div className={style.slideritem}>
      <input className={style.gold_slider} style={trackStyle}
        type="range"
        min="0"
        max="100"
        value={value}
        disabled
      /><br />
      <span> {value}%</span>
    </div>
  );
}

function Skills() {
  const [skills] = useState([
    { id: 1,language: 'Java', proficiency: 90 },
    { id: 2,language: 'C', proficiency: 80 },
    { id: 3,language: 'Python', proficiency: 20 },
    { id: 4,language: 'JAVASCRIPT', proficiency: 50 },
    { id: 5,language: 'C++', proficiency: 15 },
    { id: 6,language: 'GO', proficiency: 10 },
    { id: 7,language: 'JDBC', proficiency: 70 },
    { id: 8,language: 'JFRAME', proficiency: 30 },
    { id: 9,language: 'DBMS', proficiency: 60 },
    { id: 10,language: 'HTML', proficiency: 100 },
    { id: 11,language: 'CSS', proficiency: 90 },
    { id: 12,language: 'BOOTSTRAP', proficiency: 100 },
    { id: 13,language: 'PHP', proficiency: 70 },
    { id: 14,language: 'REACT JS', proficiency: 60 },
    { id: 15,language: 'NODE JS', proficiency: 5 },
    { id: 16,language: 'XAMPP', proficiency: 90 },
    { id: 17,language: 'AWS', proficiency: 10 },
  ]);



  return (
    
    <div className={style.desc}>
        <h1 className={style.heading}>SKILLS:</h1>
        <ul className={style.ul}>
          {skills.map((skill) => (
            <li className={style.listitem} key={skill.id}>
                  {<h4>{skill.language} :</h4>} 
              {<MySlider value={skill.proficiency} />}
             </li>
            
          ))}
        </ul>
        
      </div>
   
  );
}

export default Skills;
