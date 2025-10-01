import React from 'react'
import styles from '../styles/Pill.module.css'

function Pill(props) {
  return (
    <div
      className={`
      ${styles.pill}
      ${props.theme === 'dark' ? styles.dark : styles.light}
      ${
        props.type === 'ghost' || props.type === 2
          ? styles.ghost
          : styles.accent
      }
    `}
    >
      <span>{props.text}</span>
    </div>
  )
}

export default Pill
