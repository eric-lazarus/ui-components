import React from 'react'
import Button from './Button'
import styles from '../styles/ToolTip.module.css'

function ToolTip(props) {
  const toolTipStyle = {}
  const arrowSize = 'var(--spacing-02half)'
  function toolTipArrowClass(arrowPosition) {
    /*

    arrowPosition:

        0      1
        ---------
    7 |          | 2
      |          |
    6 |          | 3
        ---------
        5      4

    */
    switch (arrowPosition) {
      case 0:
        toolTipStyle.top = arrowSize
        toolTipStyle.boxShadow = '2px 2px var(--colors-semi-transparent-dark30)'
        return styles.pos0
      case 1:
        toolTipStyle.top = arrowSize
        toolTipStyle.boxShadow = '2px 2px var(--colors-semi-transparent-dark30)'
        return styles.pos1
      case 2:
        toolTipStyle.right = arrowSize
        toolTipStyle.boxShadow =
          '-2px 2px var(--colors-semi-transparent-dark30)'
        return styles.pos2
      case 3:
        toolTipStyle.right = arrowSize
        toolTipStyle.boxShadow =
          '-2px 2px var(--colors-semi-transparent-dark30)'
        return styles.pos3
      case 4:
        toolTipStyle.bottom = arrowSize
        toolTipStyle.boxShadow =
          '2px -2px var(--colors-semi-transparent-dark30)'
        return styles.pos4
      case 5:
        toolTipStyle.bottom = arrowSize
        toolTipStyle.boxShadow =
          '2px -2px var(--colors-semi-transparent-dark30)'
        return styles.pos5
      case 6:
        toolTipStyle.left = arrowSize
        toolTipStyle.boxShadow = '2px 2px var(--colors-semi-transparent-dark30)'
        return styles.pos6
      case 7:
        toolTipStyle.left = arrowSize
        toolTipStyle.boxShadow = '2px 2px var(--colors-semi-transparent-dark30)'
        return styles.pos7
    }
  }
  return (
    <div
      className={`
            ${styles.toolTip}
            ${props.isVisible ? styles.toolTipShowing : styles.toolTipHiding}
            ${toolTipArrowClass(props.arrowPosition)}
          `}
    >
      <div className={`${styles.toolTipArrow}`} />
      <div
        className={styles.toolTipBody}
        style={props.style ? { ...toolTipStyle, ...props.style } : toolTipStyle}
      >
        <p className={styles.toolTipText} style={props.textStyle || {}}>
          {props.text}
        </p>
        <Button
          style={props.buttonStyle}
          type={6}
          theme='dark'
          text='OK'
          onClick={props.onDismiss}
        />
      </div>
    </div>
  )
}

export default ToolTip
