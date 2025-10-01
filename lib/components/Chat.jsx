// Dependencies
import React from 'react'

// Components
import PromptCard from './PromptCard'
import Icon from './Icon'
import Button from './Button'

// Styles
import styles from '../styles/Chat.module.css'
import globalStyles from '../styles/GlobalStyles.module.css'

export default function Chat({
  copyToClipBoard = () => console.log('no copy function'),
  ...props
}) {
  return (
    <div id={styles['chat-container']} style={props.style}>
      {props.title && (
        <header>
          <span>{`{} `}</span>
          <span>{props.title}</span>
          {/* <Icon
            icon={'code-outline'}
            fill='var(--colors-brand-light-blue)'
          /> */}
        </header>
      )}
      {/* knowledge portion here */}
      {props.feedTitle && (
        <p className={styles['chat-sub-heading']}>{props.feedTitle}</p>
      )}
      <div id={styles['inner-chat-container']}>
        <div
          id={styles['chat-wrapper']}
          className={`${styles['customScrollbar']} ${globalStyles['customScrollbar']}`}
        >
          {props.prompts.map((prompt, i) => {
            return (
              <div className={styles['prompt-card-wrapper']} key={prompt + i}>
                <PromptCard
                  hasStar={props.hasStars}
                  copyToClipBoard={copyToClipBoard}
                  onClickStar={props.onClickStar}
                  isStarred={prompt.isStarred}
                  key={props.id}
                  index={i}
                  id={props.id}
                  title={prompt.title}
                  questions={prompt.questions}
                  answers={prompt.answers}
                  confidence={prompt.confidence || 0}
                  context={prompt.context || ''}
                  theme={props.theme}
                />
              </div>
            )
          })}
        </div>
      </div>
      {props.hasInput && (
        <footer>
          <form
            id='chat-form'
            onSubmit={(e) => {
              document.getElementById('invisible-text-area').innerText = ''
              props.onSubmitPrompt(e)
            }}
          >
            <div className={styles['text-area-wrapper']}>
              <div
                className={styles['invisible-text-area']}
                id='invisible-text-area'
              />
              <textarea
                placeholder={props.newPromptPlaceholder}
                onChange={(e) => {
                  document.getElementById('invisible-text-area').innerHTML =
                    e.target.value
                  props.onChangeNewPrompt(e)
                }}
                name='newPrompt'
                value={props.newPrompt}
                rows={1}
                form='chat-form'
                className={styles['custom-txt-area']}
              />
            </div>
            <Button
              theme={props.theme}
              form='chat-form'
              type={6}
              buttonType='submit'
              text={'Submit'}
              icon={<Icon icon={'arrow-forward-outline'} key={'submit'} />}
              iconPosition={'right'}
              isAutoResizing={true}
              iconJusitfy={'edge'}
              className={styles['chat-btn']}
            />
          </form>
        </footer>
      )}
    </div>
  )
}
