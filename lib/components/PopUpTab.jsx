import React from 'react'
import styles from '../styles/PopUpTab.module.css'

function PopUpTab(props) {
  return (
    <div
      className={styles.popUpTab}
      onClick={props.onClick}
      style={props.style || {}}
    >
      <div className={styles.blackTab} />
      <p>{props.text}</p>
    </div>
  )
}

export default PopUpTab
