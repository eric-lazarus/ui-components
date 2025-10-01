import React from 'react'
import styles from '../styles/FloatingButton.module.css'

/*
  props: {
    onClick: f(),
    style: {} (optional),
    image: (optional),
    text: 'string',
    label: 'string' (optional),
    tooltipStyle: {} (optional),
    theme: 'light' || 'dark'
  }
*/

function FloatingButton(props) {
  return (
    <button
      className={`
        ${styles.floatingButton}
        ${props.text === 'cancel' ? styles.cancelButton : ''}
        ${props.theme === 'dark' ? styles.dark : styles.light}
      `}
      onClick={props.onClick}
      style={Object.assign(
        props.fixed ? { position: 'fixed' } : {},
        props.style || {}
      )}
      type='submit'
      form={props.form || undefined}
    >
      {props.image ? (
        <img src={props.image} alt={props.text || ''} />
      ) : props.icon ? (
        props.icon
      ) : (
        <p className={styles.buttonText} style={props.textStyle || {}}>
          {props.text}
        </p>
      )}
      {props.label && (
        <div className={styles.labelContainer}>
          <p style={props.tooltipStyle || {}} className={styles.label}>
            {props.label}
          </p>
        </div>
      )}
    </button>
  )
}

export default FloatingButton
