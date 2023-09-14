import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from "react";

const List = ["All", "Music", "Cooking", "Live", "News", "Watched", "Sccore", "Gaming", "iPhone","Computer Science", "Favourite","All", "Music", "Cooking", "Live", "News", "Watched", "Sccore", "Gaming", "iPhone","Computer Science", "Favourite"];

const ButtonList = () =>{
        let scrl = useRef(null);
        const [scrollStart, setscrollStart] = useState(0); // For detecting start scroll postion
        const [scrolEnd, setscrolEnd] = useState(false); 

        
        

        //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollStart(scrollStart + shift); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollStart(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

    return(
        <div className="btn-list" >
            {scrollStart !== 0 && (
                <button className="prev"  onClick={() => slide(-50)}><FontAwesomeIcon icon={faLessThan} /></button>
            )}

            <ul ref={scrl} onScroll={scrollCheck}  className="buttonlist">
                {List.map((name) => (
                <li><Button name={name}/></li>
                ))}
            </ul>

            {!scrolEnd && (
            <button className="next"  onClick={() => slide(+50)}><FontAwesomeIcon icon={faGreaterThan} /></button>
            )}
        </div>
    )
}

export default ButtonList;