import React, { useState, useEffect } from 'react'
import Card from './Card'
import styles from '../styles/Table.module.css'
import inputStyles from '../styles/Input.module.css'
import globalStyles from '../styles/GlobalStyles.module.css'

import Pill from './Pill'

/* Filters a list of events by name
   Takes in a list of table entries and a filter value
   Looks through each value for all entries, and returns events that contain the filter value
*/
function applyFilter(events, filter) {
  const filteredEvents = events.filter(event => {
    if (filter) { // Make sure the filter is properly defined by the user
      return event.props.content.flat('Infinity').some(item => {
        if (typeof item === 'string') {
          return item.includes(filter)
        } else {
          return false
        }
      })
    } else { return event }
  })
  return filteredEvents
}

function Table({
  entries = [],
  theme = 'light',
  total = entries.length,
  showingCount = '1 to ' + entries.length,
  showTotal = false,
  showCount = true,
  useFilter = false,
  columnTitles,
  title,
  className,
  minWidth,
  maxHeight,
  isLogs,
  scrollRef,
  style,
  tableId = null,
  cardId = null
}) {
  const [shownEntries, setShownEntries] = useState(entries)
  const [filterValue, setFilterValue] = useState("")
  const [liveShowingCount, setLiveShowingCount] = useState(showingCount)

  // Update table on filter change
  useEffect(() => {
    setShownEntries(applyFilter(entries, filterValue))
  }, [filterValue, entries])

  // Update the shown total value when filter is applied
  useEffect(() => {
    if (shownEntries.length === 0) {
      setLiveShowingCount('0 to ' + shownEntries.length)
    } else {
      setLiveShowingCount('1 to ' + shownEntries.length)
    }
  }, [shownEntries])

  return (
    <Card
      className={`
        ${styles.table}
        ${theme === 'dark' ? styles.dark : styles.light}
        ${className}
      `}
      style={{
        ...style,
        maxHeight: `${maxHeight}`
      }}
      theme={theme}
      id={cardId}
    >
      <div
        className={`
          ${globalStyles.flex}
          ${globalStyles.justifySpaceBetween}
          ${globalStyles.alignCenter}
          ${styles.title}
        `}
      >
        <span>{title}</span>
        {useFilter && (
          <label>
            <label
              className={`
                ${theme === 'dark' ? styles.dark : styles.light}
                ${inputStyles.inputBox}
                ${styles.searchBox}
              `}
            >
              <input
                placeholder='Search'
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}
              />
            </label>
          </label>
        )}
        {showCount && (
          <Pill
            theme={theme || 'light'}
            type={2}
            text={`${liveShowingCount} ${showTotal ? 'of ' + total : ''}`}
          />
        )}
      </div>
      <table
        className={styles.tableEl}
        style={{
          minWidth: `${minWidth || 0}px`
        }}
        id={tableId}
      >
        {columnTitles && (
          <thead className={styles.tableHeader}>
            <tr className={`${globalStyles.flex} ${globalStyles['flex1']}`}>
              {columnTitles.map((title, i) => {
                return (
                  <td
                    className={
                      isLogs
                        ? `${globalStyles.flex} ${globalStyles['flex1']} ${styles.logsFlex}`
                        : `${globalStyles.flex} ${globalStyles['flex1']}`
                    }
                    key={title + i}
                  >
                    {title}
                  </td>
                )
              })}
            </tr>
          </thead>
        )}
        <tbody
          className={`${styles.tableContent} ${globalStyles.customScrollbar}`}
          ref={scrollRef}
        >
          {shownEntries}
        </tbody>
      </table>
    </Card>
  )
}

export default Table
