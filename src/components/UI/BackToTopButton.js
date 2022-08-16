import classes from './BackToTopButton.module.css';
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useState } from 'react';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false)
  
    // EDIT: not working atm...
    // Only show this button when user has scrolled down a certain dist.
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } 
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    
    // Scroll user back to top functionality
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };
    
    window.addEventListener('scroll', toggleVisible);

	return (
        <div className={classes.wrapper}>
            <div className={classes.container} stye={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
                <BsArrowUpCircleFill style={{color: "red", fontSize: "1.5rem"}}/>
                Back to Top
            </div>
        </div>
	);
}

export default BackToTopButton;