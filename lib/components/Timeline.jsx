import React, { Fragment } from 'react'
import styles from '../styles/Timeline.module.css'

/*
  props: {
    steps: [null, null, null] // number of steps
    activeStep: int // >= 0 && < steps.length // active step
  }
*/

function Timeline(props) {
  const activeSteps = Array(props.activeStep).fill(null)
  const inactiveSteps = Array(props.steps - props.activeStep).fill(null)
  const isComplete = props.activeStep === props.steps
  const filledWidth = (props.activeStep / props.steps) * 100

  return (
    <div
      className={`
      ${styles.timeline}
      ${props.theme === 'dark' ? styles.dark : styles.light}
    `}
    >
      <div className={`${styles.square} ${styles.filled}`} />
      <div
        className={`${styles.bar} ${
          props.activeStep !== 0 ? styles.filled : ''
        }`}
        style={{ width: props.activeStep !== 0 ? filledWidth + '%' : 'auto' }}
      >
        <span />
        {activeSteps !== 0 &&
          activeSteps.map((step, i) => {
            // middle line
            return (
              <div
                className={`${styles.circle} ${styles.filled}`}
                key={i + 1}
              />
            )
          })}
        {isComplete ? (
          <div className={`${styles.square} ${styles.filled}`}></div>
        ) : (
          ''
        )}
      </div>

      {!isComplete && (
        <Fragment>
          <div
            className={`${styles.bar}`}
            style={{ width: 100 - filledWidth + '%' }}
          >
            {inactiveSteps.map((step, i) => {
              // middle line
              return i !== 0 ? (
                <div className={`${styles.circle}`} key={i + 1} />
              ) : (
                ''
              )
            })}
          </div>

          <div className={`${styles.square}`}></div>
        </Fragment>
      )}
    </div>
  )
}

export default Timeline
