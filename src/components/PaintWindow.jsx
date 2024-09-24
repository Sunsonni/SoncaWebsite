import './PaintWindow.css'
import Draggable from 'react-draggable'
import React, { useRef, useState, useEffect } from 'react'
import minimize from '../assets/minimize.svg'
import fullscreen from '../assets/fullscreen.svg'
import close from '../assets/close.svg'
import collabs from '../assets/Collaborations2.svg'



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
    const tabsWrapperRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    const videos = {
        video1: 'https://www.youtube.com/embed/HobuPuwepKg?si=OyWjtE4tp9wTVYMh',
        video2: 'https://www.youtube.com/embed/jLKzr8fyLqg?si=fYO92HGu0A4BVU2m',
        video3: 'https://www.youtube.com/embed/W8k3adVm8wk?si=Z1SoBeqpwWTuvztk',
        video4: 'https://www.youtube.com/embed/iSy63OwdQf4?si=Rl3yKXCFxKb1p_IY',
        video5: 'https://www.youtube.com/embed/eZNTJHF_8dA?si=khUIqTJB4hcyjVHZ'
    }

    useEffect(() => {
        const handleScroll = () => {
          if (tabsRef.current && tabsWrapperRef.current) {
            const scrollLeftButton = tabsRef.current.scrollLeft === 0;
            const scrollRightButton = (tabsRef.current.scrollLeft + tabsWrapperRef.current.offsetWidth) < tabsRef.current.scrollWidth;
    
            setShowLeftButton(!scrollLeftButton);
            setShowRightButton(scrollRightButton);
          }
        };
    
        handleScroll(); // Initialize button visibility
        window.addEventListener('resize', handleScroll); // Handle resize
    
        if (tabsRef.current) {
          tabsRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (tabsRef.current) {
            tabsRef.current.removeEventListener('scroll', handleScroll);
          }
          window.removeEventListener('resize', handleScroll);
        };
      }, []);
    
      const scrollLeft = () => {
        if (tabsRef.current) {
          tabsRef.current.scrollLeft -= 100;
        }
      };
    
      const scrollRight = () => {
        if (tabsRef.current) {
          tabsRef.current.scrollLeft += 100;
        }
      };
    


    return (
        <div className='collaborations'>
            {/* Tabs */}
            <div className='tabs-container'>
                {showLeftButton && (
                    <button className="scroll-button left" onClick={scrollLeft}>←</button>
                )}
                <div className='tabs-wrapper'>
                    <div id='collection' className='tabs'>
                        <button className='custom-tab' onClick={() => setSelectedVideo('video1')}>In The Thin Of It</button>
                        <button className='custom-tab' onClick={() => setSelectedVideo('video3')}>Best Of Me</button>
                        <button className='custom-tab' onClick={() => setSelectedVideo('video4')}>Honda Knoxville</button>
                        <button className='custom-tab' onClick={() => setSelectedVideo('video5')}>Sunset Drive</button>
                    </div>
                </div>
                {showRightButton && (
                    <button className="scroll-button right" onClick={scrollRight}>→</button>
                )}
            </div>
            {/* Video Container */}
            <iframe
            src={videos[selectedVideo]}
            className='iframe'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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