import React from 'react'
import styles from '../styles/AsideDiv.module.css'
import Switch from './Switch.jsx'

/*
  props: {
    isSelected,
    type, // 1 or 2 for text sizing
    onClick,
    text,
    number,
    switchText,
    *image,
    *onClickImage,
    *render // For popuptab
    *invertColor // boolean for black/white background/text
  }
*/

function AsideDiv(props) {
  return (
    <div
      className={`
        ${styles.asideDiv}
        ${props.theme === 'dark' ? styles.dark : styles.light}
        ${props.isSelected ? styles.selectedAsideDiv : ''}
        ${props.type ? styles['type' + props.type] : ''}
      `}
      style={props.style || {}}
      onClick={props.onClick}
    >
      {props.render && props.render}
      <div className={`${styles.flex} ${styles.smallText}`}>
        <p>{props.text}</p>
        <div className={styles.flex}>
          <p>{props.switchText && props.switchText}</p>

          {props.icon ? (
            props.icon
          ) : props.image ? (
            <img src={props.image} alt='' onClick={props.onClickImage} />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={`${styles.flex} ${styles.alignCenter}`}>
        <p className={styles.mediumText}>{props.number}</p>
        {props.switch && (
          <Switch onChange={props.onChange} checked={props.isSelected} />
        )}
      </div>
    </div>
  )
}

export default AsideDiv
