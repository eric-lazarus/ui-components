import React, { useEffect } from 'react'
import * as eva from 'eva-icons'

import MProc from '../images/mproc.svg'
import MProcOutline from '../images/mprocOutline.svg'
import MoleTracking from '../images/moletracking.svg'
import Check from '../images/check.svg'
import User from '../images/user-large.svg'

import styles from '../styles/Icon.module.css'

import evaOutline from '../../node_modules/eva-icons/outline-icons.json'
import evaFill from '../../node_modules/eva-icons/fill-icons.json'

const Icon = ({
  icon,
  width = '100%',
  height = '100%',
  fill = 'currentColor',
  animation = null,
  hover = false,
  infinite = false,
  iconId = null,
  className,
  onClick
}) => {
  const customIcons = [
    'm-proc',
    'm-proc-outline',
    'mole-tracking',
    'check',
    'user',
    '',
    'google-outline',
    'google'
  ]

  useEffect(() => {
    const evaIcons = [...Object.keys(evaOutline), ...Object.keys(evaFill)]

    return evaIcons.includes(icon) ? eva.replace() : undefined
  }, [icon])

  const evaIcons = [...Object.keys(evaOutline), ...Object.keys(evaFill)]

  return customIcons.includes(icon)
    ? (
        icon === 'm-proc'
          ? (
      <i className={className} style={{ lineHeight: '1' }} id={iconId}>
        <MProc viewBox='0 0 12 12' style={{ color: fill }} />
      </i>
            )
          : icon === 'm-proc-outline'
            ? (
      <i className={className} style={{ lineHeight: '1' }} id={iconId}>
        <MProcOutline viewBox='0 0 12 12' style={{ color: fill }} />
      </i>
              )
            : icon === 'mole-tracking'
              ? (
      <i className={className} style={{ lineHeight: '1' }} id={iconId}>
        <MoleTracking viewBox='0 0 48 48' style={{ color: fill }} />
      </i>
                )
              : icon === 'check'
                ? (
      <i className={className} style={{ lineHeight: '1' }} id={iconId}>
        <Check viewBox='0 0 20 20' style={{ color: fill }} />
      </i>
                  )
                : icon === 'user'
                  ? (
      <i className={className} style={{ lineHeight: '1' }} id={iconId}>
        <User viewBox='0 0 48 48' style={{ color: fill }} />
      </i>
                    )
                  : icon.includes('google')
                    ? (
      <i className={className} style={{ lineHeight: '1' }} id={iconId}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: "block" }}>
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
      </i>
                      )
                    : (
                        ''
                      )
      )
    : evaIcons.includes(icon)
      ? (
    <i
      className={`${className !== undefined ? className : ''} ${
        styles.eva
      } eva`}
      onClick={onClick}
      id={iconId}
    >
      <i
        className={className}
        data-eva={icon}
        data-eva-animation={animation}
        data-eva-hover={hover}
        data-eva-infinite={infinite}
        data-eva-fill={fill}
        data-eva-width={width}
        data-eva-height={height}
      />
    </i>
        )
      : (
          console.log(
            'Icon ' +
        icon +
        ' not found.  Double check the name from https://akveo.github.io/eva-icons/'
          )
        )
}

export default Icon
