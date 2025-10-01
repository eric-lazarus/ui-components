import React, { useEffect, useState, Fragment } from 'react'
import Button from './Button'
import XBoxContainer from './XBoxContainer'
import styles from '../styles/Notification.module.css'

const Notification = ({
  isVisible = false,
  type = 1,
  style = {},
  meta = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }),
  showMeta = false,
  theme = 'light',
  onClick = () => {},
  showBackdrop = false,
  className,
  icon,
  iconColor,
  iconImage,
  content,
  autoDismisses = false,
  buttonRef
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isVisible && autoDismisses) {
      setShow(true)
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
      }, 6000)

      return () => {
        clearTimeout(timeId)
      }
    } else {
      setShow(isVisible)
    }
  }, [isVisible, autoDismisses])

  return (
    <>
      <div
        style={style || {}}
        className={`
          ${styles.notification}
          ${styles[theme]}
          ${type === 3 ? styles.modal : ''}
          ${
            type === 3 && show
              ? styles.slideInRightCenter
              : show
              ? styles.slideInRight
              : ''
          }
          ${className}
        `}
        role='diaglogue'
        aria-live='rude'
        aria-label={content}
      >
        {type !== 3 && <XBoxContainer theme={theme} onClick={onClick} />}
        <div className={styles.notificationTop}>
          {iconImage ? (
            <img src={iconImage} aria-hidden />
          ) : icon ? (
            <div style={iconColor ? { color: iconColor } : {}}>{icon}</div>
          ) : (
            ''
          )}
          {showMeta && <p className={styles.meta}>{meta}</p>}
        </div>
        <div className={styles.content}>{content}</div>
        {type === 3 && (
          <Button
            text='Dismiss'
            type={1}
            onClick={(e) => {
              e.preventDefault()
              onClick()
            }}
            buttonRef={buttonRef}
            buttonType='submit'
            theme={theme}
          />
        )}
      </div>

      {showBackdrop && (
        <div
          className={`${styles.backdrop} ${
            !show ? styles.slideOutRightCenter : ''
          }`}
        />
      )}
    </>
  )
}

export default Notification
