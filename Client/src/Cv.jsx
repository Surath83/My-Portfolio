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
        <button className={style.downbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/ydq6bywsg9ehd5hvcfzpv/Resume_SurathChowdhury.docx?rlkey=t001448w3m7kmein5lb73w6lp&st=ts43lxsm&dl=0')}>Preview</button>
      </div><br/>
     </div>
  );
};
export default Cv;