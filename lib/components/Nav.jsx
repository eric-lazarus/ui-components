import React, { useEffect, useState, Fragment } from 'react'

// import Logo from '../images/white/Logo.js'
import Button from './Button'
import Logo from '../images/logo2.svg'

import Icon from './Icon'
import Avatar from './Avatar'
import styles from '../styles/Nav.module.css'
import { Link } from 'react-router-dom'

function Nav({
  links = {},
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
  onClick // expects (events, nameOfLink)
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

  function sendTrackingData(linkName) {
    if (isTracking) {
      storePayload({ isTracking: false })
    }
  }

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
      <div className={styles.logoDiv}>
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
      <div className={`${styles.upper} ${styles.borderTop}`}>
        <Link
          className={`${styles.navLink} ${
            currentEndpoint === links.dashboard || currentEndpoint === '/'
              ? styles.active
              : ''
          } ${disabledLinks.includes('dashboard') ? styles.disabled : ''}`}
          to={links.dashboard ? links.dashboard : '/'}
          onClick={(e) => {
            sendTrackingData('dashboard')
            noFollow && e.preventDefault()
            onClick(e, 'dashboard')
          }}
          target={links.dashboard && links.dashboard[0] !== '/' ? '_blank' : ''}
          title='Dashboard'
        >
          <span>Dashboard</span>
          <div className={styles.icons}>
            <Icon icon='flash-outline'></Icon>
            <Icon icon='flash'></Icon>
          </div>
        </Link>

        {/**
        <Link  className={styles.navLink}>
          M-Proc
          <div className={styles.icons}>
            <MProcOutline  viewBox="0 0 12 12"/>
            <MProcFill  viewBox="0 0 12 12"/>
          </div>
        </Link>
        **/}
        {!hiddenLinks.includes('api') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.api || currentEndpoint === '/api'
                ? styles.active
                : ''
            } ${disabledLinks.includes('api') ? styles.disabled : ''}
            `}
            to={
              disabledLinks.includes('api')
                ? '#'
                : links.api
                  ? links.api
                  : '/api'
            }
            onClick={(e) => {
              sendTrackingData('api')
              noFollow && e.preventDefault()
              disabledLinks.includes('api') && e.preventDefault()
              onClick(e, 'api')
            }}
            target={links.api && links.api[0] !== '/' ? '_blank' : ''}
            title='API'
            id='api'
          >
            <span>API</span>
            <div className={styles.icons}>
              <Icon icon='cube-outline' />
              <Icon icon='cube' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('training') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.training ||
              currentEndpoint === '/training'
                ? styles.active
                : ''
            } ${disabledLinks.includes('training') ? styles.disabled : ''}`}
            to={
              disabledLinks.includes('training')
                ? '#'
                : links.training
                ? links.training
                : '/training'
            }
            onClick={(e) => {
              sendTrackingData('training')
              noFollow && e.preventDefault()
              disabledLinks.includes('training') && e.preventDefault()
              onClick(e, 'training')
            }}
            target={links.training && links.training[0] !== '/' ? '_blank' : ''}
            title='Training'
            id='training'
          >
            <span>Training</span>
            <div className={styles.icons}>
              <Icon icon='book-open-outline' />
              <Icon icon='book-open' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('quickstart') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.quickstart ||
              currentEndpoint === '/quickstart'
                ? styles.active
                : ''
            } ${disabledLinks.includes('quickstart') ? styles.disabled : ''}`}
            to={
              disabledLinks.includes('quickstart')
                ? '#'
                : links.quickstart
                ? links.quickstart
                : '/quickstart'
            }
            onClick={(e) => {
              sendTrackingData('quickstart')
              noFollow && e.preventDefault()
              disabledLinks.includes('quickstart') && e.preventDefault()
              onClick(e, 'quickstart')
            }}
            target={
              links.quickstart && links.quickstart[0] !== '/' ? '_blank' : ''
            }
            title='Quickstart'
            id='quickstart'
          >
            <span>Quickstart</span>
            <div className={styles.icons}>
              <Icon icon='arrowhead-right-outline' />
              <Icon icon='arrowhead-right' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('demo') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.demo || currentEndpoint === '/demo'
                ? styles.active
                : ''
            } ${disabledLinks.includes('demo') ? styles.disabled : ''}`}
            to={
              disabledLinks.includes('demo')
                ? '#'
                : links.demo
                ? links.demo
                : '/demo'
            }
            onClick={(e) => {
              sendTrackingData('demo')
              noFollow && e.preventDefault()
              disabledLinks.includes('demo') && e.preventDefault()
              onClick(e, 'demo')
            }}
            target={links.demo && links.demo[0] !== '/' ? '_blank' : ''}
            title='Demo'
            id='demo'
          >
            <span>Demo</span>
            <div className={styles.icons}>
              <Icon icon='gift-outline' />
              <Icon icon='gift' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('support') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.support ||
              currentEndpoint === '/support'
                ? styles.active
                : ''
            } ${disabledLinks.includes('suppport') ? styles.disabled : ''}`}
            to={
              disabledLinks.includes('support')
                ? '#'
                : links.support
                ? links.support
                : '/support'
            }
            onClick={(e) => {
              sendTrackingData('support')
              noFollow && e.preventDefault()
              disabledLinks.includes('support') && e.preventDefault()
              onClick(e, 'support')
            }}
            target={links.support && links.support[0] !== '/' ? '_blank' : ''}
            title='Support'
            id='support'
          >
            <span>Support</span>
            <div className={styles.icons}>
              <Icon icon='info-outline' />
              <Icon icon='info' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('documentation') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.documentation ||
              currentEndpoint === '/documentation'
                ? styles.active
                : ''
            } ${
              disabledLinks.includes('documentation') ? styles.disabled : ''
            }`}
            to={
              disabledLinks.includes('documentation')
                ? '#'
                : links.documentation
                ? links.documentation
                : '/documentation'
            }
            onClick={(e) => {
              sendTrackingData('documentation')
              noFollow && e.preventDefault()
              disabledLinks.includes('documentation') && e.preventDefault()
              onClick(e, 'documentation')
            }}
            target={
              links.documentation && links.documentation[0] !== '/'
                ? '_blank'
                : ''
            }
            title='Documentation'
            id='documentation'
          >
            <span>Documentation</span>
            <div className={styles.icons}>
              <Icon icon='code-outline' />
              <Icon icon='code' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('resources') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.resources ||
              currentEndpoint === '/resources'
                ? styles.active
                : ''
            } ${disabledLinks.includes('resources') ? styles.disabled : ''}`}
            to={
              disabledLinks.includes('resources')
                ? '#'
                : links.resources
                ? links.resources
                : '/resources'
            }
            onClick={(e) => {
              sendTrackingData('resources')
              noFollow && e.preventDefault()
              disabledLinks.includes('resources') && e.preventDefault()
              onClick(e, 'resources')
            }}
            target={
              links.resources && links.resources[0] !== '/' ? '_blank' : ''
            }
            title='Resources'
            id='resources'
          >
            <span>Resources</span>
            <div className={styles.icons}>
              <Icon icon='list-outline' />
              <Icon icon='list' />
            </div>
          </Link>
        )}

        {!hiddenLinks.includes('rikai') && (
          <>
            <Link
              to={
                disabledLinks.includes('rikai')
                  ? '#'
                  : links.rikai
                  ? links.rikai
                  : '/rikai'
              }
              className={`${styles.rikAIButton} ${
                currentEndpoint === links.rikai || currentEndpoint === '/rikai'
                  ? styles.active
                  : ''
              } ${disabledLinks.includes('rikai') ? styles.disabled : ''}`}
              onClick={(e) => {
                sendTrackingData('rikai')
                !links.rikai && onRikAIClick && onRikAIClick()
                noFollow && e.preventDefault()
                onRikAIClick && e.preventDefault()
                disabledLinks.includes('rikai') && e.preventDefault()
                onClick(e, 'rikai')
              }}
              target={links.rikai && links.rikai[0] !== '/' ? '_blank' : ''}
              title='RikAI'
              id='rikai'
            >
              <Button
                text='RikAI'
                type={
                  currentEndpoint === links.rikai ||
                  currentEndpoint === '/rikai'
                    ? 4
                    : 9
                }
                theme={theme || 'light'}
              />
            </Link>

            <Link
              to={
                disabledLinks.includes('rikai')
                  ? '#'
                  : links.rikai
                  ? links.rikai
                  : '/rikai'
              }
              className={`${styles.RKIButton} ${
                currentEndpoint === links.rikai || currentEndpoint === '/rikai'
                  ? styles.active
                  : ''
              } ${disabledLinks.includes('rikai') ? styles.disabled : ''}`}
              onClick={(e) => {
                sendTrackingData('rikai')
                !links.rikai && onRikAIClick && onRikAIClick()
                noFollow && e.preventDefault()
                onRikAIClick && e.preventDefault()
                disabledLinks.includes('rikai') && e.preventDefault()
                onClick(e, 'rikai')
              }}
              target={links.rikai && links.rikai[0] !== '/' ? '_blank' : ''}
              title='RikAI'
              id='rikai'
            >
              <Button
                text='RKI'
                type={
                  currentEndpoint === links.rikai ||
                  currentEndpoint === '/rikai'
                    ? 4
                    : 9
                }
                theme={theme || 'light'}
                width='var(--spacing-08)'
              />
            </Link>
          </>
        )}
      </div>
      <div
        className={`${styles.borderTop} ${styles.avatarDiv}  ${
          avatarExpanded ? styles.avatarExpanded : ''
        }`}
      >
        {!hiddenLinks.includes('settings') && (
          <Link
            className={`${styles.navLink} ${
              currentEndpoint === links.settings ||
              currentEndpoint === '/settings'
                ? styles.active
                : ''
            } ${disabledLinks.includes('settings') ? styles.disabled : ''}`}
            to={
              disabledLinks.includes('settings')
                ? '#'
                : links.settings
                  ? links.settings
                  : '/settings'
            }
            onClick={(e) => {
              sendTrackingData('settings')
              noFollow && e.preventDefault()
              disabledLinks.includes('settings') && e.preventDefault()
              onClick(e, 'settings')
            }}
            target={links.settings && links.settings[0] !== '/' ? '_blank' : ''}
            title='Settings'
            id='settings'
          >
            <span>Settings</span>
            <div className={styles.icons}>
              <Icon icon='settings-outline' />
              <Icon icon='settings' />
            </div>
          </Link>
        )}

        <Link
          className={`${styles.navLink} ${
            disabledLinks.includes('signOut') ? styles.disabled : ''
          }`}
          title='Sign Out'
          to={
            disabledLinks.includes('signOut')
              ? '#'
              : links.signOut && !onSignOutClick
              ? links.signOut
              : '/signOut'
          }
          onClick={(e) => {
            // this has to go first otherwise it will still sign you out
            if (onClick(e, 'signOut')) {
              onSignOutClick && onSignOutClick(orgId)
              noFollow && e.preventDefault()
              onSignOutClick && e.preventDefault()
              disabledLinks.includes('signOut') && e.preventDefault()
            }
          }}
          id='signOut'
        >
          <span>Sign Out</span>
          <div className={styles.icons}>
            <Icon icon='log-out-outline' />
            <Icon icon='log-out' />
          </div>
        </Link>
      </div>
      <div className={`${styles.lower} ${styles.borderTop}`}>
        <a
          className={`${styles.navLink} ${styles.avatarLink}`}
          onClick={(e) => {
            setAvatarExpanded(!avatarExpanded)
          }}
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
      >
        <Icon icon='chevron-right-outline'></Icon>
      </button>
    </nav>
  )
}

export default Nav
