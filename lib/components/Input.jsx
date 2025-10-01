import React, { useState, useEffect } from 'react'
import styles from '../styles/Input.module.css'
import Icon from './Icon'

const Input = ({
  inputKey,
  autocomplete = undefined,
  autoFocus = false,
  className = '',
  inputClassName = '',
  disabled = false,
  form = null,
  info = null,
  label = null,
  max = null,
  min = 0,
  minHeight = 36,
  maxHeight = 144,
  maxlength = 524288, // browser default
  isAutoResizing = false,
  isHeightControlled = false,
  options = [],
  placeholder = null,
  reference,
  style = {},
  theme = 'light',
  type = 1,
  inputType = 'text',
  value = '', // controlled by default, pass null and it will be uncontrolled
  width = '100%',
  children,
  iconLeft,
  iconLeftImage,
  iconRight,
  iconRightImage,
  required,
  id,
  name,
  onChange = () => {},
  onSubmit = () => {},
  onKeyDown = () => {}
}) => {
  const [focused, setFocused] = useState(false)
  const [randomId, setRandomId] = useState('')

  useEffect(() => {
    const id = Math.round(Math.random() * 1000000000)
    setRandomId(`input-textarea-${id}`)
  }, [])

  function resizeTextarea() {
    const editEl = document.getElementById(id || name || randomId)
    if (editEl) {
      editEl.style.height = minHeight + 'px'
      editEl.style.height =
        (editEl.scrollHeight > maxHeight ? maxHeight : editEl.scrollHeight) +
        'px'
      editEl.scrollTop = editEl.scrollHeight
    }
  }

  function onFocus() {
    setFocused(true)
    if (isAutoResizing) {
      resizeTextarea()
    }
  }

  return (
    <label
      className={`
        ${styles.input}
        ${theme === 'dark' ? styles.dark : styles.light}
        ${disabled ? styles.disabled : ''}
        ${focused ? styles.focus : ''}
        ${iconLeft || iconLeftImage ? styles.iconLeft : ''}
        ${iconRight || iconRightImage ? styles.iconRight : ''}
        ${
          inputType === 'select' || type === 3
            ? styles.type3
            : inputType === 'textarea' || type === 2
            ? styles.type2
            : inputType === 'submit' && onSubmit
            ? styles.type1 + ' ' + styles.submit
            : styles.type1
        }
        ${className}
      `}
      style={{
        width,
        ...style
      }}
      htmlFor={name}
    >
      {label && <span className={styles.label}>{label}</span>}

      <div
        className={`${styles.inputBox}`}
        onFocus={() => onFocus()}
        onBlur={() => setFocused(false)}
      >
        {iconLeftImage
          ? (
          <img
            className={`${styles.icon} ${styles.left}`}
            src={iconLeftImage}
          />
            )
          : iconLeft
            ? (
          <div className={`${styles.icon} ${styles.left}`}>{iconLeft}</div>
              )
            : (
          <span />
              )}
        {type === 3 || inputType === 'select'
          ? (
          <select
            ref={reference}
            key={inputKey}
            id={id || name}
            name={name}
            onChange={onChange}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            autoComplete={autocomplete}
            min={min}
            max={max}
            form={form}
            autoFocus={autoFocus}
            required={required}
            className={inputClassName}
          >
            {placeholder && (
              <option disabled value=''>
                {placeholder}
              </option>
            )}
            {options.length
              ? options.map((option, index) => (
                  <option key={option + index}>{option}</option>
              ))
              : children}
          </select>
            )
          : (type === 2 || inputType === 'textarea') && value
              ? (
          <textarea
            ref={reference}
            key={inputKey}
            id={id || name || randomId}
            name={name}
            onChange={(e) => {
              onChange(e)
              if (isAutoResizing) {
                resizeTextarea()
              }
            }}
            onKeyDown={onKeyDown}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            autoComplete={autocomplete}
            min={min}
            max={max}
            maxLength={maxlength}
            form={form}
            autoFocus={autoFocus}
            required={required}
            defaultValue={!onChange ? value : undefined}
            className={
              inputClassName !== '' ? inputClassName : styles.defaultTextArea
            }
            style={
              (isAutoResizing || isHeightControlled)
                ? { minHeight: minHeight + 'px', height: minHeight + 'px', resize: 'none' }
                : {}
            }
          />
                )
              : (type === 2 || inputType === 'textarea') && !value
                  ? (
          <textarea
            ref={reference}
            key={inputKey}
            id={id || name || randomId}
            name={name}
            onChange={(e) => {
              onChange(e)
              if (isAutoResizing) {
                resizeTextarea()
              }
            }}
            onKeyDown={onKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={autocomplete}
            min={min}
            max={max}
            form={form}
            autoFocus={autoFocus}
            required={required}
            defaultValue={!onChange ? value : undefined}
            className={
              inputClassName !== '' ? inputClassName : styles.defaultTextArea
            }
            style={
              (isAutoResizing || isHeightControlled)
                ? { minHeight: minHeight + 'px', height: minHeight + 'px', resize: 'none' }
                : {}
            }
          />
                    )
                  : (typeof value === 'string' || value instanceof String)
                      ? (
          <input
            ref={reference}
            key={inputKey}
            id={id || name}
            type={inputType === 'submit' ? 'text' : inputType}
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
            value={value}
            style={style}
            placeholder={placeholder}
            autoComplete={autocomplete}
            min={min}
            max={max}
            maxLength={maxlength}
            form={form}
            autoFocus={autoFocus}
            required={required}
            className={inputClassName}
          />
                        )
                      : (
          <input
            ref={reference}
            key={inputKey}
            id={id || name}
            type={inputType === 'submit' ? 'text' : inputType}
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
            style={style}
            placeholder={placeholder}
            autoComplete={autocomplete}
            min={min}
            max={max}
            maxLength={maxlength}
            form={form}
            autoFocus={autoFocus}
            required={required}
            className={inputClassName}
          />
                        )}
        {iconRightImage && inputType === 'submit'
          ? (
          <button type='submit'>
            <img
              className={`${styles.icon} ${styles.right}`}
              src={iconRightImage}
              onClick={onSubmit}
            />
          </button>
            )
          : iconRight && inputType === 'submit'
            ? (
          <button
            type='submit'
            className={`${styles.icon} ${styles.right}`}
            onClick={onSubmit}
          >
            {iconRight}
          </button>
              )
            : iconRightImage && type !== 3 && inputType !== 'select'
              ? (
          <img
            className={`${styles.icon} ${styles.right}`}
            src={iconRightImage}
            onClick={onSubmit}
          />
                )
              : iconRight && type !== 3 && inputType !== 'select'
                ? (
          <div className={`${styles.icon} ${styles.right}`} onClick={onSubmit}>
            {iconRight}
          </div>
                  )
                : type === 3 || inputType === 'select'
                  ? (
          <div className={`${styles.icon} ${styles.right}`}>
            <Icon icon='arrow-down-outline' />
          </div>
                    )
                  : (
          <span />
                    )}
      </div>
      {info ? <div className={`${styles.info}`}>{info}</div> : ''}
    </label>
  )
}

export default Input
