import './PaintWindow.css'
import Draggable from 'react-draggable'
import React, { useRef, useState, useEffect } from 'react'
import minimize from '../../../Content/minimize.svg'
import fullscreen from '../../../Content/fullscreen.svg'
import close from '../../../Content/close.svg'
import collabs from '../../../Content/Collaborations2.svg'

const Top = () => {
    return (
    <div className='top'>
        <p className='paint-text'>untitled - paint</p>
        <div className='spacer'></div>
        <img src={minimize} className='minimize'/>
        <img src={fullscreen} className='minimize'/>
        <img src={close} className='minimize close'/>
    </div>
    );
}

const Collaborations = () => {
    const [selectedVideo, setSelectedVideo] = useState('video1');
    const tabsRef = useRef(null);

    const videos = {
        video1: 'https://www.youtube.com/embed/HobuPuwepKg?si=OyWjtE4tp9wTVYMh',
        video2: 'https://www.youtube.com/embed/jLKzr8fyLqg?si=3xttWEZiWsqGNJEs',
        video3: 'https://www.youtube.com/embed/W8k3adVm8wk?si=Z1SoBeqpwWTuvztk',
        video4: 'https://www.youtube.com/embed/iSy63OwdQf4?si=Rl3yKXCFxKb1p_IY',
        video5: 'https://www.youtube.com/embed/eZNTJHF_8dA?si=khUIqTJB4hcyjVHZ'
    }
    return (
        <div className='collaborations'>
            {/* Tabs */}
            <div className='tabs-container' ref={tabsRef}>
                <div className='tabs'>
                    <button className='custom-tab' onClick={() => setSelectedVideo('video1')}>In The Thin Of It</button>
                    <button className='custom-tab' onClick={() => setSelectedVideo('video2')}>STL City Flavor</button>
                    <button className='custom-tab' onClick={() => setSelectedVideo('video3')}>Best Of Me</button>
                    <button className='custom-tab' onClick={() => setSelectedVideo('video4')}>Honda Knoxville</button>
                    <button className='custom-tab' onClick={() => setSelectedVideo('video5')}>Sunset Drive</button>
                </div>
            </div>
            {/* Video Container */}
            <iframe
            src={videos[selectedVideo]}
            className='iframe'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreens
            ></iframe>
        </div>
    );
}

const PaintWindow = () => {


    return (
        <div>
            <div className="paint-window">
                <Top />
                <Collaborations />
            </div>
            <img className='collabs'src={collabs} z-index='5'/>
        </div>
    )
}

export default PaintWindow;