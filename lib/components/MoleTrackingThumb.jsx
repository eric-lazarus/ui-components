import React from 'react'
import styles from '../styles/TestSetThumb.module.css'
import Icon from './Icon'
import Pill from './Pill'

/*
  props: {
    id,
    date,
    location,
    locationCoordinates,
    condition,
    risk: 'low' || 'medium' || 'high'
    confidence,
    onClickTestSetThumb // takes location coordinates as array of percentages
    isReviewRequested: boolean,
    imageNumber: int,
    theme: 'light' || 'dark'
  }
*/

function MoleTrackingThumb(props) {
  return (
    <div
      className={`
          ${styles.testSetThumb}\
          ${props.isClicked ? styles.clickedTestSetThumb : ''}
          ${props.theme === 'light' ? styles.light : styles.dark}
        `}
    >
      <div className={styles.top}>
        <p>{`Test ID: ${props.id}`}</p>
        <div>
          <p>
            {props.date1} - {props.date2}
          </p>
          <Icon icon='mole-tracking' />
        </div>
      </div>
      <div className={styles.middle}>
        {props.potentialConcern && <p className={styles.fontLarge}>⚠️</p>}
        <p className={styles.fontSmall}>{props.location}</p>
      </div>
      <div className={styles.moleBottom}>
        <span className={styles.fontSmall}>
          {props.imageNumber === 1
            ? props.imageNumber + ' Image'
            : props.imageNumber + ' Images'}
        </span>
        {props.isReviewRequested && <Pill text='Review Requested' />}
      </div>
    </div>
  )
}

export default MoleTrackingThumb
