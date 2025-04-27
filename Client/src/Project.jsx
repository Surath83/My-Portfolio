import style from './Project.module.css'
import Cards from './Cards'
import image1 from './assets/travel.png';
import image2 from './assets/courier.png';
import image3 from './assets/library.png';
import image4 from './assets/audio.png';
import image5 from './assets/chatbox.png';
import image6 from './assets/foodie.png';

const Project = () => {
    const card = [
        {id: 1,title: 'Travel-T20-Holidays',image: image1 ,hash: 'LUN0}3IVx^bJK5OEr=s.~AxuIpR+',description: 'A dynamic and visually appealing travel website designed to showcase various travel destinations. It is built using HTML, CSS, JavaScript and JQuery.',year: '2023-2024',link: 'https://travel-t20-holidays-qd9dop99b-surath-chowdhurys-projects.vercel.app/'},
        {id: 2,title: 'Indian-Courier-Service',image: image2 ,hash: 'LbL#ao4q+1xaB.xVW-W:^ntPOnR*',description: 'An efficient and fast courier service management system. Demonstrates the use of PHP, HTML, CSS, JavaScript and SQL to create a full-stack application.',year: '2024-2025',link: ''},
        {id: 3,title: 'Library-Management',image: image3 ,hash: 'LAFiV@~qxu_4_30000M{00.89F9F',description: 'A full-stack library management software built with JAVA,JDBC,AWT,MYSQL. The system offers login portals for administrators and students.',year: '2024-2025',link: ''},
        {id: 4,title: 'AAES',image: image4 ,hash: 'L7Fh@f00000$00xv~UMx01Iq~W-P',description: 'A DSP-based audio enhancement solution using React (frontend) and Python (backend) to reduce noise, enhance stereo separation, and optimize frequency.',year: '2025-2026',link: ''},
        {id: 5,title: 'Live-Chatbox',image: image5 ,hash: 'LTG8.ffk00js~Vay9aj[00az?bfP',description: 'A MERN stack Live-Chatbox project demonstrating real-time messaging and data handling using RESTful APIs.',year: '2025-2026',link: ''},
        {id: 6,title: 'Foodie',image: image6 ,hash: 'LIO;JMkD^lof00WYj=j[~Xa$Rkj[',description: 'An AI-based food recognition system using ReactJS, Node.js, CSS (frontend) and Python, Flask, OpenCV, PIL, NumPy (backend) to detect food from images, retrieve nutrition data, and track meals efficiently.',year: '2025-2026',link: 'https://foodieai-1-0dcz.onrender.com/'},
    ];
    return(
        <>
        <div className={style.desc}>
        <h1 className={style.heading}>PROJECTS :</h1>
        <br />
        <br />
        <div className={style.card}>
        {card.map((cards) => (
            <Cards key={cards.id} title={cards.title} image={cards.image} hash={cards.hash} description={cards.description} year={cards.year} link={cards.link} />
        ))}
        </div>
        </div>
        </>
    )
}
export default Project;