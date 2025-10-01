import React from 'react'
import styles from '../styles/Meter.module.css'

function Meter(props) {
  return (
    <div className={styles.meter}>
      <div style={{ width: `${props.percent}%` }} />
    </div>
  )
}

export default Meter
