/* eslint-disable operator-linebreak */
/* eslint-disable multiline-ternary */
/* eslint-disable max-len */
import React, { useState, useRef } from 'react'
import styles from '../styles/CollapseCard.module.css'
import Icon from './Icon'
import Helpers from '../Helpers.js'

export default function CollapseCard({
  onCopy = () => {},
  ...props
}) {
  const [isOpen, setIsOpen] = useState(props.isOpen || false)
  const promptBodyRef = useRef()
  // const [promptHeight, setPromptHeight] = useState(0)

  function onMouseOver() {
    /*
       on mouse over, sets max-height according to internal scroll-height
       for open/close animation
    */
    if (promptBodyRef.current) {
      const height = promptBodyRef.current.scrollHeight
      promptBodyRef.current.style.setProperty('--max-height', height + 'px')
    }
  }

  return (
    <div className={`${styles['prompt-card-wrapper']}`}>
      <div className={`${styles['prompt-wrapper']} ${styles.ocra}`} onMouseOver={onMouseOver}>
        <div
          className={`${styles['prompt-header-container']} ${styles['cursor-pointer']}`}
        >
          {props.hasStar ?
          <div
            className={
            `${styles['star-container']}`
            }
          >
            <Icon
              animation={null}
              icon={'star-outline'}
              fill={props.isStarred ? '#FFFF00' : '#808080'}
              onClick={() => props.onClickStar(props.index)}
              key={'star-' + props.index + props.isStarred}
            />
          </div> : <div />
          }
        <div
          className={`${styles['prompt-header']} ${styles['cursor-pointer']}`}
          onClick={() => {
            setIsOpen(!isOpen)
            onMouseOver()
          }}
        >
          <div
            className={isOpen ? `${styles['prompt-header-text-open']}` : `${styles['prompt-header-text']}`}
          >
            <span
              onClick={(e) => {
                if (props.copyTitle) {
                  e.stopPropagation()
                  // Helpers.copyToClipBoard(props.title)
                }
              }}
            >
              {props.title}
            </span>
          </div>
          <div
            className={`${styles['prompt-header-icon']} ${styles['cursor-pointer']}`}
          >
            <Icon
              icon={isOpen ? 'chevron-down-outline' : 'chevron-right-outline'}
              key={
                isOpen ? 'chevron-down-outline-key' : 'chevron-right-outline-key'
              }
              animation={null}
            />
          </div>
        </div>
      </div>
        <div
          className={`
              ${styles['prompt-body']}
              ${isOpen ? styles.openBody : styles.closeBody}
            `}
          ref={promptBodyRef}
        >
          {props.content || props.children}
        </div>
      </div>
    </div>
  )
}
