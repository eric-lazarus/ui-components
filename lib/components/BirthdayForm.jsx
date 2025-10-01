import React from 'react'
import '../styles/Input.module.css'
import styles from '../styles/BirthdayForm.module.css'
import Input from './Input'

const BirthdayForm = ({
  onChangeDay,
  onChangeMonth,
  onChangeYear,
  dayRef = null,
  monthRef = null,
  yearRef = null,
  form = null,
  theme = 'light'
}) => {
  return (
    <div
      className={`
      ${styles.birthdayForm}
      ${theme === 'dark' ? styles.dark : styles.light}
    `}
    >
      <p>Date of Birth (mm/dd/yyyy)</p>
      <div
        className={`
        ${styles.inputContainer}
      `}
      >
        <Input
          // label='Month'
          onChange={onChangeMonth}
          inputType='number'
          min={1}
          max={12}
          name='month'
          placeholder='mm'
          reference={monthRef}
          form={form}
          theme={theme}
        />
        <Input
          // label='Day'
          onChange={onChangeDay}
          inputType='number'
          min={1}
          max={12}
          name='day'
          placeholder='dd'
          reference={dayRef}
          form={form}
          theme={theme}
        />
        <Input
          // label='Year'
          onChange={onChangeYear}
          inputType='number'
          min={1900}
          name='year'
          placeholder='yyyy'
          reference={yearRef}
          form={form}
          theme={theme}
        />
      </div>
    </div>
  )
}

export default BirthdayForm
