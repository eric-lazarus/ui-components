/* eslint-disable operator-linebreak */
/* eslint-disable multiline-ternary */
/* eslint-disable max-len */
import React, { Fragment, useState, useRef } from 'react'
import styles from '../styles/PromptCard.module.css'
import Icon from './Icon'

export default function PromptCard({
  onCopy = () => {},
  copyToClipBoard = () => console.log('no copy function'),
  ...props
}) {
  const [isOpen, setIsOpen] = useState(true)
  const [isContextOpen, setIsContextOpen] = useState(false)
  const promptBodyRef = useRef()
  // const [promptHeight, setPromptHeight] = useState(0)

  function getConfidenceText(conf) {
    return conf === undefined
      ? ''
      : conf > 0.75
        ? 'High'
        : conf > 0.55
          ? 'Medium'
          : 'Low'
  }

  function getConfidenceColor(conf) {
    const confidenceToColor = ['#B3E87D', '#FFD24C', '#FF4C4D']
    return conf > 0.75
      ? confidenceToColor[0]
      : conf > 0.55
        ? confidenceToColor[1]
        : confidenceToColor[2]
  }

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
          className={`${styles['prompt-header-text']}`}
        >
          {props.title}
        </div>
        {props.confidence > 0
          ? (
          <div className={styles['prompt-header-conf']}>
            <span
              style={{
                color: getConfidenceColor(props.confidence)
              }}
            >
              {getConfidenceText(props.confidence)}
            </span>
          </div>
            )
          : (
          <div />
            )}
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
        <div className={styles['prompt-body-interior']}>
          <div
            className={`${styles['prompt-body-row']} ${styles['bracket-row']}`}
          >
            {`{\n`}
          </div>
          <div
            className={`${styles['prompt-body-row']} ${styles['highlight-row']}`}
            onClick={(e) => {
              e.preventDefault()
              copyToClipBoard(props.questions.join('\n'))
              onCopy('question', props.questions.join('\n'))
            }}
          >
            <div className={styles['copy-button']}
              onClick={(e) => {
                e.preventDefault()
                copyToClipBoard(props.questions.join('\n'))
                onCopy('question', props.questions.join('\n'))
              }}
            >
              <Icon icon='file-outline' animation={null} />
            </div>
            <div className={styles['qa-row']}>
              <div className={styles['qa-header']}>
                <div className={`${styles['q-a']}`}>Q:</div>
              </div>
              <div className={`${styles['qa-body']} ${styles['qa-blue-text']}`}>
                {props.questions.map((question, i) => {
                  return (
                    <Fragment key={`prompt-frag-${i}`}>
                      {i === 0
                        ? (
                        <div
                          className={styles['copy-text']}
                          onClick={(e) => {
                            e.preventDefault()
                            copyToClipBoard(question)
                          }}
                          key={`prompt-${i}`}
                        >
                          &quot;{question}&quot;
                        </div>
                          )
                        : (
                        <div
                          className={styles['qa-followup']}
                          key={`followup-${i}`}
                        >
                          <div className={styles['qa-followup-icon']}>
                            <Icon
                              icon={'corner-down-right-outline'}
                              key={`return-${i}`}
                              animation={null}
                            />
                          </div>
                          <div
                            className={styles['copy-text']}
                            onClick={(e) => {
                              e.preventDefault()
                              copyToClipBoard(question)
                            }}
                            key={`prompt-${i}`}
                          >
                            &quot;{question}&quot;
                          </div>
                        </div>
                          )}
                    </Fragment>
                  )
                })}
              </div>
            </div>
          </div>
          <div
            className={`${styles['prompt-body-row']} ${styles['highlight-row']}`}
            onClick={(e) => {
              e.preventDefault()
              copyToClipBoard(props.answers.join('\n'))
              onCopy('answer', props.answers.join('\n'))
            }}
          >
            <div className={styles['copy-button']}
              onClick={(e) => {
                e.preventDefault()
                copyToClipBoard(props.answers.join('\n'))
                onCopy('answer', props.answers.join('\n'))
              }}
            >
              <Icon icon='file-outline' animation={null} />
            </div>
            <div className={styles['qa-row']}>
              <div className={styles['qa-header']}>
                <div className={`${styles.ocra} ${styles['q-a']}`}>A:</div>
              </div>
              <div className={`${styles['qa-body']} ${styles['qa-green-text']}`}>
                {props.answers.map((answer, i) => {
                  return (
                    <Fragment key={`answ-frag-${i}`}>
                      {i === 0
                        ? (
                        <div
                          key={`answer-${i}`}
                          onClick={(e) => {
                            e.preventDefault()
                            copyToClipBoard(answer)
                          }}
                        >
                          &quot;{answer}&quot;
                        </div>
                          )
                        : (
                        <div
                          className={styles['qa-followup']}
                          key={`followup-${i}`}
                        >
                          <div className={styles['qa-followup-icon']}>
                            <Icon
                              icon={'corner-down-right-outline'}
                              key={`return-${i}`}
                              animation={null}
                            />
                          </div>
                          <div
                            className={styles['copy-text']}
                            id={`answer-${i}`}
                            onClick={(e) => {
                              e.preventDefault()
                              copyToClipBoard(answer)
                            }}
                            key={`answer-${i}`}
                          >
                            &quot;{answer}&quot;
                          </div>
                        </div>
                          )}
                    </Fragment>
                  )
                })}
              </div>
            </div>
          </div>
          <div
            className={`${styles['prompt-body-row']} ${styles['bracket-row']}`}
          >
            {`}`}
          </div>
          {props.confidence > 0 && (
            <div
              className={styles['prompt-body-row']}
            >
              <div className={styles['qa-section-two']}>
                <span className={styles.ocra}>Confidence: </span>
                <span
                  style={{
                    color: getConfidenceColor(props.confidence),
                    marginTop: '-1px' // for OCR-A/Work-Sans difference
                  }}
                >
                  {getConfidenceText(props.confidence)}
                </span>
              </div>
            </div>
          )}
          {props.context && (
            <div
              className={styles['prompt-body-row']}
            >
              <div
                className={styles['qa-section-two']}
              >
                <span
                  className={`${styles['cursor-pointer']} ${styles['context-span']}`}
                  onClick={() => {
                    setIsContextOpen(!isContextOpen)
                  }}
                >
                  <span className={styles['qa-section-two-arrow']}>
                    <Icon
                      icon={
                        isContextOpen
                          ? 'chevron-down-outline'
                          : 'chevron-right-outline'
                      }
                      key={
                        isContextOpen
                          ? 'context-key-downward-outline'
                          : 'context-key-right-outline'
                      }
                      style={{ width: '.8em', height: '.8em' }}
                      onClick={() => {
                        setIsContextOpen(!isContextOpen)
                      }}
                      animation={null}
                    />
                  </span>
                  <span className={styles.ocra}>Explainability: </span>
                </span>
                {isContextOpen && (
                  <p
                    className={`${styles['qa-gray-text']} ${styles['context-body']}`}
                  >
                    {props.context}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
