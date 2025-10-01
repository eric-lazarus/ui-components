import React, { useState, useEffect, Fragment } from 'react'
import styles from '../styles/FrequentlyAskedQuestions.module.css'
import Icon from './Icon'
import Input from './Input'
import Helpers from '../Helpers'

function FrequentlyAskedQuestions({
  faqs = {},
  title = 'Frequently Asked Questions',
  idPrefix = '',
  ...props
}) {
  const [closedSections, setClosedSections] = useState([])
  const [isSearchInputShowing, setIsSearchInputShowing] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [faqArray, setFaqArray] = useState([])

  useEffect(() => {
    if (window?.location?.search) {
      const searchStringInit = window.location.search.substring(1)
      setSearchString(searchStringInit)
      setIsSearchInputShowing(true)
    }
  }, [])

  useEffect(() => {
    if (faqs) {
      const newFaqArray = []
      const faqSections = Object.keys(faqs)
      for (let sectionIndex = 0; sectionIndex < faqSections.length; sectionIndex++) {
        const faqKey = faqSections[sectionIndex]
        for (let faqIndex = 0; faqIndex < faqs?.[faqKey]?.length; faqIndex++) {
          const arrayFaqElem = { ...faqs?.[faqKey]?.[faqIndex] }
          arrayFaqElem.section = faqKey
          arrayFaqElem.searchString = `${arrayFaqElem?.question} ${arrayFaqElem?.answer}`
          newFaqArray.push(arrayFaqElem)
        }
      }
      setFaqArray(newFaqArray)
    }
  }, [faqs])

  function sortFAQsFromSearch(faqArray, searchString) {
    return faqArray.filter((faqElem) => {
      return faqElem?.searchString?.includes(searchString)
    }).sort((aElem, bElem) => {
      const aIndex = aElem?.searchString?.indexOf(searchString)
      const bIndex = bElem?.searchString?.indexOf(searchString)
      return aIndex - bIndex
    })
  }

  return (
    <div
      className={`
      ${styles.FrequentlyAskedQuestions}
      ${props.theme === 'dark' ? styles.dark : styles.light}
    `}
      style={props.style || {}}
    >
      <div
        className={styles['faq-title-row']}
      >
        <div
          className={styles['faq-title']}
        >
          {title}
        </div>
        <Icon
          icon='search-outline'
          onClick={() => {
            setIsSearchInputShowing(!isSearchInputShowing)
          }}
        />
      </div>
      {isSearchInputShowing &&
        <Input
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value)
          }}
          placeholder={`${title} Search...`}
          theme={props.theme}
        />
      }
      {(searchString.length > 0 && isSearchInputShowing) &&
      <>
          <div
            className={styles['faq-section-title-search']}
          >
            Search Results
          </div>
          <div
          className={styles['faq-search-results']}
        >
          {sortFAQsFromSearch(
            faqArray, searchString
          ).map((faqElem, faqIndex) => {
            return (
                <div
                  key={`${faqElem.question}-search-${faqIndex}`}
                  id={`${idPrefix}search-${faqElem?.question}`}
                  className={styles['faq-qna-row']}
                >
                  <div
                    className={styles['faq-qna-question']}
                  >
                    {faqElem?.question}
                  </div>
                  <div
                    className={styles['faq-qna-answer']}
                  >
                    {(faqElem?.answer || '').split('\n').map((answerChunk, chunkIndex) => {
                      return (
                      <p
                        key={`ans-para-${chunkIndex}`}
                      >
                        {Helpers.faqTextIntoArray((answerChunk || ''))
                          .map((textArray, textIndex) => {
                            if (!textArray[1]) { // Regular Text
                              return (<span key={`search-${faqIndex}-${faqElem?.question}-ans-${chunkIndex}-${textIndex}`}>
                                {textArray[0]}
                              </span>)
                            } else { // URL
                              return (<a
                                key={`search-${faqIndex}-${faqElem?.question}-ans-url-${chunkIndex}-${textIndex}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                href={textArray[1]}
                              >
                                {textArray[0]}
                              </a>)
                            }
                          })}
                        </p>
                      )
                    })}
                    <div
                      className={styles['faq-search-section-row']}
                    >
                      <div
                        className={styles['faq-search-section-row-key']}
                      >
                        Section:
                      </div>
                      <div>
                        {` ${faqElem.section}`}
                      </div>
                    </div>
                  </div>
                </div>
            )
          })
          }
        </div>
      </>
      }
      {(searchString.length === 0 || !isSearchInputShowing) && Object.keys(faqs).map((faqKey, faqIndex) => {
        return (
          <div
            key={`${faqKey}-${faqIndex}`}
            id={`${idPrefix}${faqKey}`}
            className={styles['faq-section']}
          >
            <div
              className={styles['faq-section-title-row']}
              onClick={() => {
                if (closedSections.includes(faqKey)) {
                  setClosedSections(closedSections.filter((val) => val !== faqKey))
                } else {
                  setClosedSections([...closedSections, faqKey])
                }
              }}
            >
              <div
                className={styles['faq-section-title']}
              >
                {faqKey}
              </div>
              <Icon
                icon={closedSections.includes(faqKey) ? 'plus-outline' : 'minus-outline'}
                key={`${faqKey}-toggle-${closedSections.includes(faqKey)}`}
              />
            </div>
            <div
              className={`${styles['faq-section-body']} ${closedSections.includes(faqKey) ? styles['section-close'] : styles['section-open']}`}
            >
              {faqs?.[faqKey]?.map((qnaObject, qnaIndex) => {
                return (
                <div
                  key={`${faqKey}-${faqIndex}-${qnaObject?.question}-${qnaIndex}`}
                  id={`${idPrefix}${faqKey}-${qnaObject?.question}`}
                  className={styles['faq-qna-row']}
                >
                  <div
                    className={styles['faq-qna-question']}
                  >
                    {qnaObject?.question}
                  </div>
                  <div
                    className={styles['faq-qna-answer']}
                  >
                    {(qnaObject?.answer || '').split('\n').map((answerChunk, chunkIndex) => {
                      return (
                      <p
                        key={`ans-para-${chunkIndex}`}
                      >
                        {Helpers.faqTextIntoArray((answerChunk || ''))
                          .map((textArray, textIndex) => {
                            if (!textArray[1]) { // Regular Text
                              return (<span key={`${faqKey}-${faqIndex}-${qnaObject?.question}-${qnaIndex}-ans-${chunkIndex}-${textIndex}`}>
                                {textArray[0]}
                              </span>)
                            } else { // URL
                              return (<a
                                key={`${faqKey}-${faqIndex}-${qnaObject?.question}-${qnaIndex}-ans-url-${chunkIndex}-${textIndex}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                href={textArray[1]}
                              >
                                {textArray[0]}
                              </a>)
                            }
                          })}
                        </p>
                      )
                    })}
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FrequentlyAskedQuestions
