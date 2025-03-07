import style from './About.module.css'
const Aboutme = () => {
    const openLink = (url) => {
        window.open(url, '_blank');
    };
    return (
        <><h1 className={style.heading}>EDUCATION :</h1><br /><h4>
                        <ul>
                            <li><b className={style.b}>B-tech: </b>Computer Science and Engineering | (VTU) | SJB Institute of Technology | Bengaluru | CGPA: 8.01 | (3rd year, 2022-2025) <i>(highest qualification)</i> </li>
                            <li><b className={style.b}>XII: </b>(WBCHSE) | Swami Pranava Nanda Vidyapith | Kolkata | 84% | (2022)</li>
                            <li><b className={style.b}>X: </b>(WBBSE) | Swami Pranava Nanda Vidyapith | Kolkata | 72% | (2020)</li>
                        </ul>
                    </h4><br /><br /><h1 className={style.heading}>COURSES :</h1><br /><h4>
                            <ul>
                                <li>Operating System</li>
                                <li>Linux Commands</li>
                                <li>Networking</li>
                                <li>Digital circuits<i className={style.i}>(Microprocessor-8085, ARM7)</i></li>
                                <li>Git, GitHub</li>
                            </ul>
                        </h4><br /><br /><h1 className={style.heading}>Certification :</h1><br /><h4>
                            <ul>
                                <li>
                                    <button className={style.bbt} onClick={() => openLink('https://www.dropbox.com/scl/fi/bohelyqyykk5eqos8wins/certificate-alpha-batch-50-653284a18470ca210a03a0e6.pdf?rlkey=drgk9mlyha0phx937akoj5ug9&st=r268rt56&dl=0')}>
                                        Certification of DSA with Java (2023)
                                    </button>
                                    <p><i className={style.i}>Online course- Apna College</i></p>
                                </li>
                                <li>
                                    <button className={style.bbt} onClick={() => openLink('https://www.dropbox.com/scl/fi/9iow1qc36cqmrbr9hyccu/ARM7share-certificate.png?rlkey=o64jso6euvz2miasfrk05fzo1&st=zdz7d4vf&dl=0')}>
                                        Certification of ARM7 (2024)
                                    </button>
                                    <p><i className={style.i}>Online course- Bharat Acharya Education</i></p>
                                </li>
                            </ul>
                        </h4><br /><br /><h1 className={style.heading}>INTERESTS :</h1><br /><h4>
                            <ul>
                                <li>Fitness</li>
                                <li>Storytelling</li>
                                <li>Problem solving</li>
                                <li>Sketching</li>
                                <li>Gardening</li>
                                <li>Traveling</li>
                            </ul>
                        </h4></>
    )
}
export default Aboutme