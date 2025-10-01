import React from 'react'
import styles from '../styles/TestSetThumb.module.css'
import Icon from './Icon'

/*
  props: {
    theme, // dark/light
    id,
    date,
    location,
    locationCoordinates,
    condition,
    risk, // low/medium/high
    confidence,
    onClickTestSetThumb // takes location coordinates as array of percentages
    isAIActive // hides ai features when true
  }
*/

function TestSetThumb(props) {
  return (
    <div
      className={
        props.isClicked
          ? `${styles.testSetThumb} ${styles.clickedTestSetThumb} ${
              props.theme === 'dark' ? styles.dark : ''
            }`
          : `${styles.testSetThumb} ${
              props.theme === 'dark' ? styles.dark : styles.light
            }`
      }
      style={props.style || {}}
    >
      <div className={styles.top}>
        <p>{`Test ID: ${props.id}`}</p>
        <div>
          <p>{props.date}</p>
          {props.type === 'mproc' ? (
            <Icon icon='m-proc-outline' />
          ) : (
            <Icon icon='person-outline' />
          )}
        </div>
      </div>
      <div className={styles.middle + ' ' + styles.fontSmall}>
        {props.potentialConcern && <div className='conditionIndicator'>⚠️</div>}
        <p>{props.location}</p>
      </div>
      {props.isAIActive && (
        <div className={styles.bottom}>
          <div className={styles.conditionDiv}>
            <div
              className={`${styles.conditionIndicator} ${styles[props.risk]}`}
            />
            <p className={`${styles.condition} ${styles.fontSmall}`}>
              {props.condition}
            </p>
          </div>
          <p className={`${styles.fontSmall}`}>{`${props.confidence}%`}</p>
        </div>
      )}
    </div>
  )
}

export default TestSetThumb
