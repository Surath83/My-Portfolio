/* eslint-disable react/prop-types */
import { useState , useEffect} from 'react'
import { Blurhash } from 'react-blurhash';
import style from './Cards.module.css'
function Cards ({title, image , hash ,description ,year ,link}) {
    const handleClick = () => {
        window.open(link, '_blank');
    }
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [image]);
    return(
        <div className={style.container}>
            <div className={style.label}>
                <div className={style.boxn}>
                <h2>{title}</h2><h6><i>{year}</i></h6>
                <br />
                <p>{description}</p>
                {link && (
                    <button className={style.button} onClick={handleClick}>Link</button>
                )}
                </div>
            </div>
            <div className={style.hash} style={{display: imageLoaded ? 'none' : 'inline'}}>
            <Blurhash
                hash={hash}
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
                />
            </div>
            <img className={style.img} src={image} alt={title} style={{display: !imageLoaded ? 'none' : 'inline'}} />
        </div>
    )
}


export default Cards;