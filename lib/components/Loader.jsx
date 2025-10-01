import React from 'react'
import styles from '../styles/Loader.module.css'

function Loader(props) {
  return (
    <svg
      className={`
        ${styles.loader}
        ${props.theme === 'dark' ? styles.dark : styles.light}
      `}
      viewBox='20 20 40 40'
      style={props.style || {}}
    >
      <circle
        className={`${styles[props.color]} ${styles.circle}`}
        cx='40'
        cy='40'
        r='20'
      />
    </svg>
  )
}

export default Loader
