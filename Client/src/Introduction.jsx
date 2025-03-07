/* eslint-disable react/no-unescaped-entities */
import style from './Introduction.module.css'
const Introduction = () =>{

    return(
        <>
        <div className={style.intro}>
        <h1>Hi, It's <span>Surath.</span></h1>
        <h3 className={style.typing}>I'm a <span></span></h3>
        </div>
        </>
    )
}
export default Introduction;