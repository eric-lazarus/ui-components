import React from 'react'
import styles from '../styles/Switch.module.css'

import Icon from './Icon'

/* props: {
    onChange,
    checked,
    label
  }
*/

function Switch(props) {
  return (
    <label
      className={`
      ${styles.switch}
      ${props.disabled === 'true' ? styles.disabled : ''}
      ${props.theme === 'dark' ? styles.dark : styles.light}
      ${props.reversed ? styles.reversed : ''}
    `}
      htmlFor={props.id || undefined}
    >
      {props.disabled ?
        <input
          className={styles.input}
          id={props.id || undefined}
          type={props.type === 'radio' ? 'radio' : 'checkbox'}
          onChange={props.onChange}
          checked={props.checked}
          value={props.value}
          disabled
          name={props.name}
        /> :
        <input
          className={styles.input}
          id={props.id || undefined}
          type={props.type === 'radio' ? 'radio' : 'checkbox'}
          onChange={props.onChange}
          checked={props.checked}
          value={props.value}
          name={props.name}
        />
      }
      <span
        className={
          props.type === 'checkbox'
            ? styles.checkbox
            : props.type === 'radio'
              ? styles.radio
              : styles.switchSlider
        }
      >
        {props.type === 'checkbox' && <Icon icon='check' />}
      </span>
      {props.label && <span className={styles.label}>{props.label}</span>}
    </label>
  )
}

export default Switch
