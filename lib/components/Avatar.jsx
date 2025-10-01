import React from 'react'
import styles from '../styles/Avatar.module.css'

const Button = ({
  name = '',
  theme = 'light',
  showGradient = false,
  showText = true,
  size = 'large',
  icon,
  image,
  color,
  onClick = () => {}
}) => {
  const random = (list) => list[name.length % colors.length]

  const colors = [
    'var(--colors-brand-gold)',
    'var(--colors-brand-bright-orange)',
    'var(--colors-brand-bright-blue)',
    'var(--colors-brand-bright-green)'
  ]

  const initials = (name) => {
    if (name?.length) {
      const firstLetter = name[0].toUpperCase()
      const secondLetter =
        name.indexOf(' ') !== -1
          ? name[name.indexOf(' ') + 1].toUpperCase()
          : ''
      return `${firstLetter}${secondLetter}`
    } else {
      return ''
    }
  }
  return (
    <button
      className={`
        ${styles.button}
        ${styles.avatar} ${theme === 'dark' ? styles.dark : styles.light}
        ${showGradient || image ? styles.gradient : ''}
        ${styles[size]}
        ${initials.length === 1 ? styles.fontLarge : ''}
      `}
      onClick={onClick}
      style={
        (showGradient && !color) || (image && !color)
          ? { backgroundColor: random(colors) }
          : color
          ? { backgroundColor: colors[color] }
          : {}
      }
    >
      {}
      {image ? (
        <img src={image} />
      ) : icon ? (
        <div className={styles.icon}>{icon}</div>
      ) : name && showText ? (
        <span>{initials(name)}</span>
      ) : (
        ''
      )}
    </button>
  )
}

export default Button
