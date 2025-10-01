import React from 'react'
import styles from '../styles/SearchBar.module.css'
import Icon from './Icon'

function SearchBar({
  inputId = null, // null id will not be added, so only if inputId/formId is added will an id be added
  formId = null,
  ...props
}) {
  return (
    <form
      style={props.style || {}}
      onSubmit={(event) => {
        event.preventDefault()
        props.onSubmit && props.onSubmit()
      }}
      className={`
          ${styles.searchBar}
        `}
      id={formId}
    >
      <label
        className={`
            ${styles.searchBarLabel}
            ${props.isCollapsed ? styles.isCollapsed : ''}
            ${props.isCollapsible ? styles.collapsible : ''}
            ${props.theme === 'dark' ? styles.dark : styles.light}
          `}
      >
        <div
          className={`
            ${styles.searchBar}
          `}
        >
          <Icon icon='search-outline' />
        </div>
        <input
          type='text'
          name='search'
          placeholder={props.placeHolder || ''}
          onChange={props.onChange}
          value={props.searchValue}
          autoComplete={props.autoComplete || 'off'}
          id={inputId}
        />
      </label>
    </form>
  )
}

export default SearchBar
