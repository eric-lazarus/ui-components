import React, { useState, useEffect, useRef } from 'react'
import Helpers from '../Helpers.js'
import styles from '../styles/Select.module.css'
import Icon from './Icon'

export default function Select({
  onCloseOption = () => {},
  canCloseOptions = false,
  isMultiselect = false,
  multiSelectDisplayValue = null,
  optionsDict = null,
  selectId = null,
  optionIdPrefix = null,
  ...props
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isClickingSelect, _setIsClickingSelect] = useState(false)
  const isClickingSelectRef = useRef(false)
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(`select-${parseInt(Math.random() * 2000)}`)

  function setIsClickingSelect(data) {
    _setIsClickingSelect(data)
    isClickingSelectRef.current = data
  }

  function muCallback(e) {
    if (!isClickingSelectRef.current) {
      setIsExpanded(false)
    }
  }

  function selectMuCallback() {
    setTimeout(() => {
      setIsClickingSelect(false)
    }, 100)
  }

  function selectMdCallback() {
    setIsClickingSelect(true)
  }

  useEffect(() => {
    document.removeEventListener('mouseup', muCallback)
    document.addEventListener('mouseup', muCallback)

    document.getElementById(id)
      .removeEventListener('mousedown', selectMdCallback)
    document.getElementById(id)
      .removeEventListener('mouseup', selectMuCallback)

    document.getElementById(id)
      .addEventListener('mousedown', selectMdCallback)
    document.getElementById(id)
      .addEventListener('mouseup', selectMuCallback)
  }, [isExpanded])

  return (
    <div
      className={styles.selectContainer}
      id={id}
    >
      <p className={styles.label}>
        {props.label}
      </p>
      <div
        className={
          `${styles.select} ${
            props.theme === 'dark' ? styles.dark : styles.light
          } ${isExpanded ? styles.active : ''}`
        }
        onClick={() => setIsExpanded(!isExpanded)}
        id={selectId}
      >
        <span
          className={`${props.value && props.isSelectedYellow ? styles.selected : ''}`}
        >
          {isMultiselect
            ? multiSelectDisplayValue
              ? `${multiSelectDisplayValue}`
              : `${props?.value?.length || 0} Selected`
            : (optionsDict ? Helpers.truncateString(optionsDict?.[props.value], props.textMaxLength) : Helpers.truncateString(props.value, props.textMaxLength)) || props.placeholder || 'Select'
          }
        </span>
        <span>
          <Icon
            className={styles.icon}
            icon='arrow-down-outline'
            width='16px'
            animation={null}
          />
        </span>
      </div>
      <div id='options-container' className={`${styles.optionsContainer} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <div className={styles.options}>
          {optionsDict && Object.keys(optionsDict)
            ? Object.keys(optionsDict).map((optionKey) => {
              return (
                  <div
                    key={optionKey}
                    className={`${styles.option} ${styles.optionRow} ${canCloseOptions && styles.optionCloseRow}`}
                    onClick={() => {
                      props.onClickOption(optionKey)
                      if (!isMultiselect) {
                        setIsExpanded(false)
                      }
                    }}
                    id={`${optionIdPrefix ? (optionIdPrefix + '-') : ''}${optionKey}`}
                  >
                    <div
                      className={`${styles.optionText}`}
                    >
                      {isMultiselect &&
                      <span className={`${props.value.includes(optionKey) ? styles.selected : styles.unselected}`}>
                      </span>
                      }
                      {optionsDict[optionKey]}
                    </div>
                    {canCloseOptions &&
                      <Icon
                        icon='close-outline'
                        className={`${styles.optionCloseIcon}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          onCloseOption(optionKey)
                        }}
                      />
                    }
                  </div>
              )
            })
            : props.options.map((option) => {
              return (
                  <div
                    key={option}
                    className={`${styles.option} ${styles.optionRow} ${canCloseOptions && styles.optionCloseRow}`}
                    onClick={() => {
                      props.onClickOption(option)
                      if (!isMultiselect) {
                        setIsExpanded(false)
                      }
                    }}
                    id={`${optionIdPrefix ? (optionIdPrefix + '-') : ''}${option}`}
                  >
                    <div
                      className={`${styles.optionText}`}
                    >
                      {isMultiselect &&
                      <span className={`${props.value.includes(option) ? styles.selected : styles.unselected}`}>
                      </span>
                      }
                      {option}
                    </div>
                    {canCloseOptions &&
                      <Icon
                        icon='close-outline'
                        className={`${styles.optionCloseIcon}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          onCloseOption(option)
                        }}
                      />
                    }
                  </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
