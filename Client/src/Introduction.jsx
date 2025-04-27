/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import style from './Introduction.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Introduction = ({ sections }) =>{
    const handleScroll = (section) => {
        if (section.current) {
          window.scrollTo({
            top: section.current.offsetTop - 100, 
            behavior: 'smooth', 
          });
        }
      };
    return(
        <>
        <div className={style.intro}>
        <h1>Hi, It's <span>Surath.</span></h1>
        <h3 className={style.typing}>I'm a <span></span></h3>
        <br />
        <button className={style.get} onClick={() => handleScroll(sections.contact)}>Get in Touch</button>
        <button className={style.res} onClick={() => handleScroll(sections.contact)}><FontAwesomeIcon icon={faArrowDown} /> Resume</button>
        </div>
        <center>
            <button className={style.scroll} onClick={() => handleScroll(sections.about)}><FontAwesomeIcon icon={faAngleDown} /></button>
        </center>
        </>
    )
}
export default Introduction;