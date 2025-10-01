import React, { useState, useEffect, useRef, useCallback } from 'react'
import Button from './Button'
import XBoxContainer from './XBoxContainer'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styles from '../styles/Modal.module.css'
import globalStyles from '../styles/GlobalStyles.module.css'

export default function Modal({
  meta = '',
  className = '',
  height = 'calc(var(--spacing-64) * 2)',
  width = 'calc(var(--spacing-64) * 3)',
  onConfirm = () => {},
  onCancel = () => {},
  showBackdrop = true,
  showConfirm = true,
  showCancel = false,
  showClose = true,
  outsideClickDismisses = false,
  theme = 'light',
  confirmButtonType = 7,
  cancelButtonType = 10,
  style = {},
  bodyStyle = {},
  contentStyle = {},
  aboveNav = false,
  navPadding = true,
  isDismissable = true,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isVisible = false,
  showTime = false,
  confirmDisabled = false,
  content,
  children,
  image,
  icon,
  closeId=null
}) {
  const ref = useRef()
  // const el = ref.current

  const [visible, setVisible] = useState(false)

  const handleChange = useCallback(() => {
    visible
      ? disableBodyScroll(document.scrollingElement)
      : enableBodyScroll(document.scrollingElement)
  }, [visible])

  const handleClick = useCallback(
    (func, e) => {
      isDismissable && setVisible(!visible)
      handleChange()
      func && func(e)
    },
    [handleChange, isDismissable, visible]
  )

  useEffect(() => {
    setVisible(isVisible)
    handleChange()
  }, [handleChange, isVisible])

  return (
    <div
      className={`${styles.modal} ${styles[theme]} ${
        !visible && styles.slideOutRightCenter
      } ${!(image || icon || meta !== '' || showTime) && styles.noHeader}
        ${showClose && styles.showClose}
        ${className}
        ${!showCancel && !showConfirm && styles.noButtons}
      `}
      style={Object.assign(
        aboveNav ? { zIndex: 20 } : {},
        navPadding ? { marginLeft: 'var(--spacing-12)' } : {},
        style
      )}
    >
      <div
        style={{ maxWidth: width, maxHeight: height }}
        className={`${styles.wrapper} ${className}`}
      >
        <div className={`${styles.body} ${className}`} style={bodyStyle}>
          {(image || icon || meta !== '' || showTime) && (
            <div className={styles.notificationTop}>
              <div className={styles.icon}>
                {image ? <img src={image} /> : icon || ''}
              </div>
              {(meta || showTime) && (
                <p className={styles.meta}>
                  {showTime
                    ? `${meta} ${new Date().toLocaleString([], {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                      })}`
                    : meta}
                </p>
              )}
              {showClose && (
                <XBoxContainer
                  onClick={(e) => {
                    handleClick(onCancel, e)
                  }}
                  theme={theme}
                  size='large'
                  align='right'
                  className={styles.close}
                />
              )}
            </div>
          )}
          <div
            className={`${styles.content} ${globalStyles.customScrollbar}`}
            style={{ ...bodyStyle, maxHeight: height, maxWidth: width }}
            ref={ref}
          >
            {showClose && !(image || icon || meta !== '' || showTime) && (
              <XBoxContainer
                onClick={(e) => {
                  handleClick(onCancel, e)
                }}
                theme={theme}
                align='right'
                className={styles.close}
                iconId={closeId}
              />
            )}

            <div className={`${styles.contentInner}`} style={contentStyle}>
              {content || children}
            </div>
          </div>
        </div>
        {(showCancel || showConfirm) && (
          <div className={styles.btnDiv}>
            {showCancel && (
              <div className={styles.button}>
                <Button
                  text={cancelText}
                  type={cancelButtonType}
                  onClick={(e) => {
                    handleClick(onCancel, e)
                  }}
                  style={{ width: '100%' }}
                  theme={theme}
                />
              </div>
            )}
            {showConfirm && (
              <div className={styles.button}>
                <Button
                  text={confirmText}
                  type={confirmButtonType}
                  onClick={(e) => {
                    handleClick(onConfirm, e)
                  }}
                  disabled={confirmDisabled}
                  theme={theme}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${showBackdrop ? styles.backdrop : styles.outer}`}
        onClick={(e) => {
          outsideClickDismisses && handleClick(onCancel, e)
        }}
      />
    </div>
  )
}
