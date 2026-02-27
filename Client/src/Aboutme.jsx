import style from './About.module.css'
const Aboutme = () => {
    const openLink = (url) => {
        window.open(url, '_blank');
    };
    return (
        <><h1 className={style.heading}>EDUCATION :</h1><br />
                    <h4>
                        <ul>
                            <li><b className={style.b}>B.tech: </b>Computer Science and Engineering | (VTU) | SJB Institute of Technology | Bengaluru | CGPA: 8.31 | (2022-2026) <i>(highest qualification)</i> </li>
                            <li><b className={style.b}>XII: </b>(WBCHSE) | Swami Pranava Nanda Vidyapith | Kolkata | 80.66% | (2022)</li>
                            <li><b className={style.b}>X: </b>(WBBSE) | Swami Pranava Nanda Vidyapith | Kolkata | 72.14% | (2020)</li>
                        </ul>
                    </h4><br /><br /><h1 className={style.heading}>COURSES :</h1><br />
                    <h4>
                            <ul>
                                <li>Operating System</li>
                                <li>Linux Commands</li>
                                <li>Networking</li>
                                <li>Cryptography</li>
                                <li>Digital circuits<i className={style.i}>(Microprocessor-8085, ARM7)</i></li>
                                <li>Git, GitHub</li>
                            </ul>
                    </h4><br /><br /><h1 className={style.heading}>Certification :</h1><br />
                    <h4>
                            <ul>
                                <li>
                                    <p className={style.bbt}>DSA with Java (2023)</p>
                                    <button className={style.previewbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/bohelyqyykk5eqos8wins/certificate-alpha-batch-50-653284a18470ca210a03a0e6.pdf?rlkey=drgk9mlyha0phx937akoj5ug9&st=r268rt56&dl=0')}>Preview</button>
                                    <p><i className={style.i}>Online course- Apna College</i></p>
                                </li>
                                <li>
                                    <p className={style.bbt}>ARM7 (2024)</p>
                                    <button className={style.previewbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/9iow1qc36cqmrbr9hyccu/ARM7share-certificate.png?rlkey=o64jso6euvz2miasfrk05fzo1&st=zdz7d4vf&dl=0')}>Preview</button>
                                    <p><i className={style.i}>Online course- Bharat Acharya Education</i></p>
                                </li>
                                <li>
                                    <p className={style.bbt}>Postman API Fundamentals (2025)</p>
                                    <button className={style.previewbutton} onClick={() => openLink('https://badgr.com/public/assertions/RynkYDZaS8KvjJEE8PbNhQ?identity__email=surath172003%40gmail.com')}>Preview</button>
                                    <p><i className={style.i}>Online course- Postman</i></p>
                                </li>
                                <li>
                                    <p className={style.bbt}>Big Data 101 (2025)</p>
                                    <button className={style.previewbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/yvkaefu31bmlbo8tv2hot/BigData101.PNG?rlkey=6e008rw9x8143prq64t4fi609&st=v7olfbie&dl=0')}>Preview</button>
                                    <p><i className={style.i}>Online course- IBM Skill Built</i></p>
                                </li>
                                <li>
                                    <p className={style.bbt}>Automotive Embedded System (2025)</p>
                                    <button className={style.previewbutton} onClick={() => openLink('https://www.dropbox.com/scl/fi/irbh40lxm7hyjvqq92ogw/Coursera-9QKP84Z2S87S.pdf?rlkey=rozv9j85ylgqqet3f3hkq9s4t&st=l9uyfall&dl=0')}>Preview</button>
                                    <p><i className={style.i}>Online course- Coursera</i></p>
                                </li>
                                <li>
                                    <p className={style.bbt}>Graph Developer - Associate (2025)</p>
                                    <button className={style.previewbutton} onClick={() => openLink('https://www.apollographql.com/tutorials/certifications/93bed260-e756-4093-b1a9-c06be5870b51')}>Preview</button>
                                    <p><i className={style.i}>Online course- Apollographql</i></p>
                                </li>
                            </ul>
                    </h4><br /><br /><h1 className={style.heading}>INTERESTS :</h1><br />
                    <h4>
                            <ul>
                                <li>Fitness</li>
                                <li>Storytelling</li>
                                <li>Problem solving</li>
                                <li>Cooking</li>
                                <li>Sketching</li>
                                <li>Gardening</li>
                                <li>Traveling</li>
                            </ul>
                    </h4>
        </>
    )
}
export default Aboutme