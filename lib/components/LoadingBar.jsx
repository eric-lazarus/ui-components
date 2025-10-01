import React, { useState, useEffect } from 'react'
import styles from '../styles/LoadingBar.module.css'

export default function LoadingBar(props) {
  const [className, setClassName] = useState(styles.loadingBar)
  const [animationDuration, setAnimationDuration] = useState('15s')

  setTimeout(() => {
    setClassName(`${styles.loadingBar} ${styles.loadingBar2}`)
  }, [1])

  useEffect(() => {
    if (props.animationDuration) {
      setAnimationDuration(props.animationDuration)
    }
  }, [props.animationDuration])

  return (
    <div className={styles.loadingBarContainer}>
      <div
        style={{
          transitionDuration: animationDuration
        }}
        className={
          props.isFinished
            ? `${styles.loadingBar} ${styles.finished}`
            : className
        }
      />
    </div>
  )
}
