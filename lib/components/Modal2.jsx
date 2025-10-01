import React from 'react'
import XBoxContainer from './XBoxContainer'
import styles from '../styles/Modal2.module.css'

export default function Modal2({
  className = '',
  onDismiss = () => {},
  showBackdrop = true,
  showClose = true,
  outsideClickDismisses = false,
  theme = 'dark',
  title = '',
  style = {},
  contentContainerStyle = {},
  contentStyle = {},
  isDismissable = true,
  isVisible = false,
  // showTime = false,
  content,
  children,
  // image,
  // icon,
  footer,
  direction = 'down',
  hasLine = true,
  closeId = null,
}) {
  const animations = {
    up: {
      in: styles.upIn,
      out: styles.upOut
    },
    down: {
      in: styles.downIn,
      out: styles.downOut
    },
    left: {
      in: styles.leftIn,
      out: styles.leftOut
    },
    right: {
      in: styles.rightIn,
      out: styles.rightOut
    }
  }
  return (
    <div
      className={
        `${styles.container}
         ${isVisible ? styles.visibleContainer : styles.invisibleContainer}`
      }
    >
      <div
        className={
          `${styles.modal}
           ${isVisible ? animations[direction].in : animations[direction].out}
           ${className}`
        }
        style={
          style || {}
        }
      >
        <div
          className={
            `${styles.modalMain}
             ${styles[theme]}`
          }
        >
          <div className={`${styles.modalHeader} ${hasLine ? styles.hasLine : ''}`}>
            {title && <h2>{title}</h2>}
            {isDismissable && showClose &&
              <XBoxContainer
                theme={theme}
                onClick={onDismiss}
                className={styles.close}
                iconId={closeId}
              />
            }
          </div>
          <div
            className={styles.modalContentContainer}
            style={contentContainerStyle || {}}
          >
            <div
              className={styles.modalContent}
              style={contentStyle || {}}
            >
              {content || children}
            </div>
          </div>
        </div>
        {footer &&
          <div className={styles.modalFooter}>
            {footer}
          </div>
        }
      </div>
      {showBackdrop &&
        <div
          className={styles.backdrop}
          onClick={
            outsideClickDismisses ? onDismiss : null
          }
        />
      }
    </div>
  )
}
