import React from 'react'
import styles from '../styles/DateInput.module.css'

/*
  props: {
    label,
    name,
    onChange, // sends dateObj and mmddyyyy string
    *width,
    *style.,
    *disabled,
    *value, // for disabled dates
  }
*/
const DateInput = (props) => {
  const dateArray =
    props.disabled && props.value ? props.value.split('-') : [null, null, null]
  return (
    <label className={styles.inputLabel} style={props.style || {}}>
      {props.label}
      <div className={styles.inputContainer} style={{}}>
        <input
          className={styles.input}
          name='month'
          onChange={props.onChange}
          placeholder={!props.disabled ? 'mm' : undefined}
          type='number'
          disabled={props.disabled}
          value={dateArray[1]}
        />
        <span>/</span>
        <input
          className={styles.input}
          name='day'
          onChange={props.onChange}
          placeholder={!props.disabled ? 'dd' : undefined}
          type='number'
          disabled={props.disabled}
          value={dateArray[2]}
        />
        <span>/</span>
        <input
          className={styles.input}
          name='year'
          onChange={props.onChange}
          placeholder={!props.disabled ? 'yyyy' : undefined}
          type='number'
          disabled={props.disabled}
          value={dateArray[0]}
        />
      </div>
    </label>
  )
}

export default DateInput
