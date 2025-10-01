import React, { Fragment } from 'react'
import Loader from './Loader'
import styles from '../styles/Button.module.css'

/*
  props: {
    type: 1 || primary || 2 || secondary || 3 || success || 4 || warn || 5 || error || 6 || ghost || 7 || ghost-accent || 8 || ghost-success || 9 || ghost-warn || 10 || ghost-error, // 1: primary, 2: secondary, 3: success, 4: error, 5: ghost, 6: ghost-warm, 7: ghost-cool, 8: ghost-success, 9: ghost-error
    theme: 'dark' || 'light',
    iconImage,
    iconPosition: 'left' || 'right',
    iconJustify: 'center' || 'edge',
    icon: element,
    text,
    type: 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10,
    onClick,
    width,
  }
*/

const Button = ({
  style = {},
  className,
  text,
  width = '100%',
  onClick,
  type = 1,
  loading = false,
  selected = false,
  iconPosition = 'left',
  iconJustify = 'center',
  icon = null,
  iconImage = null,
  buttonType = 'button',
  buttonRef = null,
  theme = 'light',
  form = null,
  disabled = false,
  id='',
  href,
  download = null,
}) => {
  return href ? (
    <a
      ref={buttonRef}
      href={href}
      id={id}
      className={`
          ${styles.button} ${styles['button-' + type]}
          ${theme === 'light' ? styles.light : styles.dark}
          ${selected ? styles.selected : ''}
          ${iconPosition === 'left' ? styles.iconLeft : ''}
          ${iconPosition === 'right' ? styles.iconRight : ''}
          ${
            iconJustify === 'edge' && width !== 'auto'
              ? styles.iconEdge
              : styles.widthAuto
          }
          ${className}
        `}
      onClick={!loading && onClick}
      style={{ ...style, width: style.width || width }}
      type={buttonType}
      form={form}
      disabled={disabled}
      download={download}
    >
      {loading ? (
        <Loader
          theme={{ theme }}
          style={{ height: '2em', width: '2em', color: 'inherit' }}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' ? (
            <>
              <div className={styles.icon}>{icon}</div>
            </>
          ) : iconImage && iconPosition === 'left' ? (
            <>
              <img className={styles.icon} src={iconImage} />
            </>
          ) : (
            ''
          )}
          <span>{text}</span>
          {iconImage && iconPosition === 'right' ? (
            <>
              <img className={styles.icon} src={iconImage} />
            </>
          ) : icon && iconPosition === 'right' ? (
            <>
              <div className={styles.icon}>{icon}</div>
            </>
          ) : (
            ''
          )}
        </>
      )}
    </a>
  ) : (
    <button
      id={id}
      ref={buttonRef}
      className={`
          ${styles.button} ${styles['button-' + type]}
          ${theme === 'light' ? styles.light : styles.dark}
          ${selected ? styles.selected : ''}
          ${iconPosition === 'left' ? styles.iconLeft : ''}
          ${iconPosition === 'right' ? styles.iconRight : ''}
          ${
            iconJustify === 'edge' && width !== 'auto'
              ? styles.iconEdge
              : styles.widthAuto
          }
          ${className}
        `}
      onClick={!loading && onClick}
      style={{ ...style, width: style.width || width }}
      type={buttonType}
      form={form}
      disabled={disabled}
      download={download}
    >
      {loading ? (
        <Loader
          theme={{ theme }}
          style={{ height: '2em', width: '2em', color: 'inherit' }}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' ? (
            <>
              <div className={styles.icon}>{icon}</div>
            </>
          ) : iconImage && iconPosition === 'left' ? (
            <>
              <img className={styles.icon} src={iconImage} />
            </>
          ) : (
            ''
          )}
          <span>{text}</span>
          {iconImage && iconPosition === 'right' ? (
            <>
              <img className={styles.icon} src={iconImage} />
            </>
          ) : icon && iconPosition === 'right' ? (
            <>
              <div className={styles.icon}>{icon}</div>
            </>
          ) : (
            ''
          )}
        </>
      )}
    </button>
  )
}

export default Button
