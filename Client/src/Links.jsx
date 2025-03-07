import style from './Links.module.css'
import Link from './Link'
import symbol1 from './assets/linkedin-app-icon.svg'
import symbol2 from './assets/github-icon.svg'
import symbol3 from './assets/ig-instagram-icon.svg'
import symbol4 from './assets/wa-whatsapp-icon.svg'
function Links (){
    const list=[
        {id: 1,title: 'linkedin',symbol: symbol1,link: 'https://www.linkedin.com/in/surath-chowdhury'},
        {id: 2,title: 'github',symbol: symbol2,link: 'https://github.com/Surath83'},
        {id: 3,title: 'instagram',symbol: symbol3,link: 'https://www.instagram.com/surath_83'},
        {id: 4,title: 'whatsapp',symbol: symbol4,link: ''}
    ];
    return(
        <div className={style.box}>
            {list.map((lt)=>(
                <Link key={lt.id} title={lt.title} symbol={lt.symbol} link={lt.link} />
            ))}
            </div>
    )
}
export default Links;