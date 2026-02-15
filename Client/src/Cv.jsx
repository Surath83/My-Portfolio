import style from './Cv.module.css';
const Cv = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
    return (
    <div className={style.box}>
      <h2>Resume</h2><br />
      <div className={style.ff}>
        <h4>My resume</h4>
        <button className={style.downbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/2eesx6flmofafsm6v6nlt/Surath_s_Resume-53.pdf?rlkey=v0r7nbt6iwm88k93csiyazyxp&st=jjpbrbt2&dl=0')}>Preview</button>
      </div><br/>
     </div>
  );
};
export default Cv;