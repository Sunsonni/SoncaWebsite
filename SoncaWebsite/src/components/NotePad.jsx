import './NotePad.css'
import Notepadbackground from '../../../Content/Notepadbackground.svg';
import NotepadMainBody from '../../../Content/NotepadMainBody.svg';

const NotepadTop = () => {
    return (
        <div className='top-notepad'>
            <p>apples</p>
        </div>
    );
}

const NotePadMain = () => {
    const blurbs =  {
        about: "Sonca is a 27 year old Vietnamese-American songwriter, producer, and engineer based in Missouri. She is the first woman POC engineer at Shock City Studios and has worked with artists like Smino, Masego, Omari Hardwick, Adidas, Nike, Honda, Duolingo and Olympian - Jackie Joyner Kersee. She has had a love for K-pop since she was a little girl. Her expertise includes toplining, writing, and K-pop production. Her dream is to work for artists such as New Jeans, Le Sserafim, Kiss Of Life, Ailee, Aespa, and more.",
    }
    return(
        <>
            <img className='notepad-main-body'src={NotepadMainBody}></img>
            <h3 className='notepad-text'>{blurbs['about']}</h3>
        </>
    );
}

const NotePad = () => {
    return (
        <div className='notepad'>
            <img className='background' src={Notepadbackground}></img>
            <NotepadTop />
            <NotePadMain />
        </div>
    );
}

export default NotePad;