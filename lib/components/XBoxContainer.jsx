import React from 'react'
import styles from '../styles/XBoxContainer.module.css'
import Icon from './Icon'

export default function XBoxContainer({
  size = 'small',
  theme = 'light',
  className = '',
  style,
  align,
  onClick,
  iconId = null,
}) {
  return (
    <button
      style={style || {}}
      className={`
        ${styles.xBoxContainer}
        ${styles[theme]}
        ${styles[size]}
        ${align === 'right' ? styles.right : styles.left}
        ${className}
      `}
      onClick={onClick}
      aria-label='Close'
      // type='submit'
    >
      <Icon icon='close' iconId={iconId} />
    </button>
  )
}
