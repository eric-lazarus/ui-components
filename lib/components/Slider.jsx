import React from 'react'
import styles from '../styles/Slider.module.css'
import Icon from './Icon'

export default function Slider(props) {
  return (
    <div
      className={`
        ${styles.slider}
        ${props.type ? styles['type' + props.type] : styles.type1}
        ${props.theme === 'dark' ? styles.dark : styles.light}
        ${props.isOverlay ? styles.isOverlay : ''}
      `}
      style={
        props.width &&
        (props.type === 5 ||
          props.type === 6 ||
          props.type === 7 ||
          props.type === 8)
          ? { height: props.width }
          : { width: props.width }
      }
    >
      <div
        className={`
          ${styles.sliderInner}
        `}
        style={
          props.width &&
          (props.type === 5 ||
            props.type === 6 ||
            props.type === 7 ||
            props.type === 8) && { width: props.width }
        }
      >
        <div className={styles.backgroundWrapper}>
          <div className={styles.background} />
        </div>
        <Icon icon='minus-square-outline' />
        <input
          type='range'
          min='1'
          max='100'
          value={props.zoom}
          className={styles.sliderInput}
          onChange={props.onChangeZoom}
        />
        <Icon icon='plus-square-outline' />
      </div>
    </div>
  )
}
