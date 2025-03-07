import style from './Contact.module.css';
import Links from './Links'
import Getintouch from './Getintouch'
import Newsletter from './Newsletter';
import Cv from './Cv';

const Contact = () => {
    return (
        <>
          <div className={style.desc}>
                <h1 className={style.heading}>LET&rsquo;S CONNECT :</h1>
                <br />
                <div className={style.div}>
                  <Getintouch />
                  <div>
                  <Newsletter /> 
                  <Cv />
                  </div>
                </div> 
          </div>
          <div className={style.links}>
          <Links />
          </div>
        </>
    )
}
export default Contact;