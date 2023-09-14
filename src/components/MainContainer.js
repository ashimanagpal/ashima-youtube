import ButtonList from "./ButtonList";
import VideoConatiner from "./VideoContainer";
import { useSelector } from 'react-redux';

const MainContainer =() =>{
    const isMenuOpen = useSelector(store => store.nav.isMenuOpen);
    return(
        <div className={"main-container" + (isMenuOpen ? ' ' : ' full-w')}>
            <ButtonList/>
            <VideoConatiner/>
        </div>
    )
}

export default MainContainer;