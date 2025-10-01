import React from 'react'
import styles from '../styles/TestThumb.module.css'
import Icon from './Icon'
import ConfidenceBar from './ConfidenceBar'

function TestThumb(props) {
  return (
    <div
      className={`
          ${styles.testThumb}
          ${props.isVisible ? styles.expandDown : styles.collapseUp}
          ${props.theme === 'light' ? styles.light : styles.dark}
        `}
      style={props.isVisible ? props.style : {}}
    >
      {props.image ? (
        <img src={props.image} alt='lesion' />
      ) : props.icon ? (
        props.icon
      ) : (
        ''
      )}
      {props.isAIActive && (
        <div className={styles.textDiv}>
          <div className={styles.topDiv}>
            <div className={styles.leftDiv}>
              <p>Top Results</p>
              <div className={styles.flex}>
                <div
                  className={`${styles.conditionCircle} ${styles[props.risk1]}`}
                />
                <p className={styles.condition1}>{props.condition1}</p>
              </div>
              <div className={styles.flex}>
                <div
                  className={`${styles.conditionCircle} ${styles[props.risk2]}`}
                />
                <p className={styles.condition2}>{props.condition2}</p>
              </div>
            </div>
            <div className={styles.middleDiv}>
              <p>Confidence</p>
              <p className={styles.condition1}>{`${props.confidence1}%`}</p>
              <p className={styles.condition2}>{`${props.confidence2}%`}</p>
            </div>
            {props.notes ||
              (props.flag && (
                <div className={styles.rightDiv}>
                  <div>{props.notes && <Icon icon='list-outline' />}</div>
                  <div>{props.flag && <Icon icon='flag-outline' />}</div>
                </div>
              ))}
          </div>
          <div className={styles.bottomDiv}>
            <ConfidenceBar reasoning={props.reasoning} />
          </div>
        </div>
      )}
    </div>
  )
}

export default TestThumb
