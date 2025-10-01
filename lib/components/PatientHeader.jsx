import React from 'react'
import styles from '../styles/PatientHeader.module.css'
import Icon from './Icon'
import Avatar from './Avatar'

function PatientHeader(props) {
  return (
    <header
      className={`
        ${styles.patientHeader}
        ${props.theme === 'dark' ? styles.dark : styles.light}
      `}
      style={props.style || {}}
    >
      {props.icon ? (
        <Avatar theme={props.theme} icon={props.icon} />
      ) : (
        <Avatar theme={props.theme} image={props.image} name={props.name} />
      )}
      <div className={styles.nameDiv} onClick={props.onClick || null}>
        <p>{props.name}</p>
      </div>
      {props.sex && (
        <div
          className={`${styles.sexDiv} ${styles.infoDiv}`}
          onClick={props.onClick || null}
        >
          <p>Sex</p>
          <p className={`${styles.fontLarge} ${styles.capitalize}`}>
            {props.sex}
          </p>
        </div>
      )}
      <div onClick={props.onClick || null} className={`${styles.infoDiv}`}>
        <p>Date of Birth</p>
        <p className={styles.fontMedium}>{props.birthdate}</p>
      </div>
      <div onClick={props.onClick || null} className={`${styles.infoDiv}`}>
        <p>Last Updated</p>
        <p className={styles.fontMedium}>{props.lastUpdated}</p>
      </div>
      <div
        className={styles.sharePatientBtn}
        onClick={props.onClickSharePatient}
      >
        <Icon icon='person-outline' />
        <p>+</p>
      </div>
      {props.newTests && props.newTests > 0 && (
        <div className={styles.newTestsOrb}>
          <p>{props.newTests > 0 && props.newTests}</p>
        </div>
      )}
    </header>
  )
}

export default PatientHeader
