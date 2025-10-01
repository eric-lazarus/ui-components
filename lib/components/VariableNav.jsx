/* eslint-disable max-len */
import React, {useEffect, useState, Fragment} from 'react'

import Logo from '../images/logo2.svg'
import Icon from './Icon'
import Avatar from './Avatar'
import Button from './Button'
import styles from '../styles/Nav.module.css'
import {Link} from 'react-router-dom'

function VariableNav({
  links = [],
  bottomLinks = [],
  hiddenLinks = [],
  disabledLinks = [],
  currentEndpoint = '',
  active,
  isCollapsed,
  theme,
  isVisible,
  style,
  logo,
  userImage,
  userName,
  storePayload,
  orgId,
  isTracking,
  noFollow,
  onRikAIClick,
  onSignOutClick,
  onCollapse,
  onExpand,
  onClick, // expects (events, nameOfLink)
  ...props
}) {
  const [collapsed, setCollapsed] = useState(isCollapsed || false)
  const [avatarExpanded, setAvatarExpanded] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', (ev) => {
      if (window.innerWidth > 1280 && !isCollapsed) {
        setCollapsed(false)
        onExpand && onExpand()
      } else {
        setCollapsed(true)
        onCollapse && onCollapse()
      }
    })
    !loaded && window.dispatchEvent(new Event('resize'))
    !loaded && setLoaded(true)
  }, [isCollapsed, loaded, onCollapse, onExpand])

  return (
    <nav
      className={`
      ${styles.Nav}
      ${isVisible ? styles.isVisible : ''}
      ${collapsed ? styles.isCollapsed : ''}
      ${theme === 'dark' ? styles.dark : styles.light}
    `}
      style={style || {}}
    >
      <div
        className={`${styles.logoDiv} logoSection`}
        key='logo-section'
      >
        <a
          className={styles.logoA}
          onClick={(e) => {
            setCollapsed(!collapsed)
            onCollapse && onCollapse()
          }}
        >
          {logo || <Logo viewBox='0 0 1150 1012' />}
        </a>

        <button
          className={styles.collapseButton}
          onClick={(e) => {
            setCollapsed(!collapsed)
            onCollapse && onCollapse()
          }}
        >
          <Icon icon='chevron-left-outline'></Icon>
        </button>
      </div>
      <div
        className={`${styles.upper} ${styles.borderTop}`}
        key='top-links-section'
      >
        {links.map((link) => {
          if (link.highlight) {
            return (<Fragment
              key={`highlight-fragment-${link.name}`}
            >
              <Link
                key={`${link.name}-big`}
                to={link.path}
                className={`${styles.rikAIButton} ${
                  (window.location.pathname === link.path ||
                    window.location.pathname.includes(link.path + '/'))
                    ? styles.active
                    : ''
                } ${link.isDisabled ? styles.disabled : ''}`}
                onClick={(e) => {
                  link.isDisabled && e.preventDefault()
                  onClick(e, link.path)
                }}
                target={link.outsideLink ? '_blank': ''}
                rel={link.outsideLink ? 'noopener noreferrer': ''}
                // target={link.path}
                title={link.name}
                id={link.name.toLowerCase()}
              >
                <Button
                  text={link.name.toUpperCase()}
                  type={
                    (window.location.pathname === link.path ||
                      window.location.pathname.includes(link.path + '/'))
                      ? 4
                      : 9
                  }
                  theme={theme || 'light'}
                />
              </Link>
              <Link
              key={link.name}
              to={link.path}
              className={`${styles.RKIButton} ${
                (window.location.pathname === link.path ||
                  window.location.pathname.includes(link.path + '/'))
                  ? styles.active
                  : ''
              } ${link.isDisabled ? styles.disabled : ''}`}
              onClick={(e) => {
                link.isDisabled && e.preventDefault()
                onClick(e, link.path)
              }}
              target={link.outsideLink ? '_blank': ''}
              rel={link.outsideLink ? 'noopener noreferrer': ''}
              // target={link.path}
              title={link.name}
              id={link.name.toLowerCase()}
            >
              <Button
                text={<>
                  {(window.location.pathname === link.path ||
                    window.location.pathname.includes(link.path + '/')) ?
                    <Icon icon={`${link.icon}`}></Icon> :
                    <Icon icon={`${link.icon}-outline`}></Icon>}
                </>}
                type={
                  (window.location.pathname === link.path ||
                    window.location.pathname.includes(link.path + '/'))
                    ? 4
                    : 9
                }
                theme={theme || 'light'}
                width='var(--spacing-08)'
              />
            </Link>
            </Fragment>
            )
          }
          return (
            <Link
              key={link.name}
              className={`${styles.navLink} ${
              (window.location.pathname === link.path ||
                window.location.pathname.includes(link.path + '/')) ?
                styles.active :
                ''
              } ${link.isDisabled ? styles.disabled : ''}
              `}
              onClick={(e) => {
                link.isDisabled && e.preventDefault()
                onClick(e, link.path)
              }}
              target={link.outsideLink ? '_blank': ''}
              rel={link.outsideLink ? 'noopener noreferrer': ''}
              to={link.path}
              title={link.name}
              id={link.name.toLowerCase()}
            >
              <span>{link.name}</span>
              <div className={styles.icons}>
                <Icon icon={`${link.icon}-outline`}></Icon>
                <Icon icon={`${link.icon}`}></Icon>
              </div>
            </Link>
          )
        })}
      </div>
      <div
        className={`${styles.borderTop} ${styles.avatarDiv}  ${
          avatarExpanded ? styles.avatarExpanded : ''
        }`}
        key='bottom-links-section'
      >
        {bottomLinks.map((link) => {
          return (
            <Link
              key={link.name}
              className={`${styles.navLink} ${
              (window.location.pathname === link.path ||
                window.location.pathname.includes(link.path + '/')) ?
                styles.active :
                ''
              } ${link.isDisabled ? styles.disabled : ''}
              `}
              onClick={(e) => {
                link.isDisabled && e.preventDefault()
                onClick(e, link.path)
              }}
              target={link.outsideLink ? '_blank': ''}
              rel={link.outsideLink ? 'noopener noreferrer': ''}
              to={link.path}
              title={link.name}
              id={link.name.toLowerCase()}
            >
              <span>{link.name}</span>
              <div className={styles.icons}>
                <Icon icon={`${link.icon}-outline`}></Icon>
                <Icon icon={`${link.icon}`}></Icon>
              </div>
            </Link>
          )
        })}
        <a
          className={`${styles.navLink}`}
          title='Sign Out'
          // to={'/'}
          onClick={onSignOutClick}
          id='signOut'
        >
          <span>Sign Out</span>
          <div className={styles.icons}>
            <Icon icon='log-out-outline' />
            <Icon icon='log-out' />
          </div>
        </a>
      </div>
      <div
        className={`${styles.lower} ${styles.borderTop}`}
        key='avatar-section'
      >
        <a
          className={`${styles.navLink} ${styles.avatarLink} avatarSection`}
          onClick={(e) => {
            setAvatarExpanded(!avatarExpanded)
          }}
          id={'navigation-user-information'}
        >
          <Avatar
            theme={theme}
            name={userName}
            image={userImage}
            size={collapsed ? 'medium' : 'small'}
            showGradient
          />
          <span>{userName}</span>

          <div
            className={`${styles.icons} ${
              avatarExpanded ? styles.avatarExpanded : ''
            }`}
          >
            <Icon icon='chevron-up-outline' />
          </div>
        </a>
      </div>
      <button
        className={`${styles.expandButton} `}
        onClick={(e) => {
          onExpand && onExpand()
          setCollapsed(!collapsed)
        }}
        key='collapse-section'
      >
        <Icon icon='chevron-right-outline'></Icon>
      </button>
    </nav>
  )
}

export default VariableNav
