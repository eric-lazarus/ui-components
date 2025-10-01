import React from 'react'
import styles from '../styles/Card.module.css'

export default function Card({
  theme = 'light',
  className = '',
  children,
  content,
  style,
  title,
  titleStyle,
  id = null
}) {
  return (
    <div
      className={`${styles.card} ${styles[theme]} ${className}`}
      id={id}
      style={style}
    >
      {title && (
        <h3 className={`${styles.cardTitle}`} style={titleStyle}>
          {title}
        </h3>
      )}
      {children || content}
    </div>
  )
}
