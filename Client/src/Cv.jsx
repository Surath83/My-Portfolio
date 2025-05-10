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
        <button className={style.downbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/5jnh0m5r2ftp7nskz7p2g/Resume_SurathChowdhury.pdf?rlkey=y4olcm5ak601quk67nzphlb5d&st=9nkzooog&dl=0')}>Preview</button>
      </div><br/>
     </div>
  );
};
export default Cv;