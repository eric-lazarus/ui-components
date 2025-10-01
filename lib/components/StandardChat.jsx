/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import React, { useEffect, useState, Fragment } from 'react'

import styles from '../styles/StandardChat.module.css'
import Icon from './Icon'
import Animation from './Animation'
import Helpers from '../Helpers'

export default function StandardChat({
  copyFeedbackFunc = () => {},
  showCitations = false,
  ...props
}) {
  const [openContext, setOpenContext] = useState([])

  function toggleContext(index) {
    if (openContext.includes(index)) {
      setOpenContext(JSON.parse(JSON.stringify(openContext.filter((val) => val !== index))))
    } else {
      openContext.push(index)
      setOpenContext(JSON.parse(JSON.stringify(openContext)))
    }
  }

  useEffect(() => {
    if (props.activeResponse === null || props.activeResponse === props.chatFeed.length) {
      const feedEl = document.getElementById('chat-wrapper')
      feedEl.scrollTo({ top: feedEl.scrollHeight, behavior: 'smooth' })
    }
  }, [props.chatFeed])

  function citationTextIntoArray(text) {
    return Helpers.citationTextIntoArray(text)
  }

  function citationIndexToUserValue(text) {
    const cited = Helpers.splitTextByCitations(text)
    const usedCitations = [].concat(...cited.map((regexCite) => regexCite[1].split(',').map((val) => parseInt(val))))
    const filteredCitations = usedCitations.filter((val, vIndex) => vIndex === usedCitations.indexOf(val))
    return Object.assign({}, ...filteredCitations.map((val, index) => {
      const retObj = {}
      retObj[val] = index + 1
      return retObj
    }))
  }

  function splitCitations(text, chatIndex) {
    const fullText = citationTextIntoArray(text)
    const citeToUserValueObj = citationIndexToUserValue(text)
    return fullText.filter((textSegment) => {
      return textSegment[0].length
    }).map((textSegment, tIndex) => {
      if (textSegment[1] === null) { // no citation
        return (<span key={tIndex}>
          {processText(textSegment[0])}
        </span>)
      } else {
        return (<>
          <span
            key={`${tIndex}-text`}
            className={styles.citation}
            onClick={() => {
              props.onClickCitation(chatIndex, textSegment[1].map((citationNumber) => citeToUserValueObj[citationNumber - 1]))
            }}
          >
            {processText(textSegment[0])}
          </span>
          {textSegment[1].map((citationNumber) => {
            return (
              <span
                key={`${tIndex}-number-${citationNumber}`}
                className={styles['citation-number']}
                onClick={() => {
                  props.onClickCitation(chatIndex, citeToUserValueObj[citationNumber - 1])
                }}
              >
                {` ${citeToUserValueObj[citationNumber - 1]} `}
              </span>
            )
          })}
        </>)
      }
    })
  }

  function processText(text) {
    const URL_REGEX = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
    const URL_INTER_INDENTIFIER = '**url**:'
    const interText = text.replace(URL_REGEX, (url) => {
      const cleanURL = url.replace('\n', '')
      return '|||' + URL_INTER_INDENTIFIER + cleanURL + '|||' + url.replace(cleanURL, '')
    })
    return interText.split('|||').map((value, index) => {
      if (value.includes(URL_INTER_INDENTIFIER)) {
        const url = value.replace(URL_INTER_INDENTIFIER, '')
        return <a
          key={'url-' + index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      }
      return value
    })
  }

  function copyMessageText(text) {
    const processedText = citationTextIntoArray(text)
    const returnText = processedText.map((processArray) => processArray[0]).join('')
    Helpers.copyToClipBoard(returnText, copyFeedbackFunc(returnText.slice(0, 20)))
  }

  return (
    <div className={`${styles['chat-wrapper']} ${(props.isCitationModeOn ? styles['citations-on'] : '')}`} id='chat-wrapper' style={props.styles}>
      {props.chatFeed.map((message, index) => {
        if (!message) {
          return (<></>)
        }
        const citationMap = citationIndexToUserValue(message.text)
        const usedCitations = Object.keys(citationMap)
        return (
          <div
            key={'msg-' + index}
            className={`${styles['chat-response']} ` + (message.type === 'question'
              ? styles['question-chat']
              : (props.activeResponse === index) ?
                  `${styles['answer-chat']} ${styles['citations-active']}`
                  : `${styles['answer-chat']} ${styles['citations-inactive']}`)
              }
          >
            <div
              className={styles.avatar}
              key={'avatar-' + index}
            >
              {message.type === 'answer' ?
                <div
                  className={styles['animation-wrapper']}
                >
                  <div className={styles['animation-icon']}>
                    <Animation
                      animationState={'generating'}
                      stopAnimation={!message.isLoading}
                      height={36}
                      width={36}
                    />
                  </div>
                </div>
                : props.userAvatar
              }
            </div>
            <div
              className={styles['chat-box']}
              key={'chat-box-' + index}
              onClick={() => {
                props.onClickChat(index)
              }}
            >
              <div
                className={styles['chat-copy']}
                onClick={(e) => {
                  e.stopPropagation()
                  copyMessageText(message.text)
                }}
              >
                <Icon
                  icon='file-outline'
                />
              </div>
              {(message.type === 'answer')
                ? <div
                  key={'answer-body-' + index}
                >
                  {splitCitations(message.text, index)}
                  {message.context && <>
                    <div
                      className={styles.context}
                      onClick={() => {
                        toggleContext(index)
                      }}
                    >
                      <Icon
                        icon={openContext.includes(index) ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline'}
                        key={(openContext.includes(index) ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline') + `-${index}`}
                      />
                      <span>{props.contextName}</span>
                    </div>
                    {openContext.includes(index) &&
                      <div className={styles['context-container']}>
                        {message.context}
                      </div>
                    }
                  </>}
                  {message?.images?.length &&
                    <div
                      className={styles['chat-images']}
                      key={`chat-images-${index}`}
                    >
                      {message?.images.map((imgUrl, urlIndex) => {
                        return (
                          <img
                            key={`${urlIndex}-img-url-${index}`}
                            src={imgUrl}
                          />
                        )
                      })}
                    </div>
                  }
                  {showCitations && message.citations && <>
                    <div
                      className={styles.context}
                      onClick={() => {
                        toggleContext(index)
                      }}
                    >
                      <Icon
                        icon={openContext.includes(index) ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline'}
                        key={(openContext.includes(index) ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline') + `-${index}`}
                      />
                      <span>{props.citationsName}</span>
                    </div>
                    {openContext.includes(index) &&
                      <div className={styles['context-container']}>
                        {message.citations.map((citation, cIndex) => {
                          if (usedCitations.includes(`${cIndex}`)) {
                            return [citationMap[cIndex], (
                                <p key={`${index}-citation-${cIndex}`}>
                                {`${citationMap[cIndex]}: ${citation.text}`}
                              </p>
                            )]
                          } else {
                            return null
                          }
                        }).filter((arr) => arr !== null)
                          .sort((arrA, arrB) => arrA[0] - arrB[0])
                          .map((arr) => arr[1])
                        }
                      </div>}
                  </>}
                </div>
                : <>{processText(message.text)}</>
              }
            </div>
          </div>
        )
      })}
      <div
        style={{ width: '100%', height: props.paddingBottom || '0em' }}
      >
        {/* bottom padding */}
      </div>
    </div>
  )
}
