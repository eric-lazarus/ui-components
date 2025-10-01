import React from 'react'
import styles from '../styles/PatientThumb.module.css'
import Pill from './Pill'
import Avatar from './Avatar'

function PatientThumb(props) {
  return (
    <div
      className={`
          ${styles.patientThumb}
          ${props.isClicked ? styles.clickedPatientThumb : ''}
          ${props.theme === 'dark' ? styles.dark : styles.light}
        `}
      style={props.styles || {}}
    >
      <div className={styles.imageDiv}>
        {props.icon ? (
          <Avatar theme={props.theme} icon={props.icon} />
        ) : (
          <Avatar theme={props.theme} image={props.image} name={props.name} />
        )}
        <div className={styles.nameDiv}>
          <p>
            {props.name.length > 30
              ? props.name.slice(0, 30) + '...'
              : props.name}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.birthdateDiv}>
          <p>Date of Birth</p>
          <p>{props.birthdate}</p>
        </div>
        <div className={styles.lastUpdatedDiv}>
          <p>Last Updated</p>
          <p>{props.lastUpdated}</p>
        </div>
        {props.isLinked && <Pill text='Portal Access'>Portal Access</Pill>}
      </div>
      {props.newTests && props.newTests > 0 && (
        <div className={styles.newTestsOrb}>
          <p>{props.newTests > 0 && props.newTests}</p>
        </div>
      )}
    </div>
  )
}

export default PatientThumb
