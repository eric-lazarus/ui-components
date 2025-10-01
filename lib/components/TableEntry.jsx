import React from 'react'
import styles from '../styles/Table.module.css'
import globalStyles from '../styles/GlobalStyles.module.css'

export default function TableEntry(props) {
  return (
    <tr
      onClick={props.onClick}
      className={
        `${styles.tableEntry} ${globalStyles.flex} ${globalStyles.flex1} ${props.className} ${props.isSelected ? styles.selected : ''}`
      }
      style={props.style ? props.style : {}}
      id={props.rowId ? props.rowId : null}
    >
      {props.content.map((content, index) =>
        Array.isArray(content) ? (
          <td key={content + index} data-status={content[0]}>
            {content[1]}
          </td>
        ) : (
          <td key={content + index}>{content}</td>
        )
      )}
    </tr>
  )
}
