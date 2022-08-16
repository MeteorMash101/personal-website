import { useState } from "react"
import classes from './Slideshow.module.css'

const Slideshow = ({onClickBack, onClickForward, currImgIdx, numOfImages}) => {
	const showBackButton = currImgIdx > 0
	const showForwardButton = currImgIdx + 1 < numOfImages
	return (
		<div className={classes.container}>
			<button className={classes.arrowBtn} onClick={onClickBack} disabled={!showBackButton}>&lt;</button>
			<button className={classes.arrowBtn} onClick={onClickForward} disabled={!showForwardButton}>&gt;</button>
		</div>
    )
}

export default Slideshow