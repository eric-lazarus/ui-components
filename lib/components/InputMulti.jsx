import React from 'react'
import Select, { components } from 'react-select'
import styles from '../styles/InputMulti.module.css'

import Icon from './Icon'

const InputMulti = (props) => {
  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <Icon className={styles.icon} icon='arrow-down-outline' width='16px' />
    </components.DropdownIndicator>
  )

  const ClearIndicator = (props) => (
    <components.ClearIndicator {...props}>
      <Icon className={styles.icon} icon='close-outline' width='16px' />
    </components.ClearIndicator>
  )

  const MultiValueRemove = (props) => (
    <components.MultiValueRemove {...props}>
      <Icon className={styles.icon} icon='close-outline' width='12px' />
    </components.MultiValueRemove>
  )

  const ValueContainer = ({ children, ...vcProps }) => (
    <components.ValueContainer {...vcProps}>
      <div className={styles.icon}>{props.icon && props.icon}</div>
      {children}
    </components.ValueContainer>
  )

  return (
    <div
      className={`${styles.inputMulti} ${
        props.theme === 'dark' ? styles.dark : styles.light
      }`}
      style={props.style || {}}
    >
      <span className={styles.label}>{props.label}</span>
      <Select
        {...props}
        components={Object.assign(
          {
            DropdownIndicator,
            MultiValueRemove,
            ClearIndicator,
            ValueContainer
          },
          props.components || {}
        )}
        classNames={{
          control: (state) =>
            state.isFocused ? styles.controlFocused : styles.control,
          menu: (state) => styles.menu,
          multiValue: (state) => styles.multiValue,
          indicatorSeparator: (state) => styles.hidden,
          indicatorsContainer: (state) => styles.indicatorsContainer,
          input: (state) => styles.input,
          menuList: (state) => styles.menuList,
          option: (state) =>
            state.isFocused || state.isSelected
              ? styles.optionActive + ' ' + styles.option
              : state.isDisabled
              ? styles.disabled
              : styles.option,
          placeholder: (state) => styles.placeholder,
          singleValue: (state) => styles.singleValue,
          valueContainer: (state) => styles.valueContainer
        }}
      />
      {props.info ? <div className={`${styles.info}`}>{props.info}</div> : ''}
    </div>
  )
}

export default InputMulti
