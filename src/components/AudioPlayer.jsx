import Draggable from "react-draggable";
import '../App.css'
const AudioPlayer = () => {
    return (
        // <Draggable>
            <div className="audio-player">
             <iframe className='spotify-player'style={{ borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/2GXhCZgL7qKpSe9OVPZmk5?utm_source=generator" width="80%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        // </Draggable>
    );
}

export default AudioPlayer;