import React from 'react'
import styles from '../styles/MultiSelect.module.css'
import Button from './Button'

function MultiSelect(props) {
  const onChange = (event, option) => {
    event.preventDefault()
    props.onChange(option)
  }
  return (
    <div
      className={`
      ${styles.MultiSelect}
      ${props.theme === 'dark' ? styles.dark : styles.light}
    `}
      style={props.style || {}}
    >
      <p>{props.title}</p>
      <div className={styles.buttonDiv}>
        {props.items.map((item, index) => (
          <Button
            type={
              props.selected === item || props.value === item
                ? props.theme === 'dark'
                  ? 1
                  : 2
                : 6
            }
            key={index}
            text={item}
            onClick={(event) => {
              event.preventDefault()
              if (!props.disabled) {
                onChange(event, item)
              }
            }}
            disabled={props.disabled}
            theme={props.theme}
          />
        ))}
      </div>
    </div>
  )
}

export default MultiSelect
