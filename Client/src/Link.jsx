/* eslint-disable react/prop-types */
import style from './Link.module.css';

function Link({ title, symbol, link }) {
    function openlink() {
        if (link) {
            window.open(link, '_blank');
        } else if (title.toLowerCase() === 'whatsapp') {
            const phoneNumber = "9007418947";
            const message = "nice to meet you";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert(`${title} link is not available.`);
        }
    }

    return (
        <div className={style.linkContainer}>
            <button className={style.but} onClick={openlink}>
                <img src={symbol} alt={title} className={style.icon} />
            </button>
        </div>
    );
}

export default Link;

