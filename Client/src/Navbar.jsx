/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import style from './Navbar.module.css';

const Navbar = ({ sections }) => {
  const handleScroll = (section) => {
    if (section.current) {
      window.scrollTo({
        top: section.current.offsetTop - 100, 
        behavior: 'smooth', 
      });
    }
  };

  return (
    <>
      <header>
        <a href="#" className={style.logo}>Surath</a>
        <nav>
          <button className={style.active} onClick={() => handleScroll(sections.home)}>Home</button>
          <button onClick={() => handleScroll(sections.about)}>About</button>
          <button onClick={() => handleScroll(sections.skills)}>Skills</button>
          <button onClick={() => handleScroll(sections.project)}>Projects</button>
          <button onClick={() => handleScroll(sections.contact)}>Let's Connect</button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
