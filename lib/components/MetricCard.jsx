import React, { Fragment } from 'react'
import styles from '../styles/MetricCard.module.css'
import globalStyles from '../styles/GlobalStyles.module.css'
import Card from './Card'
import Icon from './Icon'

export default function MetricCard({
  className = '',
  icon = <Icon icon='file-outline' />,
  icon2 = null,
  color = 'salem',
  textColor = 'bright-green',
  style,
  title,
  value,
  column1,
  column2
}) {
  return (
    <Card
      className={`${className} ${styles.metricCard} ${
        globalStyles['background-' + color]
      }`}
      style={style}
      theme='dark'
      title={title}
      titleStyle={{
        fontSize: 'var(--font-sizes-medium)'
      }}
    >
      <div className={`${styles.content}`}>
        {icon && <div className={`${styles.icon}`}>{icon}</div>}
        {value && (
          <div
            className={`${styles.value} ${globalStyles['text-' + textColor]}`}
          >
            {value}
          </div>
        )}
        {icon2 && <div className={`${styles.icon2}`}>{icon2}</div>}
        {(column1 || column2) && (
          <Fragment>
            <div className={`${styles.column1}`}>{column1}</div>
            <div className={`${styles.column2}`}>{column2}</div>
          </Fragment>
        )}
      </div>
    </Card>
  )
}
