import React from 'react'
import styles from '../styles/ConfidenceBar.module.css'

/*
  props: {
    reasoning: [
      {
        Confidence: 0-1,
        Risk: 'green' || 'yellow' || 'orange' || 'red'
      }
    ]
  }
*/

function ConfidenceBar(props) {
  const withMinimum = (confidence) => {
    const minimum = 1
    return confidence >= minimum || confidence === 0
      ? Math.floor(confidence)
      : minimum
  }

  // let order = ['red', 'organge', 'yellow', 'green', 'green']
  // order = order.sort((a, b) => {
  //   return props[b] - props[a]
  // })
  return (
    <div className={styles.confidenceBar} style={props.style || {}}>
      {props.reasoning.map((condition, i) => {
        const confidencePercent = condition.Confidence * 100
        return (
          <div
            key={i}
            className={styles[condition.Risk]}
            style={{ width: `${withMinimum(confidencePercent)}%` }}
          />
        )
      })}
    </div>
  )
}

export default ConfidenceBar
