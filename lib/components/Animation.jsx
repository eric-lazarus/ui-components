/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import Lottie from 'react-lottie'

// Animations
import errorAnimation from '../animations/Error.json'
import errorToGeneratingAnimation from '../animations/Error to Generating Transition.json'
import browsingAnimation from '../animations/Browsing Internet.json'
import browsingToGeneratingAnimation from '../animations/Browsing Internet to Generating Transition.json'
import generatingAnimation from '../animations/Generating.json'
import generatingToErrorAnimation from '../animations/Generating to Error Transition.json'
import generatingToExtractingAnimation from '../animations/Generating to Extracting Transition.json'
import generatingToBrowsingAnimation from '../animations/Generate to Browsing Internet Transition.json'
import extractingAnimation from '../animations/Extracting.json'
import extractingToGeneratingAnimation from '../animations/Extracting to Generating Transition.json'
import loadingAnimation from '../animations/Loading.json'

import styles from '../styles/Animation.module.css'

function Animation({
  height,
  width,
  animationState,
  stopAnimation = false,
  speed = null,
  animationJson = null,
  ...props
}) {
  const animationStates = {
    transparent: {
      error: {
        error: errorAnimation,
        generating: errorToGeneratingAnimation
      },
      browsing: {
        browsing: browsingAnimation,
        generating: browsingToGeneratingAnimation
      },
      generating: {
        generating: generatingAnimation,
        error: generatingToErrorAnimation,
        extracting: generatingToExtractingAnimation,
        browsing: generatingToBrowsingAnimation
      },
      extracting: {
        extracting: extractingAnimation,
        generating: extractingToGeneratingAnimation
      },
      loading: {
        loading: loadingAnimation
      }
    }
    // black: {
    //   error: {
    //     error: '',
    //     generating: ''
    //   },
    //   browsing: {
    //     browsing: '',
    //     generating: ''
    //   },
    //   generating: {
    //     generating: '',
    //     error: '',
    //     extracting: '',
    //     browsing: ''
    //   },
    //   extracting: {
    //     extracting: '',
    //     generating: ''
    //   },
    //   loading: {
    //     loading: ''
    //   }
    // }
  }
  const [currentAnimationState, setCurrentAnimationState] = useState('generating')
  const [animationOptions, setAnimationOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: animationJson || animationStates.transparent.generating.generating
  })
  const [isAnimationStopped, setIsAnimationStopped] = useState(stopAnimation)
  const animationStateRef = useRef('generating')
  const stopAnimationRef = useRef(false)
  const [id, setId] = useState(`animation-${parseInt(Math.random() * 2000)}`)

  useEffect(() => {
    animationStateRef.current = animationState
  }, [animationState])

  useEffect(() => {
    stopAnimationRef.current = stopAnimation
    if (!stopAnimation) {
      loopCompletionCbFunc()
    }
  }, [stopAnimation])

  useEffect(() => {
    if (animationJson) {
      setAnimationOptions({
        loop: true,
        autoplay: true,
        animationData: animationJson
      })
    }
  }, [animationJson])

  // When animation completes, check if it has been told to stop or switch animation
  function loopCompletionCbFunc() {
    if (stopAnimationRef.current !== isAnimationStopped) {
      setIsAnimationStopped(stopAnimationRef.current)
    }
    if (!animationJson && animationStateRef.current !== currentAnimationState && Object.keys(animationStates.transparent).includes(animationStateRef.current)) {
      if (Object.keys(animationStates.transparent?.[currentAnimationState] || {}).includes(animationStateRef.current)) {
        // if there is a transition animation
        setCurrentAnimationState(`${currentAnimationState}-${animationStateRef.current}`)
        setAnimationOptions({
          loop: true,
          autoplay: true,
          animationData: animationStates.transparent[currentAnimationState][animationStateRef.current]
        })
      } else {
        // there isn't a transition animation - set to loop state
        setCurrentAnimationState(animationStateRef.current)
        setAnimationOptions({
          loop: true,
          autoplay: true,
          animationData: animationStates.transparent[animationStateRef.current][animationStateRef.current]
        })
      }
    }
  }

  return (
    <div
      id={id}
      className={styles['animation-component']}
    >
      <Lottie
        options={animationOptions}
        height={height || null}
        width={width || null}
        isPaused={isAnimationStopped}
        isClickToPauseDisabled={true}
        speed={speed || 1}
        eventListeners={[
          {
            eventName: 'loopComplete',
            callback: () => {
              loopCompletionCbFunc()
            }
          }
        ]}
      />
    </div>
  )
}

export default Animation
