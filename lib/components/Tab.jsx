import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Tab.module.css'
import globalStyles from '../styles/GlobalStyles.module.css'

/*
  props: {
    type: 1 || primary || 2 || secondary || 3 || success || 4 || warn || 5 || error || 6 || ghost || 7 || ghost-accent || 8 || ghost-success || 9 || ghost-warn || 10 || ghost-error, // 1: primary, 2: secondary, 3: success, 4: error, 5: ghost, 6: ghost-warm, 7: ghost-cool, 8: ghost-success, 9: ghost-error
    theme: 'dark' || 'light',
    iconImage,
    iconPosition: 'left' || 'right',
    iconJustify: 'center' || 'edge',
    icon: element,
    text,
    onClick,
    width,
  }
*/

const Tab = ({
  style = {},
  text,
  width = '100%',
  onClick,
  type = 1,
  iconPosition = 'left',
  iconJustify = 'center',
  icon = null,
  iconImage = null,
  tabType = 'tab',
  tabRef = null,
  theme = 'light',
  disabled = false,
  href
}) => {
  return tabType === 'link' ? (
    <a
      ref={tabRef}
      target='_blank'
      className={`
            ${styles.tab} ${styles['tab-' + type]}
            ${iconPosition === 'left' ? styles.iconLeft : ''}
            ${iconPosition === 'right' ? styles.iconRight : ''}
            ${
              iconJustify === 'edge' && width !== 'auto'
                ? styles.iconEdge
                : styles.widthAuto
            }
          `}
      onClick={onClick}
      style={{ ...style, width: style.width || width }}
      type={tabType}
      href={href}
      rel='noreferrer'
    >
      {icon && iconPosition === 'left' ? (
        <>
          <div className={styles.icon}>{icon}</div>
        </>
      ) : iconImage && iconPosition === 'left' ? (
        <>
          <img className={styles.icon} src={iconImage} />
        </>
      ) : (
        ''
      )}
      <span>{text}</span>
      {iconImage && iconPosition === 'right' ? (
        <>
          <img className={styles.icon} src={iconImage} />
        </>
      ) : icon && iconPosition === 'right' ? (
        <>
          <div className={styles.icon}>{icon}</div>
        </>
      ) : (
        ''
      )}
    </a>
  ) : (
    <button
      ref={tabRef}
      className={`
            ${styles.tab} ${styles['tab-' + type]}
            ${theme === 'light' ? styles.light : styles.dark}
            ${iconPosition === 'left' ? styles.iconLeft : ''}
            ${iconPosition === 'right' ? styles.iconRight : ''}
            ${
              iconJustify === 'edge' && width !== 'auto'
                ? styles.iconEdge
                : styles.widthAuto
            }
          `}
      onClick={onClick}
      style={{ ...style, width: style.width || width }}
      type={tabType}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' ? (
        <>
          <div className={styles.icon}>{icon}</div>
        </>
      ) : iconImage && iconPosition === 'left' ? (
        <>
          <img className={styles.icon} src={iconImage} />
        </>
      ) : (
        ''
      )}
      <span>{text}</span>
      {iconImage && iconPosition === 'right' ? (
        <>
          <img className={styles.icon} src={iconImage} />
        </>
      ) : icon && iconPosition === 'right' ? (
        <>
          <div className={styles.icon}>{icon}</div>
        </>
      ) : (
        ''
      )}
    </button>
  )
}

const TabContainer = ({
  style = {},
  type = 1,
  iconJustify = 'center',
  iconPosition = 'left',
  theme = 'light',
  className,
  tabContent, // key is name, render is content, isDisabled is to disable or not
  activeTab,
  canChangeTab = () => true, // conditional for whether tab change is allowed
  onTabChange // updates state in hosting application everytime tab is changed
}) => {
  const tabNames = Object.keys(tabContent)
  const firstTab = tabNames[0]
  // stores the previous active tab
  const prevTab = useRef(activeTab)

  // children.map((child, index) => {
  //   if (child.props.active) {
  //     currentActive = index
  //   }
  //   return ''
  // })

  const [activeContent, setActiveContent] = useState(firstTab)
  const tabWidth = 100 / tabNames.length
  // const tabContent = useRef()

  useEffect(() => {
    handleChange(activeTab)
  }, [activeTab])

  const handleChange = (tabName) => {
    if (canChangeTab()) {
      const success = onTabChange(tabName)
      if (success !== false) {
        // check if tab is not a link type
        if (!Object.prototype.hasOwnProperty.call(tabContent[tabName], 'link')) {
          setActiveContent(tabName)
          prevTab.current = tabName
        } else {
          setTimeout(() => {
            window.open(tabContent[tabName].link)
            onTabChange(prevTab.current)
          }, 500)
        }
      }
    }
  }

  return (
    <div
      className={`${styles[theme]} ${styles.tabContainer} ${className}`}
      style={style}
    >
      <div className={`${styles.tabBar}`}>
        {tabNames.map((tabName, i) => (
          <Tab
            key={tabName + i}
            text={tabContent[tabName].title}
            theme={theme}
            type={type}
            tabType={tabContent[tabName].link ? 'link' : 'tab'}
            onClick={() => {
              if (!tabContent[tabName].isDisabled) {
                // determine whether tab has an onClickEvent
                const hasClickEvent = Object.prototype.hasOwnProperty.call(
                  tabContent[tabName],
                  'onClickEvent'
                )
                if (hasClickEvent) {
                  tabContent[tabName].onClickEvent()
                }
                handleChange(tabName)
              }
            }}
            disabled={tabContent[tabName].isDisabled}
            style={{ width: tabWidth + '%' }}
          />
        ))}
        <div
          className={`
            ${styles.tab} ${styles['tab-' + type]} ${styles.active}
            ${iconPosition === 'left' ? styles.iconLeft : ''}
            ${iconPosition === 'right' ? styles.iconRight : ''}
            ${iconJustify === 'edge' ? styles.iconEdge : ''}
          `}
          style={{
            display: tabNames.indexOf(activeContent) < 0 ? 'none' : '',
            width: 100 / tabNames.length + '%',
            left: tabNames.indexOf(activeContent) * tabWidth + '%'
          }}
        ></div>
      </div>
      <div
        className={`${styles.tabContent} ${styles.animated} ${globalStyles.customScrollbar}`}
      >
        {tabContent?.[activeContent]?.render}
      </div>
    </div>
  )
}

export default TabContainer
