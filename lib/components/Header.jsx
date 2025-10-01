/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Fragment } from 'react'
import styles from '../styles/Header.module.css'
import Modal from './Modal'

function Header({
  headerTitle,
  changeLogNotes,
  theme = 'light',
  isModalDefaultOpen = false
}) {
  const [openVersion, setOpenVersion] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [animationText, setAnimationText] = useState(null)
  const [animationTime, setAnimationTime] = useState(5)

  useEffect(() => {
    setOpenVersion(isModalDefaultOpen)
  }, [isModalDefaultOpen])

  useEffect(() => {
    if (changeLogNotes) {
      setModalContent(
        <>
        <div
          style={{ display: 'block' }}
          className={`${styles.version}  ${styles[theme]}`}
        >
          <div style={{ marginBottom: '1em' }}>
            <h2 className={styles.textMuted}>{headerTitle}</h2>
            <h3 className={styles.textBright}>
              Version {changeLogNotes.version}
            </h3>
            <h4 className={styles.textGray}>
              {`\u00A9 ${new Date().getFullYear()} Lazarus Enterprises Inc.`}
            </h4>
          </div>
          <div>
            <p>{`${changeLogNotes.versionSummary}`.replaceAll('\\n', '\n')}</p>
            <p>{`${changeLogNotes.versionDetails}`.replaceAll('\\n', '\n')}</p>
            <ul>
              {changeLogNotes.versionBullets &&
                changeLogNotes.versionBullets.map((bullet, i) => {
                  return <li key={i}>{bullet}</li>
                })}
            </ul>
          </div>
        </div>
        </>
      )
      let animText = changeLogNotes && changeLogNotes.versionSummary

      const charLimit = 140
      const charDiff = animText && charLimit - animText.length * 2
      if (charDiff && charDiff > 0) {
        const space = '\u00A0'
        const padText = space.repeat(charDiff) + animText
        animText += padText
      }
      animText && setAnimationText(animText)
      const speed = 6
      setAnimationTime(animText.length / speed)
    }
  }, [changeLogNotes, theme])
  return (
    <>
      <header
        id='main-header'
        className={`${styles.mainHeader} ${styles[theme]}`}
      >
        <h2>{headerTitle}</h2>
        {changeLogNotes && (
          <div
            className={styles.headerNotes}
            onClick={(e) => {
              e.preventDefault()
              setOpenVersion(!openVersion)
            }}
          >
            <div className={styles.changeLogNotesStart}>
              {' '}
              V{changeLogNotes.version}
            </div>
            <div className={styles.scrollTextArea}>
              <div
                className={styles.extraNotes}
                style={{
                  animationDuration: `${animationTime}s`
                }}
              >
                {animationText}
              </div>
            </div>
          </div>
        )}
      </header>
      {changeLogNotes && (
        <>
          <Modal
            content={modalContent}
            isVisible={openVersion}
            onConfirm={() => setOpenVersion(false)}
            onCancel={() => setOpenVersion(false)}
            theme={theme}
            showClose={false}
            confirmText='Close'
            height='80vh'
            style={{ display: 'block' }}
          />
        </>
      )}
    </>
  )
}

export default Header
