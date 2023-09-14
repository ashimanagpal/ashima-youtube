import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faSubscript, faBook, faHistory, faClock} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.nav.isMenuOpen);


    //early return Pattern
    if (!isMenuOpen) return null;
    return(
       
        <div className='sidebar'>
            <ul>
                <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                <li><FontAwesomeIcon icon={faVideo} /> Shorts</li>
                <li><FontAwesomeIcon icon={faSubscript} /> Subscription</li>
            </ul>
            <ul>
                <li><FontAwesomeIcon icon={faBook} /> Library</li>
                <li><FontAwesomeIcon icon={faHistory} /> History</li>
                <li><FontAwesomeIcon icon={faVideo} /> Your Videos</li>
                <li><FontAwesomeIcon icon={faClock} /> Watch Later</li>
            </ul>
        </div>
    )
}

export default Sidebar;