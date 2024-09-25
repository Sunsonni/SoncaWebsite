import '../App.css'
import Notepadbackground from '../assets/notepadbackground.svg';
import NotepadMainBody from '../assets/NotepadMainBody.svg';
import { useState } from 'react'
import { ButtonGroup, Button } from 'reactstrap'

const NotepadTop = () => {
    const [ tab, setTab ] = useState('about');

    const blurbs =  {
        "about": "Sonca is a 27 year old Vietnamese-American songwriter, producer, and engineer based in Missouri. She is the first woman POC engineer at Shock City Studios and has worked with artists like Smino, Masego, Omari Hardwick, Adidas, Nike, Honda, Duolingo and Olympian - Jackie Joyner Kersee. She has had a love for K-pop since she was a little girl. Her expertise includes toplining, writing, and K-pop production. Her dream is to work for artists such as New Jeans, Le Sserafim, Kiss Of Life, Ailee, Aespa, and more.",
        "Shock City Studios": "At Shock City Studios, Sonca is an Audio Engineer and Manager with credits including: Smino, Masego, Omari Hardwick, The Saint Louis Cardinals, Honda Knoxville, Duolingo, Adidas, Saint Louis City Soccer, Angie K from The Voice 2016, Olympian Jackie Joyner Kersey, and more.",
        "The Truth in Advertising": "Music Supervisor & Composer. Composition and Synch Licensing for upcoming film by Terence Chen, directed by Karen Morey. Coming 2024",
        "Brooklyn Basement Records": "[Former] Artist Management Intern. Representing Ron Pope, Emily Scott Robinson, and Miko Marks." 
    }
    
    return (
        <div>
            <div className='top-notepad'>
                <ButtonGroup>
                    <Button className="tab" onClick={() => setTab('about')}>About</Button>
                    <Button className="tab"onClick={() => setTab('Shock City Studios')}>Shock</Button>
                    <Button className="tab"onClick={() => setTab('The Truth in Advertising')}>TIA</Button>
                    <Button className="tab"onClick={() => setTab('Brooklyn Basement Records')}>Brooklyn Basement</Button>
                </ButtonGroup>
            </div>
            <img className='notepad-main-body'src={NotepadMainBody}></img>
            <h3 className='notepad-text'>{blurbs[tab]}</h3>
        </div>
    );
}


const NotePad = () => {
    return (
        <div className='notepad'>
            <img className='background' src={Notepadbackground}></img>
            <NotepadTop />
        </div>
    );
}

export default NotePad;