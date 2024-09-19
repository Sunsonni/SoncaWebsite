import spotifyLogo from '../../../Content/spotify logo.svg'
import emailLogo from '../../../Content/email logo.svg'
import instaLogo from '../../../Content/instalogo.svg'
import '../App.css'
const SocialMediaLinks = () => {
    return (
        <div className='social-media-links'>
            <a href='https://open.spotify.com/artist/4uA20q71klqMyKVSdA7Mgi?si=LvHGz0QqSPiF0HD1JjUNLQ' target='_blank'> 
                <img className='icon' src={spotifyLogo}></img>
            </a>
            <a href='mailto:engineer.sonca@gmail.com' target='_blank'>
                <img className='icon' src={emailLogo}></img>
            </a>
            <a href='https://www.instagram.com/soncamnguyen/' target='_blank'>
                <img className='icon' src={instaLogo}></img>
            </a>
        </div>
    );
}
export default SocialMediaLinks;